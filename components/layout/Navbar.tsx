"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

// Updated to match our new section IDs
const navLinks = [
  { name: "How It Works", href: "#how-it-works" },
  { name: "Economics", href: "#economics" },
  { name: "Clinical", href: "#diagnostics" },
  { name: "Team", href: "#about" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md border-gray-200 shadow-sm py-4"
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 group relative z-50">
            <span className="inline-block w-4 h-4 bg-teal rounded-sm transition-transform group-hover:rotate-45 duration-300"></span>
            <span className="font-heading font-extrabold text-2xl tracking-tight text-navy transition-colors duration-300">
              ARIXA
            </span>
            <span className="text-[10px] font-bold tracking-[0.2em] ml-1 mt-1 text-slate-light transition-colors duration-300">
              HEALTH
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-slate hover:text-teal transition-colors relative group tracking-wide"
              >
                {link.name}
                {/* Subtle underline animation on hover */}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-teal transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
            ))}
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden md:block">
            <Link
              href="#contact"
              className="inline-flex items-center px-6 py-2.5 bg-teal text-white text-sm font-bold rounded-xl hover:bg-teal-light transition-all hover:-translate-y-0.5 shadow-[0_5px_15px_rgba(0,165,168,0.2)] hover:shadow-[0_8px_20px_rgba(0,165,168,0.3)]"
            >
              Book Demo
            </Link>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button
            className="md:hidden relative z-50 p-2 -mr-2 text-navy transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU (Framer Motion) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="fixed inset-0 top-[72px] z-40 bg-white border-b border-gray-100 shadow-xl md:hidden overflow-hidden flex flex-col"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-navy font-heading font-bold text-2xl hover:text-teal transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-8 border-t border-gray-100">
                <Link
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center px-6 py-4 bg-teal text-white font-bold text-lg rounded-xl shadow-md"
                >
                  Book a Demo
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}