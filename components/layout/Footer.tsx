"use client";

import Link from "next/link";
import { Mail, Linkedin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#020617] pt-24 pb-12 px-6 lg:px-8 border-t border-white/5 relative overflow-hidden">
      
      {/* Subtle top accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-teal/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-20">
          
          {/* BRAND COLUMN */}
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2 group mb-6">
              <span className="inline-block w-4 h-4 bg-teal rounded-sm transition-transform group-hover:rotate-45 duration-500 shadow-[0_0_15px_rgba(0,165,168,0.5)]"></span>
              <span className="font-heading font-extrabold text-2xl tracking-tighter text-white">ARIXA</span>
              <span className="text-teal-light text-[10px] font-bold tracking-[0.3em] ml-1 mt-1">HEALTH</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed font-light mb-8">
              The governance infrastructure for UK pharmacies and clinics. Scale your GLP-1 weight management services safely and profitably.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-teal/50 transition-all">
                <Linkedin className="w-5 h-5" />
              </Link>
              <a href="mailto:admin@arixahealth.com" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-teal/50 transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* FOCUSED NAVIGATION */}
          <div className="grid grid-cols-2 gap-12 sm:gap-24">
            <div>
              <h4 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-8">Platform</h4>
              <ul className="space-y-4">
                <li>
                  <Link href="#how-it-works" className="text-slate-400 text-sm hover:text-teal-light transition-colors flex items-center group/link">
                    How It Works
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all" />
                  </Link>
                </li>
                <li>
                  <Link href="#economics" className="text-slate-400 text-sm hover:text-teal-light transition-colors flex items-center group/link">
                    Revenue Calculator
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all" />
                  </Link>
                </li>
                <li>
                  <Link href="/clinical-intelligence" className="text-slate-400 text-sm hover:text-teal-light transition-colors flex items-center group/link">
                    Clinical Intelligence
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all" />
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-8">Company</h4>
              <ul className="space-y-4">
                <li>
                  <Link href="#about" className="text-slate-400 text-sm hover:text-teal-light transition-colors flex items-center group/link">
                    Team & Advisors
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all" />
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-slate-400 text-sm hover:text-teal-light transition-colors flex items-center group/link">
                    Book a Demo
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM LEGAL ROW */}
        <div className="pt-10 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-teal-light shadow-[0_0_8px_rgba(0,201,183,0.8)]" />
            <p className="text-slate-500 text-[11px] font-medium tracking-wide">
              © 2026 ARIXA Health Ltd. London, UK.
            </p>
          </div>
          
          <div className="flex gap-8">
            <Link href="#" className="text-slate-500 text-[11px] hover:text-white transition-colors font-bold tracking-widest uppercase">Privacy</Link>
            <Link href="#" className="text-slate-500 text-[11px] hover:text-white transition-colors font-bold tracking-widest uppercase">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}