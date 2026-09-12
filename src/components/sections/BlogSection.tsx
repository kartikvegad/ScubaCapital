"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { BlogCard } from "@/components/ui/BlogCard";
import { MediumLogo } from "@/components/ui/MediumLogo";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { blogPosts, blogSection, siteConfig } from "@/lib/constants";

const latestPosts = [...blogPosts]
  .sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  )
  .slice(0, 2);

export function BlogSection() {
  return (
    <section id="blog" className="section-cream section-py">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <ScrollReveal className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow">{blogSection.eyebrow}</p>
            <h2 className="font-display mt-2 text-2xl font-bold tracking-tight text-navy sm:text-3xl lg:text-[2.25rem] lg:leading-tight">
              {blogSection.headline}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              {blogSection.description}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={siteConfig.social.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-navy inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold"
            >
              <MediumLogo className="size-4" />
              {blogSection.mediumCta}
              <ArrowUpRight className="size-4" />
            </a>
            <a
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-green"
            >
              View all
              <ArrowRight className="size-4" />
            </a>
          </div>
        </ScrollReveal>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:mt-10 lg:gap-6">
          {latestPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="h-full"
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
