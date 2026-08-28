"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { pillars, pillarsIntro } from "@/lib/constants";

export function PillarsSection() {
  return (
    <section className="section-cream py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Four Core Pillars</p>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem]">
            {pillarsIntro.heading}
          </h2>
          <div className="mt-6 space-y-3 text-muted">
            {pillarsIntro.intro.map((p) => (
              <p key={p.slice(0, 36)}>{p}</p>
            ))}
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {pillars.map((pillar, i) => (
            <motion.article
              key={pillar.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.06 }}
              className="panel group rounded-[1.75rem] p-7 transition-shadow hover:shadow-[0_24px_50px_rgba(216,61,120,0.12)] lg:p-8"
            >
              <p className="eyebrow">{pillar.label}</p>
              <h3 className="font-display mt-3 text-2xl font-bold">{pillar.title}</h3>
              <p className="mt-1 text-sm font-medium text-gold">{pillar.subtitle}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {pillar.description}
              </p>
              <ul className="mt-5 space-y-2">
                {pillar.items.slice(0, 5).map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-foreground/80"
                  >
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={pillar.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors group-hover:text-gold"
              >
                {pillar.cta}
                <ArrowRight className="size-4" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
