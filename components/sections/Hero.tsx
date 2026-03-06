"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function Hero() {
  // --- MOUSE TRACKING SPOTLIGHT LOGIC ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Spotlight gradients adapted for light mode using Xflow Cyan RGB (0, 234, 255)
  const backgroundSpotlight = useMotionTemplate`radial-gradient(800px circle at ${mouseX}px ${mouseY}px, rgba(0, 234, 255, 0.05), transparent 80%)`;

  // --- ANIMATION VARIANTS ---
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen pt-40 pb-32 overflow-hidden bg-[#FAFAFA] flex flex-col items-center justify-center group"
    >
      
      {/* 1. INTERACTIVE SPOTLIGHT (Follows Mouse) */}
      <motion.div 
        className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-500 opacity-50 group-hover:opacity-100"
        style={{ background: backgroundSpotlight }}
      />

      {/* 2. STATIC BACKGROUND GLOWS & GRID (Light Mode) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0 opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-teal/10 rounded-[100%] blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full flex flex-col items-center text-center">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl flex flex-col items-center"
        >
          {/* PILL BADGE - Updated to text-teal-dark for contrast */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-teal/10 border border-teal/20 shadow-sm backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-teal-dark" />
              <span className="text-teal-dark text-xs font-bold tracking-widest uppercase">
                GLP-1 Weight Management Infrastructure
              </span>
            </div>
          </motion.div>
          
          {/* KINETIC HEADLINE REVEAL - Updated gradient to from-teal-dark to-teal */}
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-[5rem] font-extrabold text-navy leading-[1.15] tracking-tight mb-10 flex flex-col items-center drop-shadow-sm w-full">
            <motion.span variants={itemVariants} className="block pb-2">
              The Clinically Structured
            </motion.span>
            <motion.span variants={itemVariants} className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-dark to-teal pb-2 scale-105">
              Infrastructure
            </motion.span>
            <motion.span variants={itemVariants} className="block">
              for Modern Healthcare
            </motion.span>
          </h1>
          
          {/* REFINED SUBTEXT - Replaced ARIXA with Xflow */}
          <motion.p 
            variants={itemVariants} 
            className="text-xl sm:text-2xl text-slate-light leading-relaxed mb-14 max-w-4xl mx-auto font-medium"
          >
            Powering UK pharmacy-led clinical services with science, safety, and scale. Xflow structures the entire patient journey from screening and integrated diagnostics to supported prescribing — <span className="text-navy font-bold">so clinicians can focus on clinical decisions, not administration.</span>
          </motion.p>

          {/* HIGH-CONVERSION CTAS - Updated button text to navy and shadow RGB to Xflow Cyan */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto relative z-20">
            <a href="#contact" className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-teal text-navy text-lg font-bold rounded-xl overflow-hidden transition-all hover:scale-[1.02] active:scale-95 shadow-[0_10px_30px_rgba(0,234,255,0.25)] hover:shadow-[0_15px_40px_rgba(0,234,255,0.4)]">
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/40 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              Book a Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#how-it-works" className="inline-flex items-center justify-center px-10 py-5 bg-white border border-gray-200 text-navy text-lg font-bold rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm">
              See How It Works
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}