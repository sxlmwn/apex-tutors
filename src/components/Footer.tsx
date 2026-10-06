import Link from "next/link";
import Image from "next/image";
import { ClipPathLinks } from "@/components/ui/clip-path-links";
import { CONTACT_INFO } from "@/lib/contact";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "@/components/ui/SocialIcons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-[#161513] text-[#A1A1AA] pt-20 pb-12 border-t border-[#2B2824]">
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-16 border-b border-[#2B2824]">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="w-9 h-9 flex items-center justify-center">
                <Image
                  src="/images/brand/logo-mark-v2.png"
                  alt="Apex Tutors"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-white leading-none">
                  Apex<span className="text-[#2E8B57]">Tutors</span>
                </span>
                <span className="text-[0.625rem] font-medium text-[#71717A] tracking-wider uppercase mt-0.5">
                  Pakistan
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#71717A] leading-relaxed max-w-sm">
              Connecting Primary, Matric, FSc, O Level, and A Level students across Pakistan with verified university scholars from LUMS, NUST, AKU, FAST, and GIKI.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-[#71717A]">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-[#71717A]">WhatsApp / Call:</span>
                <a
                  href={CONTACT_INFO.telLink}
                  className="font-semibold text-white hover:text-[#25D366] transition-colors"
                >
                  {CONTACT_INFO.whatsAppNumber}
                </a>
              </div>
              <a
                href={CONTACT_INFO.whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#25D366] transition-colors inline-flex items-center gap-1"
              >
                <span>Chat on WhatsApp</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="hover:text-white transition-colors"
              >
                {CONTACT_INFO.email}
              </a>
              <span>Serving DHA, Bahria Town &amp; Major Cities Nationwide</span>
            </div>

            {/* Connect With Us / Follow Us Section */}
            <div className="pt-3 space-y-2.5">
              <h3 className="text-xs font-semibold text-white uppercase tracking-widest">
                Connect With Us
              </h3>
              <div className="flex items-center gap-3">
                {/* Facebook Button */}
                <a
                  href={CONTACT_INFO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Apex Tutors on Facebook"
                  className="w-10 h-10 rounded-full bg-[#2B2824] text-[#A1A1AA] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#1877F2] hover:text-white hover:shadow-[0_0_15px_rgba(24,119,242,0.5)] active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1877F2]"
                >
                  <FacebookIcon className="w-5 h-5" />
                </a>

                {/* Instagram Button */}
                <a
                  href={CONTACT_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Apex Tutors on Instagram"
                  className="w-10 h-10 rounded-full bg-[#2B2824] text-[#A1A1AA] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] hover:text-white hover:shadow-[0_0_15px_rgba(221,42,123,0.5)] active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DD2A7B]"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>

                {/* WhatsApp Button */}
                <a
                  href={CONTACT_INFO.whatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with Apex Tutors on WhatsApp"
                  className="w-10 h-10 rounded-full bg-[#2B2824] text-[#A1A1AA] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#25D366] hover:text-white hover:shadow-[0_0_15px_rgba(37,211,102,0.5)] active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="w-full max-w-xs pt-2">
              <ClipPathLinks />
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
                <Link href="/signup?grade=Primary" className="hover:text-white transition-colors">
                  Primary &amp; Middle School
                </Link>
              </li>
              <li>
                <Link href="/signup?grade=O%20Level" className="hover:text-white transition-colors">
                  O Level / IGCSE (Cambridge)
                </Link>
              </li>
              <li>
                <Link href="/signup?grade=A%20Level" className="hover:text-white transition-colors">
                  A Level (AS &amp; A2)
                </Link>
              </li>
              <li>
                <Link href="/signup?grade=FSc%20Pre-Medical" className="hover:text-white transition-colors">
                  FSc (Pre-Medical &amp; Pre-Eng)
                </Link>
              </li>
              <li>
                <Link href="/signup?grade=Matric%20Science" className="hover:text-white transition-colors">
                  Matric Science &amp; Arts
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
