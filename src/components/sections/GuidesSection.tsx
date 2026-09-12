"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { GuideCard } from "@/components/sections/GuideCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  ctaConfig,
  financialGuides,
  trustFactors,
  whoWeAre,
} from "@/lib/constants";

type Guide = (typeof financialGuides)[number];

export function GuidesSection() {
  const [activeGuide, setActiveGuide] = useState<Guide | null>(null);

  useEffect(() => {
    if (activeGuide) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeGuide]);

  return (
    <>
      <section className="section-cream overflow-visible section-py">
        <div
          id="about"
          className="mx-auto max-w-6xl overflow-visible px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-12 lg:items-stretch">
            {/* About */}
            <ScrollReveal className="panel flex flex-col rounded-2xl p-5 sm:p-6 lg:col-span-7 lg:p-7">
              <p className="eyebrow">About</p>
              <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-[2.55rem] lg:leading-[1.12]">
                {whoWeAre.title}
              </h2>
              <div className="mt-5 flex flex-1 flex-col justify-center gap-3.5">
                {whoWeAre.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-base leading-relaxed text-muted sm:text-[1.05rem] sm:leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              <p className="font-display mt-6 text-lg font-semibold leading-snug text-navy sm:text-xl">
                {whoWeAre.closing}
              </p>
            </ScrollReveal>

            {/* Founder */}
            <ScrollReveal delay={0.06} className="lg:col-span-5">
              <div className="mx-auto w-full max-w-[22rem] lg:max-w-none">
                {financialGuides.map((guide) => (
                  <GuideCard
                    key={guide.id}
                    guide={guide}
                    variant="bento"
                    onClick={() => setActiveGuide(guide)}
                  />
                ))}
              </div>
            </ScrollReveal>

            {/* Why Trust + credentials — one merged box */}
            <ScrollReveal
              delay={0.08}
              className="panel rounded-2xl p-5 sm:p-6 lg:col-span-12"
            >
              <p className="eyebrow">Why Trust SCUBA CAPITAL</p>
              <h3 className="font-display mt-1.5 text-xl font-bold tracking-tight text-navy sm:text-2xl">
                Registered. Qualified. Accountable.
              </h3>
              <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-5">
                {trustFactors.map((factor) => (
                  <div
                    key={factor.title}
                    className="rounded-xl bg-cream px-3.5 py-3 ring-1 ring-border/70"
                  >
                    <p className="font-display text-sm font-bold text-navy">
                      {factor.title}
                    </p>
                    <p className="mt-0.5 text-xs leading-snug text-muted">
                      {factor.description}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* CTA */}
            <ScrollReveal
              delay={0.1}
              className="panel flex flex-col gap-3 rounded-2xl px-5 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4 lg:col-span-12"
            >
              <p className="shrink-0 text-sm leading-relaxed text-muted">
                Ready for clearer next steps?
              </p>
              <div className="flex flex-nowrap items-center gap-2.5">
                <a
                  href={ctaConfig.consultation.href}
                  className="btn-primary inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap"
                >
                  {ctaConfig.consultation.label}
                  <ArrowRight className="size-4" />
                </a>
                <a
                  href={ctaConfig.portfolioReview.href}
                  className="btn-outline-navy inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap"
                >
                  {ctaConfig.portfolioReview.shortLabel}
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeGuide && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-end justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm [scrollbar-width:none] sm:items-center sm:p-8 [&::-webkit-scrollbar]:hidden"
            onClick={() => setActiveGuide(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="bg-gradient-brand relative w-full max-w-3xl overflow-hidden rounded-2xl text-white shadow-2xl lg:max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Close profile"
                onClick={() => setActiveGuide(null)}
                className="absolute top-3 right-3 z-10 flex size-8 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/55"
              >
                <X className="size-4" />
              </button>

              <div className="grid lg:grid-cols-[168px_1fr]">
                <div className="border-b border-white/10 p-4 lg:border-r lg:border-b-0 lg:p-5">
                  <div className="relative mx-auto aspect-[4/5] w-full max-w-[140px] overflow-hidden rounded-xl lg:max-w-none">
                    <Image
                      src={activeGuide.image}
                      alt={activeGuide.displayName}
                      fill
                      className="object-cover object-top"
                      sizes="168px"
                    />
                  </div>

                  <div className="mt-4 space-y-3">
                    <div>
                      <h3 className="font-display text-xl font-bold leading-tight sm:text-2xl">
                        {activeGuide.displayName}
                      </h3>
                      <p className="mt-1 text-sm font-semibold text-gold-light">
                        {activeGuide.role}
                      </p>
                      <p className="mt-1 text-xs text-white/70">
                        {activeGuide.credentialHighlight}
                      </p>
                    </div>

                    <div>
                      <p className="text-[10px] font-semibold tracking-wider text-white/45 uppercase">
                        Location
                      </p>
                      <p className="mt-0.5 text-xs leading-snug">
                        {activeGuide.location}
                      </p>
                    </div>

                    <div>
                      <p className="text-[10px] font-semibold tracking-wider text-white/45 uppercase">
                        Experience
                      </p>
                      <p className="mt-0.5 text-xs">{activeGuide.experience}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 p-4 lg:p-5">
                  <div>
                    <p className="text-[10px] font-semibold tracking-wider text-white/45 uppercase">
                      Education
                    </p>
                    <p className="mt-0.5 text-xs leading-snug">
                      {activeGuide.education}
                    </p>
                  </div>

                  <p className="text-xs leading-snug text-white/75">
                    {activeGuide.bio[0]}{" "}
                    {activeGuide.bio[activeGuide.bio.length - 1]}
                  </p>

                  <blockquote className="border-l-2 border-gold-light py-0.5 pl-3 text-xs text-white/80 italic">
                    &ldquo;{activeGuide.quote}&rdquo;
                  </blockquote>

                  <div className="grid grid-cols-3 gap-2">
                    {activeGuide.qualities.map((q) => (
                      <div
                        key={q.title}
                        className="rounded-lg bg-white/5 px-2 py-1.5 ring-1 ring-white/10"
                      >
                        <p className="text-[10px] font-bold leading-tight text-gold-light">
                          {q.title}
                        </p>
                        <p className="mt-0.5 text-[10px] leading-snug text-white/50">
                          {q.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold tracking-wider text-white/45 uppercase">
                      Credentials
                    </p>
                    <ul className="mt-1.5 grid gap-1 sm:grid-cols-2">
                      {activeGuide.credentials.map((item) => (
                        <li
                          key={item}
                          className="text-[11px] leading-snug text-white/70"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 pt-0.5">
                    <a
                      href={ctaConfig.consultation.href}
                      onClick={() => setActiveGuide(null)}
                      className="btn-primary rounded-full px-4 py-2 text-xs font-semibold"
                    >
                      {ctaConfig.consultation.label}
                    </a>
                    <a
                      href="#about"
                      onClick={() => setActiveGuide(null)}
                      className="path-btn-outline rounded-full px-4 py-2 text-xs font-medium"
                    >
                      About SCUBA
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
