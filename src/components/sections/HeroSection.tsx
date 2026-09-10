"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Lock,
  RefreshCw,
  Search,
  Target,
} from "lucide-react";
import { HeroVideoBackground } from "@/components/ui/HeroVideoBackground";
import { heroContent, heroHighlights } from "@/lib/constants";

const highlightIcons = {
  "goal-based": Target,
  research: Search,
  transparent: RefreshCw,
  partnership: Lock,
} as const;

export function HeroSection() {
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
        <div className="grid flex-1 grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(11rem,15rem)] lg:gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(12rem,17rem)]">
          <div className="flex flex-col justify-center py-6 lg:py-10">
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
              {heroContent.line1} {heroContent.line2}{" "}
              <span className="text-green">{heroContent.accent}</span>
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

          <aside className="relative hidden lg:flex lg:flex-col lg:items-end lg:justify-between lg:border-l lg:border-white/20 lg:pl-8 xl:pl-10">
            <div className="flex-1" aria-hidden />
            <motion.blockquote
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
              className="max-w-[13rem] self-center text-center"
            >
              <p className="font-display text-xl leading-snug font-medium text-white/95 italic xl:text-[1.35rem]">
                &ldquo;{heroContent.quote}&rdquo;
              </p>
              <span
                aria-hidden
                className="mx-auto mt-5 block h-px w-10 bg-green"
              />
            </motion.blockquote>

            <motion.a
              href="#trust"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="mt-auto mb-2 inline-flex items-center gap-3 self-end text-white/80 transition-colors hover:text-white"
            >
              <span className="inline-flex size-9 items-center justify-center rounded-full border border-white/35">
                <ArrowDown className="size-4" />
              </span>
              <span
                className="text-[10px] font-semibold tracking-[0.22em] uppercase"
                style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
              >
                Scroll to explore
              </span>
            </motion.a>
          </aside>
        </div>

        <motion.a
          href="#trust"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="mt-8 inline-flex items-center gap-2 self-center text-white/75 transition-colors hover:text-white lg:hidden"
        >
          <span className="inline-flex size-8 items-center justify-center rounded-full border border-white/35">
            <ArrowDown className="size-3.5" />
          </span>
          <span className="text-[10px] font-semibold tracking-[0.18em] uppercase">
            Scroll to explore
          </span>
        </motion.a>
      </div>
    </section>
  );
}
