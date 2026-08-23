import { amcPartners } from "@/lib/constants";

export function PartnersStrip() {
  return (
    <section className="border-y border-border bg-background-soft py-8">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="mb-6 text-center text-sm font-medium text-muted">
          Empaneled with India&apos;s leading Asset Management Companies
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {amcPartners.map((partner) => (
            <span
              key={partner}
              className="text-sm font-semibold text-foreground/40 transition-colors hover:text-foreground/70"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
