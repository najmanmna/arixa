"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { BrainCircuit, ShieldCheck, Activity, GraduationCap } from "lucide-react";

const phases = [
  {
    title: "Phase 1: Pre-Taper Education",
    months: "Months 9–10",
    description: "Nutritional planning, behavioural tools, and expectation setting before the patient begins stepping down.",
  },
  {
    title: "Phase 2: Structured Taper",
    months: "Months 11–12",
    description: "Gradual dose reduction with structured check-ins via the 10QRX patient pathway. Symptom monitoring and clinical support.",
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="rebound-prevention" className="py-24 lg:py-32 px-6 lg:px-8 bg-gradient-to-b from-white to-[#E0F9FB]/40 relative overflow-hidden">
      
      {/* ── ATMOSPHERIC BACKGROUND ── */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal/5 rounded-full blur-[120px] translate-x-1/4 -translate-y-1/4 pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #0B2545 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row gap-16 items-center">
        
        {/* LEFT COLUMN: The Hook */}
        <div className="w-full lg:w-5/12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-teal/15 shadow-sm backdrop-blur-md mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-teal shadow-[0_0_5px_rgba(0,234,255,0.8)] animate-pulse" />
            <span className="text-navy text-[10px] font-extrabold tracking-widest uppercase">The Clinical Gap</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy tracking-tight mb-8 leading-[1.1]"
          >
            Beyond the Prescription. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-dark via-teal to-teal-dark">Structured Support.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed mb-10"
          >
            Most providers lack structured off-boarding when treatment ends. 10QRX integrates evidence-based rebound prevention protocols into the patient journey, supporting long-term sustainability.
          </motion.p>

          {/* Compliant Capability Highlights */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-5 border border-white shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center flex-shrink-0 shadow-md">
                <BrainCircuit className="w-6 h-6 text-teal drop-shadow-[0_0_5px_rgba(0,234,255,0.4)]" />
              </div>
              <div>
                <div className="text-sm font-heading font-extrabold text-navy">Psychology-Led</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Behavioural Tools</div>
              </div>
            </div>
            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-5 border border-white shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center flex-shrink-0 shadow-md">
                <Activity className="w-6 h-6 text-teal drop-shadow-[0_0_5px_rgba(0,234,255,0.4)]" />
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
          className="w-full lg:w-7/12 bg-white/60 backdrop-blur-xl rounded-[2.5rem] p-8 lg:p-12 border border-white shadow-[0_20px_50px_rgba(0,0,0,0.04)] relative"
        >
          {/* Vertical Track Line */}
          <div className="absolute left-[51px] lg:left-[67px] top-16 bottom-16 w-px bg-slate-200" />

          <div className="space-y-12 relative z-10">
            {phases.map((phase, idx) => (
              <motion.div key={idx} variants={itemVariants} className="flex gap-8 group">
                {/* Node */}
                <div className="flex-shrink-0 relative">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-navy border border-navy flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(0,234,255,0.4)]">
                     <span className="font-heading font-bold text-teal transition-colors text-lg">0{idx + 1}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="pt-2">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                    <h3 className="font-heading font-bold text-xl lg:text-2xl text-navy">{phase.title}</h3>
                    <span className="inline-flex px-3 py-1 rounded-full bg-white border border-teal/15 text-[10px] font-bold text-teal-dark uppercase tracking-widest shadow-sm self-start sm:self-center">
                      {phase.months}
                    </span>
                  </div>
                  <p className="text-slate-600 font-medium text-sm lg:text-base leading-relaxed max-w-md">
                    {phase.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Bottom badge */}
          <motion.div variants={itemVariants} className="mt-12 pt-8 border-t border-slate-200/50 flex items-center gap-4">
             <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center">
               <GraduationCap className="w-5 h-5 text-teal-dark" />
             </div>
             <span className="text-sm font-bold text-navy">Designed by Dr. Neesha Patel, Clinical Psychologist (HCPC)</span>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}