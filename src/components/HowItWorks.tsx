import Image from "next/image";
import Link from "next/link";
import { ClipboardList, UserCheck, Video, Award } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Request a Tutor",
      description:
        "Select your level (Primary, Matric, FSc, O Level, or A Level), board/curriculum, and subjects needed.",
      icon: ClipboardList,
    },
    {
      number: "02",
      title: "Get Matched",
      description:
        "We match you with a vetted university student who scored top marks in your exact exams.",
      icon: UserCheck,
    },
    {
      number: "03",
      title: "Free Demo Class",
      description:
        "Join a 45-minute live demo session to assess teaching chemistry before committing.",
      icon: Video,
    },
    {
      number: "04",
      title: "Start Learning",
      description:
        "Begin structured lessons with past-paper drills, concept shortcuts, and weekly feedback.",
      icon: Award,
    },
  ];

  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-[#F5F0E8] border-t border-[#E8E1D5]/60">
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#52525B]">
            <ScrollReveal baseOpacity={0.4} enableBlur={true} baseRotation={0} blurStrength={7}>
              Simple 4-Step Process
            </ScrollReveal>
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#18181B] tracking-tight">
            <ScrollReveal baseOpacity={0.4} enableBlur={true} baseRotation={0} blurStrength={7}>
              How Apex Tutors Works
            </ScrollReveal>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#52525B] leading-relaxed">
            <ScrollReveal baseOpacity={0.4} enableBlur={true} baseRotation={0} blurStrength={7}>
              From your initial request to your first free demo, we make finding an exceptional tutor for Primary, Matric, FSc, O &amp; A Level students effortless, safe, and transparent.
            </ScrollReveal>
          </p>
        </div>

        {/* 4 Steps Minimal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-[#FAF7F2] rounded-2xl p-8 border border-[#E8E1D5]/40 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-mono font-medium text-[#71717A]">
                      {step.number}
                    </span>
                    <Icon className="w-5 h-5 text-[#18181B]" />
                  </div>

                  <h3 className="mt-8 text-xl font-bold text-[#18181B]">
                    <ScrollReveal baseOpacity={0.4} enableBlur={true} baseRotation={0} blurStrength={7}>
                      {step.title}
                    </ScrollReveal>
                  </h3>

                  <p className="mt-2.5 text-sm text-[#52525B] leading-relaxed">
                    <ScrollReveal baseOpacity={0.4} enableBlur={true} baseRotation={0} blurStrength={7}>
                      {step.description}
                    </ScrollReveal>
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Supporting Visual Feature Spotlight with how-it-works.jpg */}
        <div className="mt-16 sm:mt-20 bg-[#FAF7F2] rounded-3xl p-8 sm:p-12 border border-[#E8E1D5]/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Supporting Visual Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden aspect-4/3 max-h-[320px]">
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
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#52525B]">
                <ScrollReveal baseOpacity={0.4} enableBlur={true} baseRotation={0} blurStrength={7}>
                  Zero Upfront Commitment
                </ScrollReveal>
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#18181B] tracking-tight">
                <ScrollReveal baseOpacity={0.4} enableBlur={true} baseRotation={0} blurStrength={7}>
                  Experience Personalized Learning from Day One
                </ScrollReveal>
              </h3>
              <p className="text-base text-[#52525B] leading-relaxed">
                <ScrollReveal baseOpacity={0.4} enableBlur={true} baseRotation={0} blurStrength={7}>
                  We believe every student deserves a mentor who understands their exact syllabus pressure. That&apos;s why your first 45-minute lesson is completely free — evaluate your tutor before confirming regular classes.
                </ScrollReveal>
              </p>

              <div className="pt-2">
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium text-white bg-[#2E8B57] hover:bg-[#236d44] rounded-full transition-all"
                >
                  Book Your Free Demo Class
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
