import Image from "next/image";
import { ShieldCheck, Sparkles, CheckCircle, FileCheck, Lock, UserCheck } from "lucide-react";

export default function TrustVerification() {
  const trustFeatures = [
    {
      title: "CNIC & Student ID Verified",
      tag: "Identity Checked",
      description:
        "Every tutor undergoes 100% manual authentication of their Government CNIC and active student credentials from LUMS, NUST, AKU, FAST, and GIKI.",
      icon: ShieldCheck,
      color: "text-[#2E8B57] bg-[#EAE3D6] border-[#DDD3C2]",
    },
    {
      title: "Subject-Qualification Screening",
      tag: "Academic Excellence",
      description:
        "We only accept tutors who scored 90%+ (A1 grades) in Matric and FSc board exams. Each candidate completes conceptual testing before teaching.",
      icon: FileCheck,
      color: "text-[#2E8B57] bg-[#EAE3D6] border-[#DDD3C2]",
    },
    {
      title: "100% Free Demo Guarantee",
      tag: "Zero Risk",
      description:
        "Never pay upfront. Take a full 45-minute live demo class. If the teaching style doesn't fit your child, we rematch you immediately at no cost.",
      icon: Sparkles,
      color: "text-amber-700 bg-[#EAE3D6] border-[#DDD3C2]",
    },
    {
      title: "Safe & Monitored Sessions",
      tag: "Parent Peace of Mind",
      description:
        "Transparent session logs, recorded virtual sessions, and regular parental check-ins ensure maximum discipline, safety, and consistent progress.",
      icon: Lock,
      color: "text-[#2E8B57] bg-[#EAE3D6] border-[#DDD3C2]",
    },
  ];

  return (
    <section id="trust-verification" className="py-20 bg-[#F5F0E8] border-t border-[#E8E1D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1E5638] bg-[#EAE2D4] px-3.5 py-1.5 rounded-full border border-[#DDD3C2]">
            Uncompromising Safety &amp; Quality
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#18181B] tracking-tight">
            Trust &amp; Verification You Can Rely On
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#52525B]">
            We know trust is paramount when selecting a tutor for your home or online lessons. Fewer than 15% of tutor applicants pass our vetting process.
          </p>
        </div>

        {/* Split Grid: Left Side Image (verification.jpg) + Right Side Icon Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Visual Showcase with verification.jpg */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-[#FAF7F2] aspect-4/5 max-h-[500px]">
              <Image
                src="/images/verification.jpg"
                alt="Apex Tutors Verification & Trust"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />

              {/* In-Image Overlay Card */}
              <div className="absolute bottom-5 left-5 right-5 bg-[#FAF7F2]/95 backdrop-blur-md p-4 rounded-2xl border border-white/60 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EAE2D4] text-[#2E8B57] flex items-center justify-center font-bold">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#18181B]">100% Background Verified</p>
                    <p className="text-[11px] text-[#71717A]">NADRA CNIC + University Enrollment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Icon + Short Text Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {trustFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="bg-[#FAF7F2] rounded-3xl p-6 border border-[#E8E1D5] hover:border-[#2E8B57]/40 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center border ${feature.color}`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#1E5638] bg-[#EAE2D4] px-2.5 py-1 rounded-md">
                        {feature.tag}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-[#18181B]">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-[#52525B] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#E8E1D5] flex items-center gap-1.5 text-[11px] font-semibold text-[#2E8B57]">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Verified Guarantee</span>
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
