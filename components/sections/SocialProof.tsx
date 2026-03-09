"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Quote, Building2, Store, CheckCircle2, TrendingUp, Users } from "lucide-react";

const caseStudies = [
  {
    badge: "Weight Management Clinic",
    name: "Partner Clinic",
    location: "UK Locations",
    icon: Building2,
    metrics: [
      "Structured patient journeys",
      "Streamlined clinical workflows",
      "Audit-ready documentation across all sites"
    ],
    quote: "10QRX provides the clinically structured infrastructure we need to safely scale. The integrated pathways mean we are always prepared for regulatory review.",
    author: "Clinical Director",
    role: "Partner Weight Management Clinic"
  },
  {
    badge: "Independent Pharmacy",
    name: "Independent Pharmacy",
    location: "Manchester, UK",
    icon: Store,
    metrics: [
      "Expanded clinical patient base",
      "Integrated blood diagnostics",
      "Infrastructure built to support governance"
    ],
    highlight: {
      label: "Service Growth",
      value: "Scalable Pathways"
    }
  }
];

export default function SocialProof() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    // Slide Optimization: min-h-screen + flex justify-center
    <section id="case-studies" className="min-h-screen w-full flex flex-col justify-center py-12 lg:py-16 bg-gradient-to-b from-white to-[#E0F9FB]/50 relative overflow-hidden">
      
      {/* ── ATMOSPHERIC BACKGROUND ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-teal/5 rounded-[100%] blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #0B2545 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        
        {/* HEADER (Optimised Spacing) */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-teal/15 shadow-sm mb-6 backdrop-blur-md"
          >
            <Users className="w-3.5 h-3.5 text-teal-dark" />
            <span className="text-navy text-[10px] font-bold tracking-widest uppercase">Client Success</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-5xl lg:text-6xl font-extrabold text-navy tracking-tight leading-[1.1]"
          >
            Trusted by Pharmacies & <br className="hidden sm:block" /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-dark via-teal to-teal-dark">
              Clinics Across the UK
            </span>
          </motion.h2>
        </div>

        {/* CASE STUDIES GRID (High Density) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 group/grid"
        >
          {caseStudies.map((study, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              className="bg-white/60 backdrop-blur-xl rounded-[2rem] p-6 lg:p-10 border border-white shadow-sm hover:bg-white/80 hover:border-teal/30 hover:shadow-[0_15px_35px_-10px_rgba(0,165,168,0.15)] hover:-translate-y-1 group-hover/grid:opacity-60 hover:!opacity-100 transition-all duration-500 flex flex-col h-full group/card"
            >
              {/* Header: Icon, Name, Location */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-2xl bg-navy border border-navy flex items-center justify-center group-hover/card:scale-110 transition-all duration-500 shadow-md">
                  <study.icon className="w-6 h-6 lg:w-8 lg:h-8 text-teal drop-shadow-[0_0_8px_rgba(0,234,255,0.6)]" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{study.badge}</div>
                  <h3 className="font-heading font-extrabold text-xl lg:text-2xl text-navy leading-tight">{study.name}</h3>
                  <div className="text-xs font-bold text-teal-dark opacity-80">{study.location}</div>
                </div>
              </div>

              {/* Metrics List (Compact) */}
              <div className="space-y-4 mb-8 flex-grow">
                {study.metrics.map((metric, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-teal shadow-[0_0_5px_rgba(0,234,255,0.4)] mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600 font-medium text-sm lg:text-base leading-relaxed">{metric}</span>
                  </div>
                ))}
              </div>

              {/* Footer (Optimised Height) */}
              <div className="pt-6 border-t border-slate-200/50 mt-auto">
                {study.quote ? (
                  <div className="relative">
                    <Quote className="absolute -top-3 -left-2 w-8 h-8 text-teal/10 rotate-180" />
                    <p className="text-slate-600 font-medium italic leading-relaxed relative z-10 pl-6 mb-4 text-base">
                      "{study.quote}"
                    </p>
                    <div className="pl-6">
                      <div className="font-heading font-bold text-navy text-sm">{study.author}</div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{study.role}</div>
                    </div>
                  </div>
                ) : study.highlight ? (
                  <div className="bg-white rounded-xl p-4 border border-teal/15 shadow-sm flex items-center justify-between group-hover/card:bg-teal/5 transition-colors">
                    <div>
                      <div className="text-[9px] font-bold text-teal-dark uppercase tracking-widest mb-1">{study.highlight.label}</div>
                      <div className="font-heading font-extrabold text-xl text-navy">{study.highlight.value}</div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-teal-dark" />
                    </div>
                  </div>
                ) : null}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}