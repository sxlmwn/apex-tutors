import Image from "next/image";
import { DollarSign, Award, Laptop } from "lucide-react";

export default function WhyChooseUs() {
  const benefits = [
    {
      title: "Affordable Student-to-Student Rates",
      icon: DollarSign,
      description:
        "Fair, transparent pricing directly rewarding hardworking university scholars.",
    },
    {
      title: "Verified Top University Tutors",
      icon: Award,
      description:
        "Mentors actively enrolled at LUMS, NUST, AKU, FAST, and GIKI.",
    },
    {
      title: "Online or In-Home Tutoring",
      icon: Laptop,
      description:
        "Flexible in-person sessions or live 1-on-1 digital classes nationwide.",
    },
  ];

  return (
    <section id="why-choose-us" className="py-10 sm:py-16 lg:py-32 bg-[#F5F0E8] border-t border-[#E8E1D5]/60">
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-16 lg:mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#52525B]">
            The Apex Advantage
          </span>
          <h2 className="mt-2 sm:mt-3 text-2xl sm:text-4xl lg:text-5xl font-bold text-[#18181B] tracking-tight">
            Why Parents &amp; Students Choose Apex
          </h2>
          <p className="mt-2 sm:mt-4 text-sm sm:text-lg text-[#52525B] leading-relaxed">
            Dedicated 1-on-1 peer mentorship without expensive academy fees or unvetted tutors.
          </p>
        </div>

        {/* Split Showcase with why-choose-us.jpg */}
        <div className="mb-8 sm:mb-16 bg-[#FAF7F2] rounded-2xl sm:rounded-3xl p-5 sm:p-12 border border-[#E8E1D5]/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            {/* Left Column: Image why-choose-us.jpg */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden aspect-4/5 max-h-[28.75rem]">
                <Image
                  src="/images/study-smart/method-matters.jpg"
                  alt="Study Smart — Your Study Method Matters"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Column: Key Philosophy */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#52525B]">
                Peer-to-Peer Mentorship Model
              </span>
              <h3 className="text-xl sm:text-3xl font-bold text-[#18181B] tracking-tight leading-snug">
                Confident, Focused Learning Tailored to Every Student
              </h3>
              <p className="text-sm sm:text-base text-[#52525B] leading-relaxed">
                Get 100% dedicated 1-on-1 attention from top university scholars instead of crowded academy lecture halls.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-2 text-xs sm:text-sm text-[#18181B]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2E8B57]" />
                  <span>No Upfront Registration Fee</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2E8B57]" />
                  <span>Free Tutor Replacement Anytime</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2E8B57]" />
                  <span>Weekly Homework &amp; Past Paper Drills</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2E8B57]" />
                  <span>Transparent Progress Reports</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Column Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-6">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="bg-[#FAF7F2] rounded-2xl p-4 sm:p-10 border border-[#E8E1D5]/40 flex flex-row lg:flex-col items-start gap-3.5 lg:gap-0 justify-start lg:justify-between"
              >
                {/* Left slot on mobile (40px badge). Desktop: transparent icon */}
                <div className="shrink-0 w-10 h-10 rounded-full bg-[#EAE2D4]/70 flex items-center justify-center lg:w-auto lg:h-auto lg:rounded-none lg:bg-transparent lg:mb-8">
                  <Icon className="w-5 h-5 text-[#18181B]" />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-base lg:text-xl font-semibold lg:font-bold text-[#18181B] leading-tight">
                    {benefit.title}
                  </h3>

                  <p className="mt-1 lg:mt-3 text-xs sm:text-sm text-[#52525B] leading-[1.4] lg:leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
