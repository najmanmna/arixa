import type { Metadata } from "next";
import { Inter, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { cn } from "@/app/lib/utils"; // You'll create this utility next
import Navbar from "../components/layout/Navbar";
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

export const metadata: Metadata = {
  title: "ARIXA Health — Governance Infrastructure for Modern Healthcare",
  description: "Powering UK pharmacy-led clinical services with science, safety, and scale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className="scroll-smooth">
      <body className={`${inter.variable} ${sourceSans.variable} font-body bg-white text-slate antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}