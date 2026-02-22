"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Search, SlidersHorizontal, Shield, RefreshCcw } from "lucide-react";
import React, { useRef } from "react";

const steps = [
  {
    id: "01",
    letter: "A",
    title: "Audit",
    icon: Search,
    description: "Assessing baseline intent and governance posture before defining where you need to be.",
    accent: "#3b82f6",
    accentLight: "rgba(59,130,246,0.08)",
    accentBorder: "rgba(59,130,246,0.2)",
    tag: "Baseline Assessment",
    metrics: [
      { label: "Policy gaps", value: "94%" },
      { label: "Risk mapped", value: "100%" },
    ],
  },
  {
    id: "02",
    letter: "C",
    title: "Control",
    icon: SlidersHorizontal,
    description: "Converting regulatory expectations into version-controlled procedures that become your operational standard.",
    accent: "#00A5A8",
    accentLight: "rgba(0,165,168,0.08)",
    accentBorder: "rgba(0,165,168,0.2)",
    tag: "Procedural Framework",
    metrics: [
      { label: "SOPs documented", value: "100%" },
      { label: "Version control", value: "Always" },
    ],
  },
  {
    id: "03",
    letter: "E",
    title: "Enforcement",
    icon: Shield,
    description: "Ensuring procedures are followed and evidenced in real-time — continuous oversight, not just during reviews.",
    accent: "#10b981",
    accentLight: "rgba(16,185,129,0.08)",
    accentBorder: "rgba(16,185,129,0.2)",
    tag: "Continuous Oversight",
    metrics: [
      { label: "Monitoring", value: "24/7" },
      { label: "Audit trail", value: "Full" },
    ],
  },
];

export default function AceModel() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  const spotlight = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(0,165,168,0.05), transparent 75%)`;

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen flex items-center px-6 lg:px-10 py-12 bg-[#F8FAFB] overflow-hidden"
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,165,168,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,165,168,0.03) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      {/* Ambient orbs */}
      <div className="absolute -top-32 -right-32 w-[480px] h-[480px] bg-blue-400/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-teal/5 rounded-full blur-[100px] pointer-events-none" />
      {/* Mouse spotlight */}
      <motion.div className="absolute inset-0 pointer-events-none z-0" style={{ background: spotlight }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* ── LEFT COLUMN ── */}
          <div className="lg:col-span-4 flex flex-col">

            {/* Pill */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex self-start items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal/25 bg-teal/5 mb-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
              <span className="text-teal text-[10px] font-extrabold tracking-[0.18em] uppercase">Methodology</span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading text-5xl lg:text-6xl font-extrabold text-[#0B1D3A] leading-[1.05] tracking-tight mb-4"
            >
              The{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-teal to-emerald-400">
                  ACE
                </span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.65, duration: 0.6, ease: "easeOut" }}
                  className="absolute bottom-0.5 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-teal to-emerald-400 origin-left block"
                />
              </span>{" "}
              Model.
            </motion.h2>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-500 text-[0.95rem] leading-relaxed mb-6 max-w-sm"
            >
              Governance isn't a one-off project. It's a continuous, closed-loop engine that powers safe operations at scale.
            </motion.p>

            {/* Closed-loop badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.93 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative group cursor-default bg-white border border-gray-200 rounded-2xl px-5 py-4 shadow-md shadow-teal/5 overflow-hidden self-start mb-6"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal/5 to-transparent -translate-x-full animate-[shimmer_3s_ease-in-out_infinite]" />
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-9 h-9 rounded-full bg-teal/8 border border-teal/20 flex items-center justify-center group-hover:bg-teal group-hover:border-teal transition-all duration-500">
                  <RefreshCcw className="w-4 h-4 text-teal group-hover:text-white group-hover:rotate-180 transition-all duration-700" />
                </div>
                <div>
                  <p className="text-[9px] font-extrabold text-slate-400 uppercase tracking-[0.18em] mb-0.5">Architecture</p>
                  <p className="text-sm font-bold text-[#0B1D3A]">Continuous Closed-Loop System</p>
                </div>
              </div>
            </motion.div>

            {/* ACE legend */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45 }}
              className="flex flex-col gap-2"
            >
              {steps.map((s) => (
                <div key={s.id} className="flex items-center gap-3">
                  <span
                    className="w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-black flex-shrink-0"
                    style={{ backgroundColor: s.accentLight, color: s.accent }}
                  >
                    {s.letter}
                  </span>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{s.title}</span>
                  <div className="flex-1 h-px bg-gray-100" />
                  <span className="text-[10px] font-bold text-slate-300">{s.id}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN: 3 compact horizontal cards ── */}
          <div className="lg:col-span-8 relative">

            {/* Connecting thread */}
            <div className="absolute left-[22px] top-8 bottom-8 w-px bg-gray-100 rounded-full z-0 hidden lg:block" />
            <motion.div
              className="absolute left-[22px] top-8 w-px rounded-full z-0 hidden lg:block"
              initial={{ height: "0%" }}
              whileInView={{ height: "calc(100% - 4rem)" }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: "easeInOut", delay: 0.3 }}
              style={{
                background: "linear-gradient(to bottom, #3b82f6, #00A5A8, #10b981)",
                boxShadow: "0 0 10px rgba(0,165,168,0.35)",
              }}
            />
            {/* Thread dots */}
            <div className="absolute left-[18px] top-8 bottom-8 z-0 hidden lg:flex flex-col justify-between">
              {steps.map((step, i) => (
                <motion.div
                  key={step.id}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.2, type: "spring", stiffness: 400 }}
                  className="w-[9px] h-[9px] rounded-full border-2 border-white shadow-sm"
                  style={{ backgroundColor: step.accent }}
                />
              ))}
            </div>

            {/* Cards */}
            <div className="space-y-3.5 lg:pl-14">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: 28 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, ease: "easeOut", delay: 0.15 + index * 0.12 }}
                    className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-0.5 transition-all duration-400"
                  >
                    {/* Left accent bar */}
                    <motion.div
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.12, duration: 0.45, ease: "easeOut" }}
                      className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full origin-top"
                      style={{ backgroundColor: step.accent }}
                    />
                    {/* Hover ambient */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{ background: `radial-gradient(360px circle at 0% 50%, ${step.accentLight}, transparent 55%)` }}
                    />
                    {/* Watermark */}
                    <div
                      className="absolute -right-2 -bottom-5 text-[7rem] font-heading font-black select-none pointer-events-none opacity-[0.04] group-hover:opacity-[0.07] transition-opacity duration-500"
                      style={{ color: step.accent, lineHeight: 1 }}
                    >
                      {step.letter}
                    </div>

                    <div className="relative z-10 px-6 py-5 flex items-center gap-5">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 4 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="w-11 h-11 rounded-xl flex items-center justify-center border flex-shrink-0"
                        style={{ backgroundColor: step.accentLight, borderColor: step.accentBorder }}
                      >
                        <Icon className="w-5 h-5" style={{ color: step.accent }} />
                      </motion.div>

                      {/* Main text */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-heading text-lg font-extrabold text-[#0B1D3A] tracking-tight">{step.title}</h3>
                          <span
                            className="text-[9px] font-extrabold uppercase tracking-[0.14em] px-2 py-0.5 rounded-full border hidden sm:inline"
                            style={{ color: step.accent, backgroundColor: step.accentLight, borderColor: step.accentBorder }}
                          >
                            {step.tag}
                          </span>
                        </div>
                        <p className="text-slate-500 text-[0.82rem] leading-snug line-clamp-2">{step.description}</p>
                      </div>

                      {/* Metric pills */}
                      <div className="hidden md:flex flex-col gap-1.5 flex-shrink-0 min-w-[140px]">
                        {step.metrics.map((m) => (
                          <div
                            key={m.label}
                            className="flex items-center justify-between gap-4 px-3 py-1.5 rounded-lg bg-[#F8FAFB] border border-gray-100"
                          >
                            <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 whitespace-nowrap">{m.label}</span>
                            <span className="text-[11px] font-extrabold tabular-nums" style={{ color: step.accent }}>{m.value}</span>
                          </div>
                        ))}
                      </div>

                      {/* Step number */}
                      <span
                        className="hidden lg:block text-[10px] font-black tracking-[0.2em] flex-shrink-0 opacity-60"
                        style={{ color: step.accent }}
                      >
                        {step.id}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}