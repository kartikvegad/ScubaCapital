"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { founder, siteConfig } from "@/lib/constants";

export function ContactSection() {
  return (
    <section id="contact" className="section-cream section-py">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-xl text-center">
          <p className="eyebrow">Get In Touch</p>
          <h2 className="font-display mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
            Contact SCUBA CAPITAL
          </h2>
          <p className="mt-4 text-sm text-muted">
            Reach out for mutual fund insights, goal planning and structured
            wealth distribution support.
          </p>
        </ScrollReveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:gap-10">
          <ScrollReveal direction="left" delay={0.1}>
            <div className="offering-card h-full rounded-2xl bg-white p-6 ring-1 ring-border">
              <p className="text-xs font-semibold tracking-[0.14em] text-navy/50 uppercase">
                Mutual Fund Distributor
              </p>
              <h3 className="font-display mt-2 text-xl font-bold text-navy">
                {founder.name}
              </h3>
              <p className="mt-1 text-sm text-muted">{founder.role}</p>

              <div className="mt-6 rounded-xl bg-cream px-4 py-3">
                <p className="text-[11px] font-semibold tracking-wide text-navy/50 uppercase">
                  ARN Number
                </p>
                <p className="mt-1 font-display text-lg font-bold text-navy">
                  {siteConfig.amfiArn}
                </p>
              </div>

              <div className="mt-5 space-y-4 text-sm">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-start gap-3 text-muted transition-colors hover:text-navy"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#f4f8ec]">
                    <Phone className="size-4 text-green" />
                  </span>
                  <span>
                    <span className="block text-[11px] font-semibold tracking-wide text-navy/50 uppercase">
                      Call Us
                    </span>
                    {siteConfig.phoneDisplay}
                  </span>
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 text-muted transition-colors hover:text-navy"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#f4f8ec]">
                    <Mail className="size-4 text-green" />
                  </span>
                  <span>
                    <span className="block text-[11px] font-semibold tracking-wide text-navy/50 uppercase">
                      Email Us
                    </span>
                    {siteConfig.email}
                  </span>
                </a>
                <div className="flex items-start gap-3 text-muted">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#f4f8ec]">
                    <MapPin className="size-4 text-green" />
                  </span>
                  <span>
                    <span className="block text-[11px] font-semibold tracking-wide text-navy/50 uppercase">
                      Visit Our Office
                    </span>
                    {siteConfig.address}
                  </span>
                </div>
              </div>

              <p className="mt-6 text-xs text-muted">
                AMFI Registered Mutual Fund Distributor · {siteConfig.legalName}
              </p>
              <SocialLinks variant="dark" className="mt-5" />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.15}>
            <div className="rounded-2xl bg-white p-6 ring-1 ring-border shadow-[0_8px_30px_rgba(38,34,98,0.07)] lg:p-8">
              <h3 className="font-display text-lg font-bold text-navy">
                Send a message
              </h3>
              <p className="mt-2 text-sm text-muted">
                Fill in your details and we&apos;ll respond as soon as possible.
              </p>
              <ContactForm className="mt-5" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
