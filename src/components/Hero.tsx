"use client";

import Image from "next/image";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";
import { MorphingText } from "@/components/ui/morphing-text";

export default function Hero() {
  const { openModal } = useModal();

  return (
    <section className="relative overflow-hidden w-full h-[calc(100dvh-70px)] sm:h-auto sm:min-h-[calc(100vh-80px)] min-h-[560px] flex flex-col justify-between items-center lg:flex-row bg-[#F5F0E8]">
      {/* Main Content Container */}
      <div className="w-full h-full px-6 sm:px-8 lg:px-12 xl:px-16 pt-4 pb-28 sm:pt-10 sm:pb-20 lg:py-28 relative z-20 flex flex-col justify-between lg:block lg:h-auto">
        <div className="w-full h-full lg:h-auto lg:w-[52%] xl:w-[48%] max-w-2xl xl:max-w-3xl flex flex-col justify-between lg:block lg:space-y-8 text-center lg:text-left">
          {/* Top text block: Heading & subline sitting directly below navbar on mobile */}
          <div className="space-y-2 sm:space-y-4">
            {/* Tag / Category Badge (Hidden on mobile) */}
            <div className="hidden md:block">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#52525B]">
                Verified University-Student Mentors
              </span>
            </div>

            {/* Morphing Headline */}
            <h1 className="sr-only">Apex Tutors — Verified Tutors in Pakistan</h1>
            <MorphingText
              texts={["Verified Tutors", "Trusted Results", "Real Progress", "Apex Tutors"]}
              className="text-[#18181B] font-black tracking-tight text-3xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-[5.25rem] text-center lg:text-left mx-auto lg:mx-0 h-12 sm:h-20 md:h-24 lg:h-28 xl:h-32"
            />

            {/* Mobile short subline (8 words, muted, min 14px) */}
            <p className="md:hidden text-sm sm:text-base text-[#52525B] max-w-xs mx-auto leading-snug font-normal">
              1-on-1 tutoring by top university scholars.
            </p>

            {/* Desktop / Tablet Subheadline paragraph */}
            <p className="hidden md:block text-base sm:text-lg lg:text-xl text-[#52525B] max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              1-on-1 tutoring by high-achieving university scholars from LUMS, NUST, AKU, FAST &amp; GIKI. Tailored for Primary, Matric, FSc, O Level &amp; A Level students across DHA, Bahria Town &amp; major cities nationwide.
            </p>
          </div>

          {/* Bottom actions block: Primary CTA with safe spacing above mobile bottom nav */}
          <div className="space-y-6 sm:space-y-8 pt-4 lg:pt-0">
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                type="button"
                onClick={openModal}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-white bg-[#2E8B57] hover:bg-[#236d44] rounded-full transition-all active:scale-95 cursor-pointer shadow-lg hover:shadow-xl min-h-[44px]"
              >
                Find a Tutor
              </button>
              <Link
                href="/apply-tutor"
                className="hidden sm:inline-flex w-full sm:w-auto items-center justify-center px-8 py-4 text-sm sm:text-base font-medium text-[#18181B] bg-transparent hover:bg-[#18181B]/5 border border-[#18181B]/20 rounded-full transition-all min-h-[44px]"
              >
                Become a Tutor
              </Link>
            </div>

            {/* Trust Indicators Row (Hidden on mobile) */}
            <div className="hidden md:flex pt-6 border-t border-[#E8E1D5]/60 flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm text-[#52525B]">
              <span className="flex items-center gap-1.5 font-medium text-[#18181B]">
                <span className="text-amber-500">★</span> 4.9/5.0 <span className="text-[#71717A] font-normal">(500+ Reviews)</span>
              </span>
              <span className="hidden sm:inline text-[#D4CFC7]">•</span>
              <span className="font-medium text-[#18181B]">500+ Verified Tutors</span>
              <span className="hidden sm:inline text-[#D4CFC7]">•</span>
              <span className="font-medium text-[#18181B]">Free Demo Session</span>
            </div>
          </div>
        </div>
      </div>

      {/* FULL-BLEED IMAGE CONTAINER (Absolute overlay at all breakpoints: full width on mobile, right-half on desktop) */}
      <div className="absolute inset-0 lg:left-auto lg:right-0 w-full lg:w-[52%] xl:w-[54%] h-full pointer-events-none overflow-hidden z-10 bg-[#F5F0E8]">
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

        {/* Mobile Scrim: Light fade at top where text sits, keeping text legible while image stays sharp & clear below */}
        <div
          className="lg:hidden absolute inset-0 z-15 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(245, 240, 232, 0.92) 0%, rgba(245, 240, 232, 0.72) 18%, rgba(245, 240, 232, 0.15) 30%, transparent 42%)",
          }}
        />

        {/* Mobile Image: Sharp, full opacity, no wash-out blend mode */}
        <div className="lg:hidden relative w-full h-full opacity-100">
          <Image
            src="/images/hero-main.jpg"
            alt="Apex Tutors Student"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover object-[center_22%] sm:object-[center_15%]"
          />
        </div>

        {/* Desktop Image (Preserved exactly as before) */}
        <div className="hidden lg:block relative w-full h-full mix-blend-multiply">
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
    </section>
  );
}
