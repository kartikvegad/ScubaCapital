"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { OfferingCard } from "@/components/ui/OfferingCard";
import { pillars, pillarsIntro } from "@/lib/constants";

function formatOfferingNumber(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function PillarsSection() {
  return (
    <section className="section-cream section-py">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{pillarsIntro.eyebrow}</p>
          <h2 className="font-display mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
            {pillarsIntro.heading}
          </h2>
          <p className="mt-4 text-sm text-muted">{pillarsIntro.subtitle}</p>
        </ScrollReveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.05 }}
              className="h-full"
            >
              <OfferingCard
                number={formatOfferingNumber(i)}
                label={pillar.label}
                title={pillar.title}
                subtitle={pillar.subtitle}
                description={pillar.description}
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
