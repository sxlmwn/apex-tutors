"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import { CONTACT_INFO } from "@/lib/contact";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { openModal, toggleDrawer, isDrawerOpen } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Subjects", href: "#subjects" },
    { name: "Cities", href: "#cities" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F5F0E8]/95 backdrop-blur-md border-b border-[#E8E1D5]/60 py-3.5"
          : "bg-[#F5F0E8]/80 backdrop-blur-md border-b border-transparent py-5"
      }`}
    >
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E8B57] rounded-lg"
          >
            <div className="w-9 h-9 flex items-center justify-center transition-transform group-hover:scale-105">
              <Image
                src="/images/brand/logo-mark-v2.png"
                alt="Apex Tutors"
                width={36}
                height={36}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-[#18181B] leading-none">
                Apex<span className="text-[#2E8B57]">Tutors</span>
              </span>
              <span className="text-[0.625rem] font-medium text-[#71717A] tracking-wider uppercase mt-0.5">
                Pakistan
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#52525B] hover:text-[#18181B] transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-4 lg:gap-5">
            <a
              href={CONTACT_INFO.whatsAppChatLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`WhatsApp Us at ${CONTACT_INFO.whatsAppNumber}`}
              className="group inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#18181B] bg-emerald-500/10 hover:bg-[#25D366] hover:text-white border border-[#25D366]/30 hover:border-[#25D366] rounded-full transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shadow-xs"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366] group-hover:text-white transition-colors" />
              <span>WhatsApp Us</span>
            </a>
            <Link
              href="/apply-tutor"
              className="text-sm font-medium text-[#52525B] hover:text-[#18181B] transition-colors"
            >
              Become a Tutor
            </Link>
            <button
              type="button"
              onClick={openModal}
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[#2E8B57] hover:bg-[#236d44] rounded-full transition-all active:scale-95 cursor-pointer"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center md:hidden gap-3">
            <button
              type="button"
              onClick={openModal}
              className="px-4 py-2 text-xs font-medium text-white bg-[#2E8B57] hover:bg-[#236d44] rounded-full cursor-pointer"
            >
              Get Started
            </button>
            <button
              type="button"
              onClick={toggleDrawer}
              className="p-2 rounded-lg text-[#52525B] hover:text-[#18181B] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2E8B57] cursor-pointer"
              aria-label="Toggle navigation drawer"
            >
              {isDrawerOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
