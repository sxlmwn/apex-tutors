import Image from "next/image";
import Link from "next/link";
import { ClipboardList, UserCheck, Video, Award, ArrowRight, CheckCircle2 } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Request a Tutor",
      subtitle: "Quick 2-Minute Request",
      description:
        "Select your grade (Matric or FSc), board (Federal or Punjab), subjects needed, and whether you prefer online or in-home sessions.",
      icon: ClipboardList,
      accent: "bg-[#EAE3D6] text-[#2E8B57] border-[#DDD3C2]",
    },
    {
      number: "02",
      title: "Get Matched",
      subtitle: "Within 24 Hours",
      description:
        "We match you with a vetted university student from LUMS, NUST, AKU, FAST, or GIKI who scored top marks in your exact board exams.",
      icon: UserCheck,
      accent: "bg-[#EAE3D6] text-[#2E8B57] border-[#DDD3C2]",
    },
    {
      number: "03",
      title: "Free Demo Class",
      subtitle: "Zero Risk Guarantee",
      description:
        "Join a 45-minute live demo session. Assess teaching chemistry and concept clarity before paying a single Rupee.",
      icon: Video,
      accent: "bg-[#EAE3D6] text-amber-700 border-[#DDD3C2]",
    },
    {
      number: "04",
      title: "Start Learning",
      subtitle: "Weekly Milestones",
      description:
        "Begin structured lessons with past-paper drills, concept shortcuts, and transparent progress reports shared directly with parents.",
      icon: Award,
      accent: "bg-[#EAE3D6] text-[#2E8B57] border-[#DDD3C2]",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-[#F5F0E8] border-t border-[#E8E1D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1E5638] bg-[#EAE2D4] px-3.5 py-1.5 rounded-full border border-[#DDD3C2]">
            Simple 4-Step Process
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#18181B] tracking-tight">
            How Apex Tutors Works
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#52525B]">
            From your initial request to your first free demo, we make finding an exceptional Matric &amp; FSc tutor effortless, safe, and transparent.
          </p>
        </div>

        {/* 4 Steps Horizontal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.number}
                className="group relative bg-[#FAF7F2] rounded-3xl p-6 sm:p-7 border border-[#E8E1D5] hover:border-[#2E8B57]/50 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-13 h-13 rounded-2xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-110 ${step.accent}`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-black text-[#DED5C5] group-hover:text-[#2E8B57]/40 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#2E8B57]">
                    {step.subtitle}
                  </span>
                  <h3 className="mt-1 text-lg font-bold text-[#18181B] group-hover:text-[#2E8B57] transition-colors">
                    {step.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-[#52525B] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#E8E1D5] flex items-center justify-between text-xs font-semibold text-[#71717A]">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-[#ECE5D8] text-[#18181B] text-[11px]">
                    Step {step.number}
                  </span>
                  {index < steps.length - 1 && (
                    <span className="hidden lg:inline text-[#A1A1AA] group-hover:text-[#2E8B57] transition-colors">
                      Next &rarr;
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Supporting Visual Feature Spotlight with how-it-works.jpg */}
        <div className="mt-14 bg-[#EFE9DD] rounded-3xl p-6 sm:p-10 border border-[#E0D7C6] shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Supporting Visual Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-md border-2 border-white/80 aspect-4/3 max-h-[320px]">
                <Image
                  src="/images/how-it-works.jpg"
                  alt="How Apex Tutors Works"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content & Details */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF7F2] text-[#1E5638] text-xs font-bold border border-[#DDD3C2]">
                <CheckCircle2 className="w-4 h-4 text-[#2E8B57]" />
                <span>Zero Upfront Commitment</span>
              </div>
              <h3 className="text-2xl font-bold text-[#18181B]">
                Experience Personalized Learning from Day One
              </h3>
              <p className="text-sm text-[#52525B] leading-relaxed">
                We believe every student deserves a mentor who understands their exact syllabus pressure. That&apos;s why your first 45-minute lesson is completely free — evaluate your tutor before confirming regular classes.
              </p>

              <div className="pt-2">
                <Link
                  href="/signup"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2E8B57] hover:bg-[#236d44] text-white font-bold text-sm shadow-md transition-all group"
                >
                  <span>Book Your Free Demo Class</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
