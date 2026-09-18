import Link from "next/link";
import { GraduationCap } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-[#161513] text-[#A1A1AA] pt-20 pb-12 border-t border-[#2B2824]">
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-16 border-b border-[#2B2824]">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#2E8B57] text-white flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-white leading-none">
                  Apex<span className="text-[#2E8B57]">Tutors</span>
                </span>
                <span className="text-[10px] font-medium text-[#71717A] tracking-wider uppercase mt-0.5">
                  Pakistan
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#71717A] leading-relaxed max-w-sm">
              Connecting Matric &amp; FSc students across Pakistan with verified university scholars from LUMS, NUST, AKU, FAST, and GIKI.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-[#71717A]">
              <a
                href="https://wa.me/923000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                WhatsApp: +92 300 0000000
              </a>
              <a
                href="mailto:support@apextutors.pk"
                className="hover:text-white transition-colors"
              >
                admissions@apextutors.pk
              </a>
              <span>Serving DHA, Bahria Town &amp; Major Cities Nationwide</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-white uppercase tracking-widest">
              Navigation
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#trust-verification" className="hover:text-white transition-colors">
                  Trust &amp; Verification
                </a>
              </li>
              <li>
                <a href="#subjects" className="hover:text-white transition-colors">
                  Subjects &amp; Boards
                </a>
              </li>
              <li>
                <a href="#cities" className="hover:text-white transition-colors">
                  Cities We Cover
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-white transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <Link href="/apply-tutor" className="hover:text-white transition-colors">
                  Become a Tutor &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Academic Tracks */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-white uppercase tracking-widest">
              Academic Tracks
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/signup?grade=FSc%20Pre-Medical" className="hover:text-white transition-colors">
                  FSc Pre-Medical
                </Link>
              </li>
              <li>
                <Link href="/signup?grade=FSc%20Pre-Engineering" className="hover:text-white transition-colors">
                  FSc Pre-Engineering
                </Link>
              </li>
              <li>
                <Link href="/signup?grade=ICS" className="hover:text-white transition-colors">
                  ICS (Computer Science)
                </Link>
              </li>
              <li>
                <Link href="/signup?grade=Matric%20Science" className="hover:text-white transition-colors">
                  Matric Science
                </Link>
              </li>
              <li>
                <Link href="/signup?grade=Federal%20Board" className="hover:text-white transition-colors">
                  FBISE Federal Board Prep
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Priority Cities */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-white uppercase tracking-widest">
              Cities
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/signup?city=Karachi" className="hover:text-white transition-colors">
                  Karachi
                </Link>
              </li>
              <li>
                <Link href="/signup?city=Lahore" className="hover:text-white transition-colors">
                  Lahore
                </Link>
              </li>
              <li>
                <Link href="/signup?city=Islamabad" className="hover:text-white transition-colors">
                  Islamabad
                </Link>
              </li>
              <li>
                <Link href="/signup?city=Rawalpindi" className="hover:text-white transition-colors">
                  Rawalpindi
                </Link>
              </li>
              <li>
                <Link href="/signup?city=Multan" className="hover:text-white transition-colors">
                  Multan
                </Link>
              </li>
              <li>
                <Link href="/signup?city=Faisalabad" className="hover:text-white transition-colors">
                  Faisalabad
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717A]">
          <p>© {currentYear} Apex Tutors Pakistan. All rights reserved.</p>
          <p>Built for Pakistan&apos;s Students</p>
        </div>
      </div>
    </footer>
  );
}
