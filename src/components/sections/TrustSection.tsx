"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { trustFactors } from "@/lib/constants";

export function TrustSection() {
  return (
    <section className="border-y border-border bg-white py-8">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <p className="eyebrow">Why Trust SCUBA CAPITAL</p>
          <h2 className="font-display mt-2 text-xl font-bold tracking-tight sm:text-2xl">
            Registered. Qualified. Accountable.
          </h2>
        </ScrollReveal>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {trustFactors.map((factor, i) => (
            <ScrollReveal key={factor.title} delay={i * 0.04}>
              <div className="panel h-full rounded-xl p-4 text-center">
                <p className="font-display text-sm font-bold text-navy">{factor.title}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">
                  {factor.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
