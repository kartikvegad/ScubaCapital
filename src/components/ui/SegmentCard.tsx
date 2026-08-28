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
      className="segment-card group flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(38,34,98,0.1)]"
    >
      <div className="relative overflow-hidden">
        <SectionImage
          src={image}
          alt={title}
          className="aspect-[16/10] transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#262262]/85 to-transparent" />
        <p className="absolute bottom-3 left-3 font-display text-sm font-bold text-white">
          {shortLabel}
        </p>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-display text-sm font-bold text-navy">{title}</h3>
        <p className="mt-1.5 line-clamp-2 flex-1 text-xs leading-relaxed text-muted">
          {description}
        </p>
        <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-navy group-hover:text-green">
          Explore
          <ArrowRight className="size-3.5" />
        </span>
      </div>
    </a>
  );
}
