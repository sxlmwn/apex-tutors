"use client";

import React from "react";
import {
  SiFacebook,
  SiInstagram,
  SiTiktok,
  SiWhatsapp,
} from "react-icons/si";
import { FaLinkedinIn as SiLinkedin } from "react-icons/fa6";
import type { IconType } from "react-icons";
import { useAnimate } from "motion/react";

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

type Side = "left" | "right" | "top" | "bottom";

const ENTRANCE_KEYFRAMES: Record<Side, string[]> = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES: Record<Side, string[]> = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

interface LinkBoxProps {
  Icon: IconType;
  href: string;
  label: string;
}

const LinkBox: React.FC<LinkBoxProps> = ({ Icon, href, label }) => {
  const [scope, animate] = useAnimate();

  const getNearestSide = (e: React.MouseEvent<HTMLAnchorElement>): Side => {
    const box = (e.target as HTMLElement).getBoundingClientRect();

    const proximityToLeft = { proximity: Math.abs(box.left - e.clientX), side: "left" as Side };
    const proximityToRight = { proximity: Math.abs(box.right - e.clientX), side: "right" as Side };
    const proximityToTop = { proximity: Math.abs(box.top - e.clientY), side: "top" as Side };
    const proximityToBottom = { proximity: Math.abs(box.bottom - e.clientY), side: "bottom" as Side };

    const sortedProximity = [
      proximityToLeft,
      proximityToRight,
      proximityToTop,
      proximityToBottom,
    ].sort((a, b) => a.proximity - b.proximity);

    return sortedProximity[0].side;
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const side = getNearestSide(e);
    animate(scope.current, { clipPath: ENTRANCE_KEYFRAMES[side] });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const side = getNearestSide(e);
    animate(scope.current, { clipPath: EXIT_KEYFRAMES[side] });
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative grid h-16 w-full place-content-center sm:h-20"
    >
      <Icon className="text-lg text-[#18181B] sm:text-xl" />

      <div
        ref={scope}
        style={{ clipPath: BOTTOM_RIGHT_CLIP }}
        className="absolute inset-0 grid place-content-center bg-[#18181B] text-white"
      >
        <Icon className="text-lg sm:text-xl" />
      </div>
    </a>
  );
};

export const ClipPathLinks: React.FC = () => {
  return (
    <div className="divide-y divide-[#18181B]/15 border border-[#18181B]/15 rounded-2xl overflow-hidden bg-[#FAF7F2]">
      <div className="grid grid-cols-2 divide-x divide-[#18181B]/15">
        <LinkBox Icon={SiFacebook} href="#" label="Facebook" />
        <LinkBox Icon={SiInstagram} href="#" label="Instagram" />
      </div>
      <div className="grid grid-cols-3 divide-x divide-[#18181B]/15">
        <LinkBox Icon={SiLinkedin} href="#" label="LinkedIn" />
        <LinkBox Icon={SiTiktok} href="#" label="TikTok" />
        <LinkBox Icon={SiWhatsapp} href="#" label="WhatsApp" />
      </div>
    </div>
  );
};
