"use client";

import { motion } from "framer-motion";
import { SectionImage } from "@/components/ui/SectionImage";
import { whoWeAre, siteImages } from "@/lib/constants";

export function WhoWeAreSection() {
  return (
    <section id="about" className="section-navy section-py">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="eyebrow text-gold-light">Who We Are</p>
            <h2 className="font-display mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {whoWeAre.title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              {whoWeAre.paragraphs[0]}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              {whoWeAre.paragraphs[1]}
            </p>
            <p className="font-display mt-6 text-base font-semibold text-gold-light">
              {whoWeAre.closing}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <SectionImage
              src={siteImages.about}
              alt="Financial planning consultation"
              className="aspect-[4/3] rounded-2xl ring-1 ring-white/15"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
