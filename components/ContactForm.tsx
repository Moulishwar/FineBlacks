"use client";

import { useState, type ReactNode } from "react";
import { companyInfo } from "@/data/company";
import { productInterestOptions } from "@/data/products";
import { Turnstile } from "@marsidev/react-turnstile";

const submissionFailedHelp: ReactNode = (
  <>
    We couldn&apos;t send your message through the form. Please email us directly at{" "}
    <a
      href={`mailto:${companyInfo.email}`}
      className="underline font-medium underline-offset-2 hover:text-red-800"
    >
      {companyInfo.email}
    </a>
    .
  </>
);

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<ReactNode | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const sanitize = (value: FormDataEntryValue | null) => {
      if (typeof value !== "string") return "";
      // Strip angle brackets and non-printable characters, then trim.
      // This reduces the risk of HTML/script injection and control-character payloads.
      return value
        .replace(/[<>]/g, "")
        .replace(/[^\x09\x0A\x0D\x20-\x7E]/g, "")
        .trim();
    };

    const name = sanitize(formData.get("name"));
    const email = sanitize(formData.get("email"));
    const company = sanitize(formData.get("company"));
    const interest = sanitize(formData.get("interest"));
    const message = sanitize(formData.get("message"));

    if (!name || !email || !interest || !message) {
      // Do not proceed if required fields are missing after sanitization.
      setError("Please fill out all required fields.");
      return;
    }
    if (!token) {
      setError("Please complete the captcha.");
      return;
    }

    setError(null);
    setIsSubmitting(true);

    const payload = { name, email, company, interest, message, token };

    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then(async (res) => {
        if (res.ok) {
          setSubmitted(true);
          return;
        }

        const responseText = await res.text();
        console.error("Submission failed:", responseText);

        setError(submissionFailedHelp);
      })
      .catch((err) => {
        console.error("Submission error:", err);
        setError(submissionFailedHelp);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  if (submitted) {
    return (
      <div className="rounded-card bg-eco-subtle p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-eco text-white flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-carbon mb-2">
          Thank you for your inquiry!
        </h3>
        <p className="text-gray-500">
          Our team will review your message and get back to you within 24 hours.
        </p>
        <p className="text-sm text-gray-500 mt-5">
          While you wait, explore our full carbon black product range.
        </p>
        <a
          href="/products"
          className="inline-flex items-center justify-center mt-6 px-6 py-2.5 text-sm bg-carbon text-white rounded-button hover:bg-eco transition-colors duration-300 font-medium"
        >
          Explore Products
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error ? (
        <div className="text-sm text-red-600 leading-relaxed" role="alert">
          {error}
        </div>
      ) : null}
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-carbon mb-2"
        >
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full px-4 py-3 rounded-input border border-gray-200 text-carbon placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-eco focus:border-transparent transition-all duration-300"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-carbon mb-2"
        >
          Email<span className="text-eco ml-1">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 rounded-input border border-gray-200 text-carbon placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-eco focus:border-transparent transition-all duration-300"
        />
      </div>

      {/* Company */}
      <div>
        <label
          htmlFor="company"
          className="block text-sm font-medium text-carbon mb-2"
        >
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className="w-full px-4 py-3 rounded-input border border-gray-200 text-carbon placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-eco focus:border-transparent transition-all duration-300"
        />
      </div>

      {/* Product Interest */}
      <div>
        <label
          htmlFor="interest"
          className="block text-sm font-medium text-carbon mb-2"
        >
          Product Interest<span className="text-eco ml-1">*</span>
        </label>
        <select
          id="interest"
          name="interest"
          required
          className="w-full px-4 py-3 rounded-input border border-gray-200 text-carbon bg-white focus:outline-none focus:ring-2 focus:ring-eco focus:border-transparent transition-all duration-300"
        >
          <option value="">Select a product category</option>
          {productInterestOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-carbon mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          maxLength={1000}
          placeholder="Tell us about your requirements..."
          className="w-full px-4 py-3 rounded-input border border-gray-200 text-carbon placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-eco focus:border-transparent transition-all duration-300 resize-none"
        />
      </div>

      {/* Submit */}
      <div>
        <Turnstile
          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
          options={{ appearance: "interaction-only" }}
          onSuccess={(nextToken) => {
            setToken(nextToken);
            setError(null);
          }}
          onExpire={() => setToken(null)}
          onError={() => setToken(null)}
        />
      </div>

      <div className="flex justify-end pt-2">
        <button
          type="submit"
          className="w-full sm:w-auto min-w-[10rem] px-8 py-3 bg-carbon text-white rounded-button hover:bg-eco transition-colors duration-300 font-medium"
          disabled={isSubmitting}
          aria-disabled={isSubmitting}
        >
          Send Inquiry
        </button>
      </div>
    </form>
  );
}
