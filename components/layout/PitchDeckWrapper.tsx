"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PitchDeckWrapper({ children }: { children: React.ReactNode }) {
  const sections = React.Children.toArray(children);
  const totalSlides = sections.length;

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isActive, setIsActive] = useState(false);

  // ── RESPONSIVE STATE ──
  const [isMounted, setIsMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const scrollableRef = useRef<HTMLDivElement>(null);
  const accumulatorRef = useRef(0);
  const cooldownRef = useRef(false);

  const SCROLL_THRESHOLD = 40; 
  const EDGE_FORGIVENESS = 10; 

  // ── 1. MOUNT & SCREEN SIZE DETECTION ──
  useEffect(() => {
    setIsMounted(true);
    const checkScreenSize = () => {
      // 1024px matches Tailwind's 'lg' breakpoint.
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // ── 2. FORCE SLIDE TO TOP ON INDEX CHANGE ──
  useEffect(() => {
    if (!isDesktop) return; // Bypass on mobile
    if (scrollableRef.current) {
      scrollableRef.current.scrollTop = 0;
    }
  }, [current, isDesktop]);

  // ── 3. SNAP WRAPPER TO VIEWPORT TOP ON ACTIVATION ──
  useEffect(() => {
    if (!isDesktop) {
      document.body.style.overflow = ""; // Ensure mobile is never scroll-locked
      return;
    }

    if (isActive && wrapperRef.current) {
      const wrapperTop = wrapperRef.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: wrapperTop,
        behavior: "smooth" 
      });
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isActive, isDesktop]);

  const goTo = useCallback((index: number, dir?: 1 | -1) => {
    if (isTransitioning || index < 0 || index >= totalSlides || index === current) return;
    setDirection(dir ?? (index > current ? 1 : -1));
    setIsTransitioning(true);
    setCurrent(index);
    accumulatorRef.current = 0;
  }, [current, isTransitioning, totalSlides]);

  const next = useCallback(() => goTo(current + 1, 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1, -1), [current, goTo]);

  // ── 4. DECK ACTIVATION OBSERVER ──
  useEffect(() => {
    if (!isDesktop) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
          setIsActive(true);
        }
      },
      { threshold: [0.6] }
    );
    if (wrapperRef.current) observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, [isDesktop]);

  // ── 5. SCROLL HIJACKING LOGIC ──
  useEffect(() => {
    if (!isDesktop) return;

    const handleWheel = (e: WheelEvent) => {
      if (!isActive) return;

      const el = scrollableRef.current;
      if (!el) return;

      const atTop = el.scrollTop <= EDGE_FORGIVENESS;
      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - EDGE_FORGIVENESS;
      
      const isGoingDown = e.deltaY > 0;
      const isGoingUp = e.deltaY < 0;

      if (isGoingDown && !atBottom) {
        el.scrollTop += e.deltaY;
        accumulatorRef.current = 0; 
        return;
      }
      if (isGoingUp && !atTop) {
        el.scrollTop += e.deltaY;
        accumulatorRef.current = 0;
        return;
      }

      e.preventDefault();
      if (isTransitioning || cooldownRef.current) return;

      if (isGoingDown && current === totalSlides - 1) {
        setIsActive(false);
        return;
      }
      if (isGoingUp && current === 0) {
        setIsActive(false);
        window.scrollTo({ top: (wrapperRef.current?.offsetTop || 0) - 100, behavior: 'smooth' });
        return;
      }

      accumulatorRef.current += e.deltaY;

      if (Math.abs(accumulatorRef.current) >= SCROLL_THRESHOLD) {
        cooldownRef.current = true;
        accumulatorRef.current > 0 ? next() : prev();
        
        setTimeout(() => {
          cooldownRef.current = false;
          accumulatorRef.current = 0;
        }, 800);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [isActive, isTransitioning, current, next, prev, totalSlides, isDesktop]);

  // ════════════════════════════════════════════════════════
  // ── RENDER PATH 1: SSR FALLBACK OR MOBILE DEVICE ──
  // ════════════════════════════════════════════════════════
  if (!isMounted || !isDesktop) {
    return (
      <div className="w-full flex flex-col bg-white">
        {children}
      </div>
    );
  }

  // ════════════════════════════════════════════════════════
  // ── RENDER PATH 2: DESKTOP PITCH DECK ──
  // ════════════════════════════════════════════════════════
  return (
    <div ref={wrapperRef} className="relative w-full h-screen bg-[#01021C] overflow-hidden">
      {/* ── TOP PROGRESS BAR ── */}
      <div className="fixed top-0 left-0 right-0 h-1 z-[110] bg-white/5">
        <motion.div 
          className="h-full bg-teal shadow-[0_0_10px_rgba(0,234,255,0.5)]"
          animate={{ width: `${((current + 1) / totalSlides) * 100}%` }}
        />
      </div>

      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={current}
          custom={direction}
          variants={{
            enter: (d: number) => ({ y: d > 0 ? "100%" : "-100%", opacity: 0 }),
            center: { y: 0, opacity: 1 },
            exit: (d: number) => ({ 
              y: d > 0 ? "-20%" : "100%", 
              opacity: d > 0 ? 0 : 1, 
              scale: d > 0 ? 0.95 : 1 
            })
          }}
          initial="enter"
          animate="center"
          exit="exit"
          onAnimationComplete={() => setIsTransitioning(false)}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full overflow-hidden"
        >
          {/* INTERNAL SCROLL CONTAINER */}
          <div 
            ref={scrollableRef} 
            className="w-full h-full overflow-y-auto bg-white flex flex-col hide-scrollbar"
          >
            {sections[current]}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* ── NAVIGATION ── */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[110] flex flex-col gap-4">
        {sections.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? "bg-teal w-6 shadow-[0_0_8px_rgba(0,234,255,0.8)]" : "bg-white/20 hover:bg-white/40"}`}
          />
        ))}
      </div>
    </div>
  );
}