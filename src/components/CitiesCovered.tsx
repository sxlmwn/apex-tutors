import Link from "next/link";
import { Globe } from "lucide-react";

export default function CitiesCovered() {
  const cities = [
    {
      name: "Karachi",
      focusAreas: "DHA (Phases 1–8), Clifton, PECHS, Gulshan-e-Iqbal, KDA",
      tutorCount: "140+ Tutors",
    },
    {
      name: "Lahore",
      focusAreas: "DHA (Phases 1–9), Bahria Town, Gulberg, Model Town, Cantt",
      tutorCount: "160+ Tutors",
    },
    {
      name: "Islamabad",
      focusAreas: "Sectors F-6 to F-11, E-7, DHA Islamabad, Bahria Enclave",
      tutorCount: "110+ Tutors",
    },
    {
      name: "Rawalpindi",
      focusAreas: "Bahria Town (Phases 1–8), DHA Phase 1 & 2, Chaklala, Askari",
      tutorCount: "90+ Tutors",
    },
    {
      name: "Multan",
      focusAreas: "Multan Cantt, DHA Multan, Gulgasht Colony, Bosan Road",
      tutorCount: "50+ Tutors",
    },
    {
      name: "Faisalabad",
      focusAreas: "Canal Road, D Ground, Kohinoor City, Madina Town",
      tutorCount: "45+ Tutors",
    },
    {
      name: "Bahawalpur",
      focusAreas: "Model Town A & B, Bahawalpur Cantt, Satellite Town",
      tutorCount: "35+ Tutors",
    },
  ];

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

        {/* Cities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cities.map((city) => (
            <div
              key={city.name}
              className="bg-[#FAF7F2] rounded-2xl p-8 border border-[#E8E1D5]/40 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-[#18181B]">
                    {city.name}
                  </h3>
                  <span className="text-xs font-mono text-[#71717A]">
                    {city.tutorCount}
                  </span>
                </div>

                <p className="mt-3 text-sm text-[#52525B] leading-relaxed">
                  {city.focusAreas}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E8E1D5]/60">
                <Link
                  href={`/signup?city=${encodeURIComponent(city.name)}`}
                  className="text-xs font-semibold text-[#18181B] hover:text-[#2E8B57] transition-colors"
                >
                  Find Tutor in {city.name} &rarr;
                </Link>
              </div>
            </div>
          ))}

          {/* 8th Card: Nationwide Remote Online Card (Unified Minimalist Surface) */}
          <div className="bg-[#FAF7F2] rounded-2xl p-8 border border-[#E8E1D5]/40 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-[#18181B]">
                  Online Classrooms
                </h3>
                <Globe className="w-5 h-5 text-[#18181B]" />
              </div>

              <p className="mt-3 text-sm text-[#52525B] leading-relaxed">
                Connect seamlessly from any city across Pakistan via our interactive digital whiteboard.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E8E1D5]/60">
              <Link
                href="/signup?mode=online"
                className="text-xs font-semibold text-[#18181B] hover:text-[#2E8B57] transition-colors"
              >
                Join Online &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
