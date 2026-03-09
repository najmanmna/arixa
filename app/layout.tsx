import type { Metadata } from "next";
import { Inter, Source_Sans_3 } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Configure fonts
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: 'swap',
});

const sourceSans = Source_Sans_3({ 
  subsets: ["latin"], 
  variable: "--font-source",
  display: 'swap',
});

// Upgraded Metadata with OpenGraph for professional social sharing
export const metadata: Metadata = {
  title: "10QRX — Governance Infrastructure for Modern Healthcare",
  description: "Powering UK pharmacy-led clinical services with science, safety, and scale.",
  openGraph: {
    title: "10QRX — Clinical Governance Infrastructure",
    description: "Powering UK pharmacy-led clinical services with science, safety, and scale.",
    url: "https://10qrx.com", // Update this to the actual domain when ready
    siteName: "10QRX",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className="scroll-smooth">
      <body 
        className={`${inter.variable} ${sourceSans.variable} font-body bg-white text-slate-800 antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}