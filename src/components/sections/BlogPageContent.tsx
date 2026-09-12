"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { BlogCard } from "@/components/ui/BlogCard";
import { MediumLogo } from "@/components/ui/MediumLogo";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { blogPosts, blogSection, siteConfig } from "@/lib/constants";

const sortedPosts = [...blogPosts].sort(
  (a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
);

export function BlogPageContent() {
  const [featured, ...rest] = sortedPosts;

  return (
    <div className="page-shell overflow-x-hidden">
      <section className="section-navy relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_80%_0%,rgba(141,198,63,0.18),transparent_55%)]" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
          <ScrollReveal className="max-w-3xl">
            <p className="eyebrow !text-green">{blogSection.eyebrow}</p>
            <h1 className="font-display mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">
              {blogSection.pageTitle}
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
              {blogSection.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={siteConfig.social.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
              >
                <span className="inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-surface">
                  <MediumLogo className="size-3.5" />
                </span>
                {blogSection.mediumCta}
                <ArrowUpRight className="size-4" />
              </a>
              <SocialLinks />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-cream -mt-6 pb-16 pt-10 sm:pb-20 sm:pt-12 lg:pb-24 lg:pt-14">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          {featured ? (
            <ScrollReveal>
              <BlogCard post={featured} variant="featured" />
            </ScrollReveal>
          ) : null}

          {rest.length > 0 ? (
            <>
              <ScrollReveal className="mt-12 mb-6 sm:mt-14 sm:mb-8">
                <p className="eyebrow">More articles</p>
                <h2 className="font-display mt-2 text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                  Keep exploring
                </h2>
              </ScrollReveal>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                {rest.map((post, index) => (
                  <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ delay: index * 0.05 }}
                    className="h-full"
                  >
                    <BlogCard post={post} variant="full" />
                  </motion.div>
                ))}
              </div>
            </>
          ) : null}

          <ScrollReveal delay={0.08} className="mt-12 sm:mt-14">
            <div className="bg-gradient-brand relative overflow-hidden rounded-2xl px-6 py-8 text-white sm:px-8 sm:py-10 lg:px-10">
              <div
                className="pointer-events-none absolute -right-8 -bottom-10 h-48 w-48 rounded-full bg-green/20 blur-3xl"
                aria-hidden
              />
              <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-xl">
                  <p className="text-[11px] font-semibold tracking-[0.18em] text-green uppercase">
                    On Medium
                  </p>
                  <h2 className="font-display mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                    Full articles live on our publication.
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    Follow {siteConfig.legalName} on Medium for complete pieces,
                    updates and educational notes — AMFI ARN {siteConfig.amfiArn}.
                  </p>
                </div>
                <a
                  href={siteConfig.social.medium}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex shrink-0 items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
                >
                  <MediumLogo className="size-4" />
                  medium.com/@scubacapital
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
