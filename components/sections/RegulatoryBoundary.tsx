"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import type { Variants } from "framer-motion";
import { ServerCog, UserCheck, Scale, ArrowRight } from "lucide-react";
import React from "react";

const boundaries = [
  {
    icon: ServerCog,
    title: "Governance infrastructure and evidence generation",
    description: "We handle the operational oversight, tracking, and compliance documentation. The system is your unshakeable safety net.",
  },
  {
    icon: UserCheck,
    title: "Professional judgement stays with practitioners",
    description: "ARIXA is not a diagnostic AI. Clinical decisions, prescribing, and patient care are always executed by qualified professionals.",
  },
  {
    icon: Scale,
    title: "Statutory responsibility stays with you",
    description: "Regulatory accountability remains with the accountable officer. We provide the airtight evidence to prove you are compliant.",
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

  // Soft spotlight that glides over the white cards
  const cardSpotlight = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(0, 165, 168, 0.04), transparent 80%)`;

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
          <p className="text-teal text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Operational Boundaries
          </p>
          <h3 className="font-heading text-4xl sm:text-5xl font-extrabold text-navy tracking-tight">
            What ARIXA Is <br className="sm:hidden" />
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
              className="relative bg-white rounded-[2rem] p-8 lg:p-10 border border-gray-200/60 shadow-sm overflow-hidden group/card hover:shadow-[0_20px_40px_-15px_rgba(0,165,168,0.15)] hover:-translate-y-1 hover:border-teal/30 hover:!opacity-100 group-hover/grid:opacity-50 transition-all duration-500"
            >
              {/* Interactive Soft Shimmer */}
              <motion.div 
                className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"
                style={{ background: cardSpotlight }}
              />

              {/* Kinetic Left Accent Line */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1/3 bg-gray-100 rounded-r-full group-hover/card:h-2/3 group-hover/card:bg-gradient-to-b group-hover/card:from-teal-light group-hover/card:to-teal transition-all duration-500 ease-out" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-gray-100 flex items-center justify-center mb-8 text-navy group-hover/card:text-teal group-hover/card:bg-teal/5 group-hover/card:border-teal/20 group-hover/card:scale-110 transition-all duration-500 shadow-sm">
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

        {/* PREMIUM CTA LINK */}
        {/* <motion.div 
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <a href="#" className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-gray-200 text-navy font-semibold text-sm hover:border-teal/40 hover:bg-teal/5 hover:text-teal transition-all group shadow-sm hover:shadow-md">
            Read our full governance framework
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-teal group-hover:translate-x-1 transition-all" />
          </a>
        </motion.div> */}
        
      </div>
    </section>
  );
}