import Image from "next/image";
import { ShieldCheck, UserCheck, Award, FileCheck2 } from "lucide-react";

export default function TrustVerification() {
  const trustFeatures = [
    {
      title: "100% CNIC & Background Verified",
      description: "Verified via NADRA CNIC before meeting students.",
      icon: ShieldCheck,
    },
    {
      title: "Enrolled in Top Pakistani Universities",
      description: "Scholars from LUMS, NUST, AKU, FAST, and GIKI with verified transcripts.",
      icon: UserCheck,
    },
    {
      title: "Board & Cambridge Top Scorers",
      description: "Top scorers with A+ / 90%+ in boards or straight A*/As in O/A Levels.",
      icon: Award,
    },
    {
      title: "Pedagogy & Chemistry Interview",
      description: "Multi-stage vetting assessing subject mastery, patience, and clarity.",
      icon: FileCheck2,
    },
  ];

  return (
    <section id="trust-verification" className="py-10 sm:py-16 lg:py-32 bg-[#F5F0E8] border-t border-[#E8E1D5]/60">
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-16 lg:mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#52525B]">
            Uncompromising Safety &amp; Quality
          </span>
          <h2 className="mt-2 sm:mt-3 text-2xl sm:text-4xl lg:text-5xl font-bold text-[#18181B] tracking-tight">
            Trust &amp; Verification You Can Rely On
          </h2>
          <p className="mt-2 sm:mt-4 text-sm sm:text-lg text-[#52525B] leading-relaxed">
            Fewer than 15% of tutor applicants pass our rigorous vetting process.
          </p>
        </div>

        {/* Split Grid: Left Side Image + Right Side Minimal Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:max-w-none w-full min-h-[440px] sm:min-h-[500px] lg:min-h-[520px]">
              <Image
                src="/images/apex-tutor-verified.jpg"
                alt="Verified Apex Tutors tutor"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-top"
              />
              {/* Very light gradient only at the bottom behind the overlay card */}
              <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />

              {/* In-Image Overlay Card */}
              <div className="absolute bottom-5 left-5 right-5 bg-[#FAF7F2]/95 backdrop-blur-md p-4 rounded-xl border border-[#E8E1D5]/60">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#EAE2D4] text-[#18181B] flex items-center justify-center">
                    <UserCheck className="w-5 h-5 text-[#2E8B57]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#18181B]">100% Background Verified</p>
                    <p className="text-[11px] text-[#71717A]">NADRA CNIC + University Enrollment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Minimal Icon Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
            {trustFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="bg-[#FAF7F2] rounded-2xl p-4 sm:p-8 border border-[#E8E1D5]/40 flex flex-row sm:flex-col items-start gap-3.5 sm:gap-0 justify-start sm:justify-between"
                >
                  {/* Left slot on mobile (40px badge). Desktop: transparent icon */}
                  <div className="shrink-0 w-10 h-10 rounded-full bg-[#EAE2D4]/70 flex items-center justify-center sm:w-auto sm:h-auto sm:rounded-none sm:bg-transparent sm:mb-6">
                    <Icon className="w-5 h-5 text-[#18181B]" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-base sm:text-lg font-semibold sm:font-bold text-[#18181B] leading-tight sm:leading-snug">
                      {feature.title}
                    </h3>
                    <p className="mt-1 sm:mt-2.5 text-xs sm:text-sm text-[#52525B] leading-[1.4] sm:leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
