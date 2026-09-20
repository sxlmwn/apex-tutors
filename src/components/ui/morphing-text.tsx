"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const morphTime = 1.5;
const cooldownTime = 1.0;

const useMorphingText = (texts: string[]) => {
  const textIndexRef = useRef(0);
  const morphRef = useRef(0);
  const cooldownRef = useRef(0);
  const timeRef = useRef(new Date());

  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);

  const setStyles = useCallback(
    (fraction: number) => {
      const [current1, current2] = [text1Ref.current, text2Ref.current];
      if (!current1 || !current2) return;

      current2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      current2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      const invertedFraction = 1 - fraction;
      current1.style.filter = `blur(${Math.min(8 / invertedFraction - 8, 100)}px)`;
      current1.style.opacity = `${Math.pow(invertedFraction, 0.4) * 100}%`;

      current1.textContent = texts[textIndexRef.current % texts.length];
      current2.textContent = texts[(textIndexRef.current + 1) % texts.length];
    },
    [texts],
  );

  const doMorph = useCallback(() => {
    morphRef.current -= cooldownRef.current;
    cooldownRef.current = 0;

    let fraction = morphRef.current / morphTime;

    if (fraction > 1) {
      cooldownRef.current = cooldownTime;
      fraction = 1;
    }

    setStyles(fraction);
    if (fraction === 1) textIndexRef.current++;
  }, [setStyles]);

  const doCooldown = useCallback(() => {
    morphRef.current = 0;
    const [current1, current2] = [text1Ref.current, text2Ref.current];
    if (current1 && current2) {
      current2.style.filter = "none";
      current2.style.opacity = "100%";
      current1.style.filter = "none";
      current1.style.opacity = "0%";
    }
  }, []);

  useEffect(() => {
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const newTime = new Date();
      const dt = (newTime.getTime() - timeRef.current.getTime()) / 1000;
      timeRef.current = newTime;
      cooldownRef.current -= dt;
      if (cooldownRef.current <= 0) doMorph();
      else doCooldown();
    };
    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, [doMorph, doCooldown]);

  return { text1Ref, text2Ref };
};

interface MorphingTextProps {
  className?: string;
  texts: string[];
  showSwash?: boolean;
}

const Texts: React.FC<{
  text1Ref: React.RefObject<HTMLSpanElement | null>;
  text2Ref: React.RefObject<HTMLSpanElement | null>;
}> = ({ text1Ref, text2Ref }) => {
  return (
    <>
      <span className="absolute inset-x-0 top-0 m-auto inline-block w-full" ref={text1Ref} />
      <span className="absolute inset-x-0 top-0 m-auto inline-block w-full" ref={text2Ref} />
    </>
  );
};

const SvgFilters: React.FC = () => (
  <svg id="filters" className="hidden" preserveAspectRatio="xMidYMid slice">
    <defs>
      <filter id="threshold">
        <feColorMatrix
          in="SourceGraphic"
          type="matrix"
          values="1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 255 -140"
        />
      </filter>
    </defs>
  </svg>
);

const MorphingText: React.FC<MorphingTextProps> = ({ texts, className, showSwash = true }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { text1Ref, text2Ref } = useMorphingText(texts);
  const [swashStyle, setSwashStyle] = useState<{ left: number; top: number; width: number; opacity: number }>({
    left: 0,
    top: 0,
    width: 0,
    opacity: 0,
  });

  useEffect(() => {
    if (!showSwash) return;

    const updateSwashPosition = () => {
      const container = containerRef.current;
      const s1 = text1Ref.current;
      const s2 = text2Ref.current;
      if (!container || !s1 || !s2) return;

      const op1 = parseFloat(s1.style.opacity || "0");
      const op2 = parseFloat(s2.style.opacity || "0");
      const activeSpan = op2 > op1 ? s2 : s1;

      if (!activeSpan.childNodes.length) return;

      const text = activeSpan.textContent || "";
      const spaceIdx = text.lastIndexOf(" ");
      if (spaceIdx === -1) return;

      try {
        const textNode = activeSpan.childNodes[0];
        const range = document.createRange();
        range.setStart(textNode, spaceIdx + 1);
        range.setEnd(textNode, text.length);

        const wordRect = range.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        if (wordRect.width > 0 && containerRect.width > 0) {
          setSwashStyle({
            left: wordRect.left - containerRect.left,
            top: wordRect.bottom - containerRect.top - 4,
            width: wordRect.width,
            opacity: 1,
          });
        }
      } catch {
        // ignore Range transient detach
      }
    };

    const interval = setInterval(updateSwashPosition, 60);
    window.addEventListener("resize", updateSwashPosition);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", updateSwashPosition);
    };
  }, [showSwash, text1Ref, text2Ref]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative mx-auto h-16 w-full text-center font-sans text-[40pt] font-bold leading-none md:h-24 lg:text-[6rem]",
        className,
      )}
    >
      <div className="relative w-full h-full [filter:url(#threshold)_blur(0.6px)]">
        <Texts text1Ref={text1Ref} text2Ref={text2Ref} />
        <SvgFilters />
      </div>

      {showSwash && swashStyle.width > 0 && (
        <div
          className="absolute pointer-events-none z-10 transition-all duration-300 ease-out"
          style={{
            left: `${swashStyle.left}px`,
            top: `${swashStyle.top}px`,
            width: `${swashStyle.width}px`,
            opacity: swashStyle.opacity,
          }}
        >
          <svg
            className="w-full text-[#2E8B57]"
            height="14"
            viewBox="0 0 200 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M2 10C50 3 150 3 198 10"
              stroke="#2E8B57"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export { MorphingText };
