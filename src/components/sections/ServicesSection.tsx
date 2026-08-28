"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { products, productsIntro, services, servicesIntro } from "@/lib/constants";

export function ServicesSection() {
  return (
    <section id="services" className="section-cream py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Services</p>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {servicesIntro.heading}
          </h2>
          <p className="mt-5 text-muted">{servicesIntro.intro}</p>
          <a
            href="/services"
            className="btn-outline-navy mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
          >
            View all services
            <ArrowRight className="size-4" />
          </a>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.05 }}
              className="panel flex flex-col rounded-[1.75rem] p-6 lg:p-7"
            >
              <p className="eyebrow">{service.label}</p>
              <h3 className="font-display mt-3 text-xl font-bold">{service.title}</h3>
              <p className="mt-1 text-sm font-medium text-gold">{service.subtitle}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
              <ul className="mt-5 space-y-1.5">
                {service.items.slice(0, 4).map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-foreground/80"
                  >
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
              {"cta" in service && service.cta ? (
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy"
                >
                  {service.cta}
                  <ArrowRight className="size-4" />
                </a>
              ) : (
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy"
                >
                  Explore
                  <ArrowRight className="size-4" />
                </a>
              )}
              {"note" in service && service.note ? (
                <p className="mt-4 text-[10px] leading-relaxed text-muted/80">
                  {service.note}
                </p>
              ) : null}
            </motion.article>
          ))}
        </div>

        <div className="bg-gradient-brand mt-16 rounded-[2rem] px-6 py-10 text-center text-white sm:px-10">
          <p className="eyebrow text-gold-light">Products & Solutions</p>
          <h3 className="font-display mt-3 text-2xl font-bold sm:text-3xl">
            {productsIntro.heading}
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/65">
            {productsIntro.intro}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {products.map((product) => (
              <span
                key={product}
                className="rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white/80 ring-1 ring-white/15"
              >
                {product}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
