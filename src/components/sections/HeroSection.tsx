"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HeroVideoBackground } from "@/components/ui/HeroVideoBackground";
import { heroAudiences, heroContent, heroServices, siteConfig } from "@/lib/constants";

export function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % heroAudiences.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-sky-100">
      <HeroVideoBackground />

      <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-6 pt-24 pb-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full max-w-5xl"
        >
          <h1 className="font-display mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            <span className="block">{heroContent.line1}</span>
            <span className="mt-1 block">{heroContent.line2}</span>
          </h1>

          <div className="relative mx-auto mt-1 flex h-12 items-center justify-center overflow-hidden sm:mt-2 sm:h-14 lg:h-16">
            <AnimatePresence mode="wait">
              <motion.p
                key={heroAudiences[index]}
                initial={{ y: 48, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -48, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-x-0 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
              >
                {heroAudiences[index]}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mx-auto mt-6 max-w-lg text-sm text-white [text-shadow:0_1px_12px_rgba(0,0,0,0.45)]"
          >
            {siteConfig.tagline} · {heroContent.supportingLine}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mx-auto mt-5 flex max-w-3xl flex-wrap items-center justify-center gap-2"
          >
            {heroServices.map((service) => (
              <span
                key={service}
                className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-medium text-white/90 backdrop-blur-sm"
              >
                {service}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href={heroContent.primaryCtaHref}
              className="btn-primary inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold"
            >
              {heroContent.primaryCta}
              <ArrowRight className="size-4" />
            </a>
            <a
              href={heroContent.secondaryCtaHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              {heroContent.secondaryCta}
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <span className="rounded-full border border-white/20 bg-black/35 px-4 py-1.5 text-[11px] font-medium text-white/90 shadow-sm backdrop-blur-sm">
            AMFI Reg. MF & SIF Distributor · {siteConfig.amfiArn}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
