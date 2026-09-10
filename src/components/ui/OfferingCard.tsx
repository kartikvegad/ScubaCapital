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
    <article className="group h-full rounded-[1.25rem] bg-[#0c0c0e] ring-1 ring-white/10 transition-transform duration-300 hover:-translate-y-1">
      <a href={href} className="flex h-full flex-col overflow-hidden rounded-[1.25rem]">
        <div className="relative overflow-hidden rounded-t-[1.25rem]">
          <SectionImage
            src={image}
            alt={imageAlt}
            className="aspect-[5/4] transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20" />
          <span className="font-display absolute top-4 left-4 text-4xl font-bold leading-none text-white/90 sm:text-[2.75rem]">
            {number}
          </span>
        </div>

        <div className="relative flex flex-1 flex-col px-5 pt-8 pb-5 sm:px-6 sm:pb-6">
          <span className="absolute top-0 right-4 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand-ink shadow-lg transition-transform duration-300 group-hover:scale-105">
            <ArrowUpRight className="size-4 text-green" strokeWidth={2.25} />
          </span>
          <h3 className="font-display text-lg font-bold text-white sm:text-xl">
            {title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-white/65">
            {description}
          </p>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors group-hover:text-green">
            {cta}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </a>
    </article>
  );
}
