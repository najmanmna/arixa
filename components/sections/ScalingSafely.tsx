"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import type { Variants } from "framer-motion";
import { Building2, Users, TrendingUp, LockKeyhole, ChevronRight, ArrowUpRight } from "lucide-react";
import React, { useRef } from "react";

const marketDrivers = [
  {
    icon: Building2,
    metric: "11,000+",
    title: "Pharmacies, <1% Structured",
    description: "The UK pharmacy estate is massive. Yet the infrastructure for scaled governance is almost entirely missing.",
    accent: "#3b82f6",
    accentLight: "rgba(59,130,246,0.08)",
    accentBorder: "rgba(59,130,246,0.2)",
    gradFrom: "#3b82f6",
    gradTo: "#06b6d4",
    tag: "Infrastructure Gap",
  },
  {
    icon: Users,
    metric: "7M+",
    title: "NHS Waiting List",
    description: "Demand for community healthcare is stratospheric. Pharmacies can absorb it — if governance doesn't become the bottleneck.",
    accent: "#f59e0b",
    accentLight: "rgba(245,158,11,0.08)",
    accentBorder: "rgba(245,158,11,0.2)",
    gradFrom: "#f59e0b",
    gradTo: "#fb923c",
    tag: "Market Demand",
  },
  {
    icon: TrendingUp,
    metric: "10x",
    title: "GLP-1 Market Growth",
    description: "Pharmacy-led services like GLP-1 weight management are exploding. The first-mover advantage window is now.",
    accent: "#10b981",
    accentLight: "rgba(16,185,129,0.08)",
    accentBorder: "rgba(16,185,129,0.2)",
    gradFrom: "#10b981",
    gradTo: "#34d399",
    tag: "Growth Opportunity",
  },
];

export default function ScalingSafely() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  const sectionSpotlight = useMotionTemplate`radial-gradient(700px circle at ${mouseX}px ${mouseY}px, rgba(0,165,168,0.04), transparent 78%)`;
  const darkCardGlow = useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, rgba(0,201,183,0.18), transparent 70%)`;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -24, filter: "blur(4px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section
      id="solutions"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative py-28 px-6 lg:px-8 bg-[#F8FAFB] overflow-hidden border-t border-gray-200/50"
    >
      {/* Grid texture */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(0,165,168,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,165,168,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Ambient orbs */}
      <div className="absolute -top-32 -left-24 w-[480px] h-[480px] bg-blue-400/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 right-0 w-[420px] h-[420px] bg-teal/5 rounded-full blur-[110px] pointer-events-none" />
      {/* Mouse spotlight */}
      <motion.div className="absolute inset-0 pointer-events-none z-0" style={{ background: sectionSpotlight }} />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── HEADER ── */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal/25 bg-teal/5 mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
            <span className="text-teal text-[10px] font-extrabold tracking-[0.18em] uppercase">Strategic Growth</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B1D3A] max-w-3xl leading-[1.05] tracking-tight"
          >
            Scale Without the{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-300">
                Governance Ceiling.
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.65, duration: 0.7, ease: "easeOut" }}
                className="absolute bottom-0.5 left-0 w-full h-0.5 bg-gradient-to-r from-slate-400 to-slate-300 origin-left block opacity-40"
              />
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* ── LEFT: MARKET DRIVERS ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-7 relative"
          >
            {/* Thread */}
            <div className="absolute left-[22px] top-10 bottom-10 w-px bg-gray-100 rounded-full z-0 hidden sm:block" />
            <motion.div
              initial={{ height: "0%" }}
              whileInView={{ height: "calc(100% - 5rem)" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
              className="absolute left-[22px] top-10 w-px rounded-full z-0 hidden sm:block origin-top"
              style={{
                background: "linear-gradient(to bottom, #3b82f6, #f59e0b, #10b981)",
                boxShadow: "0 0 10px rgba(0,165,168,0.3)",
              }}
            />
            {/* Thread dots */}
            <div className="absolute left-[18px] top-10 bottom-10 z-0 hidden sm:flex flex-col justify-between">
              {marketDrivers.map((d, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.2, type: "spring", stiffness: 400 }}
                  className="w-[9px] h-[9px] rounded-full border-2 border-white shadow-sm"
                  style={{ backgroundColor: d.accent }}
                />
              ))}
            </div>

            <div className="space-y-5 relative z-10 sm:pl-14">
              {marketDrivers.map((driver, idx) => {
                const Icon = driver.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="group relative bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-500"
                  >
                    {/* Top accent stripe */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + idx * 0.12, duration: 0.5, ease: "easeOut" }}
                      className="absolute top-0 left-8 right-8 h-[2px] rounded-full origin-left"
                      style={{ background: `linear-gradient(90deg, ${driver.gradFrom}, ${driver.gradTo})` }}
                    />
                    {/* Left accent bar */}
                    <div
                      className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                      style={{ background: `linear-gradient(to bottom, ${driver.gradFrom}, ${driver.gradTo})` }}
                    />
                    {/* Hover ambient */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-600 pointer-events-none"
                      style={{ background: `radial-gradient(400px circle at 0% 50%, ${driver.accentLight}, transparent 60%)` }}
                    />

                    <div className="relative z-10 flex items-center gap-6 px-7 py-5">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ scale: 1.08, rotate: 3 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="w-12 h-12 rounded-xl flex items-center justify-center border flex-shrink-0"
                        style={{ backgroundColor: driver.accentLight, borderColor: driver.accentBorder }}
                      >
                        <Icon className="w-5 h-5" style={{ color: driver.accent }} />
                      </motion.div>

                      {/* Metric + content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-3 mb-1 flex-wrap">
                          <span
                            className="font-heading text-3xl font-black text-transparent bg-clip-text"
                            style={{ backgroundImage: `linear-gradient(135deg, ${driver.gradFrom}, ${driver.gradTo})` }}
                          >
                            {driver.metric}
                          </span>
                          <span className="font-heading text-base font-bold text-[#0B1D3A]">{driver.title}</span>
                          <span
                            className="text-[9px] font-extrabold uppercase tracking-[0.15em] px-2 py-0.5 rounded-full border hidden sm:inline"
                            style={{ color: driver.accent, backgroundColor: driver.accentLight, borderColor: driver.accentBorder }}
                          >
                            {driver.tag}
                          </span>
                        </div>
                        <p className="text-slate-500 text-[0.83rem] leading-relaxed line-clamp-2">{driver.description}</p>
                      </div>

                      {/* Arrow */}
                      <div className="hidden sm:flex opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-400 flex-shrink-0">
                        <ArrowUpRight className="w-4 h-4" style={{ color: driver.accent }} />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* ── RIGHT: STICKY DARK CARD ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.35, type: "spring", stiffness: 80 }}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <div className="relative bg-[#060F1E] rounded-[1.75rem] overflow-hidden shadow-[0_32px_64px_rgba(0,0,0,0.35)] border border-white/8 group/card">

              {/* Top accent stripe */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
                className="absolute top-0 left-8 right-8 h-[2px] rounded-full origin-left"
                style={{ background: "linear-gradient(90deg, transparent, rgba(0,165,168,0.6), transparent)" }}
              />

              {/* Mouse-tracked border glow */}
              <motion.div
                className="absolute inset-0 z-0 pointer-events-none rounded-[1.75rem] opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"
                style={{
                  background: darkCardGlow,
                  padding: "1px",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />

              {/* Background orbs */}
              <div className="absolute top-0 right-0 w-56 h-56 bg-teal/10 rounded-full blur-[60px] translate-x-1/3 -translate-y-1/3 group-hover/card:bg-teal/18 transition-colors duration-700 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-500/8 rounded-full blur-[70px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />
              {/* Grid texture inside dark card */}
              <div className="absolute inset-0 opacity-[0.035] pointer-events-none"
                style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

              <div className="relative z-10 p-8 sm:p-10 flex flex-col min-h-[420px]">

                {/* Floating icon */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-7 shadow-[0_0_24px_rgba(0,165,168,0.2)]"
                >
                  <LockKeyhole className="w-5 h-5 text-[#00D4D8]" />
                </motion.div>

                {/* Heading */}
                <h3 className="text-xl font-heading font-bold text-white leading-snug mb-5 tracking-wide">
                  Demand isn't the bottleneck.{" "}
                  <span className="text-[#00D4D8]">
                    The ability to demonstrate safe, controlled operations at volume is.
                  </span>
                </h3>

                {/* Body */}
                <div className="space-y-4 text-slate-400 text-[0.88rem] leading-relaxed mb-8 flex-grow">
                  <p>
                    Most services plateau when they can no longer safely manage governance at scale. ARIXA removes that constraint by embedding continuous oversight into the operation itself.
                  </p>
                  <p className="opacity-60 text-xs">
                    Integrated diagnostics track health longitudinally through AI-powered biomarker analysis, cross-panel pattern recognition, and prioritised clinical actions.
                  </p>
                </div>

                {/* Stat pills */}
                <div className="grid grid-cols-2 gap-2.5 mb-8">
                  {[
                    { label: "Compliance overhead", value: "−80%" },
                    { label: "Time to scale", value: "Weeks" },
                    { label: "Audit readiness", value: "Day 1" },
                    { label: "Clinical oversight", value: "24/7" },
                  ].map((stat) => (
                    <div key={stat.label} className="flex flex-col px-4 py-3 rounded-xl bg-white/5 border border-white/8">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">{stat.label}</span>
                      <span className="text-base font-heading font-extrabold text-[#00D4D8]">{stat.value}</span>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <div className="pt-5 border-t border-white/8 relative overflow-hidden group/quote">
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00D4D8]/40 to-transparent -translate-x-full group-hover/quote:translate-x-full transition-transform duration-1000" />
                  <p className="text-[#00D4D8]/80 text-[0.82rem] font-medium italic flex items-start gap-2.5 leading-relaxed">
                    <ChevronRight className="w-4 h-4 flex-shrink-0 mt-0.5 text-teal/40" />
                    "Revenue growth under regulatory scrutiny — powered by clinical intelligence, not in spite of it."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}