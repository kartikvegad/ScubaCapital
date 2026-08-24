"use client";

import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export function PlanningCardSection() {
  return (
    <section id="philosophy" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Planning That is Endlessly{" "}
            <span className="text-blue">Rewarding</span> For Every Goal
          </h2>
          <p className="mt-4 text-muted">
            A structured approach to understanding where you are today and where
            you want to be financially.
          </p>
        </div>

        <div className="panel mx-auto mt-14 max-w-lg rounded-[2rem] p-8">
          <div className="flex items-center justify-between border-b border-border pb-4">
            <div>
              <p className="text-xs text-muted">Financial Plan From</p>
              <p className="font-display font-bold">SCUBA CAPITAL</p>
            </div>
            <p className="font-display text-2xl font-bold text-blue">Goals</p>
          </div>

          <div className="mt-6 space-y-4">
            <div>
              <label className="text-xs font-medium text-muted">Goal</label>
              <input
                readOnly
                value="Retirement Planning"
                className="mt-1 w-full rounded-xl bg-background-soft px-4 py-3 text-sm outline-none"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-muted">Horizon</label>
                <input
                  readOnly
                  value="15 Years"
                  className="mt-1 w-full rounded-xl bg-background-soft px-4 py-3 text-sm outline-none"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-muted">Risk Profile</label>
                <input
                  readOnly
                  value="Moderate"
                  className="mt-1 w-full rounded-xl bg-background-soft px-4 py-3 text-sm outline-none"
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-medium text-muted">Monthly SIP</label>
              <input
                readOnly
                value="₹25,000"
                className="mt-1 w-full rounded-xl bg-background-soft px-4 py-3 text-sm outline-none"
              />
            </div>
          </div>

          <a
            href="#contact"
            className="pill-blue mt-8 flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm font-semibold"
          >
            Start Planning
            <ArrowRight className="size-4" />
          </a>

          <p className="mt-4 text-center text-[10px] leading-relaxed text-muted">
            AMFI ARN: {siteConfig.amfiArn}. Mutual fund investments are subject
            to market risks.
          </p>
        </div>
      </div>
    </section>
  );
}
