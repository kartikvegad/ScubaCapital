"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  BookOpen,
  ChevronDown,
  LineChart,
  PieChart,
  Target,
} from "lucide-react";
import { InsightCard } from "@/components/ui/InsightCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { faqs, investorResourceCards } from "@/lib/constants";

const HOMEPAGE_FAQ_COUNT = 5;

const resourceIcons = [PieChart, LineChart, Target, BookOpen] as const;

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const homepageFaqs = faqs.slice(0, HOMEPAGE_FAQ_COUNT);
  const resourceCards = investorResourceCards.slice(0, 4);

  return (
    <>
      <section id="resources" className="section-white section-py">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Research & Insights</p>
            <h2 className="font-display mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
              Investor Resources
            </h2>
            <p className="mt-4 text-sm text-muted">
              Educational guides and service information to support informed
              financial decisions.
            </p>
          </ScrollReveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {resourceCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="h-full"
              >
                <InsightCard
                  title={card.title}
                  description={card.description}
                  href={card.href}
                  label={card.label}
                  icon={resourceIcons[i] ?? BarChart3}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="faqs" className="section-cream section-py">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <ScrollReveal className="text-center">
            <p className="eyebrow">FAQs</p>
            <h2 className="font-display mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
              Common Questions
            </h2>
          </ScrollReveal>

          <div className="mt-8 space-y-2">
            {homepageFaqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  className="overflow-hidden rounded-xl bg-white ring-1 ring-border"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left"
                  >
                    <span className="font-display text-sm font-bold">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`size-4 shrink-0 text-muted transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen ? (
                    <div className="border-t border-border px-4 pb-4 pt-2">
                      <p className="text-xs leading-relaxed text-muted">
                        {faq.answer}
                      </p>
                    </div>
                  ) : null}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
