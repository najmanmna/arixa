"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Quote, Building2, Store, CheckCircle2, TrendingUp } from "lucide-react";

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
    // Updated ARIXA to Xflow
    quote: "Xflow provides the clinically structured infrastructure we need to safely scale. The integrated pathways mean we are always prepared for regulatory review.",
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
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="case-studies" className="py-24 px-6 lg:px-8 bg-gray-50 relative overflow-hidden border-y border-gray-200">
      
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal/5 rounded-[100%] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-subtle/50 border border-teal/10 mb-6"
          >
            {/* Updated to text-teal-dark for contrast */}
            <span className="text-teal-dark text-[10px] font-bold tracking-widest uppercase">Client Success</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl font-extrabold text-navy tracking-tight"
          >
            Trusted by Pharmacies & <br className="hidden sm:block" /> Clinics Across the UK
          </motion.h2>
        </div>

        {/* CASE STUDIES GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {caseStudies.map((study, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              /* Added Xflow Electric Cyan hover shadow */
              className="bg-white rounded-[2rem] p-8 lg:p-10 border border-gray-200 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,234,255,0.15)] hover:border-teal/30 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group"
            >
              {/* Header: Icon, Name, Location */}
              <div className="flex items-center gap-5 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:bg-teal-subtle group-hover:border-teal/20 transition-colors duration-300">
                  {/* Updated icon to text-teal-dark */}
                  <study.icon className="w-8 h-8 text-teal-dark" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{study.badge}</div>
                  <h3 className="font-heading font-extrabold text-xl text-navy">{study.name}</h3>
                  <div className="text-sm font-medium text-slate-light">{study.location}</div>
                </div>
              </div>

              {/* Metrics List */}
              <div className="space-y-4 mb-8 flex-grow">
                {study.metrics.map((metric, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    {/* Updated checkmarks to text-teal-dark */}
                    <CheckCircle2 className="w-5 h-5 text-teal-dark mt-0.5 flex-shrink-0" />
                    <span className="text-slate font-medium">{metric}</span>
                  </div>
                ))}
              </div>

              {/* Footer: Quote OR Highlight */}
              <div className="pt-6 border-t border-gray-100 mt-auto">
                {study.quote ? (
                  <div className="relative">
                    {/* Updated quote watermark to text-teal-dark */}
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-teal-dark/10 rotate-180" />
                    <p className="text-slate-light italic leading-relaxed relative z-10 pl-6 mb-4">
                      "{study.quote}"
                    </p>
                    <div className="pl-6">
                      <div className="font-bold text-navy text-sm">{study.author}</div>
                      <div className="text-xs text-slate-400">{study.role}</div>
                    </div>
                  </div>
                ) : study.highlight ? (
                  <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-100 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1">{study.highlight.label}</div>
                      <div className="font-heading font-extrabold text-2xl text-emerald-700">{study.highlight.value}</div>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-emerald-600" />
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