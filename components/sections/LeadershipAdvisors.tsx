"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import React from "react";
import Image from "next/image";

// REAL LEADERSHIP DATA WITH IMAGES
const leadership = [
  {
    name: "Seeve Nair",
    role: "Chief Executive Officer",
    bio: "Founder and CEO of Xflow Health. Driving the vision to build the governance infrastructure for modern healthcare.",
    image: "/team/Seeve.jpeg",
  },
  {
    name: "Sanj Chandran",
    role: "Chief Technology Officer",
    bio: "Leads platform architecture and engineering. Building scalable, secure healthcare infrastructure for the UK market.",
    image: "/team/sanj.png", 
  }
];

// REAL ADVISORS DATA WITH IMAGES
const advisors = [
  {
    name: "Arnold Anand",
    tag: "Financial & Governance",
    bio: "Co-Senior Partner at BBK Partnership, a London-based chartered accountancy firm he helped build from a sole practice into a multi-office operation spanning the UK and Sri Lanka. An Oxford Saïd Business School alumnus with deep expertise in international tax planning, business structuring, and financial strategy, Arnold has spent over three decades advising businesses through growth, regulatory complexity, and cross-border expansion. His client portfolio includes health tech startups and healthcare providers, giving him a sharp understanding of the financial and governance challenges facing regulated healthcare businesses. Arnold advises Xflow on financial architecture, commercial structuring, and governance frameworks.",
    image: "/team/arnold-anand.png", 
  },
  {
    name: "Dr. Neesha Patel",
    tag: "Clinical Psychology",
    bio: "Chartered Health Psychologist (HCPC-regulated), founder of Evoking Health Ltd, and specialist in GLP-1 weight management support. With a PhD in diabetes psychology and over a decade of NHS and private practice experience, Dr. Patel designed Xflow’s rebound prevention programme — the evidence-based protocol that supports long-term treatment sustainability. Her work focuses on helping patients sustain weight loss long after injections end, tackling fear of regain, food noise, and behavioural change through structured psychological interventions.",
    image: "/team/neesha-patel.png", 
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

  // Updated to Xflow Electric Cyan (0, 234, 255)
  const sectionSpotlight = useMotionTemplate`radial-gradient(800px circle at ${mouseX}px ${mouseY}px, rgba(0, 234, 255, 0.03), transparent 80%)`;
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
      className="py-24 px-6 lg:px-8 bg-white relative overflow-hidden group/section"
    >
      {/* GLOBAL SPOTLIGHT & NOISE */}
      <motion.div 
        className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-500 opacity-0 group-hover/section:opacity-100 transform-gpu" 
        style={{ background: sectionSpotlight }} 
      />
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ================= LEADERSHIP SECTION ================= */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          {/* Replaced 'The Team' and 'Leadership' parent-child headings with a single 'Leadership' heading as per V5 directives */}
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
            Building the structured infrastructure for modern healthcare.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto mb-32 group/grid"
        >
          {leadership.map((leader, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants} 
              className="group/card flex flex-col items-center text-center transition-all duration-500 hover:!opacity-100 group-hover/grid:opacity-40"
            >
              {/* Image Container - Updated hover shadow to Xflow Cyan */}
              <div className="w-48 h-48 md:w-56 md:h-56 mb-8 rounded-[2.5rem] bg-gray-100 border border-gray-200/60 relative overflow-hidden transition-all duration-500 group-hover/card:shadow-[0_20px_40px_-15px_rgba(0,234,255,0.25)] group-hover/card:-translate-y-2 group-hover/card:border-teal/30">
                
                {/* The Actual Photo */}
                <Image 
                  src={leader.image} 
                  alt={leader.name} 
                  fill 
                  className="object-cover transition-all duration-700 grayscale group-hover/card:grayscale-0 group-hover/card:scale-105"
                  sizes="(max-width: 768px) 192px, 224px"
                />

                {/* Interactive Inner Glow Overlay */}
                <motion.div 
                  className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 mix-blend-overlay"
                  style={{ background: cardSpotlight }}
                />

                {/* Linking Arrow that appears on hover - Updated to text-teal-dark */}
                <div className="absolute z-20 top-4 right-4 opacity-0 group-hover/card:opacity-100 translate-y-2 group-hover/card:translate-y-0 transition-all duration-500 bg-white/90 backdrop-blur-sm p-1.5 rounded-full">
                  <ArrowUpRight className="w-4 h-4 text-teal-dark" />
                </div>
              </div>
              
              <h4 className="font-heading font-bold text-navy text-2xl mb-1">{leader.name}</h4>
              {/* Updated role to text-teal-dark for contrast */}
              <p className="text-teal-dark font-semibold text-sm mb-4 tracking-wide">{leader.role}</p>
              <p className="text-slate-light text-sm leading-relaxed max-w-[300px]">{leader.bio}</p>
            </motion.div>
          ))}
        </motion.div>


        {/* ================= ADVISORS SECTION ================= */}
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-teal-dark text-xs font-bold tracking-[0.2em] uppercase mb-4"
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
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto group/grid2"
        >
          {advisors.map((advisor, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              /* Updated hover shadow to Xflow Cyan */
              className="relative bg-slate-50 border border-gray-200/60 rounded-3xl p-8 hover:bg-white hover:border-teal/30 hover:shadow-[0_20px_40px_-15px_rgba(0,234,255,0.15)] hover:-translate-y-1 hover:!opacity-100 group-hover/grid2:opacity-50 transition-all duration-500 group/card overflow-hidden flex flex-col"
            >
              {/* Updated top accent line gradient for white background legibility */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-teal to-teal-dark group-hover/card:w-full transition-all duration-500 ease-out" />

              <motion.div 
                className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"
                style={{ background: cardSpotlight }}
              />

              {/* Flex container for the Headshot + Name */}
              <div className="relative z-10 mb-6 flex items-center gap-5 border-b border-gray-100 pb-6">
                
                {/* Circular Headshot */}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-200 overflow-hidden relative border-2 border-white shadow-sm flex-shrink-0 group-hover/card:border-teal/20 transition-colors">
                  <Image 
                    src={advisor.image} 
                    alt={advisor.name} 
                    fill 
                    className="object-cover"
                    sizes="(max-width: 768px) 64px, 80px"
                  />
                </div>

                <div>
                  {/* Updated to text-teal-dark for legibility */}
                  <div className="inline-flex items-center px-3 py-1 mb-2 rounded-full bg-white border border-gray-100 text-teal-dark text-[10px] font-bold tracking-wide shadow-sm group-hover/card:bg-teal/5 transition-colors">
                    {advisor.tag}
                  </div>
                  <h4 className="font-heading font-extrabold text-navy text-xl">{advisor.name}</h4>
                </div>
              </div>
              
              <p className="relative z-10 text-slate-light text-sm leading-relaxed flex-grow">
                {advisor.bio}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}