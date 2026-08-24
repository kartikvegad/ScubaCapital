"use client";

import { Check, PieChart, Shield, Target, TrendingUp } from "lucide-react";

const features = [
  { icon: Target, label: "Goal-based planning" },
  { icon: TrendingUp, label: "Grow your wealth" },
  { icon: Shield, label: "Protection review" },
  { icon: PieChart, label: "Portfolio clarity" },
];

export function CollectSection() {
  return (
    <section id="services" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem]">
              Build Your Financial Plan Within{" "}
              <span className="text-blue">Minutes</span>
            </h2>
            <p className="mt-5 max-w-md text-muted">
              We don&apos;t start with a product. We start with you — understanding
              your goals, reviewing your position, and creating a disciplined
              strategy for the future.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-4">
              {features.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-2xl bg-background-soft px-4 py-3"
                >
                  <Icon className="size-4 shrink-0 text-blue" />
                  <span className="text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="panel rounded-[2rem] p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted">Portfolio Overview</p>
                <p className="font-display text-2xl font-bold">Financial Plan</p>
              </div>
              <span className="rounded-full bg-accent-light px-3 py-1 text-xs font-semibold text-blue">
                Active
              </span>
            </div>

            <div className="mt-6 rounded-2xl bg-gradient-to-br from-[#0a2d7a] to-[#2f7bff] p-6 text-white">
              <p className="text-xs text-white/70">SCUBA CAPITAL</p>
              <p className="font-display mt-6 text-lg font-bold tracking-widest">
                GOAL · PLAN · GROW
              </p>
              <div className="mt-8 flex items-end justify-between">
                <div>
                  <p className="text-[10px] text-white/60">Client</p>
                  <p className="text-sm font-semibold">Your Name</p>
                </div>
                <p className="font-display text-sm font-bold">AMFI MFD</p>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 rounded-full bg-green-50 px-4 py-2.5 text-sm font-medium text-success">
              <Check className="size-4" />
              Consultation Booked Successfully
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
