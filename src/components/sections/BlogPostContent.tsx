"use client";

import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SocialLinks } from "@/components/ui/SocialLinks";
import type { BlogPost } from "@/lib/constants";
import { siteConfig } from "@/lib/constants";

type BlogPostContentProps = {
  post: BlogPost;
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  return (
    <article className="page-shell overflow-x-hidden">
      <section className="section-navy relative overflow-hidden pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_15%_0%,rgba(141,198,63,0.16),transparent_55%)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl px-6 lg:px-8">
          <ScrollReveal>
            <a
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              <ArrowLeft className="size-4" />
              Back to blog
            </a>

            <div className="mt-6 flex flex-wrap items-center gap-2 text-sm text-white/65">
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-green uppercase ring-1 ring-white/15">
                {post.category}
              </span>
              <time dateTime={post.publishedAt}>
                {formatDate(post.publishedAt)}
              </time>
              <span aria-hidden>·</span>
              <span>{post.readTime}</span>
            </div>

            <h1 className="font-display mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              {post.title}
            </h1>

            <p className="mt-4 text-sm text-white/60">By {post.author}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-cream -mt-6 pb-20 pt-10 lg:pb-28 lg:pt-12">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="panel relative mb-10 aspect-[16/9] overflow-hidden rounded-2xl p-0">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>

          <div className="panel space-y-5 rounded-2xl p-6 text-base leading-relaxed text-navy/85 sm:p-8 sm:text-[1.05rem] sm:leading-relaxed">
            {post.body.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>

          <div className="bg-gradient-brand mt-10 overflow-hidden rounded-2xl p-6 text-white sm:p-8">
            <p className="font-display text-lg font-bold sm:text-xl">
              Continue reading on Medium
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              This is a summary preview. The full article is published on our
              Medium channel with additional context and updates.
            </p>
            <a
              href={post.mediumUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-5 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
            >
              Read full article on Medium
              <ArrowUpRight className="size-4" />
            </a>
          </div>

          <p className="mt-8 text-xs leading-relaxed text-muted">
            <strong className="text-navy/70">Disclaimer:</strong>{" "}
            {siteConfig.disclaimer}
          </p>

          <div className="mt-10 border-t border-border pt-8">
            <p className="mb-4 text-xs font-semibold tracking-[0.14em] text-navy/50 uppercase">
              Follow SCUBA CAPITAL
            </p>
            <SocialLinks variant="dark" />
          </div>
        </div>
      </section>
    </article>
  );
}
