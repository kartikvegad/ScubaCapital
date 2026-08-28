"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionImage } from "@/components/ui/SectionImage";
import { philosophy, philosophyIntro, siteImages } from "@/lib/constants";

export function PhilosophySection() {
  const [active, setActive] = useState(0);
  const current = philosophy[active];

  return (
    <section id="philosophy" className="section-white section-py">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
          <ScrollReveal direction="left">
            <SectionImage
              src={siteImages.philosophy}
              alt="Ocean depth — SCUBA philosophy of going deeper"
              className="aspect-[4/5] rounded-2xl shadow-[0_16px_40px_rgba(38,34,98,0.08)] sm:aspect-[3/4]"
            />
          </ScrollReveal>

          <div>
            <ScrollReveal direction="right" className="max-w-xl lg:ml-auto">
              <p className="eyebrow">Our Philosophy</p>
              <h2 className="font-display mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                {philosophyIntro.heading}
              </h2>
              <p className="mt-3 text-sm text-muted">{philosophyIntro.intro}</p>
              <p className="mt-2 text-sm font-medium text-navy/80">
                {philosophyIntro.acronymSummary}
              </p>
            </ScrollReveal>

            <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-5">
              {philosophy.map((item, i) => (
                <button
                  key={item.letter}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`rounded-xl px-3 py-3 text-left transition-all ${
                    active === i
                      ? "bg-gradient-brand text-white shadow-lg"
                      : "bg-cream text-navy ring-1 ring-border hover:bg-background-soft"
                  }`}
                >
                  <p className="font-display text-xl font-bold leading-none">{item.letter}</p>
                  <p
                    className={`mt-1 text-[11px] font-semibold ${
                      active === i ? "text-white/90" : "text-navy"
                    }`}
                  >
                    {item.title}
                  </p>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current.letter}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="panel mt-6 rounded-2xl p-5 sm:p-6"
              >
                <p className="eyebrow">
                  {current.letter} — {current.title.toUpperCase()}
                </p>
                <h3 className="font-display mt-2 text-lg font-bold sm:text-xl">
                  {current.title}
                </h3>
                <p className="mt-4 text-sm text-muted sm:text-base">
                  {current.description}
                </p>
              </motion.div>
            </AnimatePresence>

            <p className="mt-6 font-display text-sm font-semibold text-navy/70">
              {philosophyIntro.closing}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
