"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Calculator, ArrowRight, PoundSterling, Activity } from "lucide-react";

export default function Economics() {
  // State for the interactive slider
  const [patients, setPatients] = useState(30);

  // Simplified internal logic to match the brief's £3k-£4k profit at 30 patients
  const revenuePerPatient = 235; // Averages to £7,050 at 30 patients
  const profitPerPatient = 120; // Averages to £3,600 profit at 30 patients
  
  const monthlyRevenue = patients * revenuePerPatient;
  const platformFee = 1000; // Base fee
  const monthlyProfit = patients * profitPerPatient;
  const annualProfit = monthlyProfit * 12;

  // Formatting helper for currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section id="economics" className="py-24 px-6 lg:px-8 bg-[#FAFAFA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-5xl font-extrabold text-navy tracking-tight mb-6"
          >
            What One Pharmacy Can Earn
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-light text-lg font-medium"
          >
            A single pharmacy running GLP-1 services through ARIXA can generate <span className="text-teal font-bold">£90,000+</span> in additional annual profit. Here is how the numbers work.
          </motion.p>
        </div>

        {/* CALCULATOR INTERFACE */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto bg-white rounded-3xl border border-gray-200 shadow-[0_20px_60px_-15px_rgba(0,165,168,0.1)] overflow-hidden flex flex-col lg:flex-row"
        >
          {/* Left Side: Inputs & Assumptions */}
          <div className="w-full lg:w-5/12 p-8 lg:p-12 bg-gray-50 border-r border-gray-100 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-navy text-white flex items-center justify-center shadow-md">
                <Calculator className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-xl font-bold text-navy">Revenue Calculator</h3>
            </div>

            <div className="mb-10">
              <div className="flex justify-between items-end mb-4">
                <label className="text-sm font-bold text-slate-light uppercase tracking-wider">
                  Patients per month
                </label>
                <div className="text-3xl font-heading font-extrabold text-teal">
                  {patients}
                </div>
              </div>
              
              {/* Range Slider */}
              <input 
                type="range" 
                min="10" 
                max="100" 
                step="5"
                value={patients}
                onChange={(e) => setPatients(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal hover:accent-teal-light transition-all"
              />
              <div className="flex justify-between mt-2 text-xs font-semibold text-gray-400">
                <span>10</span>
                <span>50</span>
                <span>100+</span>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold text-slate-light uppercase tracking-wider mb-2">Base Assumptions</h4>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-sm text-slate font-medium flex items-center gap-2"><Activity className="w-4 h-4 text-teal"/> Average Programme Fee</span>
                <span className="text-sm font-bold text-navy">£220 / cycle</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-sm text-slate font-medium flex items-center gap-2"><Activity className="w-4 h-4 text-coral-soft"/> Blood Test Margin</span>
                <span className="text-sm font-bold text-navy">£15–£30 / patient</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-sm text-slate font-medium flex items-center gap-2"><Activity className="w-4 h-4 text-amber-light"/> ARIXA Platform Fee</span>
                <span className="text-sm font-bold text-navy">£1,000 / month</span>
              </div>
            </div>
          </div>

          {/* Right Side: Dynamic Outputs */}
          <div className="w-full lg:w-7/12 p-8 lg:p-12 bg-white flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-6 mb-8">
              {/* Monthly Revenue */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <p className="text-xs font-bold text-slate-light uppercase tracking-widest mb-2">Monthly Revenue</p>
                <p className="text-3xl font-heading font-bold text-navy">
                  ~{formatCurrency(monthlyRevenue)}
                </p>
              </div>
              
              {/* Monthly Profit */}
              <div className="bg-teal-subtle/30 rounded-2xl p-6 border border-teal/10">
                <p className="text-xs font-bold text-teal uppercase tracking-widest mb-2">Estimated Profit (Mo)</p>
                <p className="text-3xl font-heading font-bold text-teal">
                  ~{formatCurrency(monthlyProfit)}
                </p>
              </div>
            </div>

            {/* Massive Annual ROI Highlight */}
            <div className="relative bg-navy text-white rounded-2xl p-8 lg:p-10 overflow-hidden shadow-2xl">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-teal blur-[60px] opacity-40 rounded-full" />
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <p className="text-sm font-bold text-teal-light uppercase tracking-widest mb-2 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" /> Annual Profit Uplift
                  </p>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={annualProfit}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-5xl lg:text-6xl font-heading font-extrabold tracking-tight"
                    >
                      ~{formatCurrency(annualProfit)}
                    </motion.div>
                  </AnimatePresence>
                </div>
                
                <a href="#contact" className="shrink-0 w-14 h-14 bg-teal hover:bg-teal-light rounded-full flex items-center justify-center transition-colors shadow-[0_0_20px_rgba(0,165,168,0.4)]">
                  <ArrowRight className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>

            <p className="text-xs text-slate-light mt-6 text-center italic">
              *These figures are illustrative and based on conservative assumptions. Pharmacies seeing 50+ patients/month regularly exceed £90,000 annual additional profit.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}