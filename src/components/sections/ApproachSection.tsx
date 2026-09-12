"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionImage } from "@/components/ui/SectionImage";
import { approachIntro, processSteps } from "@/lib/constants";

export function ApproachSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = processSteps.length;
  const current = processSteps[activeIndex];

  function goTo(index: number) {
    setActiveIndex(Math.min(total - 1, Math.max(0, index)));
  }

  return (
    <section id="approach" className="section-cream section-py">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <ScrollReveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Our Approach</p>
            <h2 className="font-display mt-2 text-2xl font-bold tracking-tight text-navy sm:text-3xl lg:text-[2.25rem] lg:leading-tight">
              {approachIntro.heading}
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
              {approachIntro.intro}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous step"
              onClick={() => goTo(activeIndex - 1)}
              disabled={activeIndex === 0}
              className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-surface text-navy transition-colors hover:border-green/40 disabled:cursor-not-allowed disabled:opacity-35"
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              type="button"
              aria-label="Next step"
              onClick={() => goTo(activeIndex + 1)}
              disabled={activeIndex === total - 1}
              className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-surface text-navy transition-colors hover:border-green/40 disabled:cursor-not-allowed disabled:opacity-35"
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        </ScrollReveal>

        <div className="relative mt-10 sm:mt-12">
          <div
            className="absolute top-5 right-0 left-0 hidden h-px bg-border sm:block"
            aria-hidden
          />
          <ol className="relative grid grid-cols-2 gap-4 sm:grid-cols-5 sm:gap-2">
            {processSteps.map((step, index) => {
              const isActive = index === activeIndex;
              const isPast = index < activeIndex;
              return (
                <li key={step.title}>
                  <button
                    type="button"
                    onClick={() => goTo(index)}
                    className="group flex w-full flex-col items-center text-center sm:items-start sm:text-left"
                  >
                    <span
                      className={`relative z-10 flex size-10 items-center justify-center rounded-full text-xs font-bold tracking-wide transition-colors ${
                        isActive
                          ? "bg-green text-[#0a1a22] shadow-[0_0_0_4px_rgba(141,198,63,0.22)]"
                          : isPast
                            ? "bg-navy text-background"
                            : "bg-surface text-muted ring-1 ring-border group-hover:ring-green/40"
                      }`}
                    >
                      {step.step}
                    </span>
                    <span
                      className={`mt-3 font-display text-sm font-bold transition-colors ${
                        isActive ? "text-navy" : "text-muted group-hover:text-navy"
                      }`}
                    >
                      {step.title}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="mt-10 grid items-center gap-8 lg:mt-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative overflow-hidden rounded-[1.5rem] ring-1 ring-border">
                <SectionImage
                  src={current.image}
                  alt={current.title}
                  className="aspect-[16/10]"
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a22]/75 via-[#0a1a22]/10 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-brand-ink uppercase">
                    <span className="size-1.5 rounded-full bg-green" />
                    Step {current.step}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${current.title}-copy`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-[11px] font-semibold tracking-[0.18em] text-green uppercase">
                Step {current.step} of {String(total).padStart(2, "0")}
              </p>
              <h3 className="font-display mt-2 text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                {current.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                {current.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
