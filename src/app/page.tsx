import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import TrustVerification from "@/components/TrustVerification";
import SubjectsBoards from "@/components/SubjectsBoards";
import CitiesCovered from "@/components/CitiesCovered";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsStats from "@/components/TestimonialsStats";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F0E8] text-[#18181B] flex flex-col selection:bg-emerald-200 selection:text-emerald-950">
      {/* 1. Sticky Navbar */}
      <Navbar />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. How It Works */}
      <HowItWorks />

      {/* 4. Trust & Verification Section */}
      <TrustVerification />

      {/* 5. Subjects & Boards Covered */}
      <SubjectsBoards />

      {/* 6. Cities We Cover */}
      <CitiesCovered />

      {/* 7. Why Choose Us */}
      <WhyChooseUs />

      {/* 8. Testimonial & Stats Section */}
      <TestimonialsStats />

      {/* 9. CTA Banner */}
      <CtaBanner />

      {/* 10. Footer */}
      <Footer />
    </main>
  );
}
