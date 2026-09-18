"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { springConfig, smoothDragSpring, snappySpring } from "@/lib/motion";

interface LinkItemProps {
  number: string;
  heading: string;
  subheading: string;
  tag: string;
  imgSrc: string;
  href: string;
}

const links: LinkItemProps[] = [
  {
    number: "01",
    heading: "How It Works",
    subheading: "Simple 4-step matching & free demo session",
    tag: "Process",
    imgSrc: "/images/how-it-works.jpg",
    href: "#how-it-works",
  },
  {
    number: "02",
    heading: "Find a Tutor",
    subheading: "Connect with LUMS, NUST, AKU, FAST & GIKI mentors",
    tag: "Students",
    imgSrc: "/images/hero-main.jpg",
    href: "/signup",
  },
  {
    number: "03",
    heading: "Become a Tutor",
    subheading: "Teach Matric & FSc students on flexible schedules",
    tag: "Scholars",
    imgSrc: "/images/why-choose-us.jpg",
    href: "/apply-tutor",
  },
  {
    number: "04",
    heading: "Our Subjects",
    subheading: "Comprehensive Federal FBISE & Punjab Board curriculum",
    tag: "Curriculum",
    imgSrc: "/images/subjects.jpg",
    href: "#subjects",
  },
  {
    number: "05",
    heading: "Cities We Cover",
    subheading: "DHA, Bahria Town & 7 premier regions across Pakistan",
    tag: "Locations",
    imgSrc: "/images/stats-bg.jpg",
    href: "#cities",
  },
];

function HoverLink({ number, heading, subheading, tag, imgSrc, href }: LinkItemProps) {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, smoothDragSpring);
  const mouseYSpring = useSpring(y, smoothDragSpring);

  const rotate = useTransform(mouseXSpring, [0, 800], ["-3deg", "3deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  return (
    <motion.div
      initial="initial"
      whileHover="whileHover"
      className="relative border-b border-[#E8E1D5]/60 first:border-t"
    >
      <Link
        ref={ref}
        href={href}
        onMouseMove={handleMouseMove}
        className="group flex flex-col md:flex-row md:items-center justify-between py-8 sm:py-10 transition-colors duration-200 relative z-10"
      >
        {/* Left Side: Number + Heading */}
        <div className="flex items-baseline gap-4 sm:gap-8 z-10">
          <span className="text-xs sm:text-sm font-mono font-medium text-[#71717A]">
            {number}
          </span>
          <motion.span
            variants={{
              initial: { x: 0 },
              whileHover: { x: 8 },
            }}
            transition={snappySpring}
            className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#18181B] group-hover:text-[#2E8B57] transition-colors duration-200"
          >
            {heading}
          </motion.span>
        </div>

        {/* Right Side: Subtitle/Tag + Minimal Circle Arrow */}
        <div className="mt-3 md:mt-0 flex items-center justify-between md:justify-end gap-6 z-10 pl-8 md:pl-0">
          <div className="flex flex-col md:items-end">
            <span className="text-xs font-mono uppercase tracking-wider text-[#71717A]">
              {tag}
            </span>
            <span className="text-xs sm:text-sm text-[#52525B]">
              {subheading}
            </span>
          </div>

          <div className="w-10 h-10 rounded-full border border-[#18181B]/20 text-[#18181B] group-hover:border-[#18181B] group-hover:bg-[#18181B] group-hover:text-white flex items-center justify-center transition-all duration-200 shrink-0">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        {/* Floating Mouse Cursor Image Thumbnail (Desktop only with spring animation) */}
        <motion.div
          style={{
            top: mouseYSpring,
            left: mouseXSpring,
            translateX: "-50%",
            translateY: "-50%",
            rotate,
          }}
          variants={{
            initial: { scale: 0, opacity: 0 },
            whileHover: { scale: 1, opacity: 1 },
          }}
          transition={springConfig}
          className="pointer-events-none absolute z-30 hidden md:block w-56 sm:w-64 lg:w-72 h-36 sm:h-40 lg:h-44 rounded-2xl overflow-hidden shadow-xl border border-[#E8E1D5] bg-[#FAF7F2]"
        >
          <Image
            src={imgSrc}
            alt={heading}
            fill
            sizes="288px"
            className="object-cover"
          />
        </motion.div>
      </Link>
    </motion.div>
  );
}

export default function HoverImageLinks() {
  return (
    <section id="explore" className="py-24 lg:py-32 bg-[#F5F0E8] border-t border-[#E8E1D5]/60 relative overflow-hidden">
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#52525B]">
            Interactive Directory
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#18181B] tracking-tight">
            Explore Apex Tutors
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#52525B] leading-relaxed">
            Hover over any link to preview Pakistan&apos;s premier Matric &amp; FSc tutoring network.
          </p>
        </div>

        {/* Vertical Stacked Hover Links List */}
        <div className="w-full">
          {links.map((link) => (
            <HoverLink key={link.number} {...link} />
          ))}
        </div>
      </div>
    </section>
  );
}
