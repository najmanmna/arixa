"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import type { Variants } from "framer-motion";
import { Quote, Microscope, Activity, CheckCircle2 } from "lucide-react";
import React from "react";

export default function Ecosystem() {
  // --- MOUSE TRACKING SPOTLIGHT (Dark Theme) ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Deep ambient glow that follows the cursor
  const sectionSpotlight = useMotionTemplate`radial-gradient(800px circle at ${mouseX}px ${mouseY}px, rgba(0, 165, 168, 0.06), transparent 80%)`;
  // Sharp neon border glow for the cards
  const borderSpotlight = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(0, 201, 183, 0.6), transparent 80%)`;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(5px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="py-24 md:py-32 px-6 lg:px-8 bg-[#020617] relative overflow-hidden group/section border-t border-white/5"
    >
      {/* 1. GLOBAL SPOTLIGHT & NOISE TEXTURE */}
      <motion.div 
        className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-500 opacity-0 group-hover/section:opacity-100 transform-gpu" 
        style={{ background: sectionSpotlight }} 
      />
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ================= TOP: THE HERO TESTIMONIAL ================= */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-32 relative group/quoteCard"
        >
          <div className="relative bg-[#050A15]/80 backdrop-blur-2xl rounded-[2.5rem] p-10 md:p-16 lg:p-20 shadow-[0_40px_80px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden">
            
            {/* Interactive Border Glow */}
            <motion.div 
              className="absolute inset-0 z-0 pointer-events-none rounded-[2.5rem] opacity-0 group-hover/quoteCard:opacity-100 transition-opacity duration-500 transform-gpu"
              style={{ background: borderSpotlight, padding: "1px", WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude" }}
            />

            {/* Background Ambient Effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 group-hover/quoteCard:bg-teal/20 transition-colors duration-1000" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-light/5 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" />
            
            {/* Giant decorative watermark quote */}
            <Quote className="absolute top-10 left-10 w-40 h-40 text-white/[0.02] rotate-180 pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <p className="text-teal-light text-xs font-bold tracking-[0.2em] uppercase mb-10 drop-shadow-[0_0_10px_rgba(0,201,183,0.5)]">
                Client Success
              </p>
              
              {/* Replaced with compliant placeholder testimonial */}
              <blockquote className="text-2xl md:text-3xl lg:text-4xl text-white font-heading font-bold leading-[1.3] mb-14 tracking-tight">
                "ARIXA provides the clinically structured infrastructure we need to safely scale. <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-light to-teal">The audit-ready documentation and integrated pathways mean we are always prepared for regulatory review.</span>"
              </blockquote>

              <div className="flex flex-col items-center justify-center gap-5">
                {/* Simulated Premium Logo Placeholder */}
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center backdrop-blur-md shadow-[0_0_20px_rgba(0,165,168,0.2)]">
                  <span className="text-teal-light text-[10px] font-extrabold tracking-widest leading-none mb-0.5">UK</span>
                  <span className="text-white text-[7px] font-medium tracking-widest opacity-80 leading-none">CLINIC</span>
                </div>
                <div>
                  <div className="font-heading font-bold text-white text-lg tracking-wide mb-1">Clinical Director</div>
                  <div className="text-slate-400 text-sm font-medium uppercase tracking-wider text-[10px]">Partner Weight Management Clinic</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>


        {/* ================= BOTTOM: ECOSYSTEM PARTNERS ================= */}
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-teal-light text-xs font-bold tracking-[0.2em] uppercase mb-3 drop-shadow-[0_0_10px_rgba(0,201,183,0.5)]"
          >
            Ecosystem Partners
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Integrated Clinical <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-200">Excellence.</span>
          </motion.h2>
        </div>

        {/* group/grid for focus dimming on hover */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-6 group/grid"
        >
          {/* LML Partner Card (Takes up 3 columns) */}
         <motion.div variants={itemVariants} className="lg:col-span-3 relative bg-white/[0.02] border border-white/10 rounded-[2rem] p-8 lg:p-12 overflow-hidden group/card hover:bg-white/[0.04] group-hover/grid:opacity-50 hover:!opacity-100 transition-all duration-500">
            <motion.div 
              className="absolute inset-0 z-0 pointer-events-none rounded-[2rem] opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 transform-gpu" 
              style={{ background: borderSpotlight, padding: "1px", WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude" }} 
            />

            <div className="flex items-center gap-5 mb-8 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-teal/10 flex items-center justify-center border border-teal/20 shadow-[0_0_20px_rgba(0,165,168,0.2)] group-hover/card:scale-110 transition-transform duration-500">
                <Microscope className="w-8 h-8 text-teal-light" />
              </div>
              <div>
                <h4 className="font-heading font-extrabold text-white text-2xl mb-1">London Medical Laboratory</h4>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-light/10 border border-teal-light/20">
                   <span className="w-1.5 h-1.5 rounded-full bg-teal-light animate-pulse" />
                   <span className="text-teal-light text-[10px] font-bold tracking-widest uppercase">Clinical Diagnostics Partner</span>
                </div>
              </div>
            </div>
            
            {/* Removed 'intelligence dashboard' -> 'clinical dashboard' */}
            <p className="text-slate-300 leading-relaxed mb-8 relative z-10 text-sm md:text-base">
              API-integrated blood diagnostics built directly into the ARIXA workflow. Patient blood panels are processed through LML's UKAS-accredited laboratory and returned instantly as a comprehensive clinical dashboard.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 border-t border-white/10 pt-8 relative z-10">
              {[
                "Clinician-reviewed summaries",
                "Individual biomarker results",
                "Cross-panel pattern analysis", // Replaced AI claim
                "Prioritised clinical insights" // Replaced actions claim
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 group/feature">
                  <CheckCircle2 className="w-5 h-5 text-teal/50 mt-0.5 flex-shrink-0 group-hover/feature:text-teal-light transition-colors" />
                  <span className="text-sm text-slate-400 font-medium group-hover/feature:text-white transition-colors">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Dr. Neesha Partner Card (Takes up 2 columns) */}
          <motion.div variants={itemVariants} className="lg:col-span-2 relative bg-white/[0.02] border border-white/10 rounded-[2rem] p-8 lg:p-12 overflow-hidden group/card hover:bg-white/[0.04] group-hover/grid:opacity-50 hover:!opacity-100 transition-all duration-500 flex flex-col justify-center">
            <motion.div 
              className="absolute inset-0 z-0 pointer-events-none rounded-[2rem] opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 transform-gpu" 
              style={{ background: borderSpotlight, padding: "1px", WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude" }} 
            />

            <div className="flex items-center gap-5 mb-8 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover/card:scale-110 transition-transform duration-500 backdrop-blur-sm">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 className="font-heading font-extrabold text-white text-2xl mb-1">Dr. Neesha</h4>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700">
                   <span className="text-slate-300 text-[10px] font-bold tracking-widest uppercase">Clinical Pathway Partner</span>
                </div>
              </div>
            </div>
            
            <div className="relative z-10">
              <h5 className="font-bold text-white mb-3 text-lg">Rebound Prevention Protocols</h5>
              {/* Updated copy to match V5 directives precisely */}
              <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                Evidence-based rebound prevention protocols integrated into the ARIXA patient journey, supporting long-term treatment sustainability beyond initial prescribing.
              </p>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}