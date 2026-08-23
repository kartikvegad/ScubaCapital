"use client";

import { motion } from "framer-motion";
import { founders } from "@/lib/constants";

export function AboutSection() {
  return (
    <section id="about" className="border-t border-border bg-background-soft py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Built by advisors,
            <br />
            trusted by families
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted">
            Scuba Capital was born from a shared belief: every professional
            deserves honest, goal-based financial guidance. After years of helping
            families through{" "}
            <a
              href="https://www.zen-gwealth.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent hover:text-accent-dark"
            >
              Zen-G Wealth
            </a>
            , Satish and his partner set out to dive deeper — building a firm
            focused entirely on improving people&apos;s lives.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {founders.map((founder, i) => (
            <motion.article
              key={founder.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-shadow rounded-2xl bg-surface p-8"
            >
              <div className="flex size-14 items-center justify-center rounded-2xl bg-accent font-display text-lg font-bold text-accent-foreground">
                {founder.initials}
              </div>
              <h3 className="font-display mt-5 text-xl font-bold">{founder.name}</h3>
              <p className="text-sm font-medium text-accent">{founder.role}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">{founder.bio}</p>
              <ul className="mt-5 space-y-2">
                {founder.credentials.map((cred) => (
                  <li key={cred} className="flex items-start gap-2 text-xs text-muted">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                    {cred}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
