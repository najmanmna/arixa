"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowUpRight, Users, ShieldCheck } from "lucide-react";
import React from "react";
import Image from "next/image";

// REAL LEADERSHIP DATA
const leadership = [
  {
    name: "Seeve Nair",
    role: "Chief Executive Officer",
    // Updated branding to 10QRX
    bio: "Founder and CEO of 10QRX Health. Driving the vision to build the governance infrastructure for modern healthcare.",
    image: "/team/Seeve.jpeg",
  },
  {
    name: "Sanj Chandran",
    role: "Chief Technology Officer",
    bio: "Leads platform architecture and engineering. Building scalable, secure healthcare infrastructure for the UK market.",
    image: "/team/sanj.png", 
  }
];

// REAL ADVISORS DATA
const advisors = [
  {
    name: "Arnold Anand",
    tag: "Financial & Governance",
    // Updated branding to 10QRX
    bio: "Co-Senior Partner at BBK Partnership, a London-based chartered accountancy firm he helped build from a sole practice into a multi-office operation spanning the UK and Sri Lanka. An Oxford Saïd Business School alumnus with deep expertise in international tax planning and business structuring, Arnold has spent over three decades advising businesses through growth and regulatory complexity. Arnold advises 10QRX on financial architecture, commercial structuring, and governance frameworks.",
    image: "/team/arnold-anand.png", 
  },
  {
    name: "Dr. Neesha Patel",
    tag: "Clinical Psychology",
    // Updated branding to 10QRX
    bio: "Chartered Health Psychologist (HCPC-regulated), founder of Evoking Health Ltd, and specialist in GLP-1 weight management support. With a PhD in diabetes psychology and over a decade of NHS and private practice experience, Dr. Patel designed 10QRX’s rebound prevention programme — the evidence-based protocol that supports long-term treatment sustainability.",
    image: "/team/neesha-patel.png", 
  }
];

export default function LeadershipAdvisors() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const sectionSpotlight = useMotionTemplate`radial-gradient(800px circle at ${mouseX}px ${mouseY}px, rgba(0, 234, 255, 0.04), transparent 80%)`;
  const cardSpotlight = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(0, 234, 255, 0.08), transparent 80%)`;

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
      /* Seamless Ice-Blue Blend */
      className="py-24 lg:py-32 px-6 lg:px-8 bg-gradient-to-b from-[#E0F9FB]/40 to-white relative overflow-hidden group/section border-t border-slate-100"
    >
      {/* ── ATMOSPHERIC BACKGROUND ── */}
      <motion.div className="absolute inset-0 pointer-events-none z-0" style={{ background: sectionSpotlight }} />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #0B2545 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ================= LEADERSHIP SECTION ================= */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-teal/15 shadow-sm backdrop-blur-md mb-8"
          >
            <Users className="w-4 h-4 text-teal-dark" />
            <span className="text-navy text-[10px] font-extrabold tracking-widest uppercase">The Team</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy mb-8 tracking-tight leading-[1.1]"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-dark via-teal to-teal-dark">Leadership</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed"
          >
            Building the structured infrastructure for modern healthcare.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto mb-32 group/grid"
        >
          {leadership.map((leader, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants} 
              className="group/card flex flex-col items-center text-center transition-all duration-500 hover:!opacity-100 group-hover/grid:opacity-40"
            >
              {/* Image Container: Premium Glass Frame */}
              <div className="w-48 h-48 md:w-56 md:h-56 mb-8 rounded-[2.5rem] bg-white border border-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative overflow-hidden transition-all duration-700 group-hover/card:shadow-[0_25px_50px_-15px_rgba(0,234,255,0.2)] group-hover/card:-translate-y-2 group-hover/card:border-teal/30">
                
                <Image 
                  src={leader.image} 
                  alt={leader.name} 
                  fill 
                  className="object-cover transition-all duration-700 grayscale group-hover/card:grayscale-0 group-hover/card:scale-105"
                  sizes="(max-width: 768px) 192px, 224px"
                />

                <motion.div 
                  className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 mix-blend-overlay"
                  style={{ background: cardSpotlight }}
                />

                <div className="absolute z-20 top-4 right-4 opacity-0 group-hover/card:opacity-100 translate-y-2 group-hover/card:translate-y-0 transition-all duration-500 bg-navy/90 backdrop-blur-md p-1.5 rounded-full border border-teal/20">
                  <ArrowUpRight className="w-4 h-4 text-teal" />
                </div>
              </div>
              
              <h4 className="font-heading font-bold text-navy text-2xl lg:text-3xl mb-1">{leader.name}</h4>
              <p className="text-teal-dark font-bold text-xs lg:text-sm mb-4 tracking-widest uppercase">{leader.role}</p>
              <p className="text-slate-600 font-medium text-sm lg:text-base leading-relaxed max-w-[320px]">{leader.bio}</p>
            </motion.div>
          ))}
        </motion.div>


        {/* ================= ADVISORS SECTION ================= */}
        {/* <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-navy border border-navy shadow-sm mb-6"
          >
            <ShieldCheck className="w-4 h-4 text-teal" />
            <span className="text-white text-[10px] font-bold tracking-[0.2em] uppercase">Strategic Guidance</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight"
          >
            Advisors
          </motion.h2>
        </div> */}

        {/* <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto group/grid2"
        >
          {advisors.map((advisor, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="relative bg-white/60 backdrop-blur-xl border border-white rounded-[2rem] p-8 lg:p-10 hover:bg-white/80 hover:border-teal/30 hover:shadow-[0_20px_40px_-15px_rgba(0,165,168,0.15)] hover:-translate-y-1 hover:!opacity-100 group-hover/grid2:opacity-60 transition-all duration-500 group/card overflow-hidden flex flex-col"
            >
         
              <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-teal-dark via-teal to-teal-dark group-hover/card:w-full transition-all duration-500 ease-out" />

              <motion.div 
                className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"
                style={{ background: cardSpotlight }}
              />

              <div className="relative z-10 mb-8 flex items-center gap-6 border-b border-slate-200/50 pb-8">
           
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-navy overflow-hidden relative border-2 border-white shadow-[0_4px_15px_rgba(0,0,0,0.1)] flex-shrink-0 group-hover/card:border-teal/40 transition-all duration-500">
                  <Image 
                    src={advisor.image} 
                    alt={advisor.name} 
                    fill 
                    className="object-cover"
                    sizes="(max-width: 768px) 64px, 80px"
                  />
                </div>

                <div>
                  <div className="inline-flex items-center px-3 py-1 mb-2 rounded-full bg-white border border-teal/15 text-teal-dark text-[10px] font-bold tracking-widest uppercase shadow-sm group-hover/card:bg-teal/5 transition-colors">
                    {advisor.tag}
                  </div>
                  <h4 className="font-heading font-extrabold text-navy text-2xl lg:text-3xl">{advisor.name}</h4>
                </div>
              </div>
              
              <p className="relative z-10 text-slate-600 font-medium text-sm lg:text-base leading-relaxed flex-grow">
                {advisor.bio}
              </p>
            </motion.div>
          ))}
        </motion.div> */}

      </div>
    </section>
  );
}