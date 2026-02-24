"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Quote, Building2, Store, CheckCircle2, TrendingUp } from "lucide-react";

const caseStudies = [
  {
    badge: "Weight Management Clinic",
    name: "Harley Weight Loss Clinic",
    location: "20+ UK locations",
    icon: Building2,
    metrics: [
      "95% patient retention rate",
      "2-minute clinical reviews enabling scale",
      "Full compliance across all sites"
    ],
    quote: "ARIXA has completely transformed how we deliver our weight management services.",
    author: "Warren Vaheeswaran",
    role: "CEO, Harley Weight Loss Clinic"
  },
  {
    badge: "Independent Pharmacy",
    name: "Independent Pharmacy",
    location: "Manchester, UK",
    icon: Store,
    metrics: [
      "47 new clinical patients in 6 months",
      "£38,000 additional gross profit",
      "Governance framework gave confidence from day one"
    ],
    // For the second card, instead of a quote, we highlight the ROI
    highlight: {
      label: "Profit Generated",
      value: "£38,000"
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
            <span className="text-teal text-[10px] font-bold tracking-widest uppercase">Client Success</span>
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
              className="bg-white rounded-[2rem] p-8 lg:p-10 border border-gray-200 shadow-sm hover:shadow-xl hover:border-teal/20 transition-all duration-300 flex flex-col h-full group"
            >
              {/* Header: Icon, Name, Location */}
              <div className="flex items-center gap-5 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:bg-teal-subtle group-hover:border-teal/20 transition-colors duration-300">
                  <study.icon className="w-8 h-8 text-teal" />
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
                    <CheckCircle2 className="w-5 h-5 text-teal mt-0.5 flex-shrink-0" />
                    <span className="text-slate font-medium">{metric}</span>
                  </div>
                ))}
              </div>

              {/* Footer: Quote OR Highlight */}
              <div className="pt-6 border-t border-gray-100 mt-auto">
                {study.quote ? (
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-teal/10 rotate-180" />
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