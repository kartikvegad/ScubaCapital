"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="hero-gradient relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent-light px-4 py-1.5 text-sm font-medium text-accent"
          >
            AMFI Registered · {siteConfig.amfiArn}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-[2.5rem] leading-[1.08] font-bold tracking-tight sm:text-5xl lg:text-[3.75rem]"
          >
            Everything Professionals Need
            <br />
            For Wealth Planning
            <br />
            <span className="text-accent">In One Partnership</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted"
          >
            {siteConfig.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Book a Consultation
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#why-us"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-background-soft"
            >
              Learn More
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative mx-auto mt-16 max-w-4xl"
        >
          <div className="mockup-shadow animate-float overflow-hidden rounded-2xl border border-border bg-surface">
            <div className="flex items-center gap-2 border-b border-border bg-background-soft px-4 py-3">
              <div className="size-3 rounded-full bg-red-400" />
              <div className="size-3 rounded-full bg-yellow-400" />
              <div className="size-3 rounded-full bg-green-400" />
              <span className="ml-2 text-xs text-muted">Scuba Capital Dashboard</span>
            </div>
            <div className="grid gap-4 p-6 sm:grid-cols-3">
              <div className="rounded-xl bg-background-soft p-4">
                <p className="text-xs font-medium text-muted">Total Portfolio</p>
                <p className="font-display mt-1 text-2xl font-bold">₹8,42,500</p>
                <p className="mt-1 text-xs font-medium text-success">+12.4% YTD</p>
              </div>
              <div className="rounded-xl bg-accent p-4 text-accent-foreground">
                <p className="text-xs font-medium opacity-80">Goal Progress</p>
                <p className="font-display mt-1 text-2xl font-bold">78%</p>
                <p className="mt-1 text-xs opacity-80">Retirement on track</p>
              </div>
              <div className="rounded-xl bg-background-soft p-4">
                <p className="text-xs font-medium text-muted">Monthly SIP</p>
                <p className="font-display mt-1 text-2xl font-bold">₹25,000</p>
                <p className="mt-1 text-xs text-muted">Active since 2021</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
