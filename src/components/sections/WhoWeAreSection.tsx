"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { SectionImage } from "@/components/ui/SectionImage";
import { philosophy, philosophyIntro } from "@/lib/constants";

function LetterProgressBar({
  index,
  total,
  progress,
}: {
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const scaleX = useTransform(progress, (value) => {
    const position = value * total;
    return Math.min(1, Math.max(0, position - index));
  });

  return (
    <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/15">
      <motion.div
        className="h-full origin-left rounded-full bg-green"
        style={{ scaleX }}
      />
    </div>
  );
}

export function WhoWeAreSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 32,
    mass: 0.4,
  });

  useMotionValueEvent(smoothProgress, "change", (value) => {
    const next = Math.min(
      philosophy.length - 1,
      Math.max(0, Math.floor(value * philosophy.length - 0.001)),
    );
    setActiveIndex((current) => (current === next ? current : next));
  });

  const current = philosophy[activeIndex];

  return (
    <section
      id="philosophy"
      ref={trackRef}
      className="section-ink relative h-[450vh]"
    >
      <div className="sticky top-0 flex min-h-[100svh] items-center overflow-hidden py-20">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <SectionImage
            src="/videos/hero-ocean-poster.jpg"
            alt=""
            className="absolute inset-0 h-full w-full scale-105 object-cover opacity-55"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(165deg,rgba(6,16,24,0.55)_0%,rgba(10,28,36,0.45)_45%,rgba(8,22,30,0.62)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_60%_at_75%_35%,rgba(141,198,63,0.12),transparent_55%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,16,24,0.5)_0%,transparent_42%,transparent_58%,rgba(6,16,24,0.35)_100%)]" />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14 lg:px-8">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] text-green uppercase sm:text-xs">
              Our Philosophy
            </p>
            <h2 className="font-display mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
              {philosophyIntro.heading}
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/70">
              {philosophyIntro.intro}
            </p>
            <p className="mt-2 text-sm font-medium text-white/55">
              Scroll to explore each letter of SCUBA.
            </p>

            <div
              className="mt-10 flex flex-wrap items-end gap-2 sm:gap-3"
              aria-label="SCUBA acronym"
            >
              {philosophy.map((item, i) => {
                const isActive = i === activeIndex;
                const isPast = i < activeIndex;
                return (
                  <motion.span
                    key={item.letter}
                    animate={{
                      scale: isActive ? 1.1 : 1,
                      opacity: isActive || isPast ? 1 : 0.25,
                    }}
                    transition={{ type: "spring", stiffness: 320, damping: 24 }}
                    className={`font-display text-5xl font-bold leading-none sm:text-6xl lg:text-7xl ${
                      isActive
                        ? "text-green"
                        : isPast
                          ? "text-white"
                          : "text-white/25"
                    }`}
                  >
                    {item.letter}
                  </motion.span>
                );
              })}
            </div>

            <div className="mt-6 flex gap-1.5">
              {philosophy.map((item, i) => (
                <LetterProgressBar
                  key={item.letter}
                  index={i}
                  total={philosophy.length}
                  progress={smoothProgress}
                />
              ))}
            </div>
          </div>

          <motion.div
            key={current.letter}
            initial={{ opacity: 0, y: 28, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="rounded-2xl border border-white/15 bg-[#0a1a22]/80 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.4)] backdrop-blur-md sm:p-8"
          >
            <p className="text-[11px] font-semibold tracking-[0.18em] text-green uppercase">
              {current.letter} — {current.title}
            </p>
            <h3 className="font-display mt-3 text-2xl font-bold text-white sm:text-3xl">
              {current.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/75 sm:text-base">
              {current.description}
            </p>
            <p className="mt-8 text-xs leading-relaxed text-white/45 sm:text-sm">
              {philosophyIntro.closing}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
