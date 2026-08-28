"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteImages, whyUs } from "@/lib/constants";

export function WhyUsSection() {
  return (
    <section className="section-cream section-py">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div className="flex items-center justify-center rounded-xl bg-white p-8 shadow-sm sm:p-10">
            <Image
              src={siteImages.brandLogoFull}
              alt="SCUBA CAPITAL"
              width={480}
              height={340}
              className="h-auto w-full max-w-xs object-contain sm:max-w-sm"
              sizes="(max-width: 1024px) 80vw, 400px"
            />
          </div>

          <div>
            <p className="eyebrow">Why SCUBA CAPITAL</p>
            <h2 className="font-display mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
              Why Clients Choose Us
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {whyUs.slice(0, 4).map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="panel rounded-xl p-4"
                >
                  <h3 className="font-display text-sm font-bold">{item.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
