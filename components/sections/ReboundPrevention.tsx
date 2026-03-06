"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { BrainCircuit, ShieldCheck, Activity } from "lucide-react";

const phases = [
  {
    title: "Phase 1: Pre-Taper Education",
    months: "Months 9–10",
    description: "Nutritional planning, behavioural tools, and expectation setting before the patient begins stepping down.",
  },
  {
    title: "Phase 2: Structured Taper",
    months: "Months 11–12",
    description: "Gradual dose reduction with structured check-ins via the Xflow patient pathway. Symptom monitoring and clinical support.",
  },
  {
    title: "Phase 3: Maintenance Support",
    months: "Month 13+",
    description: "Follow-up at 3, 6, and 12 months. Re-engagement pathways if needed. Ensuring long-term treatment sustainability beyond initial prescribing.",
  }
];

export default function ReboundPrevention() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="rebound-prevention" className="py-24 px-6 lg:px-8 bg-white relative overflow-hidden">
      
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-teal-subtle/50 to-transparent rounded-bl-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row gap-16 items-center">
        
        {/* LEFT COLUMN: The Hook */}
        <div className="w-full lg:w-5/12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-100 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
            <span className="text-teal-dark text-[10px] font-bold tracking-widest uppercase">The Clinical Gap</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl font-extrabold text-navy tracking-tight mb-6 leading-tight"
          >
            Beyond the Prescription. <br />
            {/* Updated gradient to from-teal-dark to-teal for white background legibility */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-dark to-teal">Structured Support.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-light text-lg leading-relaxed mb-8"
          >
            Most providers lack structured off-boarding when treatment ends. Xflow integrates evidence-based rebound prevention protocols into the patient journey, supporting long-term sustainability.
          </motion.p>

          {/* Compliant Capability Highlights */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-teal-subtle flex items-center justify-center flex-shrink-0">
                {/* Updated to text-teal-dark */}
                <BrainCircuit className="w-5 h-5 text-teal-dark" />
              </div>
              <div>
                <div className="text-sm font-heading font-extrabold text-navy">Psychology-Led</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Behavioural Tools</div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0">
                <Activity className="w-5 h-5 text-indigo-500" />
              </div>
              <div>
                <div className="text-sm font-heading font-extrabold text-navy">Sustainable</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Long-Term Pathways</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: The 3-Phase Timeline */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="w-full lg:w-7/12 bg-gray-50 rounded-3xl p-8 lg:p-12 border border-gray-200 relative"
        >
          {/* Vertical Track Line */}
          <div className="absolute left-[51px] lg:left-[67px] top-12 bottom-12 w-px bg-gray-200" />

          <div className="space-y-10 relative z-10">
            {phases.map((phase, idx) => (
              <motion.div key={idx} variants={itemVariants} className="flex gap-6 group">
                {/* Node */}
                <div className="flex-shrink-0 relative">
                  {/* Updated hover shadow RGB to Xflow Electric Cyan */}
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center group-hover:border-teal group-hover:shadow-[0_0_15px_rgba(0,234,255,0.3)] transition-all duration-300">
                     {/* Updated text-teal to text-teal-dark */}
                     <span className="font-heading font-bold text-navy group-hover:text-teal-dark transition-colors">0{idx + 1}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="pt-2">
                  <div className="flex items-center gap-3 mb-1.5">
                    <h3 className="font-heading font-bold text-xl text-navy">{phase.title}</h3>
                    <span className="px-2.5 py-1 rounded-md bg-white border border-gray-200 text-[10px] font-bold text-slate-500 uppercase tracking-wider shadow-sm">
                      {phase.months}
                    </span>
                  </div>
                  <p className="text-slate-light text-sm leading-relaxed max-w-md">
                    {phase.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Bottom badge */}
          <motion.div variants={itemVariants} className="mt-10 pt-6 border-t border-gray-200 flex items-center gap-3">
             {/* Updated to text-teal-dark */}
             <ShieldCheck className="w-5 h-5 text-teal-dark" />
             <span className="text-sm font-semibold text-slate">Designed by Dr. Neesha Patel, Clinical Psychologist (HCPC)</span>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}