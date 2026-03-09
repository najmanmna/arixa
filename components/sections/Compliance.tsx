"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { AlertTriangle, ShieldCheck, XCircle, CheckCircle2, Lock } from "lucide-react";

const without10QRX = [
  "Compliant on inspection day",
  "Drift starts the next week",
  "12 months of undocumented decisions",
  "Scramble before the next review"
];

const with10QRX = [
  "Every action timestamped and logged",
  "Protocols structured for regulatory alignment",
  "Audit-ready documentation running 24/7",
  "Designed to simplify inspection preparation"
];

export default function Compliance() {
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
    <section id="compliance" className="min-h-screen w-full flex flex-col justify-center py-12 lg:py-16 bg-gradient-to-b from-[#E0F9FB]/40 to-white relative overflow-hidden">
      
      {/* ── ATMOSPHERIC BACKGROUND ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(circle, #0B2545 1.5px, transparent 1.5px)",
            backgroundSize: "32px 32px",
            maskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)"
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-teal/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        
        {/* ── HEADER (Optimised Spacing) ── */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-teal/15 shadow-sm mb-6 backdrop-blur-md"
          >
            <Lock className="w-3.5 h-3.5 text-teal-dark" />
            <span className="text-navy text-[10px] font-bold tracking-widest uppercase">Audit-Ready Infrastructure</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-5xl lg:text-6xl font-extrabold text-navy tracking-tight mb-6 leading-[1.1]"
          >
            Compliant on Inspection Day <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-dark via-teal to-teal-dark">Is Not Enough.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-600 text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto"
          >
            The gap between inspections is where risk lives. 10QRX provides the infrastructure to help close that gap permanently.
          </motion.p>
        </div>

        {/* ── BEFORE & AFTER GRID (High Density) ── */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto group/grid"
        >
          {/* Card 1: Without 10QRX */}
          <motion.div 
            variants={itemVariants}
            className="bg-white/60 backdrop-blur-xl rounded-[2rem] p-6 lg:p-10 border border-white shadow-sm relative overflow-hidden group-hover/grid:opacity-60 transition-opacity duration-500"
          >
            <div className="absolute top-0 left-0 w-full h-1.5 bg-red-400/30" />
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center border border-red-100 shadow-sm">
                <AlertTriangle className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="font-heading text-xl lg:text-2xl font-bold text-navy">Without 10QRX</h3>
            </div>

            <div className="space-y-4">
              {without10QRX.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                  <span className="text-slate-600 text-sm lg:text-base font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 2: With 10QRX */}
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-br from-[#020438] to-[#1A1D4E] rounded-[2rem] p-6 lg:p-10 border border-[#1A1D4E] shadow-xl relative overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:!opacity-100"
          >
            <div className="absolute top-0 left-0 w-full h-1.5 bg-teal shadow-[0_0_10px_rgba(0,234,255,0.4)]" />
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-teal/15 rounded-full blur-[80px] pointer-events-none mix-blend-screen" />

            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 shadow-inner">
                <ShieldCheck className="w-5 h-5 text-teal" />
              </div>
              <h3 className="font-heading text-xl lg:text-2xl font-bold text-white">With 10QRX</h3>
            </div>

            <div className="space-y-4 relative z-10">
              {with10QRX.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-teal mt-1 flex-shrink-0" />
                  <span className="text-white font-medium text-sm lg:text-base">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ── BOTTOM ONE-LINER ── */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-block px-6 py-3 rounded-2xl bg-white border border-teal/10 shadow-sm text-navy font-heading font-bold text-lg lg:text-xl transition-all hover:shadow-md">
            Turn compliance into a <span className="text-teal-dark">competitive advantage.</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}