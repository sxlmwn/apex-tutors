import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist on Apex Tutors.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F5F0E8] text-[#18181B] flex flex-col justify-between">
      {/* Minimal Header */}
      <header className="bg-[#FAF7F2] border-b border-[#E8E1D5] py-4 px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 flex items-center justify-center">
              <Image
                src="/images/brand/logo-mark-v2.png"
                alt="Apex Tutors"
                width={36}
                height={36}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <span className="text-xl font-bold tracking-tight text-[#18181B]">
              Apex<span className="text-[#2E8B57]">Tutors</span>
            </span>
          </Link>
        </div>
      </header>

      {/* Main 404 Content */}
      <main className="max-w-xl mx-auto px-6 py-20 text-center space-y-6">
        <span className="inline-block px-3.5 py-1 rounded-full bg-[#2E8B57]/10 text-[#2E8B57] text-xs font-bold uppercase tracking-widest">
          Error 404
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#18181B]">
          Page Not Found
        </h1>
        <p className="text-base text-[#52525B] leading-relaxed">
          The page you requested could not be found or has been moved. You can return to our homepage or request a tutor below.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-[#2E8B57] hover:bg-[#236d44] rounded-full transition-all active:scale-95 shadow-md"
          >
            Return to Homepage
          </Link>
          <Link
            href="/signup"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-[#18181B] bg-transparent hover:bg-[#18181B]/5 border border-[#18181B]/20 rounded-full transition-all"
          >
            Request a Tutor
          </Link>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="py-6 text-center text-xs text-[#71717A] border-t border-[#E8E1D5]">
        <p>© {new Date().getFullYear()} Apex Tutors Pakistan. All rights reserved.</p>
      </footer>
    </div>
  );
}
