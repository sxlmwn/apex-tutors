"use client";

import React from "react";
import { motion } from "framer-motion";
import { WHATSAPP_CHAT_LINK } from "@/lib/contact";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";
import { springConfig } from "@/lib/motion";

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="WhatsApp Contact" className="fixed bottom-6 right-4 sm:bottom-6 sm:right-6 z-40">
      <motion.a
        href={WHATSAPP_CHAT_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        transition={springConfig}
        className="relative group w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#FAF7F2]/80 hover:bg-[#2E8B57] active:bg-[#236d44] border border-[#18181B]/10 hover:border-[#2E8B57] ring-1 ring-[#2E8B57]/20 hover:ring-[#2E8B57]/30 backdrop-blur-lg text-[#2E8B57] hover:text-[#FAF7F2] active:text-[#FAF7F2] flex items-center justify-center shadow-lg transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E8B57] focus-visible:ring-offset-2"
      >
        {/* Clean WhatsApp Icon */}
        <WhatsAppIcon className="w-5 h-5 sm:w-5.5 sm:h-5.5 transition-colors duration-200" />

        {/* Desktop Tooltip */}
        <span
          role="tooltip"
          className="hidden md:block absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-md bg-[#18181B] text-white text-xs font-medium whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-150"
        >
          Chat on WhatsApp
          <span
            className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-[#18181B]"
            aria-hidden="true"
          />
        </span>
      </motion.a>
    </aside>
  );
}

