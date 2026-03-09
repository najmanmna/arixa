"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function Hero() {
  const ease = [0.16, 1, 0.3, 1] as const;

  const stagger: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  };

  const rise: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      window.dispatchEvent(new CustomEvent('deckNavigate', { detail: targetId }));
      setTimeout(() => {
        const elem = document.getElementById(targetId);
        if (elem) {
          const offset = 80;
          const elementPosition = elem.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - offset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 50);
    }
  };

  return (
    // Compacted pt and pb to bring Metrics up
    <section className="relative overflow-hidden pt-30 pb-30 lg:pt-32 lg:pb-60 flex flex-col justify-center items-center bg-[#E0F9FB] selection:bg-teal/20 selection:text-navy">

      {/* 1. ATMOSPHERIC BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div 
          className="absolute inset-0 opacity-[0.2]"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 165, 168, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 165, 168, 0.05) 1px, transparent 1px)`,
            backgroundSize: '3rem 3rem'
          }}
        />
        <motion.div 
          animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="absolute top-[5%] left-[10%] w-[400px] h-[400px] bg-teal/10 rounded-full blur-[80px]"
        />
      </div>

      {/* 2. MAIN CONTENT */}
      <div className="max-w-4xl mx-auto px-5 relative z-20 w-full text-center">
        {/* Reduced space-y from 6 to 4 for a tighter stack */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-4 flex flex-col items-center">

          {/* Badge */}
          <motion.div variants={rise}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-teal/20 backdrop-blur-md shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-dark" />
              <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-navy uppercase">
                GLP-1 WEIGHT MANAGEMENT OS
              </span>
            </div>
          </motion.div>

          {/* Headline - Slightly smaller lg text for compactness */}
          <motion.div variants={rise} className="space-y-3 w-full">
            <h1 className="text-[2.2rem] leading-[1.15] sm:text-4xl md:text-5xl lg:text-[3.8rem] font-heading font-extrabold text-navy tracking-tight">
              The #1 Weight Loss <br className="hidden sm:block" />
              <span className="relative inline-block mt-1">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal to-blue-400 bg-[length:200%_auto] animate-[shimmer_4s_infinite_linear]">
                  Operating System
                </span>
                <svg className="absolute w-full h-2 sm:h-3 -bottom-0.5 left-0 text-blue-300/30 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
              <br className="block sm:hidden" />
              <br className="hidden sm:block" /> for UK Pharmacies and Clinics.
            </h1>
            
            {/* Subtext */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-[40rem] mx-auto leading-relaxed">
              <span className="font-bold text-navy">10QRX</span> governs the entire journey — eligibility, prescribing, maintenance — so you're always audit-ready and focused on patients.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={rise} className="flex flex-col sm:flex-row gap-3 pt-2 justify-center w-full sm:w-auto">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="group relative bg-teal text-navy text-sm font-bold py-3 px-8 rounded-full shadow-lg transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Book a Demo
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#how-it-works"
              onClick={(e) => handleNavClick(e, "#how-it-works")}
              className="group bg-white/80 text-navy border border-teal/20 text-sm font-bold py-3 px-8 rounded-full transition-all hover:bg-white"
            >
              See How It Works
            </a>
          </motion.div>

        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `@keyframes shimmer { 100% { transform: translateX(100%); } }`}} />
    </section>
  );
}