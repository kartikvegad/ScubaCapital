"use client";

import { ArrowRight, Goal, LineChart, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionImage } from "@/components/ui/SectionImage";
import { SegmentCard } from "@/components/ui/SegmentCard";
import { PartnerEcosystemSection } from "@/components/sections/PartnerEcosystemSection";
import { ctaConfig, serviceSegments, wealthSection } from "@/lib/constants";

const featureIcons = [LineChart, Goal, RefreshCw] as const;

export function ServicesSection() {
  return (
    <section id="services" className="section-white section-py">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div className="max-w-xl">
            <p className="eyebrow">{wealthSection.eyebrow}</p>
            <h2 className="font-display mt-3 text-3xl font-bold leading-tight tracking-tight text-navy sm:text-4xl">
              {wealthSection.heading}
            </h2>
          </div>
          <div className="max-w-md lg:pb-1">
            <p className="text-sm leading-relaxed text-muted sm:text-[0.95rem]">
              {wealthSection.intro}
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              <a
                href={ctaConfig.consultation.href}
                className="btn-primary inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold"
              >
                {ctaConfig.consultation.label}
                <ArrowRight className="size-4" />
              </a>
              <a
                href="/services"
                className="btn-outline-navy inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold"
              >
                All services
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Hero visual + feature strip */}
        <ScrollReveal delay={0.08} className="mt-10 lg:mt-12">
          <div className="relative overflow-hidden rounded-[1.5rem]">
            <SectionImage
              src={wealthSection.image}
              alt="Mutual fund investment planning"
              className="aspect-[16/9] sm:aspect-[21/9] lg:min-h-[22rem]"
              sizes="(max-width: 1024px) 100vw, 1152px"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(38,34,98,0.15)_0%,rgba(38,34,98,0.55)_55%,rgba(26,24,72,0.88)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 lg:p-8">
              <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
                {wealthSection.features.map((feature, i) => {
                  const Icon = featureIcons[i] ?? LineChart;
                  return (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.06 }}
                      className="flex gap-3"
                    >
                      <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-green/20 text-green ring-1 ring-green/35">
                        <Icon className="size-4" strokeWidth={1.75} />
                      </span>
                      <div>
                        <p className="font-display text-sm font-bold text-white">
                          {feature.title}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-white/70">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Service segments */}
        <div className="mt-12 lg:mt-14">
          <ScrollReveal className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Core Segments</p>
              <h3 className="font-display mt-2 text-xl font-bold tracking-tight text-navy sm:text-2xl">
                Four paths. One structured plan.
              </h3>
            </div>
            <a
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-green"
            >
              Explore all solutions
              <ArrowRight className="size-4" />
            </a>
          </ScrollReveal>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            {serviceSegments.map((segment, i) => (
              <motion.div
                key={segment.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.05 }}
                className="h-full"
              >
                <SegmentCard
                  title={segment.title}
                  shortLabel={segment.shortLabel}
                  description={segment.intro}
                  image={segment.image}
                  href={`/services#${segment.id}`}
                />
              </motion.div>
            ))}
          </div>
        </div>

        <PartnerEcosystemSection variant="compact" />
      </div>
    </section>
  );
}
