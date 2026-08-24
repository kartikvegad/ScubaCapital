"use client";

import { useState } from "react";
import { ArrowRight, Briefcase, Home, User } from "lucide-react";
import { audiences } from "@/lib/constants";

const tabs = [
  { id: "individuals", label: "Individuals", icon: User, audienceIndex: 0 },
  { id: "professionals", label: "Professionals", icon: Briefcase, audienceIndex: 2 },
  { id: "families", label: "Families", icon: Home, audienceIndex: 1 },
] as const;

type TabId = (typeof tabs)[number]["id"];

export function TabFeatureSection() {
  const [active, setActive] = useState<TabId>("professionals");

  const activeTab = tabs.find((t) => t.id === active) ?? tabs[1];
  const activeAudience = audiences[activeTab.audienceIndex];

  return (
    <section id="about" className="bg-background-soft py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Get The Most Powerful and{" "}
            <span className="text-blue">Easy to Use</span> Wealth Planning
          </h2>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActive(tab.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                active === tab.id
                  ? "bg-accent text-white shadow-lg shadow-blue/25"
                  : "bg-white text-muted ring-1 ring-border"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="relative mx-auto mt-16 flex max-w-4xl items-center justify-center py-8">
          {tabs.map((tab) => {
            const isActive = tab.id === active;
            const isLeft = tab.id === "individuals";
            const isRight = tab.id === "families";
            const audience = audiences[tab.audienceIndex];
            const Icon = tab.icon;

            if (isActive) {
              return (
                <div
                  key={tab.id}
                  className="panel relative z-20 w-full max-w-sm scale-105 rounded-[2rem] p-8"
                >
                  <Icon className="size-6 text-blue" />
                  <p className="font-display mt-5 text-xl font-bold">{audience.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {audience.description}
                  </p>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue"
                  >
                    Learn More
                    <ArrowRight className="size-4" />
                  </a>
                </div>
              );
            }

            return (
              <div
                key={tab.id}
                className={`panel absolute z-10 hidden w-[240px] rounded-[2rem] p-6 opacity-50 md:block ${
                  isLeft ? "left-0 -translate-x-2 scale-95" : ""
                } ${isRight ? "right-0 translate-x-2 scale-95" : ""}`}
              >
                <Icon className="size-5 text-blue" />
                <p className="font-display mt-4 font-bold">{audience.title}</p>
                <p className="mt-2 text-sm text-muted">{audience.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
