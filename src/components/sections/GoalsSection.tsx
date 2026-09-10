"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionImage } from "@/components/ui/SectionImage";
import { goalPlanningIntro, serviceSegments } from "@/lib/constants";

export function GoalsSection() {
  return (
    <section className="section-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">{goalPlanningIntro.eyebrow}</p>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {goalPlanningIntro.heading}
          </h2>
          <p className="mt-5 text-muted">{goalPlanningIntro.intro}</p>
          <a
            href="/services"
            className="btn-primary mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
          >
            {goalPlanningIntro.cta}
            <ArrowRight className="size-4" />
          </a>
        </ScrollReveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {serviceSegments.map((segment, i) => (
            <motion.a
              key={segment.id}
              href="/services"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group panel overflow-hidden rounded-[1.25rem] transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(38,34,98,0.1)]"
            >
              <SectionImage
                src={segment.image}
                alt={segment.title}
                className="aspect-[16/10]"
                sizes="(max-width: 640px) 100vw, 25vw"
              />
              <div className="p-5">
                <p className="text-[11px] font-semibold tracking-[0.14em] text-gold uppercase">
                  {segment.shortLabel}
                </p>
                <h3 className="font-display mt-2 text-base font-bold text-navy">
                  {segment.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted">
                  {segment.intro}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
