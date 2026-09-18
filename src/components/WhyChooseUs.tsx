import Image from "next/image";
import { DollarSign, Award, Laptop } from "lucide-react";

export default function WhyChooseUs() {
  const benefits = [
    {
      title: "Affordable Student-to-Student Rates",
      icon: DollarSign,
      description:
        "Skip expensive commercial academies and inflated agency markups. We provide fair, transparent pricing that directly rewards hardworking university scholars.",
    },
    {
      title: "Verified Top University Tutors",
      icon: Award,
      description:
        "Learn from high-achieving students from LUMS, NUST, AKU, FAST, and GIKI who recently aced the exact board examinations your child is preparing for.",
    },
    {
      title: "Flexible Online & In-Person Classes",
      icon: Laptop,
      description:
        "Whether you prefer interactive digital whiteboard classrooms from home or screened in-person tutoring in select neighborhoods, we adapt to your routine.",
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 lg:py-32 bg-[#F5F0E8] border-t border-[#E8E1D5]/60">
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#52525B]">
            The Apex Advantage
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#18181B] tracking-tight">
            Why Parents &amp; Students Choose Apex
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#52525B] leading-relaxed">
            We bridge the gap between expensive, impersonal academies and unvetted tutors with a dedicated peer-mentorship model.
          </p>
        </div>

        {/* Split Showcase with why-choose-us.jpg */}
        <div className="mb-16 bg-[#FAF7F2] rounded-3xl p-8 sm:p-12 border border-[#E8E1D5]/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Image why-choose-us.jpg */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden aspect-4/3 max-h-[360px]">
                <Image
                  src="/images/why-choose-us.jpg"
                  alt="Students studying with focus"
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
              <h3 className="text-2xl sm:text-3xl font-bold text-[#18181B] tracking-tight leading-snug">
                Confident, Focused Learning Tailored to Every Student
              </h3>
              <p className="text-sm sm:text-base text-[#52525B] leading-relaxed">
                Traditional academies cram 50+ students in one lecture hall where individual doubts get ignored. With Apex Tutors, your child receives 100% dedicated 1-on-1 attention from mentors who graduated at the top of their class.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 text-sm text-[#18181B]">
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="bg-[#FAF7F2] rounded-2xl p-8 sm:p-10 border border-[#E8E1D5]/40 flex flex-col justify-between"
              >
                <div>
                  <Icon className="w-5 h-5 text-[#18181B]" />

                  <h3 className="mt-8 text-xl font-bold text-[#18181B]">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm text-[#52525B] leading-relaxed">
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
