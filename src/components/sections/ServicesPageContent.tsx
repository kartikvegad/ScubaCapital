"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  products,
  productsIntro,
  serviceSegments,
  servicesPageIntro,
} from "@/lib/constants";

export function ServicesPageContent() {
  const [activeIndex, setActiveIndex] = useState(0);
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

      <section className="section-cream -mt-8 pb-24 pt-0 sm:-mt-10 sm:pb-16 sm:pt-2 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="sticky top-[4.5rem] z-20 mb-2 sm:static sm:mb-0">
            <div className="grid grid-cols-2 gap-1.5 rounded-2xl bg-[#e6e2ea] p-1.5 shadow-[0_4px_20px_rgba(73,48,82,0.1),inset_0_1px_3px_rgba(73,48,82,0.12)] md:flex md:rounded-full md:gap-0 md:p-1 md:shadow-[inset_0_1px_3px_rgba(73,48,82,0.12)]">
            {serviceSegments.map((segment, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={segment.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`relative z-10 flex min-h-11 touch-manipulation items-center justify-center rounded-xl px-2 py-3 text-xs font-semibold transition-colors sm:min-h-12 sm:px-4 sm:text-sm md:flex-1 md:rounded-full md:py-3 ${
                    isActive ? "text-navy" : "text-muted active:text-foreground/70"
                  }`}
                >
                  {isActive ? (
                    <motion.span
                      layoutId="service-segment-pill"
                      className="absolute inset-0 rounded-xl bg-white shadow-[0_2px_8px_rgba(37,41,71,0.12),0_1px_2px_rgba(37,41,71,0.08)] md:rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  ) : null}
                  <span className="relative text-center leading-tight">
                    {segment.shortLabel}
                  </span>
                </button>
              );
            })}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeSegment.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="mt-6 sm:mt-10"
            >
              <div className="text-left sm:text-center">
                <h2 className="font-display text-xl font-bold leading-snug text-navy sm:text-2xl lg:text-3xl">
                  {activeSegment.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:mx-auto sm:mt-4 sm:max-w-2xl sm:text-base">
                  {activeSegment.intro}
                </p>
              </div>

              <div className="mt-6 space-y-3 sm:mt-10 sm:space-y-4">
                {activeSegment.services.map((service, index) => (
                  <motion.article
                    key={service.title}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: Math.min(index * 0.03, 0.2), duration: 0.25 }}
                    className="panel rounded-xl p-4 sm:rounded-2xl sm:p-6 lg:p-7"
                  >
                    <h3 className="font-display text-[15px] font-bold leading-snug text-navy sm:text-base lg:text-lg">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-muted sm:mt-2.5 sm:text-sm">
                      {service.description}
                    </p>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="section-navy pb-24 pt-12 sm:pb-16 sm:pt-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center">
            <p className="eyebrow text-gold-light">Products</p>
            <h2 className="font-display mt-3 text-2xl font-bold text-white sm:mt-4 sm:text-3xl lg:text-4xl">
              {productsIntro.heading}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/65 sm:mt-5 sm:text-base">
              {productsIntro.intro}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="mt-8 sm:mt-10">
            <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:justify-center sm:gap-3">
              {products.map((product) => (
                <span
                  key={product}
                  className="rounded-xl border border-white/15 bg-white/10 px-3 py-2.5 text-center text-[10px] font-semibold tracking-wide text-white/85 uppercase backdrop-blur-sm sm:rounded-full sm:px-4 sm:text-xs"
                >
                  {product}
                </span>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15} className="mt-10 text-center sm:mt-12">
            <p className="text-xs leading-relaxed text-white/55 sm:text-sm">
              All products are subject to suitability, eligibility, availability and applicable
              regulations.
            </p>
            <a
              href="/contact"
              className="btn-primary mt-6 flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold sm:mt-8 sm:inline-flex sm:w-auto sm:px-8"
            >
              Book a Consultation
              <ArrowRight className="size-4" />
            </a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
