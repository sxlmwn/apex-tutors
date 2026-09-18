"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { GraduationCap, Menu, X, ArrowRight, ShieldCheck } from "lucide-react";
import { useModal } from "@/context/ModalContext";

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
          ? "bg-[#F5F0E8]/95 backdrop-blur-md shadow-xs border-b border-[#E8E1D5] py-3"
          : "bg-[#F5F0E8]/70 backdrop-blur-md border-b border-[#E8E1D5]/40 py-4.5"
      }`}
    >
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E8B57] rounded-lg"
          >
            <div className="w-10 h-10 rounded-xl bg-[#2E8B57] text-white flex items-center justify-center shadow-sm shadow-emerald-700/20 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 leading-none">
                Apex<span className="text-[#2E8B57]">Tutors</span>
              </span>
              <span className="text-[11px] font-medium text-slate-500 tracking-wider uppercase mt-0.5">
                Pakistan
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-[#2E8B57] transition-colors py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2E8B57] transition-all duration-200 group-hover:w-full rounded-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/apply-tutor"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-slate-700 hover:text-[#2E8B57] hover:bg-emerald-50 rounded-full transition-colors"
            >
              <ShieldCheck className="w-4 h-4 text-[#2E8B57]" />
              Become a Tutor
            </Link>
            <button
              type="button"
              onClick={openModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#2E8B57] hover:bg-[#246e45] rounded-full shadow-sm shadow-emerald-700/20 hover:shadow-md transition-all active:scale-95 cursor-pointer"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center md:hidden gap-2">
            <button
              type="button"
              onClick={openModal}
              className="px-3.5 py-1.5 text-xs font-semibold text-white bg-[#2E8B57] hover:bg-[#246e45] rounded-full cursor-pointer"
            >
              Get Started
            </button>
            <button
              type="button"
              onClick={toggleDrawer}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-[#EAE2D4] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2E8B57] cursor-pointer"
              aria-label="Toggle navigation drawer"
            >
              {isDrawerOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
