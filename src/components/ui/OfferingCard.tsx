import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionImage } from "@/components/ui/SectionImage";

export type OfferingCardProps = {
  number: string;
  title: string;
  description: string;
  href: string;
  cta?: string;
  image: string;
  imageAlt: string;
};

export function OfferingCard({
  number,
  title,
  description,
  href,
  cta = "Learn More",
  image,
  imageAlt,
}: OfferingCardProps) {
  return (
    <article className="group h-full rounded-2xl bg-surface shadow-[0_14px_36px_rgba(38,34,98,0.06)] ring-1 ring-border transition-all duration-300 hover:-translate-y-1 hover:ring-green/30 dark:bg-[#0e1118] dark:shadow-none dark:ring-white/[0.08] dark:hover:ring-white/16">
      <a href={href} className="flex h-full flex-col overflow-hidden rounded-2xl">
        <div className="relative mx-3 mt-3 overflow-hidden rounded-xl">
          <SectionImage
            src={image}
            alt={imageAlt}
            className="aspect-[5/4] transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/15" />
          <span className="font-display absolute top-3 left-3 text-3xl font-bold leading-none text-white/85 sm:text-4xl">
            {number}
          </span>
        </div>

        <div className="relative flex flex-1 flex-col px-5 pt-7 pb-5 sm:px-5 sm:pb-6">
          <span className="absolute top-0 right-4 inline-flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand-ink shadow-lg ring-1 ring-border/60 transition-transform duration-300 group-hover:scale-105 dark:ring-0">
            <ArrowUpRight className="size-3.5 text-green" strokeWidth={2.25} />
          </span>
          <h3 className="font-display text-lg font-bold tracking-tight text-navy dark:text-white">
            {title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted dark:text-white/60">
            {description}
          </p>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy/90 transition-colors group-hover:text-green dark:text-white/90">
            {cta}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </a>
    </article>
  );
}
