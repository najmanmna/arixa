"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { FileText, Activity, Network, Lightbulb, FlaskConical } from "lucide-react";

const dashboardFeatures = [
  {
    title: "Summary",
    description: "A clinician-reviewed narrative of the patient's results, highlighting significant findings, trends since the previous test, and an overall health score.",
    icon: FileText,
    color: "text-teal-dark",
    bg: "bg-teal/5",
  },
  {
    title: "Results",
    description: "Every biomarker displayed with visual range indicators showing where the patient sits relative to reference ranges, with comparison to previous tests.",
    icon: Activity,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    title: "Patterns",
    description: "Cross-panel analysis identifying clinical patterns across multiple markers, including plain-language explanations and suggested clinician considerations.",
    icon: Network,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    title: "Insights",
    description: "Prioritised clinical insights ranked by urgency, with recommended timeframes and context provided for professional prescriber review.",
    icon: Lightbulb,
    color: "text-amber-600",
    bg: "bg-amber-50",
  }
];

export default function ClinicalDashboard() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    // Slide Optimization: min-h-screen + flex justify-center
    <section id="diagnostics" className="min-h-screen w-full flex flex-col justify-center py-12 lg:py-16 bg-gradient-to-b from-[#E0F9FB] to-white relative overflow-hidden">
      
      {/* ── ATMOSPHERIC ELEMENTS ── */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-white/20 to-transparent pointer-events-none" />
      <div className="absolute -right-40 -top-40 w-96 h-96 bg-teal/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #0B2545 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        
        {/* HEADER (Optimized Spacing) */}
        <div className="max-w-3xl mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-teal/15 shadow-sm mb-6 backdrop-blur-md"
          >
            <FlaskConical className="w-3.5 h-3.5 text-teal-dark" />
            <span className="text-navy text-[10px] font-bold tracking-widest uppercase">London Medical Laboratory Integration</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-5xl lg:text-6xl font-extrabold text-navy tracking-tight mb-6 leading-[1.1]"
          >
            Not Just a Blood Test. <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-dark via-teal to-teal">A Complete Clinical Picture.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-600 text-base md:text-lg font-medium leading-relaxed max-w-2xl"
          >
            Every blood panel processed through our London Medical Laboratory integration returns more than numbers. 10QRX presents a comprehensive clinical dashboard — reviewed by a named clinician — that organises biomarker data into structured, actionable clinical insight.
          </motion.p>
        </div>

        {/* 4-COLUMN GRID (High Density) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 group/grid"
        >
          {dashboardFeatures.map((feature, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              className="group/card bg-white/60 backdrop-blur-xl border border-white rounded-[2rem] p-6 lg:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] 
                         hover:bg-white/80 hover:border-teal/30 hover:shadow-[0_15px_35px_-10px_rgba(0,165,168,0.15)] hover:-translate-y-1 
                         transition-all duration-500 flex flex-col"
            >
              <div className={`w-12 h-12 rounded-xl ${feature.bg} border border-white flex items-center justify-center mb-6 group-hover/card:scale-110 transition-transform duration-500 shadow-sm`}>
                <feature.icon className={`w-5 h-5 ${feature.color}`} />
              </div>
              
              <h3 className="font-heading text-xl font-bold text-navy mb-3 leading-tight">
                {feature.title}
              </h3>
              
              <p className="text-slate-600 font-medium leading-relaxed text-xs lg:text-sm flex-grow">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CLOSING STATEMENT (Compact) */}
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mt-12 inline-flex items-center gap-3 bg-white/50 backdrop-blur-md px-5 py-3 rounded-2xl border border-white shadow-sm"
        >
          <div className="w-8 h-8 rounded-full bg-teal/10 flex items-center justify-center">
             <Activity className="w-4 h-4 text-teal-dark animate-pulse" />
          </div>
          <p className="text-sm lg:text-base font-bold text-navy">
             Structured clinical insight. <span className="text-teal-dark">Better-informed decisions.</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}