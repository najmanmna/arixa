"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { FileText, Activity, Network, Lightbulb, ArrowRight } from "lucide-react";
import Link from "next/link";

const dashboardFeatures = [
  {
    title: "Summary",
    description: "A clinician-reviewed narrative of the patient's results, highlighting significant findings, trends since the previous test, and an overall health score.",
    icon: FileText,
    color: "text-teal-dark", // Updated to dark for visibility
    bg: "bg-teal-subtle",
    borderColor: "border-teal/20",
  },
  {
    title: "Results",
    description: "Every biomarker displayed with visual range indicators showing where the patient sits relative to reference ranges, with comparison to previous tests.",
    icon: Activity,
    color: "text-indigo-500",
    bg: "bg-indigo-50",
    borderColor: "border-indigo-100",
  },
  {
    title: "Patterns",
    description: "Cross-panel analysis identifying clinical patterns across multiple markers. Each pattern includes a plain-language explanation and a suggested consideration for the clinical team.",
    icon: Network,
    color: "text-emerald-500",
    bg: "bg-emerald-50",
    borderColor: "border-emerald-100",
  },
  {
    title: "Insights",
    description: "Prioritised clinical insights ranked by urgency, with recommended timeframes and context for prescriber review.",
    icon: Lightbulb,
    color: "text-amber-500",
    bg: "bg-amber-50",
    borderColor: "border-amber-100",
  }
];

export default function ClinicalDashboard() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="diagnostics" className="py-24 px-6 lg:px-8 bg-white relative overflow-hidden">
      
      {/* Subtle Background Elements */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />
      <div className="absolute -right-40 -top-40 w-96 h-96 bg-teal/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 mb-6"
          >
            {/* Changed to bg-teal-dark for contrast */}
            <span className="w-2 h-2 rounded-full bg-teal-dark" />
            <span className="text-slate text-[10px] font-bold tracking-widest uppercase">London Medical Laboratory</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl font-extrabold text-navy tracking-tight mb-6"
          >
            Not Just a Blood Test. <br className="hidden sm:block" />
            {/* Updated gradient for white background legibility */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-dark to-teal">A Complete Clinical Picture.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-light text-lg leading-relaxed font-medium max-w-2xl"
          >
            Every blood panel processed through our London Medical Laboratory integration returns more than numbers. Xflow presents a comprehensive clinical dashboard — reviewed by a named clinician — that organises biomarker data into structured, actionable clinical insight.
          </motion.p>
        </div>

        {/* 4-COLUMN GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {dashboardFeatures.map((feature, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              className={`bg-white border ${feature.borderColor} rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col`}
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              
              <h3 className="font-heading text-xl font-bold text-navy mb-3">
                {feature.title}
              </h3>
              
              <p className="text-slate-light leading-relaxed text-sm flex-grow">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CLOSING STATEMENT */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center md:text-left flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center">
             {/* Updated icon to text-teal-dark */}
             <Activity className="w-5 h-5 text-teal-dark" />
          </div>
          <p className="text-lg font-bold text-navy">
             Structured clinical insight. <span className="text-teal-dark">Better-informed decisions.</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}