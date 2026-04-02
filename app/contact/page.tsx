import ContactForm from "@/components/ContactForm";
import { companyInfo } from "@/data/company";

const mapsSearchUrl = `https://www.google.com/maps?q=${companyInfo.mapLat},${companyInfo.mapLng}`;
const phoneHref = `tel:${companyInfo.phone.replace(/\s/g, "")}`;
const emailHref = `mailto:${companyInfo.email}`;

function ContactIconBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-10 h-10 rounded-full bg-eco-subtle flex items-center justify-center text-eco flex-shrink-0">
      {children}
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* Hero — inset rounded banner (matches home page Hero layout) */}
      <section className="px-4 sm:px-6 pt-28 pb-6">
        <div className="relative max-w-7xl mx-auto rounded-hero overflow-hidden flex flex-col items-center justify-center">
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#030806] via-[#0a2418] via-35% to-[#010101]"
            aria-hidden
          />
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(90%,36rem)] h-48 rounded-full bg-emerald-500/15 blur-[64px] pointer-events-none"
            aria-hidden
          />
          <div
            className="absolute inset-0 opacity-[0.07] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')]"
            aria-hidden
          />

          <div className="relative z-10 w-full max-w-3xl mx-auto text-center px-6 sm:px-10 pt-[calc(2rem+1.5cm)] pb-[calc(2rem+1.5cm)] lg:pt-[calc(2.5rem+1.5cm)] lg:pb-[calc(2.5rem+1.5cm)]">
            <p className="text-xs uppercase tracking-[0.22em] text-emerald-300/90 mb-2 font-medium">
              Contact
            </p>
            <h1 className="text-3xl md:text-4xl font-medium text-white tracking-tight leading-tight">
              Get in{" "}
              <span className="relative inline-block">
                Touch
                <svg
                  className="absolute left-0 right-0 -bottom-1 h-3 w-full text-emerald-400 pointer-events-none"
                  viewBox="0 0 120 10"
                  preserveAspectRatio="none"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path
                    d="M2 7C18 2 38 2 58 5.5C78 9 98 9 118 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </h1>
            <p className="mt-4 text-sm md:text-base text-white/75 leading-relaxed max-w-2xl mx-auto">
              Have a question about our carbon black products? Looking for a
              custom formulation? We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Main — warm off-white band */}
      <section className="bg-[#f2f0ea] px-4 sm:px-6 py-14 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact information */}
            <div className="rounded-card bg-white p-8 lg:p-10 shadow-soft border border-black/[0.04] flex flex-col h-full">
              <h2 className="text-xl font-semibold text-carbon mb-8">
                Contact Information
              </h2>

              <div className="flex-1 flex flex-col min-h-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <ContactIconBubble>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </ContactIconBubble>
                    <div>
                      <p className="text-sm font-medium text-carbon">Email</p>
                      <p className="text-sm text-gray-600 mt-0.5">
                        {companyInfo.email}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <ContactIconBubble>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </ContactIconBubble>
                    <div>
                      <p className="text-sm font-medium text-carbon">Phone</p>
                      <p className="text-sm text-gray-600 mt-0.5">
                        {companyInfo.phone}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <ContactIconBubble>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </ContactIconBubble>
                    <div>
                      <p className="text-sm font-medium text-carbon">Address</p>
                      <p className="text-sm text-gray-600 mt-0.5">
                        {companyInfo.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <ContactIconBubble>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </ContactIconBubble>
                    <div>
                      <p className="text-sm font-medium text-carbon">
                        Proprietor
                      </p>
                      <p className="text-sm text-gray-600 mt-0.5">
                        {companyInfo.proprietor}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-8 lg:border-l lg:border-gray-200 lg:pl-8">
                  <div>
                    <h3 className="text-sm font-semibold text-carbon mb-3">
                      What happens next
                    </h3>
                    <ol className="space-y-2.5 text-sm text-gray-600 list-decimal list-inside marker:text-eco marker:font-semibold">
                      {companyInfo.inquirySteps.map((step, i) => (
                        <li key={i} className="pl-0.5">
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-carbon mb-3">
                      Office hours
                    </h3>
                    <ul className="space-y-1.5 text-sm text-gray-600">
                      {companyInfo.officeHours.map((line, i) => (
                        <li key={i}>{line}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8 lg:mt-auto pt-8 border-t border-gray-100">
                <p className="text-sm font-medium text-carbon mb-4">
                  Prefer to reach out directly?
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <a
                    href={emailHref}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium bg-eco-subtle text-eco hover:bg-eco hover:text-white rounded-button transition-colors duration-300"
                  >
                    <svg
                      className="w-4 h-4 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Email us
                  </a>
                  <a
                    href={phoneHref}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-carbon border border-gray-200 hover:border-eco hover:text-eco rounded-button transition-colors duration-300"
                  >
                    <svg
                      className="w-4 h-4 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    Call us
                  </a>
                </div>
                <a
                  href={mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-4 rounded-input border border-gray-200 bg-gray-50/80 p-4 hover:border-eco/40 hover:bg-eco-subtle/30 transition-colors duration-300"
                >
                  <div className="w-11 h-11 rounded-full bg-white border border-gray-100 flex items-center justify-center text-eco shrink-0 shadow-sm">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                      />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1 text-left">
                    <p className="text-sm font-semibold text-carbon group-hover:text-eco transition-colors">
                      Open in Google Maps
                    </p>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                      {companyInfo.address}
                    </p>
                    <span className="text-xs font-medium text-eco mt-2 inline-flex items-center gap-1">
                      View map
                      <span aria-hidden>↗</span>
                    </span>
                  </div>
                </a>
              </div>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-card bg-white border border-black/[0.06] p-8 lg:p-10 shadow-soft self-start">
              <h2 className="text-xl font-semibold text-carbon mb-2">
                Send us a message
              </h2>
              <p className="text-sm text-gray-500 mb-8">
                Fill out the form below and our team will get back to you within
                24 hours.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
