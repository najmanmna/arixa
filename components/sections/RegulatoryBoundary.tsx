"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import type { Variants } from "framer-motion";
import { ServerCog, UserCheck, Scale } from "lucide-react";
import React from "react";

const boundaries = [
  {
    icon: ServerCog,
    title: "Workflow & documentation infrastructure",
    description: "Xflow is not a medical device. It is a workflow and documentation infrastructure designed to support clinicians and regulated care environments.",
  },
  {
    icon: UserCheck,
    title: "Professional judgement stays with practitioners",
    description: "Xflow is not a diagnostic AI. Clinical decisions, prescribing, and patient care are always executed by qualified professionals.",
  },
  {
    icon: Scale,
    title: "Statutory responsibility stays with you",
    description: "Regulatory accountability remains with the accountable officer. We provide the audit-ready documentation to support your compliance obligations.",
  }
];

export default function RegulatoryBoundary() {
  // --- MOUSE TRACKING SPOTLIGHT (Light Theme) ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Soft spotlight that glides over the white cards - Updated to Xflow Electric Cyan (0, 234, 255)
  const cardSpotlight = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(0, 234, 255, 0.04), transparent 80%)`;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="py-24 px-6 lg:px-8 bg-slate-50 relative overflow-hidden group/section border-t border-gray-200/50"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Updated to text-teal-dark for contrast against the light gray background */}
          <p className="text-teal-dark text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Operational Boundaries
          </p>
          <h3 className="font-heading text-4xl sm:text-5xl font-extrabold text-navy tracking-tight">
            What Xflow Is <br className="sm:hidden" />
            <span className="text-slate-300 mx-3">—</span> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-500 font-light italic">and Isn't</span>
          </h3>
        </motion.div>

        {/* BOUNDARIES GRID */}
        {/* group/grid handles the focus dimming on hover */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 group/grid"
        >
          {boundaries.map((item, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              /* Updated hover shadow RGB to Xflow Electric Cyan */
              className="relative bg-white rounded-[2rem] p-8 lg:p-10 border border-gray-200/60 shadow-sm overflow-hidden group/card hover:shadow-[0_20px_40px_-15px_rgba(0,234,255,0.15)] hover:-translate-y-1 hover:border-teal/30 hover:!opacity-100 group-hover/grid:opacity-50 transition-all duration-500"
            >
              {/* Interactive Soft Shimmer */}
              <motion.div 
                className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"
                style={{ background: cardSpotlight }}
              />

              {/* Kinetic Left Accent Line - Updated gradient for white background legibility */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1/3 bg-gray-100 rounded-r-full group-hover/card:h-2/3 group-hover/card:bg-gradient-to-b group-hover/card:from-teal group-hover/card:to-teal-dark transition-all duration-500 ease-out" />
              
              <div className="relative z-10">
                {/* Updated hover icon to text-teal-dark */}
                <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-gray-100 flex items-center justify-center mb-8 text-navy group-hover/card:text-teal-dark group-hover/card:bg-teal/5 group-hover/card:border-teal/20 group-hover/card:scale-110 transition-all duration-500 shadow-sm">
                   <item.icon className="w-6 h-6" />
                </div>
                
                <h4 className="font-heading font-bold text-navy text-xl mb-4 leading-snug">
                  {item.title}
                </h4>
                <p className="text-slate-light text-sm md:text-base leading-relaxed">
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