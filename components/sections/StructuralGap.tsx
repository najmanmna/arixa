"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import type { Variants } from "framer-motion";
import { ShieldAlert, ShieldCheck, TrendingDown, AlertTriangle, CheckCircle2 } from "lucide-react";
import React from "react";

export default function StructuralGap() {
  // --- MOUSE TRACKING SPOTLIGHT (Light Theme) ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Soft spotlights for depth
  const sectionSpotlight = useMotionTemplate`radial-gradient(800px circle at ${mouseX}px ${mouseY}px, rgba(0, 165, 168, 0.03), transparent 80%)`;
  const cardSpotlight = useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, rgba(0, 165, 168, 0.06), transparent 80%)`;

  // --- KINETIC TYPOGRAPHY ---
  const headlineWords = "What Happens Between".split(" ");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="py-24 px-6 lg:px-8 bg-white relative overflow-hidden group/section"
    >
      {/* GLOBAL SPOTLIGHT & NOISE */}
      <motion.div className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-500 opacity-0 group-hover/section:opacity-100" style={{ background: sectionSpotlight }} />
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* ================= LEFT: THE NARRATIVE ================= */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
          >
            <p className="text-teal text-xs font-bold tracking-[0.15em] uppercase mb-4">
              The Structural Gap
            </p>
            
            {/* Kinetic Headline Reveal */}
            <motion.h2 
              variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy mb-8 leading-[1.05] tracking-tight"
            >
              <div className="flex flex-wrap gap-x-3 gap-y-1">
                {headlineWords.map((word, i) => (
                  <motion.span key={i} variants={wordVariants} className="inline-block">{word}</motion.span>
                ))}
              </div>
              <motion.span 
                initial={{ opacity: 0, filter: "blur(10px)" }} whileInView={{ opacity: 1, filter: "blur(0px)" }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.8 }}
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-300 mt-2"
              >
                Inspections?
              </motion.span>
            </motion.h2>
            
            <div className="space-y-6 text-lg text-slate-light leading-relaxed">
              <p>
                Most healthcare organisations maintain documented procedures and protocols. Yet between statutory reviews, a structural gap emerges: what's documented and what actually happens diverge.
              </p>
              <p>
                <strong className="text-navy font-bold">Procedural drift occurs silently.</strong> Undetected deviations accumulate, regulatory risk grows, and the next review can reveal gaps nobody saw coming.
              </p>
              <p className="text-base text-slate">
                This isn't negligence — it's the natural consequence of running complex operations without continuous oversight of governance adherence. ARIXA bridges that gap.
              </p>
            </div>
          </motion.div>

          {/* ================= RIGHT: THE VISUAL TIMELINE ================= */}
          <div className="relative">
            {/* Background Ambient Danger Glows */}
            <div className="absolute top-1/4 -right-10 w-64 h-64 bg-red-500/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-1/4 -left-10 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] pointer-events-none" />

            <motion.div 
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.2 }}
              className="relative bg-slate-50 border border-gray-200/60 rounded-[2rem] p-8 sm:p-10 shadow-[0_30px_60px_rgba(0,0,0,0.05)] overflow-hidden group/card hover:border-teal/20 transition-colors flex flex-col"
            >
              <motion.div className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" style={{ background: cardSpotlight }} />
              
              {/* === DYNAMIC TIMELINE TRACK === */}
              <div className="relative mb-12 sm:mb-16">
                
                {/* Track Background - Centered dynamically under the w-12 icons (left: 1.3rem) */}
                <div className="absolute top-6 bottom-6 left-[1.3rem] w-1.5 bg-gray-200 rounded-full opacity-50 z-0" />
                
                {/* Track Fill (Animates down on scroll) */}
                <motion.div 
                  initial={{ height: "0%" }} whileInView={{ height: "100%" }} viewport={{ once: true, margin: "-150px" }} transition={{ duration: 2, ease: "easeInOut", delay: 0.4 }}
                  className="absolute top-6 left-[1.3rem] w-1.5 bg-gradient-to-b from-emerald-400 via-amber-400 to-red-500 rounded-full z-0 origin-top shadow-[0_0_10px_rgba(239,68,68,0.5)]" 
                />

                <div className="space-y-12 relative z-10">
                  
                  {/* Node 1: Last Review (Safe) */}
                  <div className="flex gap-6">
                    <motion.div 
                      initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", delay: 0.4 }}
                      className="relative flex-shrink-0 w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 shadow-sm backdrop-blur-sm"
                    >
                      <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                    </motion.div>
                    <div className="pt-2">
                      <div className="text-xs font-bold text-navy uppercase tracking-wider mb-1">Last Review</div>
                      <div className="text-sm text-slate-500 font-mono">T = 0 Months</div>
                    </div>
                  </div>

                  {/* Node 2: The Drift (Risk Zone) */}
                  <div className="flex gap-6 relative">
                    <motion.div 
                      initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", delay: 1.2 }}
                      className="relative flex-shrink-0 w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 shadow-sm mt-4 backdrop-blur-sm"
                    >
                      <TrendingDown className="w-6 h-6 text-amber-600" />
                    </motion.div>
                    <div className="flex-1 space-y-3">
                      
                      {/* Animated Warning Tags - Literally "drifting" to the right */}
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 1.4, type: "spring" }}
                        className="flex items-center gap-3 bg-white border border-amber-200/60 rounded-xl px-4 py-3 shadow-sm hover:border-amber-400 transition-colors"
                      >
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
                        <span className="text-sm font-semibold text-amber-800">Procedural drift detected</span>
                      </motion.div>
                      
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 16 }} viewport={{ once: true }} transition={{ delay: 1.6, type: "spring" }}
                        className="flex items-center gap-3 bg-white border border-orange-200/60 rounded-xl px-4 py-3 shadow-sm hover:border-orange-400 transition-colors"
                      >
                        <div className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-[pulse_1.5s_infinite]" />
                        <span className="text-sm font-semibold text-orange-800">Undetected deviations</span>
                      </motion.div>

                      <motion.div 
                        initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 32 }} viewport={{ once: true }} transition={{ delay: 1.8, type: "spring" }}
                        className="flex items-center gap-3 bg-white border border-red-200/60 rounded-xl px-4 py-3 shadow-sm hover:border-red-400 transition-colors"
                      >
                        <AlertTriangle className="w-4 h-4 text-red-600 animate-[bounce_2s_infinite]" />
                        <span className="text-sm font-semibold text-red-800">Growing regulatory risk</span>
                      </motion.div>
                    </div>
                  </div>

                  {/* Node 3: Next Review (Danger without ARIXA) */}
                  <div className="flex gap-6 relative">
                    <motion.div 
                      initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", delay: 2.2 }}
                      className="relative flex-shrink-0 w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center border border-red-500/20 shadow-sm backdrop-blur-sm"
                    >
                      <ShieldAlert className="w-6 h-6 text-red-600" />
                    </motion.div>
                    <div className="pt-2 pb-2">
                      <div className="text-xs font-bold text-red-600 uppercase tracking-wider mb-1">Next Review</div>
                      <div className="text-sm text-red-400/80 font-mono">T = 12 Months</div>
                    </div>
                  </div>

                </div>
              </div>

              {/* === ARIXA SOLUTION OVERLAY (The Fix) === */}
              {/* Changed from Absolute to Relative so it naturally sits below the timeline content */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: 2.8, type: "spring", stiffness: 100, damping: 20 }}
                className="relative mt-auto bg-[#020617] text-white rounded-[1.5rem] p-6 shadow-[0_10px_40px_rgba(0,165,168,0.2)] border border-white/10 z-20 overflow-hidden group/solution"
              >
                {/* Glowing sweeping line inside the fix box */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-teal-light/0 via-teal-light to-teal-light/0 translate-x-[-100%] group-hover/solution:translate-x-[100%] transition-transform duration-1000" />
                
                <div className="flex items-start sm:items-center gap-5 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-teal/20 border border-teal/30 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(0,165,168,0.3)]">
                    <ShieldCheck className="w-6 h-6 text-teal-light" />
                  </div>
                  <div>
                    <h4 className="font-heading text-white font-bold text-lg mb-1 tracking-tight">The ARIXA Solution</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Continuous oversight embedded into the workflow. <span className="text-white font-semibold">No more gaps.</span>
                    </p>
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}