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
            Serving families across seven major cities with verified in-home and online mentors.
          </p>
        </div>

        {/* GSAP Flip Card Component */}
        <GsapFlipCard
          items={[
            {
              id: "isb",
              image: "/images/cities/islamabad.jpg",
              alt: "Islamabad city view",
              title: "Islamabad",
              caption: "DHA, Bahria Town & Federal sectors — premier tutor network.",
            },
            {
              id: "rwp",
              image: "/images/cities/rawalpindi.jpg",
              alt: "Rawalpindi cityscape",
              title: "Rawalpindi",
              caption: "Twin-city coverage alongside Islamabad across all major residential sectors.",
            },
            {
              id: "khi",
              image: "/images/cities/karachi.jpg",
              alt: "Karachi skyline",
              title: "Karachi",
              caption: "Pakistan's largest educational hub — comprehensive Board & Cambridge coverage.",
            },
            {
              id: "lhr",
              image: "/images/cities/lahore.jpg",
              alt: "Lahore architecture",
              title: "Lahore",
              caption: "Punjab Board, Cambridge & nationwide curriculum across DHA, Gulberg & Johar Town.",
            },
            {
              id: "mul",
              image: "/images/cities/multan.jpg",
              alt: "Multan Qila",
              title: "Multan",
              caption: "Southern Punjab educational coverage with verified in-home and online scholars.",
            },
            {
              id: "fsd",
              image: "/images/cities/faisalabad.jpg",
              alt: "Faisalabad city",
              title: "Faisalabad",
              caption: "Central Punjab — educational and board prep coverage.",
            },
            {
              id: "bwp",
              image: "/images/cities/bahawalpur.jpg",
              alt: "Bahawalpur city view",
              title: "Bahawalpur",
              caption: "Growing tutor network across model sectors and regional examination boards.",
            },
          ]}
          meta="Apex Tutors / Pakistan"
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

