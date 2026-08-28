"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  partnerEcosystemIntro,
  partnerHealthInsurers,
  partnerLifeInsurers,
  partnerAmcs,
} from "@/lib/constants";

type PartnerTab = "amc" | "life" | "health";

const tabs: { id: PartnerTab; label: string; count: number }[] = [
  { id: "amc", label: "Mutual Fund AMCs", count: partnerAmcs.length },
  { id: "life", label: "Life Insurance", count: partnerLifeInsurers.length },
  { id: "health", label: "Health Insurance", count: partnerHealthInsurers.length },
];

type PartnerEcosystemSectionProps = {
  variant?: "compact" | "full";
};

function PartnerGrid({ items }: { items: readonly string[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {items.map((name) => (
        <span
          key={name}
          className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-medium text-white/85 ring-1 ring-white/10 backdrop-blur-sm"
        >
          {name}
        </span>
      ))}
    </div>
  );
}

function PartnerGridLight({ items }: { items: readonly string[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {items.map((name) => (
        <span
          key={name}
          className="rounded-full border border-border bg-white px-3 py-1.5 text-[11px] font-medium text-navy/80 ring-1 ring-border"
        >
          {name}
        </span>
      ))}
    </div>
  );
}

export function PartnerEcosystemSection({ variant = "full" }: PartnerEcosystemSectionProps) {
  const [activeTab, setActiveTab] = useState<PartnerTab>("amc");
  const isCompact = variant === "compact";

  const activeItems =
    activeTab === "amc"
      ? partnerAmcs
      : activeTab === "life"
        ? partnerLifeInsurers
        : partnerHealthInsurers;

  if (isCompact) {
    return (
      <div className="bg-gradient-brand mt-12 rounded-2xl px-6 py-8 text-center text-white sm:px-8">
        <p className="eyebrow text-gold-light">{partnerEcosystemIntro.eyebrow}</p>
        <h3 className="font-display mt-2 text-xl font-bold sm:text-2xl">
          {partnerEcosystemIntro.compactHeading}
        </h3>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-white/70">
          {partnerEcosystemIntro.compactDescription}
        </p>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
          {tabs.map((tab) => (
            <span
              key={tab.id}
              className="rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-semibold text-white/90 ring-1 ring-white/15"
            >
              {tab.count}+ {tab.label}
            </span>
          ))}
        </div>

        <PartnerGrid items={partnerAmcs.slice(0, 12)} />

        <p className="mt-4 text-xs text-white/55">{partnerEcosystemIntro.disclaimer}</p>

        <a
          href="/services#partners"
          className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
        >
          View all partners
          <ArrowRight className="size-4" />
        </a>
      </div>
    );
  }

  return (
    <section id="partners" className="section-navy section-py">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <p className="eyebrow text-gold-light">{partnerEcosystemIntro.eyebrow}</p>
          <h2 className="font-display mt-3 text-2xl font-bold text-white sm:text-3xl">
            {partnerEcosystemIntro.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/65">
            {partnerEcosystemIntro.description}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.08} className="mt-8">
          <div className="flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors sm:text-sm ${
                  activeTab === tab.id
                    ? "bg-white text-navy"
                    : "border border-white/20 bg-white/10 text-white/80 hover:bg-white/15"
                }`}
              >
                {tab.count}+ {tab.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.12} className="mt-8">
          <PartnerGridLight items={activeItems} />
        </ScrollReveal>

        <ScrollReveal delay={0.16} className="mt-8 text-center">
          <p className="text-xs leading-relaxed text-white/55 sm:text-sm">
            {partnerEcosystemIntro.disclaimer}
          </p>
          <a
            href="/blog"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            Read mutual fund insights
            <ArrowRight className="size-4" />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
