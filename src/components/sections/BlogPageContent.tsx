"use client";

import { ArrowUpRight } from "lucide-react";
import { BlogCard } from "@/components/ui/BlogCard";
import { MediumLogo } from "@/components/ui/MediumLogo";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { blogPosts, blogSection, siteConfig } from "@/lib/constants";

export function BlogPageContent() {
  return (
    <div className="page-shell">
      <section className="section-cream pt-32 pb-16 lg:pt-36 lg:pb-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <ScrollReveal className="max-w-3xl">
            <p className="eyebrow">{blogSection.eyebrow}</p>
            <h1 className="font-display mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Blog & Insights
            </h1>
            <p className="mt-5 text-lg text-muted">{blogSection.description}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={siteConfig.social.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
              >
                <span className="inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-white">
                  <MediumLogo className="size-3.5" />
                </span>
                {blogSection.mediumCta}
                <ArrowUpRight className="size-4" />
              </a>
              <SocialLinks variant="dark" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-white pb-20 lg:pb-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} variant="full" />
            ))}
          </div>

          <div className="panel mt-12 rounded-[2rem] p-8 text-center">
            <p className="font-display text-xl font-bold text-navy">
              Published on Medium
            </p>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted">
              Full articles are hosted on our Medium publication. Follow us there
              for the latest educational content from {siteConfig.legalName} — AMFI
              Registered Mutual Fund Distributor, {siteConfig.amfiArn}.
            </p>
            <a
              href={siteConfig.social.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-navy mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
            >
              <MediumLogo className="size-4" />
              medium.com/@scubacapital
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
