"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import type { Variants } from "framer-motion";

const capabilities = [
  { 
    title: "Structured Patient Journeys", 
    description: "Before, during, and after treatment." 
  },
  { 
    title: "Streamlined Clinical Workflows", 
    description: "Structured summaries designed to reduce administrative burden." 
  },
  { 
    title: "Audit-Ready Documentation", 
    description: "Timestamped records designed for regulatory alignment." 
  },
  { 
    title: "Integrated Blood Diagnostics", 
    description: "Longitudinal biomarker tracking via London Medical Laboratory." 
  },
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
  // Updated RGB to Xflow Electric Cyan (0, 234, 255)
  const cardSpotlight = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(0, 234, 255, 0.15), transparent 80%)`;
  const borderSpotlight = useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, rgba(0, 234, 255, 0.6), transparent 80%)`;

  // --- ANIMATION VARIANTS ---
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1], // Apple-style custom ease
        staggerChildren: 0.15,   // Pops each metric in sequentially
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
        /* UPDATED BACKGROUND TO XFLOW DEEP NAVY (#01021C) */
        className="relative bg-[#01021C]/80 backdrop-blur-2xl rounded-2xl p-6 sm:p-10 shadow-[0_30px_60px_rgba(0,0,0,0.4)] overflow-hidden"
      >
        
        {/* 1. INTERACTIVE BORDER GLOW */}
        <motion.div 
          className="absolute inset-0 z-0 pointer-events-none rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ 
            background: borderSpotlight,
            padding: "1px",
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

        {/* CAPABILITIES GRID */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10 group/grid">
          {capabilities.map((cap, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className={`flex flex-col items-center text-center transition-all duration-300 px-4 py-4 md:py-0 hover:-translate-y-1 hover:!opacity-100 group-hover/grid:opacity-50 cursor-default`}
            >
              {/* Glowing Xflow Cyan Text */}
              <h3 className="font-heading text-lg sm:text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-light to-teal mb-3 drop-shadow-[0_0_15px_rgba(0,234,255,0.3)]">
                {cap.title}
              </h3>
              <p className="text-sm font-medium text-slate-300 leading-relaxed max-w-[220px]">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
}