import type { Metadata } from "next";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import { companyInfo } from "@/data/company";

export const metadata: Metadata = {
  title: "Privacy | FineBlacks International",
  description:
    "How FineBlacks International handles personal data when you use our website and contact form.",
};

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          label="Legal"
          title="Privacy information"
          align="left"
        />
        <p className="text-sm text-gray-500 mb-10">
          Last updated: {new Date().toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>

        <div className="space-y-10 text-carbon">
          <div>
            <h2 className="text-lg font-semibold text-carbon mb-3">
              Who we are
            </h2>
            <p className="text-gray-600 leading-relaxed">
              This website is operated by{" "}
              <strong>{companyInfo.name}</strong> ({companyInfo.proprietor}).
              For privacy questions about this site or the contact form, reach
              us at{" "}
              <a
                href={`mailto:${companyInfo.email}`}
                className="text-eco hover:underline"
              >
                {companyInfo.email}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-carbon mb-3">
              What we collect on the contact form
            </h2>
            <ul className="list-disc pl-5 text-gray-600 space-y-2 leading-relaxed">
              <li>
                <strong>Details you type in:</strong> name, email address,
                optional company name, product interest, and your message. We
                use these only to read and respond to your inquiry.
              </li>
              <li>
                <strong>Technical data from your browser:</strong> we derive a
                network address (IP) and read the browser &ldquo;user-agent&rdquo;
                string sent automatically with your request.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-carbon mb-3">
              Why we use IP and user-agent
            </h2>
            <ul className="list-disc pl-5 text-gray-600 space-y-2 leading-relaxed">
              <li>
                <strong>Rate limiting:</strong> we combine IP and email in a
                short-lived key so the same address cannot flood the form. This
                is processed by our rate-limiting provider (in-memory style
                counters with automatic expiry, not a permanent contact
                archive).
              </li>
              <li>
                <strong>Spam and abuse protection:</strong> we send your IP to
                Cloudflare when verifying the Turnstile challenge, as their
                service requires.
              </li>
              <li>
                <strong>Stored with your inquiry:</strong> we also save IP and
                user-agent in our database alongside your message to help
                investigate abuse or technical issues and to support
                legitimate business records. If you prefer we do not retain
                these fields, contact us and we can delete them for your
                submission where the law allows.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-carbon mb-3">
              Where data is processed
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Form submissions are stored in our database (Supabase), emails may
              be sent through Resend, rate limits use Upstash, and the captcha
              uses Cloudflare Turnstile. Those providers act on our
              instructions. Their locations and terms are set out in their own
              privacy policies.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-carbon mb-3">
              How long we keep it
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We keep contact form records for as long as we need them to handle
              your request, follow up, and maintain ordinary business and
              security records, unless a longer period is required by law. Rate
              limit data expires automatically on a short schedule set by our
              provider.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-carbon mb-3">
              Your rights (including UK / EEA)
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Depending on where you live, you may have rights to access,
              correct, delete, or restrict use of your personal data, and to
              object or complain to a supervisory authority. To exercise these,
              email us at the address above. We will respond within the time
              limits applicable in your region where those laws apply.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-carbon mb-3">
              Cookies and similar technologies
            </h2>
            <p className="text-gray-600 leading-relaxed">
              This site is largely informational. Cloudflare Turnstile may use
              cookies or similar mechanisms as part of running the challenge;
              see Cloudflare&rsquo;s documentation for details.
            </p>
          </div>

          <p className="text-xs text-gray-400 pt-6 border-t border-gray-100">
            This page is a practical summary for visitors. It is not tailored
            legal advice; if you need a formal policy for a specific country or
            sector, you should have it reviewed by a qualified professional.
          </p>

          <p className="text-sm">
            <Link href="/contact" className="text-eco font-medium hover:underline">
              ← Back to Contact
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
