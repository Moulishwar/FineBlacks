import Link from "next/link";
import { navLinks } from "@/data/navigation";
import { footerLinks, companyInfo } from "@/data/company";

export default function Footer() {
  return (
    <footer className="bg-carbon text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold mb-4">
              FineBlacks International
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading the circular economy with premium Recycled and Virgin
              Carbon Black solutions.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-eco transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Products
            </h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-eco transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>{companyInfo.proprietor}</li>
              <li>{companyInfo.email}</li>
              <li>{companyInfo.phone}</li>
              <li>{companyInfo.address}</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} FineBlacks International. All
            rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link
              href="/privacy"
              className="text-xs text-gray-400 hover:text-eco transition-colors"
            >
              Privacy
            </Link>
            <span className="text-xs text-gray-500">
              Sustainable Carbon Solutions
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
