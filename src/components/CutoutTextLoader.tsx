"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { loaderVariants } from "@/lib/motion";

interface CutoutTextLoaderProps {
  minDurationMs?: number;
  text?: string;
}

/**
 * CutoutTextLoader
 *
 * Full-page initial loading screen based on the hover.dev Cutout Text Loader pattern:
 * https://www.hover.dev/components/loaders#cutout-text-loader
 *
 * Features large bold text reading "Apex Tutors" acting as a cutout mask revealing
 * an animated moving green (#2E8B57) & beige (#FAF7F2 / #F5F0E8) gradient sliding
 * behind the letters, framed by the site's exact beige background tone (#F5F0E8).
 *
 * Runs once on initial site visit/mount, displaying for ~1.3s before smoothly
 * fading out to reveal the fully loaded landing page.
 */
export default function CutoutTextLoader({
  minDurationMs = 1300,
  text = "Apex Tutors",
}: CutoutTextLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lock scroll during initial loader display
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = originalOverflow;
    }, minDurationMs);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = originalOverflow;
    };
  }, [minDurationMs]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="apex-cutout-loader"
          variants={loaderVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed inset-0 w-full h-full z-[9999] flex items-center justify-center bg-[#F5F0E8] overflow-hidden select-none"
        >
          {/* Layer 0: Background animated moving gradient underlay (hover.dev reference pattern) */}
          <div
            className="absolute inset-0 z-0 bg-cutout-gradient animate-cutout-slide pointer-events-none"
            style={{ backgroundSize: "200% auto" }}
          />

          {/* Layer 1: Exterior background - exact site warm beige (#F5F0E8) */}
          <div className="absolute inset-0 z-10 bg-[#F5F0E8] pointer-events-none" />

          {/* Layer 2: Monumental Cutout Typography with matching animated moving gradient */}
          <span
            className="relative z-20 font-black tracking-tight text-center text-transparent bg-clip-text bg-cutout-gradient animate-cutout-slide select-none pointer-events-none px-4"
            style={{
              fontSize: "clamp(3.5rem, 11vw, 8.5rem)",
              lineHeight: 1,
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {text}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
