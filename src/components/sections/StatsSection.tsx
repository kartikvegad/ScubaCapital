"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/constants";

export function StatsSection() {
  return (
    <section className="border-y border-border bg-background-soft py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Numbers that speak for themselves
          </h2>
          <p className="mt-4 text-muted">
            Supporting professionals and families with disciplined, goal-based
            financial guidance across India.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center"
            >
              <p className="font-display text-4xl font-bold tracking-tight lg:text-5xl">
                {stat.value}
                {"suffix" in stat ? stat.suffix : ""}
              </p>
              <p className="mt-2 text-sm font-medium text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
