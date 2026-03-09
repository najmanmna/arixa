import Hero from "@/components/sections/Hero";
import Metrics from "@/components/sections/Metrics";
import WhoIsThisFor from "@/components/sections/WhoIsThisFor";
import Economics from "@/components/sections/Economics";
import HowItWorks from "@/components/sections/HowItWorks";
import ClinicalDashboard from "@/components/sections/ClinicalDashboard";
import ReboundPrevention from "@/components/sections/ReboundPrevention";
import Compliance from "@/components/sections/Compliance"; 
import SocialProof from "@/components/sections/SocialProof";
import RegulatoryBoundary from "@/components/sections/RegulatoryBoundary";
import LeadershipAdvisors from "@/components/sections/LeadershipAdvisors";
import CtaBanner from "@/components/sections/CtaBanner";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PitchDeckWrapper from "@/components/layout/PitchDeckWrapper";

export default function Home() {
  return (
    <main className="relative bg-white">
      <Navbar />
      
      {/* ── 1. INTRO (Standard Scroll) ── */}
      <div className="relative z-20">
        <Hero />
        <Metrics />
      </div>

      {/* ── 2. THE 10QRX DECK (Presentation Mode) ── */}
      {/* <PitchDeckWrapper> */}
        {/* Removed h-full so natural scrolling works inside the slide */}
        <div id="who" className="w-full"><WhoIsThisFor /></div>
        <div id="economics" className="w-full"><Economics /></div>
        <div id="how-it-works" className="w-full"><HowItWorks /></div>
        <div id="diagnostics" className="w-full"><ClinicalDashboard /></div>
        <div id="rebound" className="w-full"><ReboundPrevention /></div>
        <div id="compliance" className="w-full"><Compliance /></div>
        <div id="social" className="w-full"><SocialProof /></div>
        <div id="regulatory" className="w-full"><RegulatoryBoundary /></div>
      {/* </PitchDeckWrapper> */}

      {/* ── 3. OUTRO (Standard Scroll) ── */}
      <div className="relative z-20 bg-white">
        <div id="about"><LeadershipAdvisors /></div>
        <div id="contact"><CtaBanner /></div>
      </div>
      

    </main>
  );
}