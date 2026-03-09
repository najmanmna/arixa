"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Store, Globe, Stethoscope, Network, Users } from "lucide-react";

const targetAudiences = [
  {
    title: "Independent Pharmacies",
    description: "10QRX provides the clinically structured infrastructure you need to say yes safely.",
    feature: "Live in 14 days",
    icon: Store,
  },
  {
    title: "Online Pharmacies",
    description: "Automate the entire funnel from intake to dispensing with audit-ready documentation.",
    feature: "API-first integration",
    icon: Globe,
  },
  {
    title: "Weight Clinics",
    description: "Streamline clinical review with patient summaries, reducing administrative burden.",
    feature: "Optimised Workflows",
    icon: Stethoscope,
  },
  {
    title: "Pharmacy Networks",
    description: "Roll out GLP-1 services across 50+ sites with centralised visibility and reporting.",
    feature: "Enterprise dashboard",
    icon: Network,
  }
];

export default function WhoIsThisFor() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    // min-h-screen + justify-center makes it feel like a professional slide
    <section className="min-h-screen w-full flex flex-col justify-center py-12 lg:py-20 bg-gradient-to-b from-[#E0F9FB] via-[#E0F9FB]/40 to-white relative overflow-hidden">
      
      {/* ── ATMOSPHERIC BACKGROUND ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(circle, #0B2545 1.5px, transparent 1.5px)",
            backgroundSize: "32px 32px",
            maskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)"
          }}
        />
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-white rounded-full blur-[100px] -translate-x-1/3 -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        
        {/* ── SECTION HEADER (Tightened) ── */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-teal/15 shadow-sm backdrop-blur-md mb-4"
          >
            <Users className="w-3.5 h-3.5 text-teal-dark" />
            <span className="text-navy text-[10px] font-bold tracking-widest uppercase">Scalable Infrastructure</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-5xl font-extrabold text-navy tracking-tight mb-4"
          >
            Built for Pharmacies & Clinics <br className="hidden sm:block" /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-dark via-teal to-teal-dark">
              Prescribing GLP-1
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-600 text-base md:text-lg font-medium leading-relaxed"
          >
            Whether you are a single branch or a national network, 10QRX scales to fit.
          </motion.p>
        </div>

        {/* ── 4-CARD BENTO GRID (Compact) ── */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 group/grid"
        >
          {targetAudiences.map((audience, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              className="group/card relative bg-white/60 backdrop-blur-xl border border-white shadow-sm rounded-3xl p-6 lg:p-8 flex flex-col hover:bg-white/80 hover:border-teal/30 hover:shadow-[0_15px_35px_-10px_rgba(0,165,168,0.15)] hover:-translate-y-1 transition-all duration-500 overflow-hidden"
            >
              <div className="relative z-10 flex-1">
                <div className="w-12 h-12 rounded-xl bg-navy border border-navy shadow-md flex items-center justify-center mb-6 group-hover/card:scale-110 group-hover/card:shadow-[0_8px_20px_rgba(0,234,255,0.3)] transition-all duration-500">
                  <audience.icon className="w-5 h-5 text-teal drop-shadow-[0_0_8px_rgba(0,234,255,0.6)]" />
                </div>
                
                <h3 className="font-heading text-lg font-bold text-navy mb-3 leading-tight">
                  {audience.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed font-medium text-sm mb-6">
                  {audience.description}
                </p>
              </div>

              <div className="relative z-10 mt-auto pt-4 border-t border-slate-200/50 flex items-center justify-start">
                <div className="inline-flex items-center gap-1.5 text-[9px] font-bold text-teal-dark tracking-wide uppercase bg-white border border-teal/15 px-3 py-1.5 rounded-full shadow-sm">
                  <span className="w-1 h-1 rounded-full bg-teal" />
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