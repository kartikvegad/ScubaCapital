"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionImage } from "@/components/ui/SectionImage";
import { audiences, siteImages, whyUs } from "@/lib/constants";

export function WhyUsSection() {
  return (
    <section className="section-cream py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <SectionImage
              src={siteImages.whyUs}
              alt="Family financial security"
              className="col-span-2 aspect-[16/10] rounded-2xl"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src={siteImages.founder}
                alt="Founder"
                fill
                className="object-cover object-top"
                sizes="200px"
              />
            </div>
            <SectionImage
              src={siteImages.philosophy}
              alt="Depth and clarity"
              className="aspect-square rounded-2xl"
              sizes="200px"
            />
          </div>

          <div>
            <p className="eyebrow">Why SCUBA CAPITAL</p>
            <h2 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Why Clients Choose SCUBA CAPITAL
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {whyUs.slice(0, 4).map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="panel rounded-[1.5rem] p-5"
                >
                  <h3 className="font-display text-sm font-bold">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.slice(4).map((item, i) => (
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
          <p className="eyebrow text-center">Who We Serve</p>
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
