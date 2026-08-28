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
    <article className="page-shell">
      <section className="section-cream pt-32 pb-12 lg:pt-36">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <ScrollReveal>
            <a
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-navy/70 transition-colors hover:text-navy"
            >
              <ArrowLeft className="size-4" />
              Back to blog
            </a>

            <div className="mt-6 flex flex-wrap items-center gap-2 text-sm text-muted">
              <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold tracking-wide text-navy uppercase ring-1 ring-border">
                {post.category}
              </span>
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              <span aria-hidden>·</span>
              <span>{post.readTime}</span>
            </div>

            <h1 className="font-display mt-5 text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>

            <p className="mt-4 text-sm text-muted">By {post.author}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-white pb-20 lg:pb-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-[1.75rem]">
            <Image
              src={post.image}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>

          <div className="space-y-5 text-base leading-relaxed text-navy/85">
            {post.body.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>

          <div className="panel mt-10 rounded-[1.5rem] p-6 sm:p-8">
            <p className="font-display text-lg font-bold text-navy">
              Continue reading on Medium
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              This is a summary preview. The full article is published on our Medium
              channel with additional context and updates.
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
            <strong className="text-navy/70">Disclaimer:</strong> {siteConfig.disclaimer}
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
