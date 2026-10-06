"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0]?.name ?? "");

  useEffect(() => {
    if (!items.length) return;

    const handleScroll = () => {
      const line = window.innerHeight * 0.4;
      let current = items[0].name;

      for (const item of items) {
        if (item.url.length > 1) {
          const el = document.getElementById(item.url.slice(1));
          if (el && el.getBoundingClientRect().top <= line) {
            current = item.name;
          }
        }
      }

      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 4
      ) {
        current = items[items.length - 1].name;
      }

      setActiveTab(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [items]);

  return (
    <div
      className={cn(
        "fixed bottom-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:hidden",
        className,
      )}
    >
      <div className="flex items-center gap-3 bg-[#FAF7F2]/70 border border-[#18181B]/10 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <Link
              key={item.name}
              href={item.url}
              aria-label={item.name}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-4 py-2 rounded-full transition-colors",
                "text-[#18181B]/80 hover:text-[#2E8B57]",
                isActive && "bg-[#2E8B57]/10 text-[#2E8B57]",
              )}
            >
              <Icon size={15} strokeWidth={2.5} />
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-[#2E8B57]/5 rounded-full -z-10"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#2E8B57] rounded-t-full">
                    <div className="absolute w-12 h-6 bg-[#2E8B57]/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-[#2E8B57]/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-[#2E8B57]/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
