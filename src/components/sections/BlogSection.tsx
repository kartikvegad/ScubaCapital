"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { BlogCard } from "@/components/ui/BlogCard";
import { MediumLogo } from "@/components/ui/MediumLogo";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { blogPosts, blogSection, siteConfig } from "@/lib/constants";

export function BlogSection() {
  return (
    <section id="blog" className="section-white section-py">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <ScrollReveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">{blogSection.eyebrow}</p>
            <h2 className="font-display mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
              {blogSection.headline}
            </h2>
          </div>
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
        </ScrollReveal>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {[...blogPosts].reverse().slice(0, 2).map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <a
            href="/blog"
            className="text-sm font-semibold text-navy transition-colors hover:text-green"
          >
            View all articles →
          </a>
        </div>
      </div>
    </section>
  );
}
