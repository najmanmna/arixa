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
      <PitchDeckWrapper>
                <WhoIsThisFor />
        <Economics />
        <HowItWorks />
        <ClinicalDashboard />
        <ReboundPrevention />
        <Compliance /> 
        <SocialProof />
        <RegulatoryBoundary />
      </PitchDeckWrapper>

      {/* ── 3. OUTRO (Standard Scroll) ── */}
      <div className="relative z-20 bg-white">
        <LeadershipAdvisors />
        <CtaBanner />

      </div>
    </main>
  );
}