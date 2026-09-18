import Image from "next/image";
import { DollarSign, Award, Laptop, CheckCircle, Shield } from "lucide-react";

export default function WhyChooseUs() {
  const benefits = [
    {
      title: "Affordable Student-to-Student Rates",
      badge: "Best Value",
      icon: DollarSign,
      iconBg: "bg-[#EAE2D4] text-[#2E8B57]",
      description:
        "Skip expensive commercial academies and inflated agency markups. We provide fair, transparent pricing that empowers parents and directly rewards hardworking university scholars.",
      points: [
        "Up to 40% more cost-effective than commercial academies",
        "Transparent hourly & monthly payment options",
        "No hidden platform fees or locked long-term contracts",
      ],
    },
    {
      title: "Verified Top University Tutors",
      badge: "Elite Mentors",
      icon: Award,
      iconBg: "bg-[#EAE2D4] text-[#2E8B57]",
      description:
        "Learn from top-achieving students from LUMS, NUST, AKU, FAST, and GIKI who recently aced the exact board examinations your child is preparing for.",
      points: [
        "100% CNIC & University ID verified profiles",
        "Relatable peer mentors who know modern board schemes",
        "Insider tricks for scoring 95%+ in objective & subjective sections",
      ],
    },
    {
      title: "Flexible Online & In-Person Classes",
      badge: "Complete Comfort",
      icon: Laptop,
      iconBg: "bg-[#EAE2D4] text-amber-700",
      description:
        "Whether you prefer the convenience of interactive digital classrooms from home or screened in-person tutoring in select neighborhoods, we adapt to your routine.",
      points: [
        "Interactive digital whiteboard & recorded sessions",
        "Screened in-home visits in DHA, Bahria & elite sectors",
        "Easy rescheduling to accommodate school exam cycles",
      ],
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-[#F5F0E8] border-t border-[#E8E1D5]">
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1E5638] bg-[#EAE2D4] px-3.5 py-1.5 rounded-full border border-[#DDD3C2]">
            The Apex Advantage
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#18181B] tracking-tight">
            Why Parents &amp; Students Choose Apex
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#52525B]">
            We bridge the gap between expensive, impersonal academies and unvetted tutors with a dedicated peer-mentorship model.
          </p>
        </div>

        {/* Split Showcase incorporating why-choose-us.jpg */}
        <div className="mb-16 bg-[#EFE9DD] rounded-3xl p-6 sm:p-10 border border-[#E0D7C6] shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Image why-choose-us.jpg */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white/80 aspect-4/3 max-h-[360px]">
                <Image
                  src="/images/why-choose-us.jpg"
                  alt="Students studying with focus"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>

              {/* Floating trust badge over image */}
              <div className="absolute -bottom-3 -right-2 sm:-right-4 bg-[#FAF7F2] px-3.5 py-2 rounded-xl shadow-lg border border-[#E8E1D5] flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#2E8B57]" />
                <span className="text-xs font-bold text-[#18181B]">Proven Track Record</span>
              </div>
            </div>

            {/* Right Column: Key Philosophy */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-[#2E8B57] uppercase tracking-wider">
                Peer-to-Peer Mentorship Model
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#18181B] leading-snug">
                We Want To Give Every Student A Confident, Focused Learning Experience
              </h3>
              <p className="text-sm text-[#52525B] leading-relaxed">
                Traditional academies cram 50+ students in one lecture hall where individual doubts get ignored. With Apex Tutors, your child receives 100% dedicated 1-on-1 attention from mentors who graduated at the top of their class.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#18181B]">
                  <CheckCircle className="w-4 h-4 text-[#2E8B57] shrink-0" />
                  <span>No Upfront Registration Fee</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#18181B]">
                  <CheckCircle className="w-4 h-4 text-[#2E8B57] shrink-0" />
                  <span>Free Tutor Replacement Anytime</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#18181B]">
                  <CheckCircle className="w-4 h-4 text-[#2E8B57] shrink-0" />
                  <span>Weekly Homework &amp; Past Paper Drills</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#18181B]">
                  <CheckCircle className="w-4 h-4 text-[#2E8B57] shrink-0" />
                  <span>Transparent Monthly Progress Reports</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Column Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="bg-[#FAF7F2] rounded-3xl p-7 border border-[#E8E1D5] hover:border-[#2E8B57]/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-13 h-13 rounded-2xl flex items-center justify-center font-bold transition-transform group-hover:scale-110 ${benefit.iconBg}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#ECE5D8] text-[#18181B]">
                      {benefit.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#18181B] group-hover:text-[#2E8B57] transition-colors">
                    {benefit.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-[#52525B] leading-relaxed">
                    {benefit.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-[#E8E1D5] space-y-2">
                    {benefit.points.map((point) => (
                      <div key={point} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#2E8B57] shrink-0 mt-0.5" />
                        <span className="text-xs font-medium text-[#18181B] leading-normal">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 flex items-center gap-1.5 text-xs font-semibold text-[#2E8B57]">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Apex Quality Assurance Guarantee</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
