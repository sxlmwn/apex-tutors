import Image from "next/image";
import Link from "next/link";
import { Star, ArrowRight, Sparkles, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden w-full min-h-[calc(100vh-76px)] flex flex-col lg:flex-row items-center bg-[#F5F0E8]">
      {/* Subtle green ambient aura blob confined to far left behind headline */}
      <div className="absolute top-1/4 -left-12 w-[320px] h-[320px] bg-[#2E8B57]/8 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Main Content Container (Full width, responsive padding, inner max-w ONLY for text block) */}
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16 py-12 lg:py-20 relative z-20">
        <div className="w-full lg:w-[52%] xl:w-[48%] max-w-2xl xl:max-w-3xl space-y-7 text-center lg:text-left">
          {/* Tag / Category Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE2D4] border border-[#DDD3C2] text-xs font-bold text-[#1E5638]">
            <Sparkles className="w-3.5 h-3.5 text-[#2E8B57]" />
            <span>Verified University-Student Mentors</span>
          </div>

          {/* Oversized Dominant Portfolio-Style Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-black tracking-tight text-[#18181B] leading-[1.02]">
            Find the Perfect{" "}
            <span className="text-[#2E8B57] inline-block relative">
              Tutor
              <svg
                className="absolute -bottom-2 left-0 w-full text-[#2E8B57]/30 -z-10"
                height="12"
                viewBox="0 0 200 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 10C50 3 150 3 198 10"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            Near You
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg lg:text-xl text-[#52525B] max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
            1-on-1 tutoring by high-achieving university scholars from LUMS, NUST, AKU, FAST &amp; GIKI. Customized for Federal and Punjab Boards across DHA, Bahria Town &amp; Islamabad.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <Link
              href="/signup"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold text-white bg-[#2E8B57] hover:bg-[#236d44] rounded-full shadow-lg shadow-emerald-900/20 hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Find a Tutor
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/apply-tutor"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-bold text-[#18181B] hover:text-[#2E8B57] bg-transparent hover:bg-white/60 border-2 border-[#18181B]/80 hover:border-[#2E8B57] rounded-full transition-all"
            >
              Become a Tutor
            </Link>
          </div>

          {/* Trust Indicators Row */}
          <div className="pt-6 border-t border-[#E8E1D5] flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-[#52525B]">
            {/* Star Rating Badge */}
            <div className="flex items-center gap-2 bg-[#FAF7F2] px-3.5 py-2 rounded-xl border border-[#E8E1D5]">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-bold text-[#18181B]">4.9/5.0</span>
              <span className="text-[#71717A]">(500+ Reviews)</span>
            </div>

            {/* Verified Badge */}
            <div className="flex items-center gap-1.5 font-semibold text-[#18181B] bg-[#FAF7F2] px-3.5 py-2 rounded-xl border border-[#E8E1D5]">
              <ShieldCheck className="w-4 h-4 text-[#2E8B57]" />
              <span>500+ Verified Tutors</span>
            </div>

            {/* Free Demo Badge */}
            <div className="flex items-center gap-1.5 font-semibold text-[#18181B] bg-[#FAF7F2] px-3.5 py-2 rounded-xl border border-[#E8E1D5]">
              <CheckCircle2 className="w-4 h-4 text-[#2E8B57]" />
              <span>100% Free Demo Session</span>
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP FULL-BLEED IMAGE CONTAINER (Spans below navbar to bottom of hero, flush with right edge) */}
      <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[50%] lg:w-[52%] xl:w-[54%] h-full pointer-events-none overflow-hidden z-10 bg-[#F5F0E8]">
        {/* TOP EDGE FADE: Blends smoothly where it meets the navbar */}
        <div
          className="absolute top-0 inset-x-0 h-16 xl:h-20 z-20 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, #F5F0E8 0%, #F5F0E8 15%, transparent 100%)",
          }}
        />

        {/* BOTTOM EDGE FADE: Blends smoothly transitioning into the next section */}
        <div
          className="absolute bottom-0 inset-x-0 h-20 xl:h-24 z-20 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, #F5F0E8 0%, #F5F0E8 15%, transparent 100%)",
          }}
        />

        {/* Image Container with direct mask-image on image element */}
        <div className="relative w-full h-full mix-blend-multiply">
          {/* Full original quality, uncompressed source image, shifted rightwards to touch right edge */}
          <Image
            src="/images/hero-main.jpg"
            alt="Apex Tutors Student"
            fill
            priority
            unoptimized
            className="object-cover object-[5%_center] xl:object-[0%_center] filter contrast-[1.02]"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 35%, black 100%)",
              maskImage:
                "linear-gradient(to right, transparent 0%, black 35%, black 100%)",
            }}
          />
        </div>
      </div>

      {/* MOBILE FULL-BLEED IMAGE (Edge-to-Edge full width below text content) */}
      <div className="lg:hidden w-full relative h-[460px] sm:h-[560px] mt-4 overflow-hidden mix-blend-multiply bg-[#F5F0E8]">
        {/* Top-edge gradient fade */}
        <div
          className="absolute inset-x-0 top-0 h-24 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, #F5F0E8 0%, #F5F0E8 15%, transparent 100%)",
          }}
        />
        {/* Bottom-edge gradient fade */}
        <div
          className="absolute inset-x-0 bottom-0 h-24 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, #F5F0E8 0%, #F5F0E8 15%, transparent 100%)",
          }}
        />
        
        <Image
          src="/images/hero-main.jpg"
          alt="Apex Tutors Student"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-[center_top] filter contrast-[1.02]"
        />
      </div>
    </section>
  );
}
