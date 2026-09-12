import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { MediumLogo } from "@/components/ui/MediumLogo";
import type { BlogPost } from "@/lib/constants";

type BlogCardProps = {
  post: BlogPost;
  variant?: "preview" | "full" | "featured";
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

export function BlogCard({ post, variant = "preview" }: BlogCardProps) {
  if (variant === "featured") {
    return (
      <article className="group panel overflow-hidden rounded-2xl">
        <a
          href={`/blog/${post.slug}`}
          className="grid lg:grid-cols-2 lg:items-stretch"
        >
          <div className="relative aspect-[16/11] overflow-hidden lg:aspect-auto lg:min-h-[22rem]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-black/10" />
            <span className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold tracking-wide text-brand-ink uppercase">
              {post.category}
            </span>
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
            <p className="eyebrow">Featured</p>
            <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-muted">
              <time dateTime={post.publishedAt}>
                {formatDate(post.publishedAt)}
              </time>
              <span aria-hidden>·</span>
              <span>{post.readTime}</span>
            </div>
            <h2 className="font-display mt-3 text-2xl font-bold leading-snug tracking-tight text-navy sm:text-3xl lg:text-[2rem] lg:leading-tight">
              {post.title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              {post.excerpt}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors group-hover:text-green">
                Read article
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </span>
              <span className="text-xs text-muted">By {post.author}</span>
            </div>
          </div>
        </a>
      </article>
    );
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-surface shadow-[0_14px_36px_rgba(38,34,98,0.06)] ring-1 ring-border transition-all duration-300 hover:-translate-y-1 hover:ring-green/25 dark:shadow-none dark:hover:ring-white/16">
      <a
        href={`/blog/${post.slug}`}
        className="relative block aspect-[16/10] overflow-hidden"
      >
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#262262]/65 via-transparent to-transparent" />
        <span className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold tracking-wide text-brand-ink uppercase">
          {post.category}
        </span>
      </a>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          <span aria-hidden>·</span>
          <span>{post.readTime}</span>
        </div>

        <h3 className="font-display mt-3 text-lg font-bold leading-snug text-navy">
          <a
            href={`/blog/${post.slug}`}
            className="transition-colors group-hover:text-green"
          >
            {post.title}
          </a>
        </h3>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
          {post.excerpt}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-4">
          <a
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors hover:text-green"
          >
            Read article
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href={post.mediumUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-green"
          >
            <MediumLogo className="size-3.5" />
            On Medium
            <ArrowUpRight className="size-3.5" />
          </a>
        </div>

        {variant === "full" ? (
          <p className="mt-4 border-t border-border pt-4 text-xs text-muted">
            By {post.author}
          </p>
        ) : null}
      </div>
    </article>
  );
}
