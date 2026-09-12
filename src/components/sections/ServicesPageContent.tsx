"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Shield, TrendingUp, Umbrella, Landmark } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionImage } from "@/components/ui/SectionImage";
import {
  ctaConfig,
  products,
  productsIntro,
  serviceSegments,
  servicesPageIntro,
} from "@/lib/constants";
import { PartnerEcosystemSection } from "@/components/sections/PartnerEcosystemSection";

const segmentIcons = [TrendingUp, Shield, Umbrella, Landmark] as const;

function getSegmentIndexFromHash(hash: string): number {
  const segmentId = hash.replace(/^#/, "");
  if (!segmentId) return 0;

  const index = serviceSegments.findIndex((segment) => segment.id === segmentId);
  return index >= 0 ? index : 0;
}

export function ServicesPageContent() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    function syncFromHash() {
      const index = getSegmentIndexFromHash(window.location.hash);
      setActiveIndex(index);

      if (window.location.hash) {
        document.getElementById("segments")?.scrollIntoView({ behavior: "smooth" });
      }
    }

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  function selectSegment(index: number) {
    setActiveIndex(index);
    const segmentId = serviceSegments[index].id;
    window.history.replaceState(null, "", `/services#${segmentId}`);
  }

  const activeSegment = serviceSegments[activeIndex];

  return (
    <div className="page-shell overflow-x-hidden">
      <section className="section-navy pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="eyebrow !text-white">{servicesPageIntro.eyebrow}</p>
            <h1 className="font-display mt-3 text-[1.65rem] font-bold leading-tight tracking-tight text-white sm:mt-4 sm:text-4xl lg:text-5xl">
              {servicesPageIntro.heading}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-[13px] leading-relaxed text-white/70 sm:mt-6 sm:text-base">
              {servicesPageIntro.intro}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section id="segments" className="section-cream -mt-6 pb-16 pt-8 sm:pb-20 sm:pt-10 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Solutions</p>
              <h2 className="font-display mt-2 text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                Four paths. One structured plan.
              </h2>
            </div>
            <a
              href={ctaConfig.consultation.href}
              className="btn-outline-navy inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold"
            >
              Start a conversation
              <ArrowRight className="size-4" />
            </a>
          </ScrollReveal>

          <div className="grid gap-3 sm:grid-cols-2 lg:gap-4">
            {serviceSegments.map((segment, index) => {
              const Icon = segmentIcons[index] ?? TrendingUp;
              const isActive = index === activeIndex;
              return (
                <button
                  key={segment.id}
                  type="button"
                  onClick={() => selectSegment(index)}
                  className={`group flex h-full flex-col rounded-2xl border p-5 text-left transition-all sm:p-6 ${
                    isActive
                      ? "border-green/45 bg-surface shadow-[0_16px_40px_rgba(38,34,98,0.1)] ring-1 ring-green/25"
                      : "border-border bg-surface/80 hover:-translate-y-0.5 hover:border-green/30 hover:shadow-[0_12px_32px_rgba(38,34,98,0.08)]"
                  }`}
                >
                  <span
                    className={`inline-flex size-11 items-center justify-center rounded-xl transition-colors ${
                      isActive
                        ? "bg-green text-[#0a1a22]"
                        : "bg-accent-light text-green group-hover:bg-green group-hover:text-[#0a1a22]"
                    }`}
                  >
                    <Icon className="size-5" strokeWidth={1.75} />
                  </span>
                  <p className="mt-4 text-[11px] font-semibold tracking-[0.16em] text-green uppercase">
                    {segment.shortLabel}
                  </p>
                  <h3 className="font-display mt-1.5 text-lg font-bold tracking-tight text-navy sm:text-xl">
                    {segment.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted line-clamp-3">
                    {segment.intro}
                  </p>
                  <span
                    className={`mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                      isActive ? "text-green" : "text-navy group-hover:text-green"
                    }`}
                  >
                    {isActive ? "Viewing details" : "Explore"}
                    <ArrowRight className="size-4" />
                  </span>
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeSegment.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="mt-8 scroll-mt-28 sm:mt-10"
              id={activeSegment.id}
            >
              <div className="overflow-hidden rounded-[1.5rem] border border-border bg-surface shadow-[0_18px_50px_rgba(38,34,98,0.08)]">
                <SectionImage
                  src={activeSegment.image}
                  alt={activeSegment.title}
                  className="aspect-[16/9] sm:aspect-[21/8]"
                  sizes="(max-width: 1024px) 100vw, 1152px"
                />
                <div className="p-5 sm:p-7 lg:p-8">
                  <h3 className="font-display text-xl font-bold text-navy sm:text-2xl">
                    {activeSegment.title}
                  </h3>
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
                    {activeSegment.intro}
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {activeSegment.services.map((service, index) => (
                      <motion.article
                        key={service.title}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: Math.min(index * 0.03, 0.2),
                          duration: 0.25,
                        }}
                        className="rounded-xl border border-border bg-background-soft/70 p-4 sm:p-5"
                      >
                        <h4 className="font-display text-[15px] font-bold leading-snug text-navy">
                          {service.title}
                        </h4>
                        <p className="mt-2 text-[13px] leading-relaxed text-muted sm:text-sm">
                          {service.description}
                        </p>
                      </motion.article>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <PartnerEcosystemSection />

      <section className="section-cream pb-24 pt-0 sm:pb-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center">
            <p className="eyebrow">Solutions</p>
            <h2 className="font-display mt-3 text-2xl font-bold text-navy sm:text-3xl">
              {productsIntro.heading}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              {productsIntro.intro}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="mt-8 sm:mt-10">
            <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:justify-center sm:gap-3">
              {products.map((product) => (
                <span
                  key={product}
                  className="rounded-xl border border-border bg-surface px-3 py-2.5 text-center text-[10px] font-semibold tracking-wide text-navy/80 uppercase sm:rounded-full sm:px-4 sm:text-xs"
                >
                  {product}
                </span>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15} className="mt-10 text-center sm:mt-12">
            <a
              href={ctaConfig.consultation.href}
              className="btn-primary inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold sm:px-8"
            >
              {ctaConfig.consultation.label}
              <ArrowRight className="size-4" />
            </a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
