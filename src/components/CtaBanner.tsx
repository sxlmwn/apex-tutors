"use client";

import Image from "next/image";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";

export default function CtaBanner() {
  const { openModal } = useModal();

  return (
    <section className="py-24 sm:py-32 bg-[#F5F0E8] border-t border-[#E8E1D5]/60">
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="bg-[#18181B] rounded-3xl text-white p-8 sm:p-14 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#A1A1AA]">
                Zero-Risk Guarantee • 100% Free Demo
              </span>

              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                Ready to Find Your Tutor?
              </h2>

              <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
                Tell us your board, grade, and subject needs. We will match you with a verified university mentor from LUMS, NUST, AKU, FAST, or GIKI in under 24 hours.
              </p>

              {/* Two Standardized Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  type="button"
                  onClick={openModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm sm:text-base font-medium text-white bg-[#2E8B57] hover:bg-[#236d44] rounded-full transition-all active:scale-95 cursor-pointer"
                >
                  Find a Tutor
                </button>
                <Link
                  href="/apply-tutor"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm sm:text-base font-medium text-white bg-transparent hover:bg-white/10 border border-white/20 rounded-full transition-all"
                >
                  Become a Tutor
                </Link>
              </div>

              <div className="pt-4 text-xs text-[#71717A]">
                <span>No upfront payment • Vetted scholars • 24-hour matching</span>
              </div>
            </div>

            {/* Right Side Visual */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-sm h-[320px] sm:h-[360px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/cta-final.jpg"
                  alt="Ready to learn with Apex Tutors"
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 768px) 100vw, 35vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
