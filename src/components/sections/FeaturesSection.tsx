"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { features, siteConfig } from "@/lib/constants";

function FeatureMockup({ index }: { index: number }) {
  const mockups = [
    (
      <div className="card-shadow rounded-2xl bg-surface p-6">
        <div className="space-y-3">
          {["Retirement Goal", "Child Education", "Emergency Fund"].map((goal, i) => (
            <div key={goal} className="flex items-center justify-between rounded-xl bg-background-soft px-4 py-3">
              <span className="text-sm font-medium">{goal}</span>
              <span className="text-sm font-bold text-accent">{[78, 45, 92][i]}%</span>
            </div>
          ))}
        </div>
      </div>
    ),
    (
      <div className="card-shadow rounded-2xl bg-surface p-6">
        <div className="rounded-xl bg-accent-light p-4">
          <p className="text-sm font-medium text-accent">Transparent Recommendation</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Equity SIP · ₹15,000/month · Moderate risk · 15-year horizon
          </p>
        </div>
        <div className="mt-3 rounded-xl border border-border p-4">
          <p className="text-xs text-muted">Why this fits you</p>
          <p className="mt-1 text-sm">Aligned to your retirement timeline and risk comfort.</p>
        </div>
      </div>
    ),
    (
      <div className="card-shadow rounded-2xl bg-surface p-6">
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <div className="flex size-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
            SK
          </div>
          <div>
            <p className="text-sm font-semibold">Portfolio Review</p>
            <p className="text-xs text-muted">Scheduled quarterly</p>
          </div>
        </div>
        <div className="mt-4 space-y-2 text-sm text-muted">
          <p>✓ Rebalanced asset allocation</p>
          <p>✓ Insurance coverage reviewed</p>
          <p>✓ Next milestone updated</p>
        </div>
      </div>
    ),
    (
      <div className="card-shadow rounded-2xl bg-surface p-6">
        <div className="flex items-center gap-2">
          <div className="size-2 rounded-full bg-success" />
          <p className="text-sm font-medium">Available now</p>
        </div>
        <p className="mt-3 font-display text-lg font-bold">Quick response on WhatsApp</p>
        <p className="mt-2 text-sm text-muted">
          Average reply within a few hours. Book a free 30-min consultation anytime.
        </p>
      </div>
    ),
  ];

  return mockups[index] ?? mockups[0];
}

export function FeaturesSection() {
  return (
    <section id="why-us" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Less confusion on finances.
            <br />
            More clarity on life.
          </h2>
        </motion.div>

        <div className="mt-20 space-y-28">
          {features.map((feature, i) => (
            <motion.div
              key={feature.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <span className="font-display text-7xl font-bold text-accent/15 lg:text-8xl">
                  {feature.number}
                </span>
                <h3 className="font-display mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                  {feature.title}
                </h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
                  {feature.description}
                </p>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-dark"
                >
                  Get Started
                  <ArrowRight className="size-4" />
                </a>
              </div>
              <FeatureMockup index={i} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
