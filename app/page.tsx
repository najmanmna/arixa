import Hero from "@/components/sections/Hero";
import Metrics from "@/components/sections/Metrics";
import WhoIsThisFor from "@/components/sections/WhoIsThisFor";
import Economics from "@/components/sections/Economics";
import HowItWorks from "@/components/sections/HowItWorks";
import ClinicalDashboard from "@/components/sections/ClinicalDashboard";
import ReboundPrevention from "@/components/sections/ReboundPrevention";
import SocialProof from "@/components/sections/SocialProof";
import RegulatoryBoundary from "@/components/sections/RegulatoryBoundary";
import LeadershipAdvisors from "@/components/sections/LeadershipAdvisors";
import CtaBanner from "@/components/sections/CtaBanner";
import Footer from "@/components/layout/Footer";

// IMPORT THE WRAPPER
import PitchDeckWrapper from "@/components/layout/PitchDeckWrapper";


import Compliance from "@/components/sections/Compliance"; 

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <Hero />
      <div className="relative z-20"><Metrics /></div>
      <WhoIsThisFor />
      <Economics />

      <PitchDeckWrapper>
        <HowItWorks />
        <ClinicalDashboard />
        <ReboundPrevention />
        <Compliance /> 
        <SocialProof />
        <RegulatoryBoundary />
      </PitchDeckWrapper>

      {/* 3. THE OUTRODUCTION (Standard Scrolling) 
          Moving these OUTSIDE the wrapper allows them to be as tall as they need to be! 
      */}
      <div className="relative z-20 bg-white">
        <LeadershipAdvisors />
        <CtaBanner />
      </div>
    </main>
  );
}