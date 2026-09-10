"use client";

import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionImage } from "@/components/ui/SectionImage";
import { SegmentCard } from "@/components/ui/SegmentCard";
import { PartnerEcosystemSection } from "@/components/sections/PartnerEcosystemSection";
import { ctaConfig, serviceSegments, wealthSection } from "@/lib/constants";

export function ServicesSection() {
  return (
    <section id="services" className="section-cream section-py">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <ScrollReveal direction="left">
            <SectionImage
              src={wealthSection.image}
              alt="Mutual fund investment planning"
              className="aspect-[5/4] rounded-2xl shadow-[0_16px_40px_rgba(38,34,98,0.08)]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.1}>
            <p className="eyebrow">{wealthSection.eyebrow}</p>
            <h2 className="font-display mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
              {wealthSection.heading}
            </h2>
            <p className="mt-4 text-sm text-muted">{wealthSection.intro}</p>

            <ul className="mt-6 space-y-3">
              {wealthSection.features.map((feature) => (
                <li
                  key={feature.title}
                  className="feature-card rounded-xl bg-white p-4 ring-1 ring-border"
                >
                  <h3 className="font-display text-sm font-bold text-navy">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    {feature.description}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
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
          </ScrollReveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {serviceSegments.map((segment) => (
            <SegmentCard
              key={segment.id}
              title={segment.title}
              shortLabel={segment.shortLabel}
              description={segment.intro}
              image={segment.image}
              href={`/services#${segment.id}`}
            />
          ))}
        </div>

        <PartnerEcosystemSection variant="compact" />
      </div>
    </section>
  );
}
