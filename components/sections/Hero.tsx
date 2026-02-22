"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import type { Variants } from "framer-motion";
import { Play, ArrowRight, ShieldCheck } from "lucide-react";

export default function Hero() {
  // --- MOUSE TRACKING SPOTLIGHT LOGIC ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Spotlight gradient template
  const backgroundSpotlight = useMotionTemplate`radial-gradient(800px circle at ${mouseX}px ${mouseY}px, rgba(0, 165, 168, 0.15), transparent 80%)`;
  const cardSpotlight = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(255, 255, 255, 0.1), transparent 60%)`;

  // --- ANIMATION VARIANTS ---
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" }, // Blur adds a cinematic reveal effect
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  // Kinetic Typography split
  const headlineWords1 = "Scale Healthcare.".split(" ");
  const headlineWords2 = "Without the Bottleneck.".split(" ");

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-[#020617] flex flex-col items-center justify-start group"
    >
      
      {/* 1. INTERACTIVE SPOTLIGHT (Follows Mouse) */}
      <motion.div 
        className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-500 opacity-50 group-hover:opacity-100"
        style={{ background: backgroundSpotlight }}
      />

      {/* 2. SVG NOISE TEXTURE (Textural Depth) */}
      <div 
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none z-0" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      />

      {/* 3. STATIC BACKGROUND GLOWS */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal/20 rounded-[100%] blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full flex flex-col items-center text-center">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl flex flex-col items-center mt-10 lg:mt-16"
        >
          {/* PILL BADGE */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-light/10 border border-teal-light/20 backdrop-blur-md shadow-[0_0_20px_rgba(0,201,183,0.15)]">
              <ShieldCheck className="w-4 h-4 text-teal-light" />
              <span className="text-teal-light text-xs font-bold tracking-widest uppercase">
                MHRA & GPhC Aligned
              </span>
            </div>
          </motion.div>
          
          {/* KINETIC HEADLINE REVEAL */}
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-[5rem] font-extrabold text-white leading-[1.05] tracking-tighter mb-8 flex flex-col items-center">
            <div className="flex gap-3 overflow-hidden">
              {headlineWords1.map((word, i) => (
                <motion.span key={i} variants={itemVariants} className="inline-block">
                  {word}
                </motion.span>
              ))}
            </div>
            <div className="flex gap-3 flex-wrap justify-center overflow-hidden">
              {headlineWords2.map((word, i) => (
                <motion.span key={i} variants={itemVariants} className="inline-block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
                  {word}
                </motion.span>
              ))}
            </div>
          </h1>
          
          {/* REFINED SUBTEXT */}
          <motion.p 
            variants={itemVariants} 
            className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto font-light"
          >
            The governance infrastructure for UK pharmacies and private clinics. We handle the screening, diagnostics, and compliance logging — <span className="text-white font-medium">you just prescribe.</span>
          </motion.p>

          {/* HIGH-CONVERSION CTAS */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto relative z-20">
            <a href="#contact" className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-teal text-white font-semibold rounded-xl overflow-hidden transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_40px_rgba(0,165,168,0.2)] hover:shadow-[0_0_60px_rgba(0,165,168,0.4)]">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-light/0 via-white/20 to-teal-light/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              Request Platform Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#how-it-works" className="inline-flex items-center justify-center px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-md">
              Explore the Architecture
            </a>
          </motion.div>
        </motion.div>

        {/* 3D DASHBOARD ASSET */}
        <motion.div
          initial={{ opacity: 0, y: 120, rotateX: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, rotateX: 10, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 w-full max-w-5xl relative [perspective:2000px] z-10"
        >
          {/* The Dashboard Card with Interactive Border Glow */}
          <motion.div 
            className="relative w-full aspect-[16/9] bg-[#050A15]/80 rounded-2xl md:rounded-[2rem] border border-white/10 overflow-hidden backdrop-blur-2xl transform-gpu shadow-[0_40px_100px_rgba(0,165,168,0.1)]"
          >
            {/* Spotlight sweeping across the glass card border/background */}
            <motion.div 
               className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
               style={{ background: cardSpotlight }}
            />

            {/* Top Mac-style Toolbar */}
            <div className="absolute top-0 left-0 right-0 h-12 border-b border-white/5 flex items-center px-6 bg-white/[0.02] z-10">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-white/10 hover:bg-red-400 transition-colors cursor-pointer" />
                <div className="w-3 h-3 rounded-full bg-white/10 hover:bg-amber-400 transition-colors cursor-pointer" />
                <div className="w-3 h-3 rounded-full bg-white/10 hover:bg-emerald-400 transition-colors cursor-pointer" />
              </div>
              <div className="mx-auto flex items-center gap-2 px-4 py-1.5 rounded-md bg-white/5 border border-white/5 shadow-inner">
                <ShieldCheck className="w-3 h-3 text-teal-light" />
                <span className="text-[10px] text-white/60 font-mono tracking-widest">ARIXA_GOVERNANCE_ACTIVE</span>
              </div>
            </div>

            {/* Simulated UI Content */}
            <div className="absolute inset-0 top-12 p-8 flex flex-col md:flex-row gap-6 z-10">
              {/* Sidebar */}
              <div className="hidden md:flex flex-col gap-4 w-48 border-r border-white/5 pr-6">
                <div className="h-4 w-24 bg-white/10 rounded-sm mb-4" />
                <div className="h-8 w-full bg-teal/10 border border-teal/20 rounded-md" />
                <div className="h-8 w-full bg-white/5 hover:bg-white/10 transition-colors rounded-md" />
                <div className="h-8 w-full bg-white/5 hover:bg-white/10 transition-colors rounded-md" />
              </div>
              
              {/* Main Content Area */}
              <div className="flex-1 flex flex-col gap-6">
                <div className="flex items-end justify-between">
                   <div>
                     <div className="h-8 w-64 bg-white/10 rounded-md mb-3" />
                     <div className="h-4 w-40 bg-white/5 rounded-md" />
                   </div>
                   <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal to-teal-light flex items-center justify-center shadow-[0_0_20px_rgba(0,165,168,0.3)]">
                     <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                   </div>
                </div>

                {/* Simulated Data Grid */}
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div className="h-28 bg-white/[0.03] border border-white/5 rounded-xl hover:bg-white/[0.05] transition-colors" />
                  <div className="h-28 bg-white/[0.03] border border-white/5 rounded-xl hover:bg-white/[0.05] transition-colors" />
                  <div className="h-28 bg-teal/5 border border-teal/20 rounded-xl relative overflow-hidden">
                     <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-teal/20 to-transparent" />
                  </div>
                </div>

                <div className="flex-1 bg-white/[0.03] border border-white/5 rounded-xl mt-2 relative overflow-hidden">
                   <div className="absolute left-8 top-8 bottom-8 w-px bg-white/10" />
                   <div className="absolute left-8 top-12 w-3 h-3 rounded-full bg-teal-light -translate-x-[5px] shadow-[0_0_10px_rgba(0,201,183,0.8)]" />
                </div>
              </div>
            </div>

            {/* Interactive Play Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-[#020617]/40 opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer backdrop-blur-[2px] z-20">
               <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white text-navy font-bold text-sm shadow-2xl transform hover:scale-105 transition-transform">
                 <Play className="w-4 h-4 fill-navy" />
                 Watch Platform Overview
               </div>
            </div>
          </motion.div>

          {/* Base shadow for 3D grounding */}
          <div className="absolute -bottom-12 left-10 right-10 h-24 bg-teal/20 blur-[80px] -z-10" />
        </motion.div>
      </div>
    </section>
  );
}