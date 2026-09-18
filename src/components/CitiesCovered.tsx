import Link from "next/link";
import { MapPin, CheckCircle2, Globe, Home } from "lucide-react";

export default function CitiesCovered() {
  const cities = [
    {
      name: "Karachi",
      focusAreas: "DHA (Phases 1–8), Clifton, PECHS, Gulshan-e-Iqbal, KDA Scheme 1",
      tag: "Online & Physical",
      highlight: "Sindh Board & FBISE",
      tutorCount: "140+ Tutors",
    },
    {
      name: "Lahore",
      focusAreas: "DHA (Phases 1–9), Bahria Town, Gulberg, Model Town, Johar Town, Cantt",
      tag: "Online & Physical",
      highlight: "BISE Lahore & FBISE",
      tutorCount: "160+ Tutors",
    },
    {
      name: "Islamabad",
      focusAreas: "Sectors F-6 to F-11, E-7, G-10/G-11, DHA Islamabad, Bahria Enclave",
      tag: "Online & Physical",
      highlight: "FBISE Federal Board Capital",
      tutorCount: "110+ Tutors",
    },
    {
      name: "Rawalpindi",
      focusAreas: "Bahria Town (Phases 1–8), DHA Phase 1 & 2, Chaklala Scheme 3, Askari",
      tag: "Online & Physical",
      highlight: "BISE Rawalpindi & Federal",
      tutorCount: "90+ Tutors",
    },
    {
      name: "Multan",
      focusAreas: "Multan Cantt, DHA Multan, Gulgasht Colony, Bosan Road, Officers Colony",
      tag: "Online & Physical",
      highlight: "BISE Multan Excellence",
      tutorCount: "50+ Tutors",
    },
    {
      name: "Faisalabad",
      focusAreas: "Canal Road, D Ground (Peoples Colony), Kohinoor City, Madina Town",
      tag: "Online & Physical",
      highlight: "BISE Faisalabad",
      tutorCount: "45+ Tutors",
    },
    {
      name: "Bahawalpur",
      focusAreas: "Model Town A & B, Bahawalpur Cantt, Satellite Town, Cheema Town",
      tag: "Online & Physical",
      highlight: "BISE Bahawalpur",
      tutorCount: "35+ Tutors",
    },
  ];

  return (
    <section id="cities" className="py-20 bg-[#F5F0E8] border-t border-[#E8E1D5]">
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1E5638] bg-[#EAE2D4] px-3.5 py-1.5 rounded-full border border-[#DDD3C2]">
            Pakistan Nationwide Presence
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#18181B] tracking-tight">
            Cities &amp; Communities We Serve
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#52525B]">
            Prioritizing premier residential communities with verified in-home mentors and nationwide 1-on-1 interactive digital classrooms.
          </p>
        </div>

        {/* Mode Info Pills */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10 text-xs font-semibold">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#FAF7F2] border border-[#E8E1D5] text-[#18181B] shadow-2xs">
            <Home className="w-4 h-4 text-[#2E8B57]" />
            <span>Verified In-Home Tutoring in Selected Gated Communities</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#FAF7F2] border border-[#E8E1D5] text-[#18181B] shadow-2xs">
            <Globe className="w-4 h-4 text-teal-700" />
            <span>1-on-1 Interactive Online Classrooms Anywhere in Pakistan</span>
          </div>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city) => (
            <div
              key={city.name}
              className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-7 border border-[#E8E1D5] hover:border-[#2E8B57]/50 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-[#EAE2D4] text-[#2E8B57] flex items-center justify-center group-hover:bg-[#2E8B57] group-hover:text-white transition-colors border border-[#DDD3C2]">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#18181B] group-hover:text-[#2E8B57] transition-colors">
                        {city.name}
                      </h3>
                      <span className="text-[11px] font-semibold text-[#1E5638] bg-[#EAE2D4] px-2 py-0.5 rounded-md">
                        {city.highlight}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#52525B] bg-[#ECE5D8] px-2.5 py-1 rounded-full">
                    {city.tutorCount}
                  </span>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E8E1D5]">
                  <p className="text-xs font-bold text-[#18181B] uppercase tracking-wider mb-1">
                    Key Neighborhoods:
                  </p>
                  <p className="text-sm text-[#52525B] leading-relaxed font-normal">
                    {city.focusAreas}
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[#E8E1D5] flex items-center justify-between">
                <span className="text-xs font-medium text-[#1E5638] flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2E8B57]" />
                  {city.tag}
                </span>
                <Link
                  href={`/signup?city=${encodeURIComponent(city.name)}`}
                  className="text-xs font-bold text-[#18181B] hover:text-[#2E8B57] transition-colors"
                >
                  Find Tutor in {city.name} &rarr;
                </Link>
              </div>
            </div>
          ))}

          {/* 8th Card: Nationwide Remote Online Card */}
          <div className="bg-gradient-to-br from-[#2E8B57] to-[#1a5234] text-white rounded-3xl p-6 sm:p-7 shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-white/20 text-white flex items-center justify-center mb-3">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">All Other Cities</h3>
              <span className="text-xs text-emerald-200 font-semibold block mt-1">
                Nationwide High-Definition Online Tutoring
              </span>
              <p className="mt-3 text-sm text-emerald-50/90 leading-relaxed">
                Living outside these 7 cities? Connect seamlessly with top university mentors across Pakistan via our interactive digital whiteboard classrooms.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/20">
              <Link
                href="/signup?mode=online"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white text-[#1a5234] hover:bg-emerald-50 font-bold text-xs shadow-xs transition-colors"
              >
                Join Online Classroom &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
