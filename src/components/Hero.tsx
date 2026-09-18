"use client";

import Image from "next/image";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";

export default function Hero() {
  const { openModal } = useModal();

  return (
    <section className="relative overflow-hidden w-full min-h-[calc(100vh-80px)] flex flex-col lg:flex-row items-center bg-[#F5F0E8]">
      {/* Main Content Container (Full width, responsive padding, inner max-w ONLY for text block) */}
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16 py-16 lg:py-28 relative z-20">
        <div className="w-full lg:w-[52%] xl:w-[48%] max-w-2xl xl:max-w-3xl space-y-8 text-center lg:text-left">
          {/* Tag / Category Badge */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#52525B]">
              Verified University-Student Mentors
            </span>
          </div>

          {/* Oversized Dominant Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-black tracking-tight text-[#18181B] leading-[1.02]">
            Find the Perfect{" "}
            <span className="text-[#2E8B57]">Tutor</span>{" "}
            Near You
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg lg:text-xl text-[#52525B] max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
            1-on-1 tutoring by high-achieving university scholars from LUMS, NUST, AKU, FAST &amp; GIKI. Customized for Federal and Punjab Boards across DHA, Bahria Town &amp; Islamabad.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <button
              type="button"
              onClick={openModal}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm sm:text-base font-medium text-white bg-[#2E8B57] hover:bg-[#236d44] rounded-full transition-all active:scale-95 cursor-pointer"
            >
              Find a Tutor
            </button>
            <Link
              href="/apply-tutor"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm sm:text-base font-medium text-[#18181B] bg-transparent hover:bg-[#18181B]/5 border border-[#18181B]/20 rounded-full transition-all"
            >
              Become a Tutor
            </Link>
          </div>

          {/* Trust Indicators Row */}
          <div className="pt-6 border-t border-[#E8E1D5]/60 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm text-[#52525B]">
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
