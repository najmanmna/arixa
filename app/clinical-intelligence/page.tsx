import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FullClinicalIntelligence from "@/components/sections/FullClinicalIntelligence";
import CtaBanner from "@/components/sections/CtaBanner"; // Include your CTA so they can book right away!

export const metadata = {
  title: 'Clinical Intelligence | ARIXA Health',
  description: 'A comprehensive clinical dashboard that transforms raw biomarker data into actionable insight.',
};

export default function ClinicalIntelligencePage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <Navbar />
      
      {/* The beautiful complex component we just saved */}
      <FullClinicalIntelligence />
      
      {/* Keep the funnel going by asking them to book a demo */}
      <CtaBanner />
      

    </main>
  );
}