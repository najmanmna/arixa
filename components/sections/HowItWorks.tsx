"use client";

import { motion, useMotionTemplate, useMotionValue, AnimatePresence } from "framer-motion";
import { Activity, Stethoscope, ShieldCheck, CheckCircle2, FileText, CreditCard, Syringe, ClipboardList, LayoutDashboard } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

const workflowSteps = [
  { label: "Screening",   icon: ClipboardList },
  { label: "Assessment",  icon: FileText },
  { label: "Diagnostics", icon: Syringe },
  { label: "Dashboard",   icon: LayoutDashboard },
  { label: "Consent",     icon: CheckCircle2 },
  { label: "Checkout",    icon: CreditCard },
];

const complianceBadges = [
  { label: "GPhC",    desc: "Pharmacy Standards" },
  { label: "CQC",     desc: "Quality Commission" },
  { label: "MHRA",    desc: "Medicines Agency" },
  { label: "NICE",    desc: "Clinical Excellence" },
  { label: "UK GDPR", desc: "Data Protection" },
];

export default function HowItWorks() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  const cardSpotlight = useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, rgba(0,234,255,0.06), transparent 80%)`;

  const [activeStep, setActiveStep] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % workflowSteps.length);
    }, 1600);
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <section
      id="how-it-works"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full flex flex-col justify-center py-12 lg:py-16 bg-[#01021C] overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <motion.div className="absolute inset-0 pointer-events-none z-0 mix-blend-screen" style={{ background: cardSpotlight }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">

        <div className="text-center mb-8 max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal/20 bg-teal/5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
            <span className="text-teal text-[9px] font-bold tracking-[0.2em] uppercase">Process Architecture</span>
          </motion.div>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4">
            Three Layers. <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-light via-teal to-teal">Zero Chaos.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 auto-rows-auto">

          {/* CARD 1: Patient Workflow */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="md:col-span-2 relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-6 lg:p-8 flex flex-col overflow-hidden group/card">
            <div className="flex items-center gap-4 mb-4 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-[#020438] border border-white/10 flex items-center justify-center text-teal">
                <Activity className="w-4 h-4" />
              </div>
              <h3 className="font-heading text-lg font-bold text-white">1. Patient Pathway</h3>
            </div>
            <p className="text-slate-400 font-medium text-xs lg:text-sm leading-relaxed mb-6 max-w-xl relative z-10">
              MHRA-aligned assessments and API-integrated blood diagnostics via London Medical Laboratory. One seamless digital journey where the patient never leaves your brand.
            </p>

            <div className="mt-auto relative z-10 pt-4">
              <div className="hidden sm:block absolute top-[18px] left-0 right-0 h-[1px] bg-white/5 z-0" />
              <div className="flex justify-between cursor-pointer select-none" onClick={() => setIsRunning(!isRunning)}>
                {workflowSteps.map((step, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 relative z-10 flex-1">
                    <div className={`w-9 h-9 rounded-lg border flex items-center justify-center transition-all duration-300 ${activeStep === i ? "bg-teal border-teal text-navy scale-110 shadow-[0_0_15px_rgba(0,234,255,0.6)]" : i < activeStep ? "bg-teal/10 border-teal/20 text-teal" : "bg-[#01021C] border-white/10 text-slate-600"}`}>
                      <step.icon className="w-3.5 h-3.5" />
                    </div>
                    <span className={`text-[8px] font-bold uppercase tracking-tighter ${activeStep === i ? "text-teal" : "text-slate-600"}`}>{step.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CARD 2: Prescriber Decision */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="relative bg-gradient-to-br from-[#020438] to-[#1A1D4E] text-white rounded-3xl p-6 lg:p-8 flex flex-col border border-white/10">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-teal">
                <Stethoscope className="w-4 h-4" />
              </div>
              <h3 className="font-heading text-lg font-bold text-white">2. Decision Support</h3>
            </div>
            <p className="text-slate-300 text-xs font-medium leading-relaxed mb-6">
              Compresses data into structured summaries. Clinical judgement remains entirely with the prescriber — 10QRX provides the structure, not the decision.
            </p>
            <div className="mt-auto bg-[#01021C]/40 border border-white/5 rounded-xl p-4 space-y-3">
              {["Prescriber Autonomy: 100%", "Data: Standardised", "Clinical Insights: Prioritised"].map((text, i) => (
                <div key={i} className="flex justify-between items-center text-[9px] font-bold uppercase tracking-widest text-slate-500">
                  <span>{text.split(': ')[0]}</span>
                  <span className="text-white">{text.split(': ')[1]}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CARD 3: Governance Backbone */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="md:col-span-3 relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-6 lg:p-8 flex flex-col md:flex-row items-center gap-6 lg:gap-12 overflow-hidden">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#020438] border border-white/10 flex items-center justify-center text-teal">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="font-heading text-lg font-bold text-white">3. Governance Support</h3>
              </div>
              <p className="text-slate-400 font-medium text-xs leading-relaxed max-w-2xl">
                Infrastructure built to support GPhC, CQC, MHRA, and UK GDPR requirements. Every action timestamped and audit-ready from day one to simplify inspection preparation.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {complianceBadges.map((badge, i) => (
                <div key={i} className="flex flex-col items-center justify-center px-3 py-2 bg-white/5 border border-white/10 rounded-xl min-w-[85px]">
                  <span className="text-[10px] font-bold text-white">{badge.label}</span>
                  <span className="text-[7px] font-bold uppercase tracking-widest text-slate-500">{badge.desc}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}