"use client";

import { motion, useMotionTemplate, useMotionValue, AnimatePresence } from "framer-motion";
import { Activity, Stethoscope, ShieldCheck, ArrowRight, Clock, CheckCircle2, FileText, CreditCard, Syringe, ClipboardList, LayoutDashboard } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

const workflowSteps = [
  { label: "Screening",   icon: ClipboardList, color: "teal" },
  { label: "Assessment",  icon: FileText,       color: "teal" },
  { label: "Diagnostics", icon: Syringe,        color: "teal" },
  { label: "Dashboard",   icon: LayoutDashboard,color: "teal" },
  { label: "Consent",     icon: CheckCircle2,   color: "teal" },
  { label: "Checkout",    icon: CreditCard,      color: "teal" },
];

const complianceBadges = [
  { label: "GPhC",    desc: "Pharmacy Standards" },
  { label: "CQC",     desc: "Quality Commission" },
  { label: "MHRA",    desc: "Medicines Agency" },
  { label: "NICE",    desc: "Clinical Excellence" },
  { label: "UK GDPR", desc: "Data Protection" },
];

// Timing bar for prescriber card
function TimingBar({ label, value, max, color, delay }: { label: string; value: number; max: number; color: string; delay: number }) {
  const pct = (value / max) * 100;
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{label}</span>
        <span className="text-[11px] font-mono font-bold" style={{ color }}>{value} min</span>
      </div>
      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: "0%" }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: "easeOut", delay }}
        />
      </div>
    </div>
  );
}

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

  const cardSpotlight = useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, rgba(0,165,168,0.055), transparent 75%)`;

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
      className="relative py-28 px-6 lg:px-8 bg-[#F8FAFB] overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(0,165,168,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(0,165,168,0.035) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Ambient orbs */}
      <div className="absolute top-[-8%] left-[-5%] w-[480px] h-[480px] bg-teal/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[5%] right-[-6%] w-[380px] h-[380px] bg-indigo-500/4 rounded-full blur-[100px] pointer-events-none" />

      {/* Global mouse spotlight */}
      <motion.div className="absolute inset-0 pointer-events-none z-0" style={{ background: cardSpotlight }} />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── HEADER ── */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal/25 bg-teal/5 mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
            <span className="text-teal text-[10px] font-extrabold tracking-[0.18em] uppercase">How It Works</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-[#0B1D3A] leading-[1.1] tracking-tight mb-5"
          >
            Three Layers.{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal via-[#00C8CB] to-teal-light">
                One Seamless Platform.
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.65, duration: 0.7, ease: "easeOut" }}
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-teal to-teal-light origin-left block"
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg leading-relaxed"
          >
            Every touchpoint — patient, prescriber, compliance — unified in one governed platform.
          </motion.p>
        </div>

        {/* ── BENTO GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[minmax(280px,auto)] group/grid">

          {/* ── CARD 1: Patient Workflow ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="md:col-span-2 relative bg-white border border-gray-200/80 rounded-[1.75rem] p-8 lg:p-10 flex flex-col overflow-hidden
                       hover:border-teal/40 hover:shadow-[0_24px_50px_-16px_rgba(0,165,168,0.18)] hover:-translate-y-1.5
                       hover:!opacity-100 group-hover/grid:opacity-60 transition-all duration-500 group/card"
          >
            {/* Hover ambient */}
            <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{ background: "radial-gradient(500px circle at 30% 60%, rgba(0,165,168,0.05), transparent 70%)" }} />
            {/* Top accent */}
            <motion.div
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.35, duration: 0.6 }}
              className="absolute top-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-teal/40 to-transparent origin-center"
            />

            <div className="flex items-center gap-4 mb-5 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-teal/8 border border-teal/15 flex items-center justify-center text-teal group-hover/card:scale-110 group-hover/card:bg-teal/12 transition-all duration-500">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-[#0B1D3A] leading-none">Patient Workflow</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-0.5">End-to-end digital journey</p>
              </div>
            </div>

            <p className="text-slate-500 leading-relaxed mb-8 max-w-xl relative z-10 text-[0.9rem]">
              Takes a patient from "I want treatment" through eligibility screening, MHRA-compliant assessments, API-integrated blood diagnostics, consent capture, and checkout — one seamless digital journey.
            </p>

            {/* Animated pipeline */}
            <div className="mt-auto relative z-10">
              {/* Track line */}
              <div className="hidden sm:block absolute top-[22px] left-0 right-0 h-px bg-gray-100 z-0" />

              <div
                className="flex flex-wrap sm:flex-nowrap gap-3 sm:gap-0 sm:justify-between cursor-pointer select-none"
                onClick={() => setIsRunning((r) => !r)}
                title={isRunning ? "Pause" : "Resume"}
              >
                {workflowSteps.map((step, i) => {
                  const isActive = activeStep === i;
                  const isPast = i < activeStep;
                  const Icon = step.icon;
                  return (
                    <div key={step.label} className="flex flex-col items-center gap-2 relative z-10 sm:flex-1">
                      {/* Node */}
                      <motion.div
                        animate={isActive ? { scale: [1, 1.12, 1], boxShadow: ["0 0 0px rgba(0,165,168,0)", "0 0 18px rgba(0,165,168,0.45)", "0 0 8px rgba(0,165,168,0.3)"] } : {}}
                        transition={{ duration: 0.5 }}
                        className={`w-11 h-11 rounded-xl border-2 flex items-center justify-center transition-all duration-400 ${
                          isActive
                            ? "bg-teal border-teal text-white shadow-[0_0_20px_rgba(0,165,168,0.5)]"
                            : isPast
                            ? "bg-teal/10 border-teal/30 text-teal"
                            : "bg-white border-gray-200 text-slate-300"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </motion.div>

                      {/* Label */}
                      <AnimatePresence mode="wait">
                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider transition-colors duration-400 text-center leading-tight ${
                            isActive ? "text-teal" : isPast ? "text-teal/50" : "text-slate-300"
                          }`}
                        >
                          {step.label}
                        </span>
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              <p className="text-[10px] text-slate-300 font-medium mt-4 text-right hidden sm:block">
                {isRunning ? "Click to pause" : "Click to resume"}
              </p>
            </div>
          </motion.div>

          {/* ── CARD 2: Prescriber Decision ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="relative bg-[#0B1D3A] text-white rounded-[1.75rem] p-8 lg:p-10 flex flex-col shadow-xl overflow-hidden
                       hover:shadow-[0_24px_50px_-16px_rgba(0,165,168,0.35)] hover:-translate-y-1.5
                       hover:!opacity-100 group-hover/grid:opacity-60 transition-all duration-500 group/card"
          >
            {/* Internal glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_90%_90%,rgba(0,165,168,0.18),transparent_65%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_10%_10%,rgba(99,102,241,0.08),transparent_60%)] pointer-events-none" />
            {/* Top accent stripe */}
            <motion.div
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.45, duration: 0.6 }}
              className="absolute top-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-teal/50 to-transparent origin-center"
            />
            {/* Subtle grid */}
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center group-hover/card:scale-110 group-hover/card:bg-white/15 transition-all duration-500">
                  <Stethoscope className="w-5 h-5 text-[#00D4D8]" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-white leading-none">Prescriber Decision</h3>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-0.5">Structured clinical review</p>
                </div>
              </div>

              <p className="text-slate-400 text-[0.9rem] leading-relaxed mb-8 flex-grow">
                Compresses patient data into a structured summary so a prescriber can safely approve or decline in ~2 minutes.
              </p>

              {/* Comparison bars */}
              <div className="mt-auto bg-white/5 border border-white/10 rounded-2xl p-5 space-y-5 backdrop-blur-sm">
                <TimingBar label="Manual Review" value={18} max={18} color="rgba(255,255,255,0.2)" delay={0.3} />
                <TimingBar label="ARIXA Review" value={2} max={18} color="#00D4D8" delay={0.5} />

                <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Time saved</span>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#00D4D8]" />
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.9 }}
                      className="text-xl font-heading font-extrabold text-white tracking-tight"
                    >
                      ~16 min
                    </motion.span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── CARD 3: Governance Backbone ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className="md:col-span-3 relative bg-white border border-gray-200/80 rounded-[1.75rem] p-8 lg:p-10 flex flex-col md:flex-row items-center gap-8 lg:gap-16 overflow-hidden
                       hover:border-teal/40 hover:shadow-[0_24px_50px_-16px_rgba(0,165,168,0.18)] hover:-translate-y-1.5
                       hover:!opacity-100 group-hover/grid:opacity-60 transition-all duration-500 group/card"
          >
            {/* Ambient */}
            <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{ background: "radial-gradient(600px circle at 20% 50%, rgba(0,165,168,0.04), transparent 70%)" }} />
            <motion.div
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.55, duration: 0.7 }}
              className="absolute top-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-navy/20 to-transparent origin-center"
            />

            {/* Left text */}
            <div className="flex-1 relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#0B1D3A]/6 border border-[#0B1D3A]/10 flex items-center justify-center group-hover/card:scale-110 group-hover/card:bg-[#0B1D3A]/10 transition-all duration-500">
                  <ShieldCheck className="w-5 h-5 text-[#0B1D3A]" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-[#0B1D3A] leading-none">Governance Backbone</h3>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-0.5">Inspection-ready from day one</p>
                </div>
              </div>
              <p className="text-slate-500 text-[0.9rem] leading-relaxed max-w-md">
                Every action timestamped, every protocol NICE/MHRA-aligned, every record audit-ready. Full regulatory alignment across all UK healthcare standards.
              </p>
            </div>

            {/* Compliance badges */}
            <div className="flex flex-wrap md:flex-nowrap items-stretch justify-center gap-3 w-full md:w-auto relative z-10">
              {complianceBadges.map(({ label, desc }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  className="group/badge flex flex-col items-center justify-center px-6 py-4 bg-[#F8FAFB] border border-gray-100 rounded-2xl
                             hover:border-teal/35 hover:bg-teal/3 hover:shadow-[0_8px_24px_-8px_rgba(0,165,168,0.18)] hover:-translate-y-1
                             transition-all duration-300 cursor-default min-w-[80px]"
                >
                  <span className="text-sm font-extrabold text-[#0B1D3A] tracking-wide group-hover/badge:text-teal transition-colors duration-300">{label}</span>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mt-1 text-center leading-tight">{desc}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}