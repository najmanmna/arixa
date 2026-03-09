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
  const [isMobile, setIsMobile] = useState(true);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const scrollableRef = useRef<HTMLDivElement>(null);
  const accumulatorRef = useRef(0);
  const cooldownRef = useRef(false);

  const SCROLL_THRESHOLD = 40; 
  const EDGE_FORGIVENESS = 10; 

  // 1. Check screen size safely after mount
  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 2. Scroll to top on index change
  useEffect(() => {
    if (!isMobile && scrollableRef.current) {
      scrollableRef.current.scrollTop = 0;
    }
  }, [current, isMobile]);

  // 3. Snap to Viewport
  useEffect(() => {
    if (isMobile) return;

    if (isActive && wrapperRef.current) {
      const wrapperTop = wrapperRef.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: wrapperTop, behavior: "smooth" });
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isActive, isMobile]);

  const goTo = useCallback((index: number, dir?: 1 | -1) => {
    if (isTransitioning || index < 0 || index >= totalSlides || index === current) return;
    setDirection(dir ?? (index > current ? 1 : -1));
    setIsTransitioning(true);
    setCurrent(index);
    accumulatorRef.current = 0;
  }, [current, isTransitioning, totalSlides]);

  const next = useCallback(() => goTo(current + 1, 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1, -1), [current, goTo]);

  // 4. Observer
  useEffect(() => {
    if (isMobile) return;

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
  }, [isMobile]);

  // ── 5. LISTEN FOR NAVBAR CLICKS (The Fix) ──
  useEffect(() => {
    const handleDeckNavigate = (e: Event) => {
      const customEvent = e as CustomEvent;
      const targetId = customEvent.detail;

      // Find which child component has this ID attached to it
      const targetIndex = sections.findIndex((child: any) => 
        child?.props?.id === targetId
      );

      // Using !isMobile instead of the broken isDesktop variable
      if (targetIndex !== -1 && !isMobile) {
        setIsActive(true); // Lock the screen into presentation mode
        goTo(targetIndex); // Switch the Framer Motion slide

        // Scroll the browser window down to the Pitch Deck so the user sees it
        if (wrapperRef.current) {
          const wrapperTop = wrapperRef.current.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: wrapperTop, behavior: "smooth" });
        }
      }
    };

    // Cast the function to EventListener to satisfy TypeScript
    window.addEventListener("deckNavigate", handleDeckNavigate as EventListener);
    return () => window.removeEventListener("deckNavigate", handleDeckNavigate as EventListener);
  }, [sections, isMobile, goTo]);

  // 6. Scroll Hijacking logic
  useEffect(() => {
    if (isMobile || !isActive) return;

    const handleWheel = (e: WheelEvent) => {
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
  }, [isActive, isTransitioning, current, next, prev, totalSlides, isMobile]);

  // ════════════════════════════════════════════════════════
  // ── RENDER PATH 1: MOBILE / FALLBACK ──
  // ════════════════════════════════════════════════════════
  if (!isMounted || isMobile) {
    return (
      <div className="w-full flex flex-col bg-[#E0F9FB] relative z-20">
        {children}
      </div>
    );
  }

  // ════════════════════════════════════════════════════════
  // ── RENDER PATH 2: DESKTOP PITCH DECK ──
  // ════════════════════════════════════════════════════════
  return (
    <div ref={wrapperRef} className="relative w-full h-[100vh] bg-[#01021C] overflow-hidden">
      
      {/* ── TOP PROGRESS BAR ── */}
      <div className="absolute top-0 left-0 right-0 h-1 z-[110] bg-white/5">
        <motion.div 
          className="h-full bg-teal shadow-[0_0_10px_rgba(0,234,255,0.5)]"
          animate={{ width: `${((current + 1) / totalSlides) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={current}
          custom={direction}
          variants={{
            enter: (d: number) => ({ y: d > 0 ? "100%" : "-100%", opacity: 0 }),
            center: { y: 0, opacity: 1 },
            exit: (d: number) => ({ y: d > 0 ? "-20%" : "100%", opacity: 0 })
          }}
          initial="enter"
          animate="center"
          exit="exit"
          onAnimationComplete={() => setIsTransitioning(false)}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full"
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

      {/* ── NAVIGATION DOTS ── */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-[110] flex flex-col gap-4">
        {sections.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-teal w-6 shadow-[0_0_8px_rgba(0,234,255,0.8)]" : "bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}