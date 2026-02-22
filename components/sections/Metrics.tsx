"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";

const metrics = [
  { value: "95%", label: "Patient Retention" }, //
  { value: "10x", label: "Clinician Capacity" }, //
  { value: "~2 min", label: "Clinical Review" }, //
  { value: "100%", label: "Audit-Ready" }, //
  { value: "26+", label: "Biomarkers Tracked" }, //
];

export default function Metrics() {
  // --- MOUSE TRACKING SPOTLIGHT LOGIC ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Spotlight follows the cursor but stays contained inside the card
  const cardSpotlight = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(0, 201, 183, 0.15), transparent 80%)`;
  const borderSpotlight = useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, rgba(0, 201, 183, 0.6), transparent 80%)`;

  // --- ANIMATION VARIANTS ---
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1], // Apple-style custom ease
        staggerChildren: 0.1,    // Pops each metric in sequentially
        delayChildren: 0.2
      } 
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95, filter: "blur(4px)" },
    visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="relative z-20 -mt-16 sm:-mt-24 px-6 lg:px-8 max-w-7xl mx-auto group">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        onMouseMove={handleMouseMove}
        className="relative bg-[#020617]/80 backdrop-blur-2xl rounded-2xl p-6 sm:p-8 shadow-[0_30px_60px_rgba(0,0,0,0.4)] overflow-hidden"
      >
        
        {/* 1. INTERACTIVE BORDER GLOW */}
        {/* This creates a 1px border that lights up exactly where the mouse is */}
        <motion.div 
          className="absolute inset-0 z-0 pointer-events-none rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ 
            background: borderSpotlight,
            padding: "1px", // The thickness of the border
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude" 
          }}
        />

        {/* 2. INTERACTIVE BACKGROUND GLOW */}
        <motion.div 
          className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
          style={{ background: cardSpotlight }}
        />

        {/* 3. SVG NOISE TEXTURE */}
        <div 
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none z-0" 
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
        />

        {/* METRICS GRID */}
        {/* Use 'group/grid' to detect hover on the whole container to dim un-hovered items */}
        <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 divide-x divide-white/5 group/grid">
          {metrics.map((metric, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className={`text-center transition-all duration-300 ${idx % 2 !== 0 ? 'border-l border-white/5 lg:border-none' : 'border-none'} lg:border-l first:border-none px-4 hover:scale-110 hover:-translate-y-1 hover:!opacity-100 group-hover/grid:opacity-50 cursor-default`}
            >
              <div className="font-heading text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-light to-teal mb-1 drop-shadow-[0_0_15px_rgba(0,201,183,0.3)]">
                {metric.value}
              </div>
              <div className="text-sm font-medium text-slate-300 uppercase tracking-wider text-[10px] sm:text-xs">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
}