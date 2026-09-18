import Image from "next/image";
import Link from "next/link";
import { Atom, Stethoscope, Compass, Cpu, BookOpen } from "lucide-react";

export default function SubjectsBoards() {
  const tracks = [
    {
      level: "FSc Pre-Medical",
      category: "11th & 12th Grade",
      icon: Stethoscope,
      subjects: "Biology, Chemistry, Physics, English & Urdu",
      description:
        "Comprehensive board syllabus coverage with high-yield conceptual diagrams and reaction mechanisms.",
    },
    {
      level: "FSc Pre-Engineering",
      category: "11th & 12th Grade",
      icon: Compass,
      subjects: "Mathematics, Physics, Chemistry, English",
      description:
        "Rigorous step-by-step problem solving, past-paper numerical derivations, and net preparation.",
    },
    {
      level: "ICS (Computer Science)",
      category: "11th & 12th Grade",
      icon: Cpu,
      subjects: "Computer Science, Mathematics, Physics, English",
      description:
        "Programming foundations, algorithms, database queries, and advanced board mathematics.",
    },
    {
      level: "Matric Science",
      category: "9th & 10th Grade",
      icon: Atom,
      subjects: "Physics, Chemistry, Biology, Mathematics",
      description:
        "Solid conceptual base for board exams with past 10-year paper drills and presentation skills.",
    },
    {
      level: "Matric Arts & General",
      category: "9th & 10th Grade",
      icon: BookOpen,
      subjects: "General Science, General Math, English, Pak Studies",
      description:
        "Focused guidance on high-scoring essay writing, grammar rules, and targeted board presentation.",
    },
  ];

  const boards = [
    { name: "Federal Board (FBISE)", desc: "Islamabad & Overseas" },
    { name: "Punjab Board (BISE Lahore)", desc: "Lahore Region" },
    { name: "BISE Rawalpindi", desc: "Rawalpindi & Cantt" },
    { name: "BISE Multan & Faisalabad", desc: "South & Central Punjab" },
    { name: "BISE Bahawalpur", desc: "Bahawalpur District" },
    { name: "Sindh Board (BSEK / BIEK)", desc: "Karachi Central" },
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
            Specialized 1-on-1 tutoring mapped directly to Federal (FBISE) and Punjab Board syllabus schemes and past-paper patterns.
          </p>
        </div>

        {/* Top Feature Banner with subjects.jpg */}
        <div className="mb-16 bg-[#FAF7F2] rounded-3xl p-8 sm:p-12 border border-[#E8E1D5]/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Image Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden aspect-16/10 max-h-[280px]">
                <Image
                  src="/images/subjects.jpg"
                  alt="Subjects & Boards Curriculum"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Board Alignment Intro */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#52525B]">
                FBISE &amp; Punjab Boards Aligned
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#18181B] tracking-tight">
                Master the Pairing Schemes &amp; Board Paper Presentation
              </h3>
              <p className="text-sm sm:text-base text-[#52525B] leading-relaxed">
                Board exams require more than just memorization — paper presentation, solving numericals within margins, and targeting high-weightage chapters makes the difference between 70% and 95%+.
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

        {/* Subjects Grid - Standardized to 3-color palette */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track) => {
            const Icon = track.icon;
            return (
              <div
                key={track.level}
                className="bg-[#FAF7F2] rounded-2xl p-8 border border-[#E8E1D5]/40 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <Icon className="w-5 h-5 text-[#18181B]" />
                    <span className="text-xs font-mono text-[#71717A]">
                      {track.category}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#18181B]">
                    {track.level}
                  </h3>
                  <p className="mt-2 text-sm text-[#52525B] leading-relaxed">
                    {track.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-[#E8E1D5]/60">
                    <p className="text-xs text-[#71717A]">
                      <span className="font-semibold text-[#18181B]">Core: </span>
                      {track.subjects}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-2">
                  <Link
                    href={`/signup?grade=${encodeURIComponent(track.level)}`}
                    className="text-xs font-semibold text-[#18181B] hover:text-[#2E8B57] transition-colors"
                  >
                    Request Tutor &rarr;
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
