"use client";

import React from "react";
import { WHATSAPP_CHAT_LINK } from "@/lib/contact";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="WhatsApp Contact" className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40">
      <a
        href={WHATSAPP_CHAT_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative group w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
      >
        {/* Clean WhatsApp Icon */}
        <WhatsAppIcon className="w-6 h-6 sm:w-6.5 sm:h-6.5" />

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
      </a>
    </aside>
  );
}
