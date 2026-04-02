import { NextResponse } from "next/server";
import { Resend } from "resend";
import { ratelimit } from "@/lib/ratelimit";
import { supabase } from "@/lib/supabase";

const TO_EMAIL = "info.fineblacks@gmail.com";

function normalizeField(value: unknown): string {
  if (typeof value !== "string") return "";
  // Avoid header/HTML injection via newlines.
  return value.replace(/[\r\n]+/g, " ").trim();
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as unknown;

    const { name, email, company, interest, message, token } = (body ?? {}) as Partial<{
      name: unknown;
      email: unknown;
      company: unknown;
      interest: unknown;
      message: unknown;
      token: unknown;
    }>;

    const safeName = normalizeField(name);
    const safeEmail = normalizeField(email);
    const safeCompany = normalizeField(company);
    const safeInterest = normalizeField(interest);
    const safeMessage = normalizeField(message);

    // Server-side validation (never rely only on the client)
    if (!safeName || !safeEmail || !safeInterest || !safeMessage) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(safeEmail)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const safeToken = normalizeField(token);
    if (!safeToken) {
      return NextResponse.json({ error: "Captcha required" }, { status: 400 });
    }

    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    const rateLimitKey = `${ip}:${safeEmail.toLowerCase()}`;
    const { success, limit, remaining, reset } = await ratelimit.limit(rateLimitKey);

    if (!success) {
      const retryAfterSeconds = Math.max(
        1,
        Math.ceil((reset - Date.now()) / 1000)
      );
      return NextResponse.json(
        { error: "Too many requests. Try again later." },
        {
          status: 429,
          headers: {
            "Retry-After": String(retryAfterSeconds),
            "X-RateLimit-Limit": String(limit),
            "X-RateLimit-Remaining": String(remaining),
            "X-RateLimit-Reset": String(Math.floor(reset / 1000)),
          },
        }
      );
    }

    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY?.trim();
    if (!turnstileSecret) {
      return NextResponse.json(
        { error: "Server is not configured for captcha verification" },
        { status: 500 }
      );
    }

    const forwardedFor = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
    const verifyParams = new URLSearchParams({
      secret: turnstileSecret,
      response: safeToken,
    });
    if (forwardedFor) {
      verifyParams.set("remoteip", forwardedFor);
    }

    const verifyRes = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: verifyParams.toString(),
      }
    );

    if (!verifyRes.ok) {
      return NextResponse.json(
        { error: "Captcha verification failed" },
        { status: 400 }
      );
    }

    const verifyData = (await verifyRes.json()) as { success?: boolean };
    if (!verifyData.success) {
      return NextResponse.json(
        { error: "Captcha verification failed" },
        { status: 400 }
      );
    }

    const ipAddress = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || null;
    const userAgent = req.headers.get("user-agent")?.trim() || null;

    const { error: dbError } = await supabase.from("contacts").insert([
      {
        name: safeName,
        email: safeEmail,
        company: safeCompany || null,
        interest: safeInterest,
        message: safeMessage,
        ip_address: ipAddress,
        user_agent: userAgent,
      },
    ]);

    if (dbError) {
      console.error("Supabase insert failed:", dbError);
      return NextResponse.json(
        { error: "Failed to store message" },
        { status: 500 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      return NextResponse.json({ success: true, emailSent: false });
    }

    const resend = new Resend(resendApiKey);

    // If the configured sender domain isn't verified in Resend yet,
    // fallback to the Resend starter sender that works without extra setup.
    const configuredFrom = process.env.RESEND_FROM_EMAIL?.trim();
    const fromCandidates = configuredFrom
      ? [configuredFrom, "onboarding@resend.dev"]
      : ["onboarding@resend.dev"];

    try {
      for (const from of fromCandidates) {
        const result = await resend.emails.send({
          from,
          to: TO_EMAIL,
          replyTo: safeEmail,
          subject: `New Contact Form Submission from ${safeName}`,
          html: `
            <h2>New Inquiry</h2>
            <p><strong>Name:</strong> ${escapeHtml(safeName)}</p>
            <p><strong>Email:</strong> ${escapeHtml(safeEmail)}</p>
            <p><strong>Company:</strong> ${escapeHtml(
              safeCompany || "N/A"
            )}</p>
            <p><strong>Interest:</strong> ${escapeHtml(safeInterest)}</p>
            <p><strong>Message:</strong></p>
            <p>${escapeHtml(safeMessage)}</p>
          `,
        });

        if (!result.error) {
          return NextResponse.json({ success: true, emailSent: true });
        }

        const message = (result.error as { message?: string } | undefined)?.message;
        const isNotVerified =
          typeof message === "string" &&
          message.toLowerCase().includes("domain is not verified");

        if (!isNotVerified) {
          throw result.error;
        }
      }
    } catch (emailError) {
      console.error("Resend failed after DB save:", emailError);
    }

    return NextResponse.json({ success: true, emailSent: false });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
