"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";
import React from "react";

export default function CtaBanner() {
  // --- MOUSE TRACKING SPOTLIGHT (Dark Theme) ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const spotlight = useMotionTemplate`radial-gradient(800px circle at ${mouseX}px ${mouseY}px, rgba(0, 201, 183, 0.15), transparent 80%)`;

  return (
    <section 
      id="contact" 
      onMouseMove={handleMouseMove}
      className="relative py-24 sm:py-32 px-6 lg:px-8 bg-[#020617] overflow-hidden group/cta"
    >
      
      {/* 1. INTERACTIVE SPOTLIGHT */}
      <motion.div 
        // ADD transform-gpu HERE:
        className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-500 opacity-50 group-hover/cta:opacity-100 transform-gpu"
        style={{ background: spotlight }}
      />

      {/* 2. SVG NOISE TEXTURE */}
      <div 
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none z-0" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      />

      {/* 3. ATMOSPHERIC ELEMENTS */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-light/5 rounded-full blur-[100px] -translate-x-1/4 translate-y-1/3 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal/10 border border-teal/20 text-teal-light text-xs font-bold tracking-[0.2em] uppercase mb-8"
          >
            <Sparkles className="w-3 h-3" />
            Next Generation Governance
          </motion.div>

          <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-[1.05] tracking-tighter">
            Remove Governance <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-light via-white to-teal-light bg-[size:200%_auto] animate-[shimmer_5s_infinite_linear]">as a Bottleneck.</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Join the elite pharmacies and clinics scaling safely with ARIXA. <br className="hidden md:block" />
            See the platform in action today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-12">
            {/* Primary CTA with Magnetic feel */}
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="mailto:admin@arixahealth.com" 
              className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-teal text-white font-bold rounded-2xl overflow-hidden transition-all shadow-[0_20px_40px_rgba(0,165,168,0.3)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              Request a Platform Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="mailto:admin@arixahealth.com" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-md"
            >
              <Calendar className="w-5 h-5 text-teal-light" />
              Book Readiness Review
            </motion.a>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-[#050A15] border border-white/5 backdrop-blur-sm shadow-inner"
          >
             <div className="relative flex h-2 w-2">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-light opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-light"></span>
             </div>
             <p className="text-slate-400 text-xs font-bold tracking-widest uppercase">
               From £499/month <span className="mx-3 text-white/10">|</span> No long-term contract
             </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}