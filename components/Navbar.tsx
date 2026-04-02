"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/navigation";

const SCROLL_THRESHOLD = 30;

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-auto">
      {/* Desktop nav */}
      <div
        className={`hidden md:flex items-center gap-1 bg-white/80 backdrop-blur-md border border-white/20 rounded-button px-3 shadow-soft transition-all duration-300 ${
          isScrolled ? "py-1.5" : "py-2"
        }`}
      >
        <Link
          href="/"
          className={`flex items-center px-3 hover:opacity-80 transition-all duration-300 ${
            isScrolled ? "h-14" : "h-20"
          }`}
        >
          <Image
            src="/images/Logo.png"
            alt="FineBlacks International"
            width={240}
            height={80}
            className={`w-auto object-contain transition-all duration-300 ${
              isScrolled ? "h-14" : "h-20"
            }`}
            style={{ width: "auto" }}
            priority
          />
        </Link>

        <div className="flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm rounded-button transition-colors duration-300 ${
                  isActive
                    ? "bg-carbon text-white"
                    : "text-carbon hover:bg-gray-100"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <Link
          href="/contact"
          className="ml-2 px-6 py-2 text-sm bg-carbon text-white rounded-button hover:bg-eco transition-colors duration-300 flex items-center gap-2"
        >
          Get in Touch
          <span aria-hidden="true">↗</span>
        </Link>
      </div>

      {/* Mobile nav */}
      <div
        className={`md:hidden flex items-center gap-2 bg-white/80 backdrop-blur-md border border-white/20 rounded-button px-3 shadow-soft transition-all duration-300 ${
          isScrolled ? "py-1.5" : "py-2"
        }`}
      >
        <Link
          href="/"
          className={`flex items-center hover:opacity-80 transition-all duration-300 ${
            isScrolled ? "h-10" : "h-14"
          }`}
        >
          <Image
            src="/images/Logo.png"
            alt="FineBlacks International"
            width={160}
            height={56}
            className={`w-auto object-contain transition-all duration-300 ${
              isScrolled ? "h-10" : "h-14"
            }`}
            style={{ width: "auto" }}
            priority
          />
        </Link>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="ml-auto w-8 h-8 flex items-center justify-center text-carbon"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden mt-2 bg-white/90 backdrop-blur-md border border-white/20 rounded-card p-4 shadow-soft">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 text-sm rounded-input transition-colors duration-300 ${
                    isActive
                      ? "bg-carbon text-white"
                      : "text-carbon hover:bg-gray-100"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 px-4 py-3 text-sm text-center bg-carbon text-white rounded-button hover:bg-eco transition-colors duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
