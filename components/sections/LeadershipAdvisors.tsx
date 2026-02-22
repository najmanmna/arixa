"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import type { Variants } from "framer-motion";
import { User, Briefcase, Network, ShieldCheck, ArrowUpRight } from "lucide-react";
import React from "react";

// LEADERSHIP DATA
const leadership = [
  {
    name: "Ari Sheraton",
    role: "Chief Executive Officer",
    bio: "Founder and visionary behind ARIXA. Background in healthcare operations and digital transformation.",
    icon: Network,
  },
  {
    name: "James Whitfield",
    role: "Chief Technology Officer",
    bio: "Leads platform architecture and engineering. Specialist in scalable healthcare systems and data security.",
    icon: ShieldCheck,
  },
  {
    name: "Sarah Mitchell",
    role: "Chief Operating Officer",
    bio: "Drives operational excellence and client implementation. Former NHS digital programme lead.",
    icon: Briefcase,
  },
  {
    name: "Dr. Priya Kapoor",
    role: "Head of Clinical Governance",
    bio: "Ensures clinical integrity across the platform. Practising pharmacist with 15 years in regulatory affairs.",
    icon: User,
  }
];

// ADVISORS DATA
const advisors = [
  {
    name: "Prof. Richard Deane",
    tag: "Regulatory & Policy",
    bio: "Former Chief Pharmaceutical Officer. Expert in UK pharmacy regulation and GPhC policy frameworks.",
  },
  {
    name: "David Chen",
    tag: "Health-Tech & Scale",
    bio: "Serial health-tech entrepreneur. Led two successful SaaS exits in clinical operations. Advises on product-market fit.",
  },
  {
    name: "Dr. Elena Vasquez",
    tag: "Clinical & GLP-1",
    bio: "Leading obesity medicine specialist. Advisor on GLP-1 clinical protocols, NICE pathway adherence, and prescribing.",
  }
];

export default function LeadershipAdvisors() {
  // --- MOUSE TRACKING SPOTLIGHT (Light Theme) ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Soft spotlights that glide over the white section
  const sectionSpotlight = useMotionTemplate`radial-gradient(800px circle at ${mouseX}px ${mouseY}px, rgba(0, 165, 168, 0.03), transparent 80%)`;
  const cardSpotlight = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(0, 165, 168, 0.06), transparent 80%)`;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section 
      id="about" 
      onMouseMove={handleMouseMove}
      className="py-24 px-6 lg:px-8 bg-white relative overflow-hidden group/section"
    >
      {/* GLOBAL SPOTLIGHT & NOISE */}
      <motion.div 
        // ADD transform-gpu HERE:
        className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-500 opacity-0 group-hover/section:opacity-100 transform-gpu" 
        style={{ background: sectionSpotlight }} 
      />
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ================= LEADERSHIP SECTION ================= */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-teal text-xs font-bold tracking-[0.2em] uppercase mb-4"
          >
            Our Team
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl font-extrabold text-navy mb-6 tracking-tight"
          >
            Leadership
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-slate-light text-lg font-light"
          >
            The team building the governance infrastructure for modern healthcare.
          </motion.p>
        </div>

        {/* group/grid for focus dimming on hover */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-32 group/grid"
        >
          {leadership.map((leader, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants} 
              className="group/card flex flex-col items-center text-center transition-all duration-500 hover:!opacity-100 group-hover/grid:opacity-40"
            >
              {/* Premium Frosted Avatar Placeholder */}
              <div className="w-40 h-40 mb-8 rounded-[2rem] bg-slate-50 border border-gray-200/60 flex items-center justify-center relative overflow-hidden transition-all duration-500 group-hover/card:shadow-[0_20px_40px_-15px_rgba(0,165,168,0.2)] group-hover/card:-translate-y-2 group-hover/card:border-teal/30">
                {/* Interactive Inner Glow */}
                <motion.div 
                  className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"
                  style={{ background: cardSpotlight }}
                />
                
                {/* Animated Icon Wrapper */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center group-hover/card:scale-110 transition-transform duration-500">
                   <leader.icon className="w-7 h-7 text-slate-300 group-hover/card:text-teal transition-colors duration-500" />
                </div>

                {/* Linking Arrow that appears on hover */}
                <div className="absolute top-4 right-4 opacity-0 group-hover/card:opacity-100 translate-y-2 group-hover/card:translate-y-0 transition-all duration-500">
                  <ArrowUpRight className="w-4 h-4 text-teal/50" />
                </div>
              </div>
              
              <h4 className="font-heading font-bold text-navy text-xl mb-1">{leader.name}</h4>
              <p className="text-teal font-semibold text-sm mb-4 tracking-wide">{leader.role}</p>
              <p className="text-slate-light text-sm leading-relaxed max-w-[260px]">{leader.bio}</p>
            </motion.div>
          ))}
        </motion.div>


        {/* ================= ADVISORS SECTION ================= */}
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-teal text-xs font-bold tracking-[0.2em] uppercase mb-4"
          >
            Strategic Guidance
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl font-extrabold text-navy tracking-tight"
          >
            Advisors
          </motion.h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto group/grid2"
        >
          {advisors.map((advisor, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="relative bg-slate-50 border border-gray-200/60 rounded-3xl p-8 hover:bg-white hover:border-teal/30 hover:shadow-[0_20px_40px_-15px_rgba(0,165,168,0.15)] hover:-translate-y-1 hover:!opacity-100 group-hover/grid2:opacity-50 transition-all duration-500 group/card overflow-hidden"
            >
              {/* Top Animated Accent Line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-teal-light to-teal group-hover/card:w-full transition-all duration-500 ease-out" />

              <motion.div 
                className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"
                style={{ background: cardSpotlight }}
              />

              <div className="relative z-10 mb-6 flex flex-col items-start gap-4">
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-gray-100 text-teal text-xs font-bold tracking-wide shadow-sm group-hover/card:bg-teal/5 transition-colors">
                  {advisor.tag}
                </div>
                <h4 className="font-heading font-bold text-navy text-xl">{advisor.name}</h4>
              </div>
              <p className="relative z-10 text-slate-light text-sm leading-relaxed">
                {advisor.bio}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}