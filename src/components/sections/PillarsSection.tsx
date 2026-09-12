"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { OfferingCard } from "@/components/ui/OfferingCard";
import { pillars, pillarsIntro } from "@/lib/constants";

function formatOfferingNumber(index: number) {
  return String(index + 1).padStart(2, "0");
}

/** Display order matches the offerings showcase: create → plan → protect → legacy */
const OFFERING_ORDER = ["build", "retire", "protect", "preserve"] as const;

export function PillarsSection() {
  const orderedPillars = OFFERING_ORDER.map(
    (id) => pillars.find((pillar) => pillar.id === id)!,
  );

  return (
    <section
      id="offerings"
      className="relative overflow-hidden bg-background-soft section-py dark:bg-[#07090f]"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(141,198,63,0.1),transparent_55%)] dark:bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(141,198,63,0.14),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_100%_100%,rgba(141,198,63,0.06),transparent_50%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent dark:via-white/15" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        <ScrollReveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-green uppercase sm:text-xs">
              {pillarsIntro.eyebrow}
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold leading-tight tracking-tight text-navy sm:text-4xl lg:text-[2.65rem] dark:text-white">
              {pillarsIntro.heading}
            </h2>
          </div>
          <div className="max-w-md lg:pb-1">
            <p className="text-sm leading-relaxed text-muted sm:text-[0.95rem] dark:text-white/70">
              {pillarsIntro.subtitle}
            </p>
            <a
              href="/services"
              className="mt-4 inline-flex items-center gap-2 border-b border-navy/30 pb-0.5 text-sm font-semibold text-navy transition-colors hover:border-green hover:text-green dark:border-white/50 dark:text-white dark:hover:border-green dark:hover:text-green"
            >
              View All Solutions
              <ArrowRight className="size-4" />
            </a>
          </div>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-5">
          {orderedPillars.map((pillar, i) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.06 }}
              className="h-full"
            >
              <OfferingCard
                number={formatOfferingNumber(i)}
                title={pillar.title}
                description={pillar.teaser}
                href={pillar.href}
                cta={pillar.cta}
                image={pillar.image}
                imageAlt={pillar.subtitle}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
