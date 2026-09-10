"use client";

import { motion } from "framer-motion";
import { approachIntro, processSteps } from "@/lib/constants";

export function ApproachSection() {
  return (
    <section id="approach" className="section-white section-py">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Our Approach</p>
          <h2 className="font-display mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
            {approachIntro.heading}
          </h2>
          <p className="mt-4 text-sm text-muted">{approachIntro.intro}</p>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="rounded-xl bg-cream p-4"
            >
              <span className="font-display text-xl font-bold text-gold">
                {step.step}
              </span>
              <h3 className="font-display mt-2 text-sm font-bold">{step.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
