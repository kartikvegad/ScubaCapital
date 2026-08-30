"use client";

import type { ReactNode } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { HeroVideoBackground } from "@/components/ui/HeroVideoBackground";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/lib/constants";

const OFFICE_MAP_QUERY = siteConfig.address;

const MAP_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(OFFICE_MAP_QUERY)}&hl=en&z=17&iwloc=A&output=embed`;

const MAP_LINK_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(OFFICE_MAP_QUERY)}`;

const mapLegend = [
  {
    label: "Office",
    className: "bg-green",
  },
  {
    label: "Mumbai MMR service area",
    className: "bg-white/70",
  },
] as const;

type ContactPageShellProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export function ContactPageShell({
  title,
  description,
  children,
}: ContactPageShellProps) {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#1a1848]">
      <HeroVideoBackground overlayClassName="hero-contact-video" showControls={false} />

      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% 0%, rgba(141, 198, 63, 0.18) 0%, transparent 55%), radial-gradient(ellipse 70% 50% at 100% 100%, rgba(0, 104, 56, 0.22) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20 lg:px-8 lg:pt-36 lg:pb-24">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <ScrollReveal direction="left">
            <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.05]">
              {title}
            </h1>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/65 sm:text-base">
              {description}
            </p>
            <div className="mt-10 max-w-xl">{children}</div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.1}>
            <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-3xl ring-1 ring-white/10 lg:sticky lg:top-28">
              <div className="absolute top-3 left-3 z-10 rounded-xl bg-white/95 p-3 shadow-lg backdrop-blur-sm">
                <div className="space-y-2">
                  {mapLegend.map((item) => (
                    <div key={item.label} className="flex items-center gap-2">
                      <span
                        className={`size-2 shrink-0 rounded-full ${item.className}`}
                      />
                      <span className="text-[11px] font-medium text-navy/80">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <iframe
                title="SCUBA CAPITAL office location"
                src={MAP_EMBED_URL}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[200px] w-full border-0 bg-[#d8e8c8] sm:h-[220px]"
              />

              <div className="border-t border-white/10 bg-navy/80 p-4 backdrop-blur-sm">
                <div className="space-y-4">
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="flex items-center gap-3 text-sm text-white/80 transition-colors hover:text-white"
                  >
                    <span className="flex size-9 items-center justify-center rounded-full bg-white/10">
                      <Phone className="size-4 text-green" />
                    </span>
                    {siteConfig.phoneDisplay}
                  </a>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-3 text-sm text-white/80 transition-colors hover:text-white"
                  >
                    <span className="flex size-9 items-center justify-center rounded-full bg-white/10">
                      <Mail className="size-4 text-green" />
                    </span>
                    {siteConfig.email}
                  </a>
                  <p className="flex items-start gap-3 text-sm text-white/70">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/10">
                      <MapPin className="size-4 text-green" />
                    </span>
                    <span>{siteConfig.address}</span>
                  </p>
                </div>
                <p className="mt-4 text-xs text-white/45">
                  AMFI Registered Mutual Fund Distributor · {siteConfig.amfiArn}
                </p>
                <a
                  href={MAP_LINK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex text-xs font-semibold text-green transition-colors hover:text-gold-light"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
