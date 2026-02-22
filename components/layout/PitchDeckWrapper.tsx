"use client";

import React, { useRef, useState, useEffect } from "react";

interface PitchDeckWrapperProps {
  children: React.ReactNode;
}

export default function PitchDeckWrapper({ children }: PitchDeckWrapperProps) {
  const sections = React.Children.toArray(children);

  return (
    <div className="relative w-full bg-[#020617]">
      {sections.map((child, index) => (
        <StackedSection key={index} index={index} total={sections.length}>
          {child}
        </StackedSection>
      ))}
    </div>
  );
}

function StackedSection({ children, index, total }: { children: React.ReactNode; index: number; total: number }) {
  const contentRef = useRef<HTMLDivElement>(null);
  
  // Default to relative. We only make it sticky if we mathematically prove it fits on the screen.
  const [isSticky, setIsSticky] = useState(false);
  const isLast = index === total - 1;

  useEffect(() => {
    const checkFit = () => {
      if (contentRef.current) {
        // If the content is SHORTER than the screen, it is safe to stick to the top.
        // If it is TALLER, we let it scroll normally so nothing gets cut off or hidden.
        const isShortEnough = contentRef.current.offsetHeight <= window.innerHeight + 10;
        setIsSticky(isShortEnough);
      }
    };

    checkFit();
    // Re-verify after a slight delay to ensure fonts/images have fully rendered the height
    setTimeout(checkFit, 500); 
    
    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkFit, 150);
    };
    
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div
      // PURE CSS MAGIC: No math, no negative pixels, no bottom:0 bugs.
      // Short sections stick. Tall sections scroll naturally over them.
      className={`w-full ${isSticky && !isLast ? "md:sticky md:top-0" : "relative"} bg-[#020617]`}
      style={{ zIndex: index }}
    >
      <div 
  ref={contentRef}
  // NEW SHADOW: Soft, elegant, and subtle (0.12 opacity)
  className="w-full bg-white shadow-[0_-10px_40px_rgba(0,0,0,0.12)] border-t border-gray-100 relative"
>
        {children}
      </div>
    </div>
  );
}