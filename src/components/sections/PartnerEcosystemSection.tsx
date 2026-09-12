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

function PartnerChips({
  items,
  tone = "on-dark",
}: {
  items: readonly string[];
  tone?: "on-dark" | "on-brand";
}) {
  const chipClass =
    tone === "on-brand"
      ? "border-white/20 bg-white/10 text-white"
      : "border-transparent bg-white text-[#262262] shadow-sm";

  return (
    <div className="flex flex-wrap content-start justify-center gap-2 sm:gap-2.5">
      {items.map((name) => (
        <span
          key={name}
          className={`inline-flex rounded-full border px-3.5 py-2 text-[11px] leading-none font-semibold whitespace-nowrap sm:text-xs ${chipClass}`}
        >
          {name}
        </span>
      ))}
    </div>
  );
}

export function PartnerEcosystemSection({
  variant = "full",
}: PartnerEcosystemSectionProps) {
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

        <div className="mt-5 flex flex-wrap content-start items-center justify-center gap-2">
          {tabs.map((tab) => (
            <span
              key={tab.id}
              className="inline-flex rounded-full bg-white/10 px-3.5 py-2 text-[11px] leading-none font-semibold whitespace-nowrap text-white ring-1 ring-white/20"
            >
              {tab.count}+ {tab.label}
            </span>
          ))}
        </div>

        <div className="mt-6">
          <PartnerChips items={partnerAmcs.slice(0, 12)} tone="on-brand" />
        </div>

        <p className="mt-5 text-xs text-white/55">
          {partnerEcosystemIntro.disclaimer}
        </p>

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
          <p className="eyebrow text-gold-light">
            {partnerEcosystemIntro.eyebrow}
          </p>
          <h2 className="font-display mt-3 text-2xl font-bold text-white sm:text-3xl">
            {partnerEcosystemIntro.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/65">
            {partnerEcosystemIntro.description}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.08} className="mt-8">
          <div
            role="tablist"
            aria-label="Partner categories"
            className="mx-auto flex max-w-2xl flex-col gap-2 sm:flex-row sm:justify-center"
          >
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-white text-[#262262] shadow-md"
                      : "border border-white/20 bg-transparent text-white/80 hover:bg-white/10"
                  }`}
                >
                  {tab.count}+ {tab.label}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.12} className="mt-8">
          <div className="rounded-2xl bg-white/[0.06] p-5 ring-1 ring-white/10 sm:p-7">
            <PartnerChips items={activeItems} />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.16} className="mt-8 text-center">
          <p className="mx-auto max-w-2xl text-xs leading-relaxed text-white/55 sm:text-sm">
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
