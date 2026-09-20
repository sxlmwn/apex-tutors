import Image from "next/image";
import Link from "next/link";
import { Atom, Stethoscope, Compass, Cpu, BookOpen, Sparkles, Globe, GraduationCap } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function SubjectsBoards() {
  const tracks = [
    {
      level: "Primary & Middle School",
      category: "Grades 1 to 8",
      icon: Sparkles,
      subjects: "English, Mathematics, General Science, Urdu & Islamiyat",
      description:
        "Building foundational confidence, mental math fluency, conceptual science, and interactive reading comprehension.",
    },
    {
      level: "O Level / IGCSE",
      category: "Cambridge Assessment",
      icon: Globe,
      subjects: "Math (Syllabus D/Add Math), Physics, Chemistry, Biology, English Language",
      description:
        "Structured past-paper drills, marking-scheme mastery, keyword precision, and topical revision for straight A*s.",
    },
    {
      level: "A Level (AS & A2)",
      category: "Cambridge & Edexcel",
      icon: GraduationCap,
      subjects: "Mathematics, Physics, Chemistry, Biology, Economics & Business",
      description:
        "Advanced conceptual clarity, derivation drills, analytical essay techniques, and university entry preparation.",
    },
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
      subjects: "Mathematics, Physics, Chemistry, English & Urdu",
      description:
        "Mastering calculus shortcuts, derivation steps, and vector numericals tailored to Punjab & Federal board patterns.",
    },
    {
      level: "ICS (Computer Science)",
      category: "11th & 12th Grade",
      icon: Cpu,
      subjects: "Computer Science, Mathematics, Physics / Stats",
      description:
        "Practical coding, algorithm flowcharts, and textbook theory memorization for maximum board marks.",
    },
    {
      level: "Matric Science (9th & 10th)",
      category: "9th & 10th Grade",
      icon: Atom,
      subjects: "Physics, Chemistry, Biology / Computer, Math",
      description:
        "Building rock-solid foundations before intermediate with board past-paper practice and conceptual clarity.",
    },
    {
      level: "General Board Revision",
      category: "Crash Course",
      icon: BookOpen,
      subjects: "High-yield topics, Marking Scheme drills",
      description:
        "Intensive 60-day revision camps focusing strictly on expected exam questions and mark-scoring presentation.",
    },
  ];

  const boards = [
    { name: "Cambridge (CAIE / IGCSE)", desc: "O & A Level syllabus schemes" },
    { name: "Federal Board (FBISE)", desc: "Islamabad, Rawalpindi & Cantonments" },
    { name: "BISE Lahore & Punjab", desc: "Lahore, Rawalpindi, Multan & Faisalabad" },
    { name: "Primary Foundations", desc: "Montessori through Grade 8 curriculum" },
    { name: "Sindh Board & AKU-EB", desc: "Karachi Central & Aga Khan Board" },
    { name: "BISE Gujranwala & Others", desc: "Gujranwala, Sialkot, Bahawalpur & KPK" },
  ];

  return (
    <section id="subjects" className="py-24 lg:py-32 bg-[#F5F0E8] border-t border-[#E8E1D5]/60">
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#52525B]">
            <ScrollReveal baseOpacity={0.4} enableBlur={true} baseRotation={0} blurStrength={7}>
              Targeted Academic Tracks
            </ScrollReveal>
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#18181B] tracking-tight">
            <ScrollReveal baseOpacity={0.4} enableBlur={true} baseRotation={0} blurStrength={7}>
              Subjects &amp; Boards We Cover
            </ScrollReveal>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#52525B] leading-relaxed">
            <ScrollReveal baseOpacity={0.4} enableBlur={true} baseRotation={0} blurStrength={7}>
              Comprehensive 1-on-1 tutoring mapped directly to Cambridge (O/A Level), Federal (FBISE), Punjab Board, and Primary curriculums.
            </ScrollReveal>
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
                <ScrollReveal baseOpacity={0.4} enableBlur={true} baseRotation={0} blurStrength={7}>
                  Cambridge, FBISE &amp; Punjab Boards Aligned
                </ScrollReveal>
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#18181B] tracking-tight">
                <ScrollReveal baseOpacity={0.4} enableBlur={true} baseRotation={0} blurStrength={7}>
                  Master the Marking Schemes, Pairing Patterns &amp; Presentation
                </ScrollReveal>
              </h3>
              <p className="text-sm sm:text-base text-[#52525B] leading-relaxed">
                <ScrollReveal baseOpacity={0.4} enableBlur={true} baseRotation={0} blurStrength={7}>
                  From Primary conceptual building blocks to O/A Level marking schemes and Matric/FSc board pairing patterns, our mentors ensure total syllabus mastery.
                </ScrollReveal>
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
                    <ScrollReveal baseOpacity={0.4} enableBlur={true} baseRotation={0} blurStrength={7}>
                      {track.level}
                    </ScrollReveal>
                  </h3>
                  <p className="mt-2 text-sm text-[#52525B] leading-relaxed">
                    <ScrollReveal baseOpacity={0.4} enableBlur={true} baseRotation={0} blurStrength={7}>
                      {track.description}
                    </ScrollReveal>
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
