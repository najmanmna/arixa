"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

import { ShieldAlert, FlaskConical, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";

const benefits = [
  {
    title: "Safer prescribing",
    description: "15–20% of patients are identified as unsuitable before treatment starts. That protects them and you.",
    icon: ShieldAlert,
    color: "text-red-500",
    bg: "bg-red-50",
    borderColor: "border-red-100",
  },
  {
    title: "Science, not guesswork",
    description: "15+ biomarkers analysed. Results back in 24–48 hours. Integrated directly into the clinical summary.",
    icon: FlaskConical,
    color: "text-teal",
    bg: "bg-teal-subtle",
    borderColor: "border-teal/20",
  },
  {
    title: "Extra revenue stream",
    description: "£28–£55 margin per test. Patients see more clinical value. You earn more profit per patient.",
    icon: TrendingUp,
    color: "text-emerald-500",
    bg: "bg-emerald-50",
    borderColor: "border-emerald-100",
  }
];

export default function ClinicalDashboard() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="diagnostics" className="py-24 px-6 lg:px-8 bg-white relative overflow-hidden">
      
      {/* Subtle Background Elements */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />
      <div className="absolute -right-40 -top-40 w-96 h-96 bg-teal/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-teal" />
            <span className="text-slate text-[10px] font-bold tracking-widest uppercase">London Medical Laboratory</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl font-extrabold text-navy tracking-tight mb-6"
          >
            Blood Tests Built In. <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-teal-light">Not Bolted On.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-light text-lg leading-relaxed font-medium max-w-2xl"
          >
            Most GLP-1 providers skip blood tests and just hand out a questionnaire. We don’t. Every ARIXA patient gets a comprehensive blood panel integrated directly into your workflow.
          </motion.p>
        </div>

        {/* 3-COLUMN GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              className={`bg-white border ${benefit.borderColor} rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group`}
            >
              <div className={`w-14 h-14 rounded-2xl ${benefit.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
              </div>
              
              <h3 className="font-heading text-xl font-bold text-navy mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-slate-light leading-relaxed text-sm">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* LINK TO FULL DASHBOARD (As requested in brief) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center md:text-left"
        >
          <Link href="/clinical-intelligence" className="inline-flex items-center gap-2 text-sm font-bold text-teal hover:text-teal-light transition-colors group">
            See the full Clinical Intelligence Dashboard 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}