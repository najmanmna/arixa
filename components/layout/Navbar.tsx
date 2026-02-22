"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/app/lib/utils";

const navLinks = [
  { name: "How It Works", href: "#how-it-works" },
  { name: "Platform", href: "#platform" },
  { name: "Solutions", href: "#solutions" },
  { name: "About", href: "#about" },
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
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-gray-200 shadow-sm py-3"
          : "bg-transparent border-transparent py-5" // Transparent at the top
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group relative z-50">
          <span className="inline-block w-3 h-3 bg-teal rounded-sm transition-transform group-hover:rotate-45 duration-300"></span>
          <span className={cn(
            "font-heading font-extrabold text-xl tracking-tight transition-colors duration-300",
            isScrolled || isMobileMenuOpen ? "text-navy" : "text-white" // Switch to navy when scrolled or menu open
          )}>
            ARIXA
          </span>
          <span className={cn(
            "text-xs font-semibold tracking-[0.15em] ml-1 transition-colors duration-300",
            isScrolled || isMobileMenuOpen ? "text-slate-light" : "text-white/70"
          )}>
            HEALTH
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors relative group",
                isScrolled 
                  ? "text-slate hover:text-teal" // Dark text when scrolled
                  : "text-white/80 hover:text-white" // Light text when at top
              )}
            >
              {link.name}
              {/* Subtle underline animation on hover */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal transition-all duration-300 group-hover:w-full rounded-full"></span>
            </Link>
          ))}
        </nav>

        {/* DESKTOP CTA */}
        <div className="hidden md:block">
          <Link
            href="#contact"
            className="inline-flex items-center px-5 py-2.5 bg-teal text-white text-sm font-semibold rounded-lg hover:bg-teal-light transition-all hover:-translate-y-0.5 shadow-lg shadow-teal/20"
          >
            Request a Demo
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          className={cn(
            "md:hidden relative z-50 p-2 -mr-2 transition-colors duration-300",
            isScrolled || isMobileMenuOpen ? "text-navy" : "text-white"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU (Framer Motion) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl md:hidden overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-slate font-medium text-lg hover:text-teal transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100">
                <Link
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center px-5 py-3 bg-teal text-white font-semibold rounded-lg shadow-md"
                >
                  Request a Demo
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}