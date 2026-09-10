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
import {
  philosophy,
  philosophyIntro,
  siteImages,
  whoWeAre,
} from "@/lib/constants";

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
    <section id="about">
      <div className="section-white section-py">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="eyebrow">Who We Are</p>
              <h2 className="font-display mt-3 text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                {whoWeAre.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {whoWeAre.paragraphs[0]}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {whoWeAre.paragraphs[1]}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {whoWeAre.paragraphs[2]}
              </p>
              <p className="font-display mt-6 text-base font-semibold text-navy">
                {whoWeAre.closing}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <SectionImage
                src={siteImages.about}
                alt="Financial planning consultation"
                className="aspect-[4/3] rounded-2xl shadow-[0_16px_40px_rgba(38,34,98,0.08)] ring-1 ring-border"
              />
            </motion.div>
          </div>
        </div>
      </div>

      <div id="philosophy" ref={trackRef} className="relative h-[450vh] bg-navy">
        <div className="sticky top-0 flex min-h-[100svh] items-center overflow-hidden py-20">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <SectionImage
              src={siteImages.philosophy}
              alt=""
              className="absolute inset-0 h-full w-full opacity-35"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(30,26,82,0.94)_0%,rgba(26,24,72,0.9)_50%,rgba(30,26,82,0.96)_100%)]" />
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
              className="rounded-2xl border border-white/12 bg-white/5 p-6 backdrop-blur-sm sm:p-8"
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
      </div>
    </section>
  );
}
