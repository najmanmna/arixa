"use client";

import { motion, useMotionTemplate, useMotionValue, animate, useInView } from "framer-motion";
import { FileText, BarChart2, BrainCircuit, AlertCircle, CheckCircle2, ArrowUpRight, TrendingUp, Zap, Shield, Activity } from "lucide-react";
import React, { useRef, useEffect, useState } from "react";

const features = [
  { label: "Clinician-reviewed", icon: Shield },
  { label: "Longitudinal tracking", icon: TrendingUp },
  { label: "Cross-panel intelligence", icon: BrainCircuit },
  { label: "Prioritised actions", icon: Zap },
  { label: "Fully governed", icon: CheckCircle2 },
];

// Animated counter hook
function useCountUp(target: number, duration: number = 1.5, delay: number = 0) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const timeout = setTimeout(() => {
      const controls = animate(0, target, {
        duration,
        ease: "easeOut",
        onUpdate: (v) => setValue(Math.round(v)),
      });
      return controls.stop;
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [inView, target, duration, delay]);

  return { ref, value };
}

// Sparkline mini chart
function Sparkline({ data, color = "#00A5A8" }: { data: number[]; color?: string }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const W = 120, H = 40;
  const pts = data.map((v, i) => `${(i / (data.length - 1)) * W},${H - ((v - min) / range) * (H - 8) - 4}`).join(" ");

  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} fill="none">
      <defs>
        <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.polyline
        points={pts}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeOut", delay: 0.4 }}
      />
      {/* Last dot pulse */}
      <motion.circle
        cx={(data.length - 1) / (data.length - 1) * W}
        cy={H - ((data[data.length - 1] - min) / range) * (H - 8) - 4}
        r="4"
        fill={color}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.5, type: "spring" }}
      />
    </svg>
  );
}

// Biomarker row
function BiomarkerRow({
  label,
  value,
  unit,
  pct,
  color,
  delay,
}: {
  label: string;
  value: string;
  unit: string;
  pct: number; // 0-100 position on bar
  color: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">{label}</span>
        <span className="text-[11px] font-mono font-bold" style={{ color }}>
          {value} <span className="text-slate-400 font-normal">{unit}</span>
        </span>
      </div>
      <div className="h-2 w-full bg-gray-100 rounded-full relative overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 rounded-full opacity-25"
          style={{ width: "40%", background: "linear-gradient(90deg, #10b981, #f59e0b, #ef4444)" }}
        />
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full opacity-50"
          style={{ background: "linear-gradient(90deg, #10b981, #f59e0b, #ef4444)" }}
          initial={{ width: "0%" }}
          whileInView={{ width: "40%" }}
          viewport={{ once: true }}
          transition={{ duration: 0, delay: 0 }}
        />
        {/* Full coloured bg */}
        <div
          className="absolute inset-0 rounded-full opacity-20"
          style={{ background: "linear-gradient(90deg, #10b981 0%, #10b981 33%, #f59e0b 33%, #f59e0b 66%, #ef4444 66%)" }}
        />
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-white shadow-md"
          style={{ backgroundColor: color }}
          initial={{ left: "0%" }}
          whileInView={{ left: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: "easeOut", delay: delay + 0.3 }}
        />
      </div>
    </motion.div>
  );
}

export default function ClinicalDashboard() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  const cardSpotlight = useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, rgba(0,165,168,0.06), transparent 75%)`;

  const { ref: scoreRef, value: scoreVal } = useCountUp(85, 1.8, 0.5);
  const sparkData = [62, 67, 71, 69, 75, 78, 82, 80, 85];

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative py-28 px-6 lg:px-8 bg-[#F8FAFB] overflow-hidden"
    >
      {/* Background grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,165,168,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,165,168,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Ambient orbs */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-teal/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-8%] w-[400px] h-[400px] bg-indigo-500/4 rounded-full blur-[120px] pointer-events-none" />

      {/* Global mouse spotlight */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        style={{ background: cardSpotlight }}
      />

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
            <span className="text-teal text-[10px] font-extrabold tracking-[0.18em] uppercase">Clinical Intelligence</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-[#0B1D3A] mb-6 leading-[1.1] tracking-tight"
          >
            Not Just a Blood Test.{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal via-[#00C8CB] to-teal-light">
                A Complete Clinical Picture.
              </span>
              {/* underline accent */}
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-teal to-teal-light origin-left block"
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Every blood panel processed through our London Medical Laboratory integration returns more than numbers. ARIXA delivers a comprehensive dashboard that transforms raw biomarker data into actionable insight.
          </motion.p>
        </div>

        {/* ── BENTO GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14 group/grid">

          {/* ── CARD 1: SUMMARY ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative bg-white border border-gray-200/80 rounded-[1.75rem] p-8 lg:p-10 flex flex-col overflow-hidden
                       hover:border-teal/40 hover:shadow-[0_24px_50px_-16px_rgba(0,165,168,0.18)] hover:-translate-y-1.5
                       hover:!opacity-100 group-hover/grid:opacity-60 transition-all duration-500 group/card"
          >
            {/* Card-level ambient */}
            <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{ background: "radial-gradient(400px circle at 60% 20%, rgba(0,165,168,0.05), transparent 70%)" }} />
            {/* Top accent stripe */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute top-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-teal/40 to-transparent origin-center"
            />

            <div className="flex items-center gap-4 mb-5 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-teal/8 border border-teal/15 flex items-center justify-center text-teal group-hover/card:scale-110 group-hover/card:bg-teal/12 transition-all duration-500">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-[#0B1D3A] leading-none">Summary</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-0.5">Clinician-authored narrative</p>
              </div>
            </div>

            <p className="text-slate-500 leading-relaxed mb-8 flex-grow relative z-10 text-[0.9rem]">
              A clinician-reviewed narrative highlighting significant findings, key trends since the previous test, and an overall health score.
            </p>

            {/* Living UI: Health Score with sparkline */}
            <div className="mt-auto bg-[#F8FAFB] rounded-2xl p-5 border border-gray-100 relative z-10 group-hover/card:border-teal/20 transition-colors">
              <div className="flex items-end justify-between mb-1">
                <div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-2">Overall Health Score</div>
                  <div className="flex items-baseline gap-1">
                    <span ref={scoreRef} className="text-4xl font-heading font-extrabold text-[#0B1D3A] tabular-nums">{scoreVal}</span>
                    <span className="text-sm font-medium text-slate-400">/100</span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-1.5">
                    <ArrowUpRight className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-[11px] font-bold text-emerald-600">+7 pts this quarter</span>
                  </div>
                </div>

                {/* Sparkline */}
                <div className="opacity-80">
                  <Sparkline data={sparkData} color="#00A5A8" />
                </div>
              </div>

              {/* Progress bar */}
              <div className="mt-4 h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  whileInView={{ width: "85%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.6, ease: "easeOut", delay: 0.5 }}
                  className="h-full rounded-full bg-gradient-to-r from-teal to-[#00D4D8]"
                />
              </div>
            </div>
          </motion.div>

          {/* ── CARD 2: RESULTS ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative bg-white border border-gray-200/80 rounded-[1.75rem] p-8 lg:p-10 flex flex-col overflow-hidden
                       hover:border-teal/40 hover:shadow-[0_24px_50px_-16px_rgba(0,165,168,0.18)] hover:-translate-y-1.5
                       hover:!opacity-100 group-hover/grid:opacity-60 transition-all duration-500 group/card"
          >
            <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{ background: "radial-gradient(400px circle at 40% 80%, rgba(0,165,168,0.05), transparent 70%)" }} />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute top-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-teal/40 to-transparent origin-center"
            />

            <div className="flex items-center gap-4 mb-5 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-teal/8 border border-teal/15 flex items-center justify-center text-teal group-hover/card:scale-110 group-hover/card:bg-teal/12 transition-all duration-500">
                <BarChart2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-[#0B1D3A] leading-none">Results</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-0.5">Visual biomarker ranges</p>
              </div>
            </div>

            <p className="text-slate-500 leading-relaxed mb-8 flex-grow relative z-10 text-[0.9rem]">
              Every biomarker displayed with visual range indicators showing exactly where the patient sits relative to clinical reference ranges.
            </p>

            {/* Living UI: Multiple biomarker rows */}
            <div className="mt-auto bg-[#F8FAFB] rounded-2xl p-5 border border-gray-100 relative z-10 group-hover/card:border-teal/20 transition-colors space-y-4">
              <BiomarkerRow label="HbA1c" value="38" unit="mmol/mol" pct={28} color="#10b981" delay={0.2} />
              <BiomarkerRow label="Ferritin" value="142" unit="μg/L" pct={55} color="#f59e0b" delay={0.35} />
              <BiomarkerRow label="LDL Chol." value="4.1" unit="mmol/L" pct={72} color="#ef4444" delay={0.5} />
            </div>
          </motion.div>

          {/* ── CARD 3: PATTERNS ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative bg-white border border-gray-200/80 rounded-[1.75rem] p-8 lg:p-10 flex flex-col overflow-hidden
                       hover:border-teal/40 hover:shadow-[0_24px_50px_-16px_rgba(0,165,168,0.18)] hover:-translate-y-1.5
                       hover:!opacity-100 group-hover/grid:opacity-60 transition-all duration-500 group/card"
          >
            <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{ background: "radial-gradient(400px circle at 70% 70%, rgba(99,102,241,0.04), transparent 70%)" }} />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute top-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent origin-center"
            />

            <div className="flex items-center gap-4 mb-5 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-500 group-hover/card:scale-110 group-hover/card:bg-indigo-100/60 transition-all duration-500">
                <BrainCircuit className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-[#0B1D3A] leading-none">Patterns</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-0.5">AI cross-panel analysis</p>
              </div>
            </div>

            <p className="text-slate-500 leading-relaxed mb-8 flex-grow relative z-10 text-[0.9rem]">
              AI-powered cross-panel analysis that identifies clinical patterns invisible when markers are viewed individually.
            </p>

            {/* Living UI: Multi-node connection visual */}
            <div className="mt-auto bg-[#F8FAFB] rounded-2xl p-5 border border-gray-100 relative z-10 group-hover/card:border-indigo-200/50 transition-colors">
              {/* Pulse ring */}
              <div className="relative flex items-center gap-4">
                <div className="relative w-14 h-14 flex-shrink-0 flex items-center justify-center">
                  <motion.div animate={{ scale: [1, 1.7, 2.4], opacity: [0.4, 0.15, 0] }} transition={{ repeat: Infinity, duration: 2.2, ease: "easeOut" }}
                    className="absolute inset-0 bg-indigo-400 rounded-full" />
                  <motion.div animate={{ scale: [1, 1.4, 1.8], opacity: [0.3, 0.1, 0] }} transition={{ repeat: Infinity, duration: 2.2, ease: "easeOut", delay: 0.4 }}
                    className="absolute inset-0 bg-indigo-400 rounded-full" />
                  <div className="relative z-10 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center border border-indigo-200">
                    <BrainCircuit className="w-5 h-5 text-indigo-500" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="text-sm font-bold text-[#0B1D3A]">Metabolic Pattern Detected</div>
                  <div className="text-xs text-slate-400 mt-1 leading-relaxed">Liver enzymes + Iron markers + HbA1c suggest unified clinical picture requiring coordinated review.</div>
                  <div className="flex items-center gap-1.5 mt-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-500">3 markers correlated</span>
                    <Activity className="w-3 h-3 text-indigo-400" />
                  </div>
                </div>
              </div>

              {/* Connected tag nodes */}
              <div className="flex gap-2 mt-4 flex-wrap">
                {["ALT/AST", "Ferritin", "HbA1c"].map((tag, i) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.12, type: "spring", stiffness: 300 }}
                    className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── CARD 4: ACTIONS ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative bg-white border border-gray-200/80 rounded-[1.75rem] p-8 lg:p-10 flex flex-col overflow-hidden
                       hover:border-teal/40 hover:shadow-[0_24px_50px_-16px_rgba(0,165,168,0.18)] hover:-translate-y-1.5
                       hover:!opacity-100 group-hover/grid:opacity-60 transition-all duration-500 group/card"
          >
            <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{ background: "radial-gradient(400px circle at 30% 30%, rgba(239,68,68,0.03), transparent 70%)" }} />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute top-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-red-400/25 to-transparent origin-center"
            />

            <div className="flex items-center gap-4 mb-5 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-500 group-hover/card:scale-110 group-hover/card:bg-red-100/60 transition-all duration-500">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-[#0B1D3A] leading-none">Actions</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-0.5">Prioritised recommendations</p>
              </div>
            </div>

            <p className="text-slate-500 leading-relaxed mb-8 flex-grow relative z-10 text-[0.9rem]">
              Prioritised clinical recommendations ranked by urgency: Urgent, Important, Follow Up, and Lifestyle.
            </p>

            {/* Living UI: 4-tier action list */}
            <div className="mt-auto bg-[#F8FAFB] rounded-2xl p-4 border border-gray-100 relative z-10 group-hover/card:border-red-100/60 transition-colors space-y-2.5">
              {[
                { color: "red", pulse: true, label: "Urgent", sub: "Repeat LDL within 48 hours", time: "48h" },
                { color: "amber", pulse: false, label: "Important", sub: "Referral to endocrinology", time: "2 wks" },
                { color: "sky", pulse: false, label: "Follow Up", sub: "Retest ferritin at 6 weeks", time: "6 wks" },
                { color: "emerald", pulse: false, label: "Lifestyle", sub: "Dietary iron optimisation", time: "Ongoing" },
              ].map(({ color, pulse, label, sub, time }, i) => {
                const bg: Record<string, string> = { red: "bg-red-50 border-red-100", amber: "bg-amber-50 border-amber-100", sky: "bg-sky-50 border-sky-100", emerald: "bg-emerald-50 border-emerald-100" };
                const dot: Record<string, string> = { red: "bg-red-500", amber: "bg-amber-500", sky: "bg-sky-500", emerald: "bg-emerald-500" };
                const text: Record<string, string> = { red: "text-red-800", amber: "text-amber-800", sky: "text-sky-800", emerald: "text-emerald-800" };
                const sub_text: Record<string, string> = { red: "text-red-600", amber: "text-amber-600", sky: "text-sky-600", emerald: "text-emerald-600" };
                return (
                  <motion.div
                    key={label}
                    initial={{ x: -16, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                    className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl border ${bg[color]}`}
                  >
                    <span className={`w-2 h-2 rounded-full flex-shrink-0 ${dot[color]} ${pulse ? "animate-pulse" : ""}`} />
                    <div className="flex-1 min-w-0">
                      <span className={`text-[11px] font-extrabold uppercase tracking-wider ${text[color]}`}>{label}</span>
                      <p className={`text-[10px] ${sub_text[color]} opacity-75 mt-0.5 truncate`}>{sub}</p>
                    </div>
                    <span className={`text-[10px] font-bold ${text[color]} opacity-60 flex-shrink-0`}>{time}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>

        {/* ── FOOTER STRIP ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="relative bg-[#0B1D3A] rounded-[1.75rem] px-8 py-7 overflow-hidden"
        >
          {/* Internal glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-20%,rgba(0,165,168,0.22),transparent_65%)] pointer-events-none" />
          {/* Subtle grid */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

          <div className="relative z-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {features.map(({ label, icon: Icon }, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + idx * 0.07 }}
                className="flex items-center gap-2.5 group/feat"
              >
                <div className="w-7 h-7 rounded-lg bg-teal/15 border border-teal/20 flex items-center justify-center group-hover/feat:bg-teal/25 group-hover/feat:border-teal/40 transition-all duration-300">
                  <Icon className="w-3.5 h-3.5 text-teal" />
                </div>
                <span className="text-white/80 text-[0.8rem] font-semibold tracking-wide group-hover/feat:text-white transition-colors duration-200">{label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}