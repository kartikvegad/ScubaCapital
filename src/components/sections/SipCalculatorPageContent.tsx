"use client";

import { ArrowRight } from "lucide-react";
import { InflationAdjustedSipCalculator } from "@/components/calculators/InflationAdjustedSipCalculator";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ctaConfig, sipCalculatorPage } from "@/lib/constants";

export function SipCalculatorPageContent() {
  return (
    <div className="page-shell">
      <section className="section-cream pt-32 pb-10 lg:pt-36 lg:pb-12">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <ScrollReveal className="max-w-3xl">
            <p className="eyebrow">{sipCalculatorPage.eyebrow}</p>
            <h1 className="font-display mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              {sipCalculatorPage.title}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted">
              {sipCalculatorPage.intro}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-white pt-10 pb-16 lg:pt-14 lg:pb-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <InflationAdjustedSipCalculator />

          <ScrollReveal className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="panel rounded-2xl p-6">
              <h2 className="font-display text-lg font-bold text-navy">
                How this calculator works
              </h2>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
                {sipCalculatorPage.formulaNotes.map((note) => (
                  <p key={note}>{note}</p>
                ))}
              </div>
              <div className="mt-5 space-y-2 rounded-xl bg-[#f8faf5] p-4 font-mono text-xs text-navy/80">
                <p>FV = P × [((1 + r)ⁿ − 1) / r] × (1 + r)</p>
                <p>Real value = FV ÷ (1 + inflation)ʸᵉᵃʳˢ</p>
                <p>Real return = (1 + nominal) ÷ (1 + inflation) − 1</p>
              </div>
            </div>

            <div className="panel rounded-2xl p-6">
              <h2 className="font-display text-lg font-bold text-navy">
                Example scenario
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {sipCalculatorPage.example}
              </p>
              <p className="mt-4 text-xs leading-relaxed text-muted">
                {sipCalculatorPage.disclaimer}
              </p>
              <a
                href={ctaConfig.consultation.href}
                className="btn-primary mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
              >
                {ctaConfig.consultation.label}
                <ArrowRight className="size-4" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
