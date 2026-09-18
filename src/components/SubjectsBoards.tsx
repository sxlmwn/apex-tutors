import Image from "next/image";
import Link from "next/link";
import { Atom, Stethoscope, Compass, Cpu, BookOpen, Check, ArrowRight, Layers } from "lucide-react";

export default function SubjectsBoards() {
  const tracks = [
    {
      level: "FSc Pre-Medical",
      category: "11th & 12th Grade",
      badge: "High Demand",
      icon: Stethoscope,
      accent: "text-[#2E8B57] bg-[#EAE2D4] border-[#DDD3C2]",
      subjects: ["Biology (Botany & Zoology)", "Chemistry (Organic & Inorganic)", "Physics", "English & Urdu"],
      description:
        "Comprehensive board syllabus coverage with high-yield conceptual diagrams, reaction mechanisms, and MDCAT foundations.",
    },
    {
      level: "FSc Pre-Engineering",
      category: "11th & 12th Grade",
      badge: "Top Choice",
      icon: Compass,
      accent: "text-blue-700 bg-blue-50 border-blue-200",
      subjects: ["Mathematics (Calculus & Conics)", "Physics (Mechanics & Waves)", "Chemistry", "English"],
      description:
        "Rigorous step-by-step problem solving, past-paper numerical derivations, and foundational prep for ECAT & NUST NET.",
    },
    {
      level: "ICS (Computer Science)",
      category: "11th & 12th Grade",
      badge: "Tech Track",
      icon: Cpu,
      accent: "text-purple-700 bg-purple-50 border-purple-200",
      subjects: ["Computer Science (C / C++ / DB)", "Mathematics", "Physics / Statistics", "English"],
      description:
        "Demystifying programming syntax, algorithms, database queries, and advanced math for entry into top CS universities.",
    },
    {
      level: "Matric Science",
      category: "9th & 10th Grade",
      badge: "Core Science",
      icon: Atom,
      accent: "text-teal-700 bg-teal-50 border-teal-200",
      subjects: ["Physics", "Chemistry", "Biology", "Mathematics"],
      description:
        "Solid conceptual base for board exams with past 10-year paper drills, objective MCQs, and paper presentation techniques.",
    },
    {
      level: "Matric Arts & General",
      category: "9th & 10th Grade",
      badge: "Humanities",
      icon: BookOpen,
      accent: "text-amber-700 bg-amber-50 border-amber-200",
      subjects: ["General Science", "General Mathematics", "English & Urdu", "Pak Studies & Islamiat"],
      description:
        "Focused guidance on high-scoring essay writing, Urdu grammar, historical timelines, and targeted board presentation.",
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
    <section id="subjects" className="py-20 bg-[#F5F0E8] border-t border-[#E8E1D5]">
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1E5638] bg-[#EAE2D4] px-3.5 py-1.5 rounded-full border border-[#DDD3C2]">
            Targeted Academic Tracks
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#18181B] tracking-tight">
            Subjects &amp; Boards We Cover
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#52525B]">
            Specialized 1-on-1 tutoring mapped directly to Federal (FBISE) and Punjab Board syllabus schemes and past-paper patterns.
          </p>
        </div>

        {/* Top Split Feature with subjects.jpg alongside highlights */}
        <div className="mb-14 bg-[#EFE9DD] rounded-3xl p-6 sm:p-8 border border-[#E0D7C6] shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Image Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-md border-2 border-white/80 aspect-16/10 max-h-[280px]">
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
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF7F2] text-[#1E5638] text-xs font-bold border border-[#DDD3C2]">
                <Layers className="w-3.5 h-3.5 text-[#2E8B57]" />
                <span>FBISE &amp; Punjab Boards Aligned</span>
              </div>
              <h3 className="text-2xl font-bold text-[#18181B]">
                Master the Pairing Schemes &amp; Board Paper Presentation
              </h3>
              <p className="text-sm text-[#52525B] leading-relaxed">
                Board exams require more than just memorization — paper presentation, solving numericals within margins, and targeting high-weightage chapters makes the difference between 70% and 95%+.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2">
                {boards.map((b) => (
                  <div key={b.name} className="bg-[#FAF7F2] p-2.5 rounded-xl border border-[#E8E1D5] text-xs">
                    <p className="font-bold text-[#18181B]">{b.name}</p>
                    <p className="text-[10px] text-[#71717A]">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track) => {
            const Icon = track.icon;
            return (
              <div
                key={track.level}
                className="group bg-[#FAF7F2] rounded-3xl p-6 sm:p-7 border border-[#E8E1D5] hover:border-[#2E8B57]/50 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${track.accent}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#ECE5D8] text-[#18181B]">
                      {track.badge}
                    </span>
                  </div>

                  <span className="text-[11px] font-semibold text-[#71717A] uppercase tracking-wider">
                    {track.category}
                  </span>
                  <h3 className="text-lg font-bold text-[#18181B] mt-1 group-hover:text-[#2E8B57] transition-colors">
                    {track.level}
                  </h3>
                  <p className="mt-2 text-xs text-[#52525B] leading-relaxed">
                    {track.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-[#E8E1D5]">
                    <span className="text-[11px] font-bold text-[#18181B] uppercase tracking-wider block mb-2">
                      Core Subjects:
                    </span>
                    <ul className="space-y-1.5">
                      {track.subjects.map((subj) => (
                        <li key={subj} className="flex items-center gap-2 text-xs font-medium text-[#18181B]">
                          <Check className="w-3.5 h-3.5 text-[#2E8B57] shrink-0" />
                          <span>{subj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-5 pt-3">
                  <Link
                    href={`/signup?grade=${encodeURIComponent(track.level)}`}
                    className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-bold text-[#2E8B57] hover:text-white bg-[#EAE2D4] hover:bg-[#2E8B57] rounded-xl transition-colors duration-200"
                  >
                    <span>Request Tutor for this Track</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
