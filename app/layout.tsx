import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FineBlacks International | Sustainable Carbon Solutions",
  description:
    "Leading the circular economy with premium Recycled and Virgin Carbon Black solutions. Pigment powders, recycling, and sustainability.",
  icons: {
    icon: "/images/Icon_head.png",
    apple: "/images/Icon_head.png",
    shortcut: "/images/Icon_head.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="font-sans text-carbon antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
