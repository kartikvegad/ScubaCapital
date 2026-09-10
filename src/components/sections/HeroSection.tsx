"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Lock,
  RefreshCw,
  Search,
  Target,
} from "lucide-react";
import { HeroVideoBackground } from "@/components/ui/HeroVideoBackground";
import { heroAudiences, heroContent, heroHighlights } from "@/lib/constants";

const highlightIcons = {
  "goal-based": Target,
  research: Search,
  transparent: RefreshCw,
  partnership: Lock,
} as const;

export function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % heroAudiences.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-black">
      <HeroVideoBackground />

      {/* Soft left scrim so copy stays readable without changing the video */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(0,0,0,0.72)_0%,rgba(0,0,0,0.45)_42%,rgba(0,0,0,0.12)_68%,transparent_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(0,0,0,0.35)_0%,transparent_22%,transparent_72%,rgba(0,0,0,0.5)_100%)]"
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1400px] flex-col px-6 pt-28 pb-8 sm:px-8 lg:px-10 lg:pt-32 lg:pb-10">
        <div className="flex flex-1 flex-col justify-center py-6 lg:py-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="text-[11px] font-semibold tracking-[0.22em] text-white/85 uppercase sm:text-xs"
          >
            {heroContent.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: "easeOut" }}
            className="font-display mt-5 max-w-3xl text-[2.35rem] leading-[1.12] font-bold tracking-tight text-white sm:text-5xl lg:text-[3.35rem] xl:text-[3.75rem]"
          >
            <span className="block">
              {heroContent.line1} {heroContent.line2}
            </span>
            <span className="relative mt-1 block h-[1.15em] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={heroAudiences[index]}
                  initial={{ y: "70%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-70%", opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-x-0 top-0 text-green"
                >
                  {heroAudiences[index]}
                </motion.span>
              </AnimatePresence>
              <span className="invisible" aria-hidden>
                Business Owners
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18, ease: "easeOut" }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg"
          >
            {heroContent.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.28, ease: "easeOut" }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href={heroContent.primaryCtaHref}
              className="btn-primary inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold"
            >
              {heroContent.primaryCta}
              <ArrowRight className="size-4" />
            </a>
            <a
              href={heroContent.secondaryCtaHref}
              className="btn-secondary inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold"
            >
              {heroContent.secondaryCta}
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.4, ease: "easeOut" }}
            className="mt-12 grid max-w-4xl grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 lg:mt-auto lg:pt-16 xl:grid-cols-4 xl:gap-5"
          >
            {heroHighlights.map((item) => {
              const Icon = highlightIcons[item.id];
              return (
                <li key={item.id} className="flex items-center gap-3">
                  <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-green/45 bg-green/15 text-green">
                    <Icon className="size-4" strokeWidth={1.75} />
                  </span>
                  <span className="text-sm font-medium text-white/90">
                    {item.label}
                  </span>
                </li>
              );
            })}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
