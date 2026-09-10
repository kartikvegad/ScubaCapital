"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowDown } from "lucide-react";
import { approachIntro, processSteps } from "@/lib/constants";

export function ApproachSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const total = processSteps.length;

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 30,
    mass: 0.45,
  });

  useMotionValueEvent(smoothProgress, "change", (value) => {
    const next = Math.min(
      total - 1,
      Math.max(0, Math.floor(value * total - 0.001)),
    );
    setActiveIndex((current) => (current === next ? current : next));
  });

  const pathFill = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  const current = processSteps[activeIndex];
  const nextStep = processSteps[Math.min(total - 1, activeIndex + 1)];

  return (
    <section id="approach" className="relative bg-background-soft">
      <div ref={trackRef} className="relative h-[280vh]">
        <div className="sticky top-0 flex min-h-[100svh] flex-col justify-between overflow-hidden pt-24 pb-8 sm:pt-28 lg:pb-10">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-green/10 blur-3xl" />
            <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-navy/[0.04] blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-6xl px-6 lg:px-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
              <div className="max-w-xl">
                <p className="eyebrow">Our Approach</p>
                <h2 className="font-display mt-2 text-2xl font-bold tracking-tight text-navy sm:text-3xl lg:text-[2.25rem] lg:leading-tight">
                  {approachIntro.heading}
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-muted lg:text-right">
                {approachIntro.intro}
              </p>
            </div>

            <div className="mt-6 grid items-center gap-6 lg:mt-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
              {/* Stage visual + copy */}
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.title}
                    initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                    transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
                  >
                    <div className="relative overflow-hidden rounded-[1.5rem] shadow-[0_24px_60px_rgba(38,34,98,0.12)]">
                      <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:max-h-[18rem]">
                        <Image
                          src={current.image}
                          alt={current.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 55vw"
                          priority={activeIndex === 0}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#262262]/75 via-[#262262]/15 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                          <div className="flex items-center gap-2">
                            <span className="inline-flex size-2 rounded-full bg-green" />
                            <p className="text-[11px] font-semibold tracking-[0.2em] text-green uppercase">
                              Current stage
                            </p>
                          </div>
                          <h3 className="font-display mt-1.5 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                            {current.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <p className="mt-4 max-w-xl text-base leading-relaxed text-navy/75 sm:text-lg">
                      {current.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Journey list — titles only, no repeating numbers */}
              <div className="relative">
                <div className="overflow-hidden rounded-[1.75rem] border border-navy/8 bg-surface/85 p-6 shadow-[0_24px_80px_rgba(38,34,98,0.08)] backdrop-blur-sm sm:p-7">
                  <p className="text-[11px] font-semibold tracking-[0.18em] text-navy/40 uppercase">
                    The journey
                  </p>

                  <div className="mt-5 space-y-1">
                    {processSteps.map((step, i) => {
                      const isActive = i === activeIndex;
                      const isPast = i < activeIndex;
                      return (
                        <motion.div
                          key={step.title}
                          animate={{ opacity: isActive ? 1 : isPast ? 0.55 : 0.3 }}
                          className="flex items-center gap-3 py-2.5"
                        >
                          <span
                            className={`size-2.5 shrink-0 rounded-full ${
                              isActive
                                ? "bg-green shadow-[0_0_0_4px_rgba(141,198,63,0.2)]"
                                : isPast
                                  ? "bg-navy"
                                  : "bg-navy/20"
                            }`}
                          />
                          <span
                            className={`h-px flex-1 ${
                              isActive
                                ? "bg-green/45"
                                : isPast
                                  ? "bg-navy/15"
                                  : "bg-navy/8"
                            }`}
                          />
                          <span
                            className={`font-display text-sm font-semibold sm:text-base ${
                              isActive ? "text-navy" : "text-navy/45"
                            }`}
                          >
                            {step.title}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>

                  {activeIndex < total - 1 ? (
                    <div className="mt-7 flex items-center gap-2 border-t border-navy/8 pt-5 text-sm text-muted">
                      <ArrowDown className="size-4 text-green" />
                      <span>
                        Next ·{" "}
                        <span className="font-semibold text-navy">
                          {nextStep.title}
                        </span>
                      </span>
                    </div>
                  ) : (
                    <div className="mt-7 border-t border-navy/8 pt-5 text-sm font-medium text-green">
                      Process complete — ready for clearer next steps.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom path — dots + titles only */}
          <div className="relative z-10 mx-auto mt-auto w-full max-w-6xl px-6 pt-5 lg:px-8">
            <div className="relative px-2 sm:px-6">
              <div
                className="absolute top-[11px] right-10 left-10 h-px bg-navy/10 sm:top-[13px]"
                aria-hidden
              >
                <motion.div
                  className="h-px origin-left bg-gradient-to-r from-green via-green to-green-dark"
                  style={{ width: pathFill }}
                />
              </div>

              <div className="relative flex justify-between">
                {processSteps.map((step, i) => {
                  const isActive = i === activeIndex;
                  const isPast = i < activeIndex;
                  return (
                    <div
                      key={step.title}
                      className="flex w-16 flex-col items-center sm:w-24"
                    >
                      <motion.span
                        animate={{
                          scale: isActive ? 1.25 : 1,
                          backgroundColor: isActive
                            ? "#8dc63f"
                            : isPast
                              ? "#262262"
                              : "#ffffff",
                          borderColor: isActive
                            ? "#8dc63f"
                            : isPast
                              ? "#262262"
                              : "rgba(38,34,98,0.18)",
                        }}
                        transition={{ type: "spring", stiffness: 320, damping: 24 }}
                        className="relative z-10 inline-flex size-6 rounded-full border-2 sm:size-7"
                      />
                      <motion.span
                        animate={{
                          opacity: isActive ? 1 : 0.45,
                          y: isActive ? 0 : 2,
                        }}
                        className={`mt-2.5 text-center text-[10px] font-semibold tracking-wide sm:text-xs ${
                          isActive ? "text-navy" : "text-navy/45"
                        }`}
                      >
                        {step.title}
                      </motion.span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
