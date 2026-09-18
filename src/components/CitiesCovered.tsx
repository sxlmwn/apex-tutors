"use client";

import GsapFlipCard from "@/components/ui/gsap-card-flip";

export default function CitiesCovered() {
  return (
    <section id="cities" className="py-24 lg:py-32 bg-[#F5F0E8] border-t border-[#E8E1D5]/60">
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#52525B]">
            Pakistan Nationwide Presence
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#18181B] tracking-tight">
            Cities &amp; Communities We Serve
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#52525B] leading-relaxed">
            Prioritizing premier residential communities with verified in-home mentors and nationwide 1-on-1 interactive digital classrooms.
          </p>
        </div>

        {/* GSAP Flip Card Component */}
        <GsapFlipCard
          items={[
            { id: "isb", image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&h=1000&fit=crop", alt: "Islamabad city view", caption: "Islamabad — DHA, Bahria Town & Federal sectors." },
            { id: "rwp", image: "https://images.unsplash.com/photo-1600100397608-f70cd5aa5e5a?w=800&h=1000&fit=crop", alt: "Rawalpindi cityscape", caption: "Rawalpindi — twin-city coverage alongside Islamabad." },
            { id: "khi", image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=800&h=1000&fit=crop", alt: "Karachi skyline", caption: "Karachi — Pakistan's largest city, full board coverage." },
            { id: "lhr", image: "https://images.unsplash.com/photo-1626183411799-3c8072f9b0a6?w=800&h=1000&fit=crop", alt: "Lahore architecture", caption: "Lahore — Punjab Board and Matric/FSc tutoring." },
            { id: "mul", image: "https://images.unsplash.com/photo-1608889175638-9e2d0a7e5b5f?w=800&h=1000&fit=crop", alt: "Multan cityscape", caption: "Multan — expanding tutor network." },
            { id: "fsd", image: "https://images.unsplash.com/photo-1590059390047-863dcc0d4890?w=800&h=1000&fit=crop", alt: "Faisalabad city", caption: "Faisalabad — Bahawalpur & Faisalabad region coverage." },
          ]}
          title="Cities We Cover"
          meta="Apex Tutors / Pakistan"
          description="Currently serving families across seven major cities, expanding city by city."
          backgroundColor="#F5F0E8"
          textColor="#18181B"
          mutedColor="#52525B"
          rounded={20}
          showCounter={true}
        />
      </div>
    </section>
  );
}

