import { ArrowRight } from "lucide-react";
import { SectionImage } from "@/components/ui/SectionImage";

export type SegmentCardProps = {
  title: string;
  shortLabel: string;
  description: string;
  image: string;
  href: string;
};

export function SegmentCard({
  title,
  shortLabel,
  description,
  image,
  href,
}: SegmentCardProps) {
  return (
    <a
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-cream ring-1 ring-border/80 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_16px_40px_rgba(38,34,98,0.1)]"
    >
      <div className="relative overflow-hidden">
        <SectionImage
          src={image}
          alt={title}
          className="aspect-[16/11] transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#262262]/80 via-[#262262]/20 to-transparent" />
        <span className="absolute top-3 left-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold tracking-[0.12em] text-navy uppercase">
          {shortLabel}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="font-display text-sm font-bold leading-snug text-navy sm:text-[0.95rem]">
          {title}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-xs leading-relaxed text-muted">
          {description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-navy transition-colors group-hover:text-green">
          Explore
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </a>
  );
}
