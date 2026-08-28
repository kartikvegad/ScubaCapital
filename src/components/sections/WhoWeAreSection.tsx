"use client";

import { motion } from "framer-motion";
import { SectionImage } from "@/components/ui/SectionImage";
import { aboutCompany, siteImages, whoWeAre } from "@/lib/constants";

export function WhoWeAreSection() {
  return (
    <section id="about" className="section-navy py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <p className="eyebrow text-gold-light">Who We Are</p>
            <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {whoWeAre.title}
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-white/70 sm:text-base">
              {whoWeAre.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
            <p className="font-display mt-8 text-lg font-semibold text-gold-light">
              {whoWeAre.closing}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <SectionImage
              src={siteImages.about}
              alt="Financial planning consultation"
              className="aspect-[4/3] rounded-[2rem] ring-1 ring-white/15"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-[280px_1fr] lg:items-center"
        >
          <SectionImage
            src={siteImages.founder}
            alt="Mr. Satishkumar Kagre, Founder"
            className="aspect-[4/5] max-w-xs rounded-2xl ring-1 ring-white/15 lg:max-w-none"
            sizes="280px"
          />
          <div className="rounded-[2rem] bg-white/5 p-8 ring-1 ring-white/10 lg:p-10">
            <p className="eyebrow text-gold-light">About SCUBA CAPITAL</p>
            <h3 className="font-display mt-4 text-2xl font-bold text-white">
              {aboutCompany.title}
            </h3>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-white/65">
              {aboutCompany.body.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
