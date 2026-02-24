"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Store, Globe, Stethoscope, Network, ArrowRight } from "lucide-react";

const targetAudiences = [
  {
    title: "Independent Pharmacies",
    description: "You’re already getting patients asking about weight loss injections. ARIXA gives you the governance framework to say yes — compliantly.",
    pricing: "From £499/month",
    feature: "Live in 2 weeks",
    icon: Store,
  },
  {
    title: "Online Pharmacies",
    description: "You have traffic but your prescribing workflow is manual and your compliance trail is a mess. ARIXA automates the entire funnel from intake to dispensing.",
    pricing: "From £3,500/month",
    feature: "API-first integration",
    icon: Globe,
  },
  {
    title: "Weight Management Clinics",
    description: "Your clinicians are spending 20 minutes per review when they could see 10x more patients. ARIXA compresses clinical review to 2 minutes without cutting corners.",
    pricing: "From £1,500/month",
    feature: "10x capacity",
    icon: Stethoscope,
  },
  {
    title: "Pharmacy Networks & Chains",
    description: "Roll out GLP-1 services across 5, 10, or 50 sites with centralised governance, consolidated reporting, and consistent protocols.",
    pricing: "Custom pricing",
    feature: "Enterprise dashboard",
    icon: Network,
  }
];

export default function WhoIsThisFor() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <section id="audiences" className="py-24 px-6 lg:px-8 bg-white relative overflow-hidden">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(241,245,249,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(241,245,249,0.5)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl font-extrabold text-navy tracking-tight mb-4"
          >
            Built for Pharmacies & Clinics <br className="hidden sm:block" /> Prescribing GLP-1
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-light text-lg font-medium"
          >
            Whether you are a single high-street branch or a national network, we scale to fit your clinical workflow.
          </motion.p>
        </div>

        {/* 4-CARD GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {targetAudiences.map((audience, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              className="group relative bg-white border border-gray-200 rounded-3xl p-8 lg:p-10 flex flex-col hover:border-teal/30 hover:shadow-[0_20px_40px_-15px_rgba(0,165,168,0.15)] hover:-translate-y-1 transition-all duration-300"
            >
              {/* Subtle hover gradient inside the card */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-subtle/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none" />
              
              <div className="relative z-10 flex-1">
                <div className="w-14 h-14 rounded-2xl bg-teal-subtle/50 border border-teal/10 flex items-center justify-center mb-6 group-hover:bg-teal/10 group-hover:scale-110 transition-all duration-300">
                  <audience.icon className="w-6 h-6 text-teal" />
                </div>
                
                <h3 className="font-heading text-2xl font-bold text-navy mb-3">
                  {audience.title}
                </h3>
                
                <p className="text-slate-light leading-relaxed mb-8">
                  {audience.description}
                </p>
              </div>

              {/* Card Footer: Pricing & Feature */}
              <div className="relative z-10 mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-navy">{audience.pricing}</div>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-teal tracking-wide uppercase bg-teal/5 px-3 py-1.5 rounded-full border border-teal/10">
                  {audience.feature}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}