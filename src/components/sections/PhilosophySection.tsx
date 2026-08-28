"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { philosophy, philosophyIntro } from "@/lib/constants";

export function PhilosophySection() {
  const [active, setActive] = useState(0);
  const current = philosophy[active];

  return (
    <section id="philosophy" className="section-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Our Philosophy</p>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {philosophyIntro.heading}
          </h2>
          <p className="mt-5 text-muted">{philosophyIntro.intro}</p>
        </ScrollReveal>

        <div className="mx-auto mt-12 flex max-w-2xl flex-wrap items-center justify-center gap-2">
          {philosophy.map((item, i) => (
            <button
              key={item.letter}
              type="button"
              onClick={() => setActive(i)}
              className={`flex size-14 items-center justify-center rounded-2xl font-display text-xl font-bold transition-all sm:size-16 ${
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
            className="panel mx-auto mt-10 max-w-xl rounded-[2rem] p-8 text-center"
          >
            <p className="eyebrow">
              {current.letter} — {current.title.toUpperCase()}
            </p>
            <h3 className="font-display mt-3 text-2xl font-bold">{current.title}</h3>
            <p className="mt-4 text-muted">{current.description}</p>
          </motion.div>
        </AnimatePresence>

        <p className="mt-10 text-center font-display text-sm font-semibold text-navy/70 sm:text-base">
          {philosophyIntro.closing}
        </p>
      </div>
    </section>
  );
}
