"use client";

import { useState } from "react";
import { motion, AnimatePresence, useMotionTemplate, useMotionValue } from "framer-motion";
import { Activity, Stethoscope, ShieldCheck, Clock, CheckCircle2, ArrowRight, Terminal } from "lucide-react";

const tabs = [
  { id: "patient", label: "Patient Workflow", icon: Activity },
  { id: "prescriber", label: "Prescriber Decision", icon: Stethoscope },
  { id: "governance", label: "Governance Backbone", icon: ShieldCheck },
];

export default function InteractiveExplainer() {
  const [activeTab, setActiveTab] = useState("patient");

  // --- MOUSE TRACKING SPOTLIGHT ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const spotlight = useMotionTemplate`radial-gradient(800px circle at ${mouseX}px ${mouseY}px, rgba(0, 201, 183, 0.08), transparent 80%)`;
  const borderSpotlight = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(0, 201, 183, 0.4), transparent 80%)`;

  return (
    <section 
      id="platform" 
      className="py-24 px-6 lg:px-8 bg-[#020617] relative overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-light/5 rounded-full blur-[150px] pointer-events-none" />

      {/* SVG NOISE TEXTURE */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none z-0" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-teal-light text-xs font-bold tracking-[0.15em] uppercase mb-3 drop-shadow-[0_0_10px_rgba(0,201,183,0.5)]">
            Interactive Architecture
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Explore the <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-light to-teal">Ecosystem</span>
          </motion.h2>
        </div>

        {/* INTERACTIVE DASHBOARD CONTAINER */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          onMouseMove={handleMouseMove}
          className="relative bg-[#050A15]/80 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.5)] overflow-hidden backdrop-blur-2xl group border border-white/5"
        >
          {/* Interactive Spotlights */}
          <motion.div 
            className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: spotlight }}
          />
          <motion.div 
            className="absolute inset-0 z-0 pointer-events-none rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ 
              background: borderSpotlight, padding: "1px", 
              WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", 
              WebkitMaskComposite: "xor", maskComposite: "exclude" 
            }}
          />

          {/* Top Mac-style Toolbar */}
          <div className="relative z-10 h-12 border-b border-white/10 flex items-center px-6 bg-white/[0.02]">
            <div className="flex gap-2 w-1/3">
              <div className="w-3 h-3 rounded-full bg-white/10 hover:bg-red-400 transition-colors cursor-pointer" />
              <div className="w-3 h-3 rounded-full bg-white/10 hover:bg-amber-400 transition-colors cursor-pointer" />
              <div className="w-3 h-3 rounded-full bg-white/10 hover:bg-emerald-400 transition-colors cursor-pointer" />
            </div>
            <div className="w-1/3 flex justify-center">
              <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/5">
                <Terminal className="w-3 h-3 text-teal-light" />
                <span className="text-[10px] text-white/50 font-mono tracking-wider">ARIXA_SYSTEM_VIEW</span>
              </div>
            </div>
          </div>

          {/* Tabs Navigation */}
          <div className="relative z-10 flex overflow-x-auto border-b border-white/10 no-scrollbar bg-white/[0.01]">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center gap-3 px-8 py-5 text-sm font-semibold whitespace-nowrap transition-all relative ${
                    isActive ? "text-teal-light bg-white/[0.03]" : "text-slate-400 hover:text-white hover:bg-white/[0.02]"
                  }`}
                >
                  <tab.icon className={`w-4 h-4 ${isActive ? "text-teal-light" : "text-slate-500"}`} />
                  {tab.label}
                  {isActive && (
                    <motion.div layoutId="activeTabExplainer" className="absolute bottom-0 left-0 right-0 h-[2px] bg-teal-light shadow-[0_0_15px_rgba(0,201,183,0.8)]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Tab Content Area */}
          <div className="relative z-10 p-8 md:p-14 min-h-[450px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              
              {/* === PATIENT WORKFLOW PANEL === */}
              {activeTab === "patient" && (
                <motion.div key="patient" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }} className="w-full">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 relative mt-8">
                    
                    {/* Background track line */}
                    <div className="hidden md:block absolute top-7 left-[10%] right-[10%] h-[2px] bg-white/5 z-0" />
                    
                    {/* Animated Fill Line */}
                    <motion.div 
                      initial={{ width: "0%" }} 
                      animate={{ width: "80%" }} 
                      transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                      className="hidden md:block absolute top-7 left-[10%] h-[2px] bg-gradient-to-r from-teal-light/50 to-teal shadow-[0_0_10px_rgba(0,201,183,0.5)] z-0" 
                    />
                    
                    {[
                      { step: "Screening", desc: "Eligibility check" },
                      { step: "Assessment", desc: "MHRA-aligned" },
                      { step: "Diagnostics", desc: "LML API Integration" },
                      { step: "Consent", desc: "Digital capture" },
                      { step: "Checkout", desc: "Payment secured" },
                    ].map((item, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 + (i * 0.2), type: "spring" }}
                        className="relative z-10 flex flex-col items-center text-center group w-full md:w-auto"
                      >
                        <div className="w-14 h-14 rounded-2xl bg-[#050A15] border border-white/10 flex items-center justify-center mb-4 group-hover:border-teal/50 group-hover:bg-teal/10 transition-all duration-300 shadow-xl relative overflow-hidden">
                           {/* Step inner glow */}
                           <div className="absolute inset-0 bg-teal-light/20 opacity-0 group-hover:opacity-100 transition-opacity blur-md" />
                           <span className="text-white group-hover:text-teal-light transition-colors font-heading font-bold relative z-10">{i + 1}</span>
                        </div>
                        <div className="text-white text-sm font-bold mb-1">{item.step}</div>
                        <div className="text-slate-400 text-xs">{item.desc}</div>
                      </motion.div>
                    ))}
                  </div>
                  <motion.p 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
                    className="text-slate-400 text-center mt-16 max-w-2xl mx-auto text-sm leading-relaxed"
                  >
                    One seamless digital journey — from "I want treatment" to completed checkout. Every step logged, governed, and compliant by design.
                  </motion.p>
                </motion.div>
              )}

              {/* === PRESCRIBER DECISION PANEL === */}
              {activeTab === "prescriber" && (
                <motion.div key="prescriber" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }} className="w-full max-w-4xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-4">
                      {[
                        "Patient Demographics & History",
                        "Clinical Assessment Results",
                        "Blood Test Results (LML)"
                      ].map((text, idx) => (
                        <motion.div 
                          key={idx}
                          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.15 }}
                          className="bg-white/[0.03] border border-white/5 hover:border-teal/30 hover:bg-white/[0.06] transition-all rounded-xl px-5 py-4 text-slate-300 text-sm flex items-center gap-4 shadow-sm"
                        >
                          <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                          </div>
                          {text}
                        </motion.div>
                      ))}
                    </div>
                    
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}
                      className="relative"
                    >
                      {/* Animated Data Arrow */}
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6, repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
                        className="hidden md:block absolute top-1/2 -left-10 text-teal-light/50 -translate-y-1/2"
                      >
                        <ArrowRight className="w-6 h-6" />
                      </motion.div>
                      
                      {/* The Structured Summary Card */}
                      <div className="bg-gradient-to-br from-teal/10 to-white/[0.02] border border-teal/20 rounded-2xl p-8 shadow-[0_0_40px_rgba(0,165,168,0.1)] relative overflow-hidden group/summary hover:border-teal/40 transition-colors">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-teal-light/10 blur-[50px] rounded-full group-hover/summary:bg-teal-light/20 transition-colors" />
                        
                        <div className="flex items-center gap-3 mb-3 relative z-10">
                          <div className="w-2 h-2 rounded-full bg-teal-light animate-pulse" />
                          <h3 className="text-white font-bold text-xl">Structured Clinical Summary</h3>
                        </div>
                        
                        <p className="text-slate-400 text-sm mb-8 relative z-10">Everything a prescriber needs — synthesised into one actionable view.</p>
                        
                        <div className="flex flex-wrap items-center gap-4 relative z-10">
                           <span className="inline-flex items-center gap-2 bg-[#020617] text-white px-5 py-2.5 rounded-lg text-xs font-bold border border-white/10 shadow-inner">
                             <Clock className="w-3.5 h-3.5 text-teal-light" /> ~2 min review
                           </span>
                           <span className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-5 py-2.5 rounded-lg text-xs font-bold border border-emerald-500/20">
                             10x capacity unlock
                           </span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}

              {/* === GOVERNANCE BACKBONE PANEL === */}
              {activeTab === "governance" && (
                <motion.div key="governance" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }} className="w-full max-w-4xl mx-auto">
                   
                   {/* Terminal style log cards */}
                   <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                      {[
                        { time: "T+00.0s", action: "Screening Logged" },
                        { time: "T+45.2s", action: "Assessment Locked" },
                        { time: "T+90.5s", action: "Blood API Synced" },
                        { time: "T+120.1s", action: "Consent Hashed" },
                      ].map((log, i) => (
                        <motion.div 
                          key={i} 
                          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }}
                          className="bg-[#020617] border border-white/5 rounded-xl p-5 shadow-inner relative overflow-hidden group/log hover:border-teal/30 transition-colors"
                        >
                           <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-teal-light/50 to-teal opacity-30 group-hover/log:opacity-100 transition-opacity" />
                           <div className="text-teal-light text-sm font-mono font-bold mb-2 flex items-center gap-2">
                             {log.time}
                             {i === 3 && <span className="w-1.5 h-3 bg-teal-light animate-pulse inline-block" />} {/* Blinking cursor on last item */}
                           </div>
                           <div className="text-slate-300 text-xs font-medium tracking-wide">{log.action}</div>
                        </motion.div>
                      ))}
                   </div>
                   
                   {/* Compliance Engine visualization */}
                   <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
                    className="flex flex-col items-center justify-center border-t border-white/10 pt-10 relative"
                   >
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-10 bg-gradient-to-b from-white/10 to-transparent" />
                      <div className="text-xs font-bold tracking-[0.2em] text-slate-500 uppercase mb-6">Continuous Compliance Engine</div>
                      
                      <div className="flex flex-wrap justify-center gap-3">
                        {['GPhC', 'CQC', 'MHRA', 'NICE', 'UK GDPR'].map((badge, i) => (
                          <motion.span 
                            key={badge} 
                            initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 1 + (i * 0.1) }}
                            className="bg-white/[0.03] border border-white/10 text-slate-300 px-6 py-2.5 rounded-lg text-xs font-bold hover:bg-white/10 hover:text-white hover:border-white/20 transition-all cursor-default backdrop-blur-sm"
                          >
                            {badge}
                          </motion.span>
                        ))}
                      </div>
                   </motion.div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}