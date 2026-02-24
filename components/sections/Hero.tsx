"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight, ShieldCheck, Activity, Users, CheckCircle2 } from "lucide-react";

export default function Hero() {
  // --- MOUSE TRACKING SPOTLIGHT LOGIC ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Spotlight gradients adapted for light mode
  const backgroundSpotlight = useMotionTemplate`radial-gradient(800px circle at ${mouseX}px ${mouseY}px, rgba(0, 165, 168, 0.05), transparent 80%)`;
  const cardSpotlight = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(0, 165, 168, 0.08), transparent 60%)`;

  // --- ANIMATION VARIANTS ---
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  // Kinetic Typography split
  const headlineWords1 = "GLP-1 Prescribing".split(" ");
  const headlineWords2 = "Without the Chaos.".split(" ");

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-[#FAFAFA] flex flex-col items-center justify-start group"
    >
      
      {/* 1. INTERACTIVE SPOTLIGHT (Follows Mouse) */}
      <motion.div 
        className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-500 opacity-50 group-hover:opacity-100"
        style={{ background: backgroundSpotlight }}
      />

      {/* 2. STATIC BACKGROUND GLOWS & GRID (Light Mode) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0 opacity-50" />
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-teal/10 rounded-[100%] blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full flex flex-col items-center text-center">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl flex flex-col items-center mt-10 lg:mt-16"
        >
          {/* PILL BADGE */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal/10 border border-teal/20 shadow-sm backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-teal" />
              <span className="text-teal text-xs font-bold tracking-widest uppercase">
                GLP-1 Weight Management Infrastructure
              </span>
            </div>
          </motion.div>
          
          {/* KINETIC HEADLINE REVEAL */}
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-[5rem] font-extrabold text-navy leading-[1.05] tracking-tighter mb-6 flex flex-col items-center drop-shadow-sm">
            <div className="flex gap-3 overflow-hidden">
              {headlineWords1.map((word, i) => (
                <motion.span key={i} variants={itemVariants} className="inline-block">
                  {word}
                </motion.span>
              ))}
            </div>
            <div className="flex gap-3 flex-wrap justify-center overflow-hidden">
              {headlineWords2.map((word, i) => (
                <motion.span key={i} variants={itemVariants} className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-teal to-teal-light">
                  {word}
                </motion.span>
              ))}
            </div>
          </h1>
          
          {/* REFINED SUBTEXT */}
          <motion.p 
            variants={itemVariants} 
            className="text-lg sm:text-xl text-slate-light leading-relaxed mb-10 max-w-2xl mx-auto font-medium"
          >
            ARIXA handles the entire patient journey — screening, bloods, compliance, and rebound prevention — so your clinicians just approve or decline. <span className="text-navy font-bold">In 2 minutes.</span>
          </motion.p>

          {/* HIGH-CONVERSION CTAS */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto relative z-20">
            <a href="#contact" className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-teal text-white font-bold rounded-xl overflow-hidden transition-all hover:scale-[1.02] active:scale-95 shadow-[0_10px_30px_rgba(0,165,168,0.25)] hover:shadow-[0_15px_40px_rgba(0,165,168,0.4)]">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-light/0 via-white/20 to-teal-light/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              Book a Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#how-it-works" className="inline-flex items-center justify-center px-8 py-4 bg-white border border-gray-200 text-navy font-bold rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm">
              See How It Works
            </a>
          </motion.div>
        </motion.div>

        {/* 3D DASHBOARD ASSET (Light Mode Redesign) */}
        <motion.div
          initial={{ opacity: 0, y: 120, rotateX: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, rotateX: 10, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 w-full max-w-5xl relative [perspective:2000px] z-10"
        >
          {/* The Dashboard Card */}
          <motion.div 
            className="relative w-full aspect-[16/9] bg-white rounded-2xl md:rounded-[2rem] border border-gray-200 overflow-hidden transform-gpu shadow-[0_30px_80px_rgba(11,29,58,0.08)]"
          >
            {/* Hover Spotlight */}
            <motion.div 
               className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
               style={{ background: cardSpotlight }}
            />

            {/* Top Mac-style Toolbar */}
            <div className="absolute top-0 left-0 right-0 h-12 border-b border-gray-100 flex items-center px-6 bg-gray-50/80 backdrop-blur-sm z-10">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-gray-300 hover:bg-red-400 transition-colors" />
                <div className="w-3 h-3 rounded-full bg-gray-300 hover:bg-amber-400 transition-colors" />
                <div className="w-3 h-3 rounded-full bg-gray-300 hover:bg-emerald-400 transition-colors" />
              </div>
              <div className="mx-auto flex items-center gap-2 px-4 py-1.5 rounded-md bg-white border border-gray-200 shadow-sm">
                <ShieldCheck className="w-3 h-3 text-teal" />
                <span className="text-[10px] text-slate font-mono font-semibold tracking-widest">CLINICAL_SUMMARY_ACTIVE</span>
              </div>
            </div>

            {/* Simulated UI Content - Light Mode */}
            <div className="absolute inset-0 top-12 p-8 flex flex-col md:flex-row gap-6 z-10 bg-slate-50/30">
              
              {/* Sidebar */}
              <div className="hidden md:flex flex-col gap-4 w-48 border-r border-gray-100 pr-6">
                <div className="h-4 w-24 bg-gray-200 rounded-sm mb-4" />
                <div className="h-9 w-full bg-teal/10 border border-teal/20 text-teal flex items-center px-3 rounded-lg text-xs font-bold gap-2">
                   <Activity className="w-4 h-4" /> Patients
                </div>
                <div className="h-9 w-full bg-white border border-transparent hover:border-gray-200 text-slate-light flex items-center px-3 rounded-lg text-xs font-semibold gap-2 transition-all">
                   <Users className="w-4 h-4" /> Directory
                </div>
                <div className="h-9 w-full bg-white border border-transparent hover:border-gray-200 text-slate-light flex items-center px-3 rounded-lg text-xs font-semibold gap-2 transition-all">
                   <CheckCircle2 className="w-4 h-4" /> Approvals
                </div>
              </div>
              
              {/* Main Content Area */}
              <div className="flex-1 flex flex-col gap-6">
                <div className="flex items-end justify-between">
                   <div>
                     <div className="h-8 w-64 bg-gray-200 rounded-md mb-3" />
                     <div className="h-4 w-40 bg-gray-100 rounded-md" />
                   </div>
                   <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-600 rounded-lg border border-emerald-100 text-xs font-bold">
                     <CheckCircle2 className="w-4 h-4" />
                     Ready for Review
                   </div>
                </div>

                {/* Simulated Data Grid */}
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div className="h-28 bg-white border border-gray-100 shadow-sm rounded-xl p-4 flex flex-col justify-end">
                    <div className="h-3 w-16 bg-gray-100 rounded-sm mb-2" />
                    <div className="h-6 w-24 bg-gray-200 rounded-md" />
                  </div>
                  <div className="h-28 bg-white border border-gray-100 shadow-sm rounded-xl p-4 flex flex-col justify-end">
                    <div className="h-3 w-16 bg-gray-100 rounded-sm mb-2" />
                    <div className="h-6 w-24 bg-gray-200 rounded-md" />
                  </div>
                  <div className="h-28 bg-teal-subtle border border-teal/20 rounded-xl relative overflow-hidden flex flex-col justify-end p-4">
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-teal/10 to-transparent" />
                    <div className="h-3 w-20 bg-teal/20 rounded-sm mb-2 relative z-10" />
                    <div className="h-6 w-16 bg-teal/30 rounded-md relative z-10" />
                  </div>
                </div>

                {/* Timeline / Action area */}
                <div className="flex-1 bg-white border border-gray-100 shadow-sm rounded-xl mt-2 relative overflow-hidden">
                   <div className="absolute left-8 top-8 bottom-8 w-px bg-gray-100" />
                   <div className="absolute left-8 top-12 w-3 h-3 rounded-full bg-teal -translate-x-[5px] ring-4 ring-teal/20" />
                   <div className="absolute left-16 top-11 h-4 w-32 bg-gray-200 rounded-md" />
                   <div className="absolute left-16 top-18 h-3 w-48 bg-gray-100 rounded-sm" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Base shadow for 3D grounding */}
          <div className="absolute -bottom-12 left-10 right-10 h-24 bg-teal/10 blur-[60px] -z-10" />
        </motion.div>
      </div>
    </section>
  );
}