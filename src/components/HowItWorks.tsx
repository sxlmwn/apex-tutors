import Image from "next/image";
import Link from "next/link";
import { ClipboardList, UserCheck, Video, Award } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Request a Tutor",
      description: "Tell us your level, board, and subjects.",
      icon: ClipboardList,
    },
    {
      number: "02",
      title: "Get Matched",
      description: "Matched with a top scorer in your exact curriculum.",
      icon: UserCheck,
    },
    {
      number: "03",
      title: "Free Demo Class",
      description: "Take a 45-minute free demo session before committing.",
      icon: Video,
    },
    {
      number: "04",
      title: "Start Learning",
      description: "Start structured lessons with past-paper drills and feedback.",
      icon: Award,
    },
  ];

  return (
    <section id="how-it-works" className="py-10 sm:py-16 lg:py-32 bg-[#F5F0E8] border-t border-[#E8E1D5]/60">
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-16 lg:mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#52525B]">
            Simple 4-Step Process
          </span>
          <h2 className="mt-2 sm:mt-3 text-2xl sm:text-4xl lg:text-5xl font-bold text-[#18181B] tracking-tight">
            How Apex Tutors Works
          </h2>
          <p className="mt-2 sm:mt-4 text-sm sm:text-lg text-[#52525B] leading-relaxed">
            Find a verified tutor and start with a free demo class in under 24 hours.
          </p>
        </div>

        {/* 4 Steps Minimal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-[#FAF7F2] rounded-2xl p-4 sm:p-8 border border-[#E8E1D5]/40 flex flex-row md:flex-col items-start gap-3.5 md:gap-0 justify-start md:justify-between"
              >
                {/* Left slot on mobile: Step number circle. Desktop: hidden */}
                <div className="shrink-0 w-10 h-10 rounded-full bg-[#EAE2D4]/70 flex items-center justify-center md:hidden">
                  <span className="text-xs font-mono font-bold text-[#18181B]">
                    {step.number}
                  </span>
                </div>

                {/* Desktop top bar: number + icon */}
                <div className="hidden md:flex items-center justify-between w-full">
                  <span className="text-sm font-mono font-medium text-[#71717A]">
                    {step.number}
                  </span>
                  <Icon className="w-5 h-5 text-[#18181B]" />
                </div>

                {/* Content right stack */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between md:block">
                    <h3 className="text-base md:text-xl font-semibold md:font-bold text-[#18181B] leading-tight md:mt-8">
                      {step.title}
                    </h3>
                    <Icon className="w-4 h-4 text-[#71717A] md:hidden shrink-0 ml-2" />
                  </div>

                  <p className="mt-1 md:mt-2.5 text-xs sm:text-sm text-[#52525B] leading-[1.4] md:leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Supporting Visual Feature Spotlight with how-it-works.jpg */}
        <div className="mt-8 sm:mt-20 bg-[#FAF7F2] rounded-2xl sm:rounded-3xl p-5 sm:p-12 border border-[#E8E1D5]/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            {/* Supporting Visual Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden aspect-4/5 max-h-[460px]">
                <Image
                  src="/images/study-smart/hard-not-smart.jpg"
                  alt="Study Smart — 5 Signs You're Studying Hard Not Smart"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content & Details */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#52525B]">
                Zero Upfront Commitment
              </span>
              <h3 className="text-xl sm:text-3xl font-bold text-[#18181B] tracking-tight">
                Experience Personalized Learning from Day One
              </h3>
              <p className="text-sm sm:text-base text-[#52525B] leading-relaxed">
                We believe every student deserves a mentor who understands their exact syllabus pressure. That&apos;s why your first 45-minute lesson is completely free — evaluate your tutor before confirming regular classes.
              </p>

              <div className="pt-2">
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium text-white bg-[#2E8B57] hover:bg-[#236d44] rounded-full transition-all min-h-[44px]"
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
