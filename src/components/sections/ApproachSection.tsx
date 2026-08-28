"use client";

import { motion } from "framer-motion";
import { SectionImage } from "@/components/ui/SectionImage";
import { approachIntro, processSteps, siteImages } from "@/lib/constants";

export function ApproachSection() {
  return (
    <section id="approach" className="section-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Our Approach</p>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {approachIntro.heading}
          </h2>
          <p className="mt-5 text-muted">{approachIntro.intro}</p>
        </div>

        <SectionImage
          src={siteImages.approach}
          alt="Collaborative financial planning approach"
          className="mt-12 aspect-[21/9] rounded-[2rem] shadow-[0_20px_50px_rgba(73,48,82,0.1)]"
          sizes="(max-width: 1024px) 100vw, 1152px"
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-[1.5rem] bg-cream p-5"
            >
              <span className="font-display text-2xl font-bold text-gold">
                {step.step}
              </span>
              <h3 className="font-display mt-3 font-bold">{step.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
