"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import type { Variants } from "framer-motion";
import { ServerCog, UserCheck, Scale } from "lucide-react";
import React from "react";

const boundaries = [
  {
    icon: ServerCog,
    title: "Workflow & documentation infrastructure",
    description: "10QRX is not a medical device. It is a workflow and documentation infrastructure designed to support clinicians and regulated care environments.",
  },
  {
    icon: UserCheck,
    title: "Professional judgement stays with practitioners",
    description: "10QRX is not a diagnostic AI. Clinical decisions, prescribing, and patient care are always executed by qualified professionals.",
  },
  {
    icon: Scale,
    title: "Statutory responsibility stays with you",
    description: "Regulatory accountability remains with the accountable officer. We provide the audit-ready documentation to support your compliance obligations.",
  }
];

export default function RegulatoryBoundary() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const cardSpotlight = useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, rgba(0, 234, 255, 0.04), transparent 80%)`;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    // Slide Optimization: min-h-screen + flex justify-center
    <section 
      onMouseMove={handleMouseMove}
      className="min-h-screen w-full flex flex-col justify-center py-12 lg:py-16 bg-gradient-to-b from-white to-[#E0F9FB]/30 relative overflow-hidden group/section border-t border-slate-100"
    >
      {/* ── ATMOSPHERIC BACKGROUND ── */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #0B2545 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        
        {/* HEADER (Optimised Spacing) */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-teal/15 shadow-sm backdrop-blur-md mb-6">
            <Scale className="w-3.5 h-3.5 text-teal-dark" />
            <span className="text-navy text-[10px] font-bold tracking-widest uppercase">Operational Boundaries</span>
          </div>
          
          <h3 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-navy tracking-tight leading-[1.1]">
            What 10QRX Is <br className="sm:hidden" />
            <span className="text-slate-300 mx-3 hidden sm:inline">—</span> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-500 font-light italic">and Isn't</span>
          </h3>
        </motion.div>

        {/* BOUNDARIES GRID (High Density) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 group/grid"
        >
          {boundaries.map((item, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="relative bg-white/60 backdrop-blur-xl rounded-[2rem] p-6 lg:p-8 border border-white shadow-sm overflow-hidden hover:bg-white/80 hover:border-teal/30 hover:shadow-[0_15px_35px_-10px_rgba(0,165,168,0.15)] hover:-translate-y-1 transition-all duration-500"
            >
              <motion.div 
                className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 mix-blend-multiply"
                style={{ background: cardSpotlight }}
              />

              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1/4 bg-slate-100 rounded-r-full group-hover/card:h-2/3 group-hover/card:bg-gradient-to-b group-hover/card:from-teal group-hover/card:to-teal-dark transition-all duration-500" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-navy border border-navy shadow-md flex items-center justify-center mb-6 group-hover/card:scale-110 transition-all duration-500">
                   <item.icon className="w-5 h-5 text-teal drop-shadow-[0_0_8px_rgba(0,234,255,0.6)]" />
                </div>
                
                <h4 className="font-heading font-bold text-navy text-lg lg:text-xl mb-3 leading-tight">
                  {item.title}
                </h4>
                <p className="text-slate-600 font-medium text-xs lg:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}