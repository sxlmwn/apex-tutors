import Image from "next/image";
import { ShieldCheck, FileCheck, Sparkles, Lock, UserCheck } from "lucide-react";

export default function TrustVerification() {
  const trustFeatures = [
    {
      title: "CNIC & Student ID Verified",
      description:
        "Every tutor undergoes 100% manual authentication of their Government CNIC and active university credentials.",
      icon: ShieldCheck,
    },
    {
      title: "Subject-Qualification Screening",
      description:
        "We only accept tutors who scored 90%+ in board exams and completed rigorous conceptual testing.",
      icon: FileCheck,
    },
    {
      title: "100% Free Demo Guarantee",
      description:
        "Take a full 45-minute live demo class. If the fit isn't perfect, we rematch you immediately at zero cost.",
      icon: Sparkles,
    },
    {
      title: "Safe & Monitored Sessions",
      description:
        "Transparent session logs and regular parental check-ins ensure maximum discipline, safety, and progress.",
      icon: Lock,
    },
  ];

  return (
    <section id="trust-verification" className="py-24 lg:py-32 bg-[#F5F0E8] border-t border-[#E8E1D5]/60">
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#52525B]">
            Uncompromising Safety &amp; Quality
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#18181B] tracking-tight">
            Trust &amp; Verification You Can Rely On
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#52525B] leading-relaxed">
            We know trust is paramount when selecting a tutor for your home or online lessons. Fewer than 15% of tutor applicants pass our vetting process.
          </p>
        </div>

        {/* Split Grid: Left Side Image + Right Side Minimal Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden aspect-4/5 max-h-[480px]">
              <Image
                src="/images/verification.jpg"
                alt="Apex Tutors Verification & Trust"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

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
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {trustFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="bg-[#FAF7F2] rounded-2xl p-8 border border-[#E8E1D5]/40 flex flex-col justify-between"
                >
                  <div>
                    <Icon className="w-5 h-5 text-[#18181B] mb-6" />
                    <h3 className="text-lg font-bold text-[#18181B]">
                      {feature.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-[#52525B] leading-relaxed">
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
