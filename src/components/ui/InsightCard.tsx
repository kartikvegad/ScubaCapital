import { ArrowRight, type LucideIcon } from "lucide-react";

export type InsightCardProps = {
  title: string;
  description: string;
  href: string;
  label: string;
  icon: LucideIcon;
};

export function InsightCard({
  title,
  description,
  href,
  label,
  icon: Icon,
}: InsightCardProps) {
  return (
    <a
      href={href}
      className="insight-card group flex h-full flex-col rounded-2xl border border-border bg-white p-5 shadow-[0_6px_24px_rgba(38,34,98,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-green/30 hover:shadow-[0_16px_40px_rgba(38,34,98,0.1)]"
    >
      <span className="flex size-11 items-center justify-center rounded-xl bg-[#f4f8ec] text-green transition-colors group-hover:bg-green group-hover:text-white">
        <Icon className="size-5" aria-hidden />
      </span>
      <h3 className="font-display mt-4 text-base font-bold text-navy">{title}</h3>
      <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">
        {description}
      </p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors group-hover:text-green">
        {label}
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </a>
  );
}
