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
      // Slightly faster stagger on mobile feels more responsive
      transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  };

  const rise: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
  };

  return (
    // ── MOBILE OPTIMIZATION FIXES ──
    // 1. Changed invalid `pt-30` to `pt-[7.5rem]` to keep your exact spacing.
    // 2. Adjusted padding for smaller screens so the content breathes better.
    <section className="relative overflow-hidden pt-[7.5rem] pb-28 lg:pt-[9.5rem] lg:pb-52 flex flex-col justify-center items-center bg-[#E0F9FB] selection:bg-teal/20 selection:text-navy">

      {/* 1. ATMOSPHERIC BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Subtle Technical Grid */}
        <div 
          className="absolute inset-0 opacity-[0.3] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_40%,transparent_100%)]"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 165, 168, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 165, 168, 0.08) 1px, transparent 1px)`,
            backgroundSize: '3rem 3rem'
          }}
        />

        {/* Animated Aurora Orbs - ADDED willChange for GPU acceleration (Stops mobile scroll lag) */}
        <motion.div 
          style={{ willChange: "transform" }}
          animate={{ x: [0, 30, 0, -30, 0], y: [0, -15, 0, 15, 0], scale: [1, 1.05, 1, 0.95, 1] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="absolute top-[5%] left-[-20%] sm:left-[15%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-teal/15 rounded-full blur-[80px] sm:blur-[100px] mix-blend-multiply"
        />
        <motion.div 
          style={{ willChange: "transform" }}
          animate={{ x: [0, -40, 0, 40, 0], y: [0, 20, 0, -20, 0], scale: [1, 0.9, 1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="absolute bottom-[20%] right-[-20%] sm:right-[10%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#00C8CB]/10 rounded-full blur-[90px] sm:blur-[120px] mix-blend-multiply"
        />
      </div>

      {/* 2. MAIN CONTENT */}
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 relative z-20 w-full text-center flex-grow flex flex-col justify-center">
        {/* Tightened space-y on mobile so the stack doesn't feel disjointed */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-5 sm:space-y-6 flex flex-col items-center">

          {/* Badge */}
          <motion.div variants={rise} className="flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full shadow-sm bg-white/80 border border-teal/20 backdrop-blur-md hover:bg-white transition-colors cursor-default">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-dark" />
              {/* Shrunk tracking slightly on mobile to prevent wrapping on tiny screens like iPhone SE */}
              <span className="text-[9px] sm:text-[10px] font-bold tracking-wider sm:tracking-widest text-navy uppercase">
                GLP-1 Weight Management Infrastructure
              </span>
            </div>
          </motion.div>

          {/* Headline - Added pb-1 to gradient span to prevent clipping on iOS Safari */}
          <motion.div variants={rise} className="space-y-4 w-full">
            <h1 className="text-[2.5rem] leading-[1.1] sm:text-4xl md:text-5xl lg:text-[4.5rem] font-heading font-extrabold text-navy sm:leading-[1.05] tracking-tight drop-shadow-sm">
              The Clinically Structured <br className="hidden sm:block" />
              <span className="relative inline-block mt-1">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-teal-dark via-teal to-teal-dark bg-[length:200%_auto] animate-[shimmer_4s_infinite_linear] pb-1">
                  Infrastructure
                </span>
                {/* Accent underline */}
                <svg className="absolute w-full h-2.5 sm:h-3 sm:h-3.5 -bottom-0.5 sm:-bottom-0.5 left-0 text-teal/30 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
              <br className="block sm:hidden" />
              <br className="hidden sm:block" /> for Modern Healthcare.
            </h1>
            
            {/* Subtext */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-[21rem] sm:max-w-2xl mx-auto leading-relaxed font-medium">
              Powering UK pharmacy-led clinical services with science, safety, and scale. <span className="font-bold text-navy">10QRX</span> structures the entire patient journey — so you can focus on clinical decisions, not administration.
            </p>
          </motion.div>

          {/* CTA Buttons - Better touch targets and layout for mobile */}
          <motion.div variants={rise} className="flex flex-col sm:flex-row gap-3 pt-3 sm:pt-4 justify-center w-full sm:w-auto relative z-30 px-1 sm:px-0 mt-2">
            <a
              href="#contact"
              className="group relative overflow-hidden bg-teal text-navy text-sm lg:text-base font-bold py-4 sm:py-3.5 sm:px-8 rounded-full shadow-[0_10px_30px_-10px_rgba(0,234,255,0.6)] transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-1 hover:shadow-[0_15px_35px_-10px_rgba(0,234,255,0.8)] w-full sm:w-auto"
            >
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              <span className="relative z-10">Book a Demo</span>
              <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#how-it-works"
              className="group bg-white/80 backdrop-blur-sm hover:bg-white text-navy border border-teal/15 hover:border-teal/40 text-sm lg:text-base font-bold py-4 sm:py-3.5 sm:px-8 rounded-full transition-all shadow-sm hover:shadow-lg flex items-center justify-center w-full sm:w-auto"
            >
              See How It Works
            </a>
          </motion.div>

        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </section>
  );
}