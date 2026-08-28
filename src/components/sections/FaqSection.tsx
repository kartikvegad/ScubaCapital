"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { faqs, resourceCategories } from "@/lib/constants";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <section id="resources" className="section-white py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Investor Resources</p>
            <h2 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Investor Resources
            </h2>
            <p className="mt-5 text-muted">
              Better financial decisions begin with better understanding. Use
              this section for educational articles, financial planning insights,
              FAQs and investor information.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {resourceCategories.map((category) => (
              <span
                key={category}
                className="rounded-full bg-cream px-4 py-2 text-xs font-medium text-navy"
              >
                {category}
              </span>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section id="faqs" className="section-cream py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <ScrollReveal className="text-center">
            <p className="eyebrow">FAQs</p>
            <h2 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </ScrollReveal>

          <div className="mt-12 space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.04 }}
                  className="overflow-hidden rounded-[1.25rem] bg-white ring-1 ring-border"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="font-display text-sm font-bold sm:text-base">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`size-5 shrink-0 text-muted transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-border px-5 pb-5 pt-3">
                      <p className="text-sm leading-relaxed text-muted">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
