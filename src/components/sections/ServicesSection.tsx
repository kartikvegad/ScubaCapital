"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/constants";

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Products &amp; solutions we offer
          </h2>
          <p className="mt-4 text-muted">
            Each solution is designed to provide financial security today and
            wealth for tomorrow.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card-shadow rounded-2xl bg-surface p-8 transition-shadow hover:shadow-lg"
            >
              <h3 className="font-display text-lg font-bold">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
