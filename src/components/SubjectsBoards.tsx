"use client";

import Image from "next/image";
import MorphSlider from "@/components/ui/MorphSlider";

const subjectSlides = [
  { image: "/images/subjects/primary.webp", caption: "Primary & Middle School", description: "Building strong foundations from Grade 1 to 8." },
  { image: "/images/subjects/o-level.webp", caption: "O Level / IGCSE", description: "Structured past-paper drills for straight A*s." },
  { image: "/images/subjects/a-level.webp", caption: "A Level (AS & A2)", description: "Advanced concepts and university entry preparation." },
  { image: "/images/subjects/fsc-pre-medical.webp", caption: "FSc Pre-Medical", description: "Complete board syllabus with conceptual clarity." },
  { image: "/images/subjects/fsc-pre-engineering.webp", caption: "FSc Pre-Engineering", description: "Calculus, derivations, and numericals mastered." },
  { image: "/images/subjects/ics.webp", caption: "ICS (Computer Science)", description: "Practical coding and algorithm fundamentals covered." },
  { image: "/images/subjects/matric.webp", caption: "Matric (9th & 10th Grade)", description: "Focused board-pattern preparation for top marks." },
  { image: "/images/subjects/general-board-revision.webp", caption: "Crash Course", description: "High-yield topics and marking-scheme drills." },
];

export default function SubjectsBoards() {
  const boards = [
    { name: "Cambridge (CAIE / IGCSE)", desc: "O & A Level syllabus" },
    { name: "Federal Board (FBISE)", desc: "Islamabad, Rawalpindi & Cantts" },
    { name: "BISE Lahore & Punjab", desc: "Punjab board curriculum" },
    { name: "Primary Foundations", desc: "Grade 1 to 8" },
    { name: "Sindh Board & AKU-EB", desc: "Karachi & Aga Khan Board" },
    { name: "BISE Gujranwala & Others", desc: "Gujranwala, KPK & regional boards" },
  ];

  return (
    <section id="subjects" className="py-24 lg:py-32 bg-[#F5F0E8] border-t border-[#E8E1D5]/60">
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#52525B]">
            Targeted Academic Tracks
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#18181B] tracking-tight">
            Subjects &amp; Boards We Cover
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#52525B] leading-relaxed">
            1-on-1 tutoring mapped to every major board and curriculum.
          </p>
        </div>

        {/* Top Feature Banner with subjects.jpg */}
        <div className="mb-16 bg-[#FAF7F2] rounded-3xl p-8 sm:p-12 border border-[#E8E1D5]/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Image Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden aspect-4/5 max-h-[460px]">
                <Image
                  src="/images/study-smart/read-less-recall-more.jpg"
                  alt="Study Smart — Read Less, Recall More (Active Recall Method)"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Board Alignment Intro */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#52525B]">
                Cambridge, FBISE &amp; Punjab Boards Aligned
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#18181B] tracking-tight">
                Master the Marking Schemes, Pairing Patterns &amp; Presentation
              </h3>
              <p className="text-sm sm:text-base text-[#52525B] leading-relaxed">
                Concept clarity, board pairing patterns, and past-paper drills for complete syllabus mastery.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {boards.map((b) => (
                  <div key={b.name} className="bg-[#F5F0E8] p-3 rounded-xl border border-[#E8E1D5]/40 text-xs">
                    <p className="font-bold text-[#18181B]">{b.name}</p>
                    <p className="text-[11px] text-[#71717A] mt-0.5">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Landscape MorphSlider replacing the card grid */}
        <div style={{ width: "100%", maxWidth: "1000px", margin: "0 auto", aspectRatio: "16 / 9", position: "relative" }}>
          <MorphSlider
            items={subjectSlides}
            transition="melt"
            intensity={0.55}
            aberration={0.35}
            drift={0.4}
            duration={1.1}
            loop={true}
            radius={20}
            overlayColor="#000000"
            showCaptions={true}
            showControls={true}
            showIndicators={true}
          />
        </div>
      </div>
    </section>
  );
}
