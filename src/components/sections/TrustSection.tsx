import { amcPartners } from "@/lib/constants";

export function TrustSection() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-6 text-center lg:px-8">
        <p className="text-base text-muted sm:text-lg">
          Empaneled with{" "}
          <span className="font-semibold text-blue">Leading AMC Partners</span>
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {amcPartners.map((partner) => (
            <span
              key={partner}
              className="text-sm font-semibold tracking-tight text-foreground/35 transition-colors hover:text-foreground/55"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
