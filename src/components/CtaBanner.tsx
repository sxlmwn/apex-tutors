"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";
import { useModal } from "@/context/ModalContext";

export default function CtaBanner() {
  const { openModal } = useModal();
  return (
    <section className="py-16 sm:py-20 bg-[#F5F0E8] border-t border-[#E8E1D5]">
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="relative overflow-hidden bg-gradient-to-br from-[#2E8B57] via-[#236d44] to-[#1a5234] rounded-3xl text-white shadow-2xl">
          {/* Decorative shapes */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 lg:p-14 relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-xs text-xs font-semibold text-emerald-100 border border-white/20">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Zero-Risk Guarantee • 100% Free Demo Session</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                Ready to Find Your Tutor?
              </h2>

              <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed font-normal max-w-xl mx-auto lg:mx-0">
                Tell us your board, grade, and subject needs. We will match you with a verified university mentor from LUMS, NUST, AKU, FAST, or GIKI in under 24 hours.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  type="button"
                  onClick={openModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold text-[#1a5234] bg-white hover:bg-[#FAF7F2] rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  Find a Tutor Now
                  <ArrowRight className="w-5 h-5 text-[#2E8B57]" />
                </button>
                <Link
                  href="/apply-tutor"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-bold text-white bg-white/10 hover:bg-white/20 border border-white/30 rounded-full backdrop-blur-xs transition-all"
                >
                  Become a Tutor
                </Link>
              </div>

              {/* Quick Guarantees */}
              <div className="pt-4 border-t border-white/15 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-xs text-emerald-100 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                  No upfront payment
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-300" />
                  Vetted University Scholars
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                  Fast 24-Hour Matching
                </span>
              </div>
            </div>

            {/* Right Side Visual with cta-final.jpg */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl border-4 border-white/30 aspect-4/5 max-h-[360px]">
                <Image
                  src="/images/cta-final.jpg"
                  alt="Ready to learn with Apex Tutors"
                  fill
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
