import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { MediumLogo } from "@/components/ui/MediumLogo";
import type { BlogPost } from "@/lib/constants";

type BlogCardProps = {
  post: BlogPost;
  variant?: "preview" | "full";
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

export function BlogCard({ post, variant = "preview" }: BlogCardProps) {
  return (
    <article className="offering-card group flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-border shadow-[0_8px_30px_rgba(38,34,98,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(38,34,98,0.1)]">
      <a href={`/blog/${post.slug}`} className="relative block aspect-[16/10] overflow-hidden">
        <Image
          src={post.image}
          alt=""
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#262262]/70 via-transparent to-transparent" />
        <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold tracking-wide text-navy uppercase">
          {post.category}
        </span>
      </a>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          <span aria-hidden>·</span>
          <span>{post.readTime}</span>
        </div>

        <h3 className="font-display mt-3 text-lg font-bold leading-snug text-navy">
          <a href={`/blog/${post.slug}`} className="transition-colors group-hover:text-green">
            {post.title}
          </a>
        </h3>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>

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
