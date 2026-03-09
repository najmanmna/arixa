"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Calculator, ArrowRight, Activity, CheckCircle2 } from "lucide-react";

export default function Economics() {
  const [patients, setPatients] = useState(30);

  const revenuePerPatient = 235; 
  const grossMarginPerPatient = 120; 
  
  const monthlyRevenue = patients * revenuePerPatient;
  const monthlyGrossMargin = patients * grossMarginPerPatient;
  const annualGrossMargin = monthlyGrossMargin * 12;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    // Optimized for "Slide" view: min-h-screen + flex justify-center
    <section id="economics" className="min-h-screen w-full flex flex-col justify-center py-12 lg:py-16 bg-white relative overflow-hidden">
      
      {/* ── ATMOSPHERIC BACKGROUND ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #0B2545 1.5px, transparent 1.5px)",
            backgroundSize: "32px 32px",
            maskImage: "radial-gradient(ellipse 70% 50% at 50% 50%, #000 70%, transparent 100%)"
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-teal/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        
        {/* ── HEADER (Tightened) ── */}
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm mb-4"
          >
            <TrendingUp className="w-3.5 h-3.5 text-teal-dark" />
            <span className="text-navy text-[10px] font-bold tracking-widest uppercase">Financial Projections</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-5xl font-extrabold text-navy tracking-tight mb-4"
          >
            Project Your Service <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-dark via-teal to-teal-dark">Potential</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-600 text-sm md:text-base font-medium max-w-2xl mx-auto"
          >
            Model potential gross revenue and margins based on patient volume.
          </motion.p>
        </div>

        {/* ── CALCULATOR INTERFACE (Compact) ── */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto bg-white/60 backdrop-blur-2xl rounded-[2rem] border border-white shadow-[0_20px_50px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col lg:flex-row relative"
        >
          {/* Left Side: Inputs & Assumptions */}
          <div className="w-full lg:w-5/12 p-8 lg:p-10 bg-gray-50/50 border-r border-gray-100 flex flex-col justify-center">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-navy text-teal flex items-center justify-center shadow-lg">
                  <Calculator className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-xl font-bold text-navy tracking-tight">Revenue Model</h3>
              </div>

              {/* Slider Section */}
              <div className="mb-8 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <div className="flex justify-between items-end mb-4">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Patients per month
                  </label>
                  <div className="text-3xl font-heading font-extrabold text-teal-dark leading-none">
                    {patients}
                  </div>
                </div>
                
                <div className="relative py-2">
                  <input 
                    type="range" min="10" max="100" step="5" value={patients}
                    onChange={(e) => setPatients(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-gray-100 rounded-full appearance-none cursor-pointer outline-none relative z-20
                      [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 
                      [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-[3px] [&::-webkit-slider-thumb]:border-teal 
                      [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:transition-transform"
                  />
                  <div 
                    className="absolute top-1/2 left-0 h-1.5 bg-teal rounded-l-full -translate-y-1/2 z-10 pointer-events-none"
                    style={{ width: `${((patients - 10) / 90) * 100}%` }}
                  />
                </div>
              </div>

              {/* Assumptions (Compact) */}
              <div className="space-y-3">
                <h4 className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2">Key Variables</h4>
                <div className="flex justify-between items-center py-2 border-b border-gray-200/60">
                  <span className="text-xs text-slate-600 font-semibold flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-dark"/> Programme Fee
                  </span>
                  <span className="text-xs font-bold text-navy">~£220 / cycle</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200/60">
                  <span className="text-xs text-slate-600 font-semibold flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-dark"/> Diagnostic Margin
                  </span>
                  <span className="text-xs font-bold text-navy">~£15–£30</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-xs text-slate-600 font-semibold flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-dark"/> Platform Pricing
                  </span>
                  <span className="text-[10px] font-bold text-white bg-navy px-2 py-0.5 rounded tracking-wide">Custom Quote</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Outputs (Optimised) */}
          <div className="w-full lg:w-7/12 p-8 lg:p-10 bg-white flex flex-col justify-center">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2">Monthly Gross Revenue</p>
                <p className="text-2xl lg:text-3xl font-heading font-extrabold text-navy tracking-tight">
                  ~{formatCurrency(monthlyRevenue)}
                </p>
              </div>
              <div className="bg-gradient-to-br from-teal/5 to-transparent rounded-2xl p-5 border border-teal/15 shadow-sm">
                <p className="text-[9px] font-bold text-teal-dark uppercase tracking-widest mb-2">Est. Monthly Margin</p>
                <p className="text-2xl lg:text-3xl font-heading font-extrabold text-teal-dark tracking-tight">
                  ~{formatCurrency(monthlyGrossMargin)}
                </p>
              </div>
            </div>

            {/* ── ANNUAL POTENTIAL (High-Impact Slide Anchor) ── */}
            <div className="relative bg-gradient-to-br from-[#020438] to-[#1A1D4E] text-white rounded-3xl p-8 overflow-hidden shadow-xl border border-[#1A1D4E]">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-56 h-56 bg-teal blur-[70px] opacity-25 rounded-full mix-blend-screen pointer-events-none" />
              <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-3 backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal shadow-[0_0_5px_rgba(0,234,255,0.8)] animate-pulse" />
                    <span className="text-teal text-[9px] font-bold tracking-widest uppercase">Annual Potential</span>
                  </div>
                  
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={annualGrossMargin}
                      initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}
                      className="text-4xl lg:text-5xl font-heading font-extrabold tracking-tighter text-white"
                    >
                      ~{formatCurrency(annualGrossMargin)}
                    </motion.div>
                  </AnimatePresence>
                </div>
                
                <a href="#contact" className="shrink-0 w-14 h-14 bg-teal hover:bg-teal-light rounded-full flex items-center justify-center transition-all shadow-[0_0_15px_rgba(0,234,255,0.4)] group">
                  <ArrowRight className="w-5 h-5 text-navy group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <p className="text-[9px] text-slate-400 mt-6 text-center italic max-w-lg mx-auto leading-relaxed">
              *Illustrative models only. Platform fees and operating costs apply.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}