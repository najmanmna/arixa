import Hero from "@/components/sections/Hero";
import Metrics from "@/components/sections/Metrics";
import HowItWorks from "@/components/sections/HowItWorks";
import InteractiveExplainer from "@/components/sections/InteractiveExplainer";
import ClinicalDashboard from "@/components/sections/ClinicalDashboard";
import StructuralGap from "@/components/sections/StructuralGap";
import AceModel from "@/components/sections/AceModel";
import ScalingSafely from "@/components/sections/ScalingSafely";
import Ecosystem from "@/components/sections/Ecosystem";
import RegulatoryBoundary from "@/components/sections/RegulatoryBoundary";
import LeadershipAdvisors from "@/components/sections/LeadershipAdvisors";
import CtaBanner from "@/components/sections/CtaBanner";
import Footer from "@/components/layout/Footer";

// IMPORT THE NEW WRAPPER
import PitchDeckWrapper from "@/components/layout/PitchDeckWrapper";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617]">
      
      {/* The Hero and Metrics sit outside the wrapper so they load immediately 
        and naturally scroll away to start the presentation.
      */}
      <Hero />
      <div className="relative z-20">
        <Metrics />
      </div>

      {/* Everything inside here becomes a "Slide" in the Pitch Deck 
      */}
      <PitchDeckWrapper>
        <HowItWorks />
        <InteractiveExplainer />
        <ClinicalDashboard />
        <StructuralGap />
        <AceModel />
        <ScalingSafely />
        <RegulatoryBoundary />
        <Ecosystem />
        <LeadershipAdvisors />
        <CtaBanner />
      </PitchDeckWrapper>

      {/* The Footer acts as the final anchor */}

    </main>
  );
}