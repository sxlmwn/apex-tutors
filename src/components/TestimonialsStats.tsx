export default function TestimonialsStats() {
  const stats = [
    { value: "500+", label: "Students Mentored" },
    { value: "300+", label: "Verified Scholars" },
    { value: "98%", label: "Grade Improvement" },
  ];

  const testimonials = [
    {
      name: "Dr. Tariq Mahmood",
      role: "Parent of 2nd Year FSc Student",
      location: "DHA Phase 5, Lahore",
      board: "BISE Lahore",
      content:
        "Finding an authentic physics mentor for FSc was challenging until Apex connected us with a LUMS engineering scholar. His focus on conceptual derivations and board paper presentation boosted my son’s score from 72% to 91%.",
    },
    {
      name: "Ayesha Imran",
      role: "FSc Pre-Medical Student",
      location: "Bahria Town Phase 7, Rawalpindi",
      board: "FBISE Federal",
      content:
        "Organic chemistry reaction mechanisms and biology diagrams used to terrify me. My tutor from Army Medical College made everything click with past-paper shortcuts. I secured 1024/1100 in FBISE Part-1!",
    },
    {
      name: "Mrs. Farzana Siddiqui",
      role: "Parent of 10th Grade Student",
      location: "Sector F-8/2, Islamabad",
      board: "FBISE Matric",
      content:
        "The free demo class gave us total peace of mind. Our NUST tutor is remarkably disciplined, polite, and provides a weekly progress report after every mock test. Outstanding service for Islamabad parents.",
    },
    {
      name: "Hamza Naveed",
      role: "10th Grade Matric Science",
      location: "DHA Phase 6, Karachi",
      board: "Sindh Board",
      content:
        "My mathematics marks used to hold me back. My mentor from FAST walked me through step-by-step problem sets on an interactive online whiteboard. The 1-on-1 pacing made all the difference.",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#F5F0E8] border-t border-[#E8E1D5]/60">
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#52525B]">
            Real Stories, Real Results
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#18181B] tracking-tight">
            Trusted by Families Across Pakistan
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#52525B] leading-relaxed">
            See how our university-student mentors are helping Matric and FSc candidates conquer tough syllabi and achieve board distinctions.
          </p>
        </div>

        {/* Minimalist 3 Large Numbers Stats Band */}
        <div className="mb-20 sm:mb-24 py-12 border-y border-[#E8E1D5]/60">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 text-center max-w-4xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <span className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#18181B]">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-medium uppercase tracking-widest text-[#52525B] mt-3">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#FAF7F2] rounded-2xl p-8 border border-[#E8E1D5]/40 flex flex-col justify-between"
            >
              <div>
                <p className="text-sm sm:text-base text-[#18181B] leading-relaxed">
                  &ldquo;{t.content}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E8E1D5]/60 flex items-end justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#18181B]">
                    {t.name}
                  </h4>
                  <p className="text-xs text-[#71717A] mt-0.5">
                    {t.role} • {t.location}
                  </p>
                </div>
                <span className="text-xs font-mono text-[#71717A]">
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
