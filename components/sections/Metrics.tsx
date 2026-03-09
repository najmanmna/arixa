"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import type { Variants } from "framer-motion";
import { Route, Zap, FileCheck, TestTube } from "lucide-react";
import React from "react";

const capabilities = [
  {
    title: "Structured Patient Journeys",
    description: "Before, during, and after treatment.",
    icon: Route,
  },
  {
    title: "Streamlined Clinical Workflows",
    description: "Summaries designed to reduce administrative burden.",
    icon: Zap,
  },
  {
    title: "Audit-Ready Documentation",
    description: "Timestamped records for regulatory alignment.",
    icon: FileCheck,
  },
  {
    title: "Integrated Blood Diagnostics",
    description: "Tracking via London Medical Laboratory.",
    icon: TestTube,
  },
];

export default function Metrics() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const cardSpotlight = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(0, 234, 255, 0.12), transparent 80%)`;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative z-40 bg-[#E0F9FB] pb-12 lg:pb-16">
      {/* ── WRAPPER: Responsive Pull-Up ── */}
      <div 
        onMouseMove={handleMouseMove}
        className="relative z-30 w-full -mt-12 sm:-mt-16 lg:-mt-24 group"
      >
        {/* ── 1. ISOLATED BACKGROUND LAYER ── */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#020438] to-[#1A1D4E] rounded-t-[2.5rem] sm:rounded-t-[3rem] lg:rounded-t-[4rem] border-t border-white/10 shadow-[0_-20px_50px_-15px_rgba(2,4,56,0.2)] lg:shadow-[0_-30px_70px_-15px_rgba(2,4,56,0.3)] overflow-hidden">
          
          {/* Atmospheric Noise */}
          <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
            style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
          />
          <div className="absolute -left-32 top-0 w-96 h-full bg-teal/10 blur-[80px] lg:blur-[100px] mix-blend-screen" />
          <div className="absolute -right-32 top-0 w-96 h-full bg-indigo-500/10 blur-[80px] lg:blur-[100px] mix-blend-screen" />
          
          {/* Interactive Spotlight */}
          <motion.div
            className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 mix-blend-screen hidden lg:block"
            style={{ background: cardSpotlight }}
          />
          {/* Top Highlight Line */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
        </div>

        {/* ── 2. CONTENT LAYER ── */}
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-20 pb-14 sm:pb-5 pt-14 sm:pt-16 lg:pt-20">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            /* Increased gap-y on mobile so stacked items don't crowd each other */
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 sm:gap-y-14 lg:gap-y-6 gap-x-6 lg:gap-x-8"
          >
            {capabilities.map((cap, idx) => {
              
              // THE RESPONSIVE MAGIC:
              // Mobile: Only item 0 pops out. 
              // Tablet (sm): Items 0 and 1 pop out.
              // Desktop (lg): All items (0, 1, 2, 3) pop out.
              const isFirstRowMobile = idx === 0;
              const isFirstRowTablet = idx === 0 || idx === 1;

              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="relative flex flex-col items-center lg:items-start px-2 lg:px-4 pb-4 lg:pb-10 transition-transform hover:-translate-y-2 duration-300 cursor-default"
                >
                  <div 
                    className={`shrink-0 mb-4 sm:mb-6 relative z-30 transition-all duration-300 ${
                      // Conditional logic handling the overlapping icon margins
                      isFirstRowMobile ? "-mt-20 sm:-mt-24 lg:-mt-28" : 
                      isFirstRowTablet ? "mt-0 sm:-mt-24 lg:-mt-28" : 
                      "mt-0 lg:-mt-28"
                    }`}
                  >
                    {/* Icon scaling adjusted for smaller mobile screens */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-[4.5rem] lg:h-[4.5rem] rounded-xl sm:rounded-2xl bg-[#01021C] border border-white/15 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.5)] lg:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.6)] flex items-center justify-center transition-transform group-hover:scale-110 duration-500 relative">
                      <div className="absolute inset-0 rounded-xl sm:rounded-2xl border border-teal/30 scale-105 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all" />
                      <cap.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-teal drop-shadow-[0_0_8px_rgba(0,234,255,0.6)] lg:drop-shadow-[0_0_10px_rgba(0,234,255,0.8)] relative z-10" />
                    </div>
                  </div>

                  {/* Text Area */}
                  <div className="min-w-0 flex-grow text-center lg:text-left">
                    <h3 className="font-heading text-[15px] sm:text-[16px] lg:text-[17px] font-bold text-white leading-tight mb-2 sm:mb-3 tracking-wide">
                      {cap.title}
                    </h3>
                    <p className="text-[12px] sm:text-[13px] font-medium text-teal-light/70 lg:text-teal-light/60 leading-relaxed max-w-[260px] sm:max-w-[280px] lg:max-w-none mx-auto">
                      {cap.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}