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
    <section id="philosophy" className="section-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <ScrollReveal direction="left">
            <SectionImage
              src={siteImages.philosophy}
              alt="Ocean depth — SCUBA philosophy of going deeper"
              className="aspect-[4/5] rounded-[2rem] shadow-[0_24px_60px_rgba(73,48,82,0.12)] sm:aspect-[3/4]"
            />
          </ScrollReveal>

          <div>
            <ScrollReveal direction="right" className="max-w-xl lg:ml-auto">
              <p className="eyebrow">Our Philosophy</p>
              <h2 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                {philosophyIntro.heading}
              </h2>
              <p className="mt-5 text-muted">{philosophyIntro.intro}</p>
            </ScrollReveal>

            <div className="mt-10 flex flex-wrap gap-2">
              {philosophy.map((item, i) => (
                <button
                  key={item.letter}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`flex size-12 items-center justify-center rounded-2xl font-display text-lg font-bold transition-all sm:size-14 sm:text-xl ${
                    active === i
                      ? "bg-gradient-brand text-white shadow-lg"
                      : "bg-cream text-navy/50 hover:bg-background-soft hover:text-navy"
                  }`}
                >
                  {item.letter}
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
                className="panel mt-8 rounded-[2rem] p-6 sm:p-8"
              >
                <p className="eyebrow">
                  {current.letter} — {current.title.toUpperCase()}
                </p>
                <h3 className="font-display mt-3 text-xl font-bold sm:text-2xl">
                  {current.title}
                </h3>
                <p className="mt-4 text-sm text-muted sm:text-base">
                  {current.description}
                </p>
              </motion.div>
            </AnimatePresence>

            <p className="mt-8 font-display text-sm font-semibold text-navy/70 sm:text-base">
              {philosophyIntro.closing}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
