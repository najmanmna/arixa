"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { AlertTriangle, ShieldCheck, XCircle, CheckCircle2 } from "lucide-react";

const withoutXflow = [
  "Compliant on inspection day",
  "Drift starts the next week",
  "12 months of undocumented decisions",
  "Scramble before the next review"
];

const withXflow = [
  "Every action timestamped and logged",
  "Protocols structured for regulatory alignment",
  "Audit-ready documentation running 24/7",
  "Designed to simplify inspection preparation"
];

export default function Compliance() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="compliance" className="py-24 px-6 lg:px-8 bg-[#FAFAFA] relative overflow-hidden">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(241,245,249,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(241,245,249,0.5)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-navy/5 border border-navy/10 mb-6"
          >
            <ShieldCheck className="w-3 h-3 text-navy" />
            <span className="text-navy text-[10px] font-bold tracking-widest uppercase">Audit-Ready Infrastructure</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl font-extrabold text-navy tracking-tight mb-6 leading-tight"
          >
            Compliant on Inspection Day <br className="hidden sm:block" />
            {/* Updated gradient for contrast on light background */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-dark to-teal">Is Not Enough.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-light text-lg leading-relaxed font-medium"
          >
            Most pharmacies scramble before an inspection and relax after it. The gap in between is where risk lives. Xflow provides the infrastructure to help close that gap permanently.
          </motion.p>
        </div>

        {/* BEFORE & AFTER GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {/* Card 1: Without Xflow */}
          <motion.div 
            variants={itemVariants}
            className="bg-white rounded-3xl p-8 lg:p-10 border border-gray-200 shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-red-400" />
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center border border-red-100">
                <AlertTriangle className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-navy">Without Xflow</h3>
            </div>

            <div className="space-y-5">
              {withoutXflow.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 opacity-80">
                  <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 2: With Xflow */}
          <motion.div 
            variants={itemVariants}
            /* Updated to Xflow Deep Navy Dark and secondary border */
            className="bg-[#01021C] rounded-3xl p-8 lg:p-10 border border-[#1A1D4E] shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-teal" />
            
            {/* Ambient Inner Glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-teal/20 rounded-full blur-[60px] pointer-events-none" />

            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center border border-teal/20">
                {/* Changed to text-teal for the neon pop */}
                <ShieldCheck className="w-6 h-6 text-teal" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-white">With Xflow</h3>
            </div>

            <div className="space-y-5 relative z-10">
              {withXflow.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  {/* Changed to text-teal for the neon pop */}
                  <CheckCircle2 className="w-5 h-5 text-teal mt-0.5 flex-shrink-0" />
                  <span className="text-white/90 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* BOTTOM ONE-LINER */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="inline-block px-6 py-3 rounded-2xl bg-white border border-gray-200 shadow-sm text-navy font-heading font-bold text-lg">
            Turn compliance from a cost into a <span className="text-teal-dark">competitive advantage.</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}