import { ArrowRight } from "lucide-react";
import { SectionImage } from "@/components/ui/SectionImage";

export type OfferingCardProps = {
  number: string;
  label: string;
  title: string;
  subtitle: string;
  description: string;
  href: string;
  cta: string;
  image: string;
  imageAlt: string;
};

export function OfferingCard({
  number,
  label,
  title,
  subtitle,
  description,
  href,
  cta,
  image,
  imageAlt,
}: OfferingCardProps) {
  return (
    <article className="offering-card group h-full overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgba(38,34,98,0.07)] ring-1 ring-border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(38,34,98,0.12)]">
      <a href={href} className="flex h-full flex-col">
        <div className="relative overflow-hidden">
          <SectionImage
            src={image}
            alt={imageAlt}
            className="aspect-[5/4] transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#262262]/90 via-[#262262]/30 to-transparent" />
          <span className="font-display absolute top-4 left-4 text-4xl font-bold leading-none text-white">
            {number}
          </span>
          <span className="absolute top-4 right-4 rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-semibold tracking-[0.12em] text-white uppercase backdrop-blur-sm">
            {label}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <h3 className="font-display text-lg font-bold text-navy">{title}</h3>
          <p className="mt-1 text-sm font-medium text-gold">{subtitle}</p>
          <p className="mt-3 line-clamp-2 flex-1 text-sm leading-relaxed text-muted">
            {description}
          </p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors group-hover:text-green">
            {cta}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </a>
    </article>
  );
}
