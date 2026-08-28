"use client";

import { motion } from "framer-motion";
import { audiences, whyUs } from "@/lib/constants";

export function WhyUsSection() {
  return (
    <section className="section-cream py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Why SCUBA CAPITAL</p>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Why Clients Choose SCUBA CAPITAL
          </h2>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="panel rounded-[1.5rem] p-6"
            >
              <h3 className="font-display font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <p className="text-center eyebrow">Who We Serve</p>
          <h3 className="font-display mt-3 text-center text-2xl font-bold">
            Financial Solutions for Every Stage of Life
          </h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {audiences.map((audience) => (
              <div
                key={audience.title}
                className="rounded-[1.25rem] bg-white p-5 ring-1 ring-border"
              >
                <p className="font-display text-sm font-bold">{audience.title}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
