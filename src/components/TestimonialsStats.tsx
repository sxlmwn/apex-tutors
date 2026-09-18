import Image from "next/image";
import { Star, Quote, CheckCircle2, TrendingUp, Users, Building, Award } from "lucide-react";

export default function TestimonialsStats() {
  const stats = [
    { value: "500+", label: "Students Helped", icon: Users },
    { value: "300+", label: "Verified Tutors", icon: Award },
    { value: "7 Cities", label: "Elite Communities", icon: Building },
    { value: "98%", label: "Grade Improvement", icon: TrendingUp },
  ];

  const testimonials = [
    {
      name: "Dr. Tariq Mahmood",
      role: "Parent of 2nd Year FSc Student",
      location: "DHA Phase 5, Lahore",
      board: "BISE Lahore — Pre-Engineering",
      rating: 5,
      content:
        "Finding an authentic physics mentor for FSc was challenging until Apex connected us with a LUMS engineering scholar. His focus on conceptual derivations and board paper presentation boosted my son’s score from 72% to 91%.",
    },
    {
      name: "Ayesha Imran",
      role: "FSc Pre-Medical Student",
      location: "Bahria Town Phase 7, Rawalpindi",
      board: "Federal Board (FBISE)",
      rating: 5,
      content:
        "Organic chemistry reaction mechanisms and biology diagrams used to terrify me. My tutor from Army Medical College made everything click with past-paper shortcuts. I secured 1024/1100 in FBISE Part-1!",
    },
    {
      name: "Mrs. Farzana Siddiqui",
      role: "Parent of 10th Grade Student",
      location: "Sector F-8/2, Islamabad",
      board: "FBISE — Matric Science",
      rating: 5,
      content:
        "The free demo class gave us total peace of mind. Our NUST tutor is remarkably disciplined, polite, and provides a weekly progress report after every mock test. Outstanding service for Islamabad parents.",
    },
    {
      name: "Hamza Naveed",
      role: "10th Grade Matric Science",
      location: "DHA Phase 6, Karachi",
      board: "Sindh Board & FBISE Prep",
      rating: 5,
      content:
        "My mathematics marks used to hold me back. My mentor from FAST walked me through step-by-step problem sets on an interactive online whiteboard. The 1-on-1 pacing made all the difference.",
    },
  ];

  return (
    <section className="py-20 bg-[#F5F0E8] border-t border-[#E8E1D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1E5638] bg-[#EAE2D4] px-3.5 py-1.5 rounded-full border border-[#DDD3C2]">
            Real Stories, Real Results
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#18181B] tracking-tight">
            Trusted by Families Across Pakistan
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#52525B]">
            See how our university-student mentors are helping Matric and FSc candidates conquer tough syllabi and achieve board distinctions.
          </p>
        </div>

        {/* Edoo-Style Green Stats Band with stats-bg.jpg */}
        <div className="mb-20 relative rounded-3xl overflow-hidden shadow-2xl">
          {/* Background image stats-bg.jpg */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/stats-bg.jpg"
              alt="Apex Tutors Statistics"
              fill
              sizes="100vw"
              className="object-cover"
            />
            {/* Dark green overlay */}
            <div className="absolute inset-0 bg-[#2E8B57]/90 backdrop-blur-xs" />
          </div>

          <div className="relative z-10 p-8 sm:p-12 text-white">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/20">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className={`text-center flex flex-col items-center ${
                      idx !== 0 ? "pt-6 sm:pt-0 sm:pl-8" : ""
                    }`}
                  >
                    <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-3">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-3xl sm:text-5xl font-black tracking-tight text-white">
                      {stat.value}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-emerald-100 mt-1 uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#FAF7F2] rounded-3xl p-7 border border-[#E8E1D5] hover:border-[#2E8B57]/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#DDD3C2]" />
                </div>

                <p className="text-[#3F3F46] text-sm leading-relaxed italic">
                  &ldquo;{t.content}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E8E1D5] flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#18181B] flex items-center gap-1.5">
                    {t.name}
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2E8B57]" />
                  </h4>
                  <p className="text-xs font-medium text-[#71717A]">{t.role}</p>
                  <p className="text-xs text-[#2E8B57] font-semibold mt-0.5">{t.location}</p>
                </div>
                <span className="text-[11px] font-bold text-[#18181B] bg-[#ECE5D8] px-2.5 py-1 rounded-full text-right">
                  {t.board}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
