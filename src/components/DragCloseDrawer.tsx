"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, X } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import { backdropVariants, drawerVariants } from "@/lib/motion";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Subjects & Boards", href: "#subjects" },
  { name: "Cities We Cover", href: "#cities" },
  { name: "Why Choose Us", href: "#why-choose-us" },
  { name: "Explore Directory", href: "#explore" },
  { name: "Contact", href: "#contact" },
];

export default function DragCloseDrawer() {
  const { isDrawerOpen, closeDrawer, openModal } = useModal();

  return (
    <AnimatePresence>
      {isDrawerOpen && (
        <motion.div
          key="drawer-backdrop"
          variants={backdropVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          onClick={closeDrawer}
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs md:hidden"
        >
          {/* Draggable Drawer Sheet */}
          <motion.div
            key="drawer-sheet"
            variants={drawerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.6 }}
            onDragEnd={(_, { offset, velocity }) => {
              if (offset.y > 100 || velocity.y > 0.6) {
                closeDrawer();
              }
            }}
            className="absolute bottom-0 left-0 right-0 bg-[#FAF7F2] border-t border-[#E8E1D5]/80 rounded-t-3xl p-6 pt-3 pb-8 max-h-[85vh] overflow-y-auto text-[#18181B]"
          >
            {/* Top Drag Handle Indicator Bar */}
            <div className="w-12 h-1 rounded-full bg-[#DDD3C2] mx-auto my-2.5 cursor-grab active:cursor-grabbing hover:bg-[#A1A1AA] transition-colors" />

            {/* Drawer Header with Brand + Close X */}
            <div className="flex items-center justify-between py-2 mb-4 border-b border-[#E8E1D5]/60">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#2E8B57] text-white flex items-center justify-center">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <span className="text-base font-bold tracking-tight text-[#18181B]">
                  Apex<span className="text-[#2E8B57]">Tutors</span>
                </span>
              </div>

              <button
                type="button"
                onClick={closeDrawer}
                className="w-8 h-8 rounded-full bg-[#EAE2D4] hover:bg-[#DDD3C2] text-[#18181B] flex items-center justify-center transition-colors focus:outline-none cursor-pointer"
                aria-label="Close menu drawer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Stacked Navigation Links */}
            <nav className="flex flex-col space-y-1 mb-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeDrawer}
                  className="px-4 py-3 rounded-xl text-sm font-medium text-[#18181B] hover:text-[#2E8B57] hover:bg-[#EAE3D6]/50 transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                </a>
              ))}
            </nav>

            {/* Action Buttons Stack */}
            <div className="pt-4 border-t border-[#E8E1D5]/60 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  closeDrawer();
                  openModal();
                }}
                className="w-full flex items-center justify-center px-5 py-3.5 text-sm font-medium text-white bg-[#2E8B57] hover:bg-[#236d44] rounded-full active:scale-95 transition-all"
              >
                Find a Tutor
              </button>

              <Link
                href="/apply-tutor"
                onClick={closeDrawer}
                className="w-full flex items-center justify-center px-5 py-3 text-sm font-medium text-[#18181B] hover:bg-[#18181B]/5 border border-[#18181B]/20 rounded-full transition-all"
              >
                Become a Tutor
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
