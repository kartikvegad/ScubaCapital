"use client";

import { motion } from "framer-motion";
import {
  Handshake,
  MessageCircle,
  RefreshCw,
  Sparkles,
  Target,
  Telescope,
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { whyUs } from "@/lib/constants";

const reasonIcons = [
  Target,
  Sparkles,
  Telescope,
  MessageCircle,
  Handshake,
  RefreshCw,
] as const;

export function WhyUsSection() {
  return (
    <section className="section-cream section-py">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-14">
          <ScrollReveal>
            <p className="eyebrow">Why SCUBA CAPITAL</p>
            <h2 className="font-display mt-3 text-2xl font-bold tracking-tight text-navy sm:text-3xl lg:text-[2.15rem] lg:leading-tight">
              Why Clients Choose Us
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              Guidance backed by experience — structured thinking, clear
              communication, and a long-term partnership around your goals.
            </p>
          </ScrollReveal>

          <div className="grid gap-3 sm:grid-cols-2">
            {whyUs.map((item, i) => {
              const Icon = reasonIcons[i] ?? Target;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="flex gap-3 rounded-xl border border-border bg-surface p-4"
                >
                  <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent-light text-green">
                    <Icon className="size-4" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="font-display text-sm font-bold text-navy">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
