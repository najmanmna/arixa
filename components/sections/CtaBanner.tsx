"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Sparkles, ShieldCheck } from "lucide-react";
import React from "react";

export default function CtaBanner() {
  return (
    <section 
      id="contact" 
      /* Using 10QRX Deep Navy Dark */
      className="relative py-24 sm:py-32 px-6 lg:px-8 bg-[#01021C] overflow-hidden border-t border-white/10"
    >
      {/* ── 1. ATMOSPHERIC ELEMENTS ── */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal/5 rounded-full blur-[100px] -translate-x-1/4 translate-y-1/3 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* ── LEFT COLUMN: Copy & Readiness Review ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Badge - Neon Teal Pop */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal/10 border border-teal/20 text-teal text-[10px] font-bold tracking-[0.2em] uppercase mb-8 shadow-sm backdrop-blur-md">
              <Sparkles className="w-3 h-3" />
              Scale Safely
            </div>

            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
              Ready to Prescribe <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal via-white to-teal bg-[length:200%_auto] animate-[shimmer_5s_infinite_linear]">Without the Chaos?</span>
            </h2>
            
            <p className="text-lg text-slate-300 mb-10 max-w-md leading-relaxed font-light">
              Book a live demo to see the platform in action, or schedule a free 10QRX Readiness Review to identify your current compliance gaps.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-5 mb-12">
              {/* Secondary CTA: Readiness Review - Updated email to 10qrx.com */}
              <a 
                href="mailto:admin@10qrx.com?subject=GLP-1 Readiness Review Request" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-md group"
              >
                <ShieldCheck className="w-5 h-5 text-teal group-hover:scale-110 transition-transform" />
                Free Readiness Review
              </a>
            </div>

            {/* Pricing Anchor */}
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm shadow-inner">
               <div className="relative flex h-2 w-2">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-teal"></span>
               </div>
               <p className="text-slate-400 text-xs font-bold tracking-widest uppercase">
                 Tailored Implementation <span className="mx-3 text-white/10">|</span> Live in 14 days
               </p>
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN: The Booking Widget ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-md mx-auto lg:ml-auto"
          >
            {/* Glass frame for the embed */}
            <div className="relative bg-white/[0.02] border border-white/10 rounded-[2rem] p-4 backdrop-blur-xl shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
              {/* Decorative Mac toolbar */}
              <div className="flex items-center gap-2 px-4 pb-4 pt-2 border-b border-white/5 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
                <span className="ml-auto text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <Calendar className="w-3 h-3" /> Select a Time
                </span>
              </div>

              {/* CALENDLY EMBED CONTAINER */}
              <div className="w-full h-[450px] rounded-xl overflow-hidden bg-white">
                {/* Updated calendly link to 10qrx */}
                <iframe
                  src="https://calendly.com/10qrx/demo?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=00eaff"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Schedule a Demo"
                ></iframe>
              </div>
            </div>

            {/* Background glow for the widget */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-teal/20 blur-[100px] -z-10 rounded-full" />
          </motion.div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}} />
    </section>
  );
}