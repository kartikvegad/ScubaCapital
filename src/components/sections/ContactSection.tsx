"use client";

import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionImage } from "@/components/ui/SectionImage";
import { finalCta, founder, siteConfig, siteImages } from "@/lib/constants";

export function ContactSection() {
  return (
    <>
      <section className="relative overflow-hidden py-24 lg:py-32">
        <SectionImage
          src={siteImages.philosophy}
          alt=""
          aria-hidden
          className="absolute inset-0"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#252947]/75" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-8">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {finalCta.heading}
            </h2>
            <p className="mx-auto mt-6 text-sm leading-relaxed text-white/65 sm:text-base">
              {finalCta.body}
            </p>
            <p className="font-display mt-6 text-lg font-semibold text-gold-light">
              {finalCta.closing}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/contact"
                className="btn-primary inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold"
              >
                {finalCta.primaryCta}
                <ArrowRight className="size-4" />
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex rounded-full px-7 py-3.5 text-sm font-semibold"
              >
                {finalCta.secondaryCta}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="contact" className="section-cream py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <ScrollReveal direction="left">
              <SectionImage
                src={siteImages.approach}
                alt="Connect with SCUBA CAPITAL"
                className="mb-8 aspect-[16/10] rounded-2xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <p className="eyebrow">Contact</p>
              <h3 className="font-display mt-3 text-2xl font-bold">
                Let&apos;s Connect
              </h3>
              <p className="mt-2 text-muted">{siteConfig.legalName}</p>

              <div className="mt-8 space-y-4">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-3 text-sm text-muted hover:text-foreground"
                >
                  <Phone className="size-4 text-gold" />
                  {siteConfig.phoneDisplay}
                </a>
                {siteConfig.emails.map((email) => (
                  <a
                    key={email}
                    href={`mailto:${email}`}
                    className="flex items-center gap-3 text-sm text-muted hover:text-foreground"
                  >
                    <Mail className="size-4 text-gold" />
                    {email}
                  </a>
                ))}
                <p className="flex items-start gap-3 text-sm text-muted">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
                  {siteConfig.address}
                </p>
              </div>

              <p className="mt-6 text-sm text-muted">
                Founder: {founder.name}
                <br />
                AMFI ARN: {siteConfig.amfiArn}
                <br />
                {siteConfig.website}
              </p>

              <a
                href="/contact"
                className="btn-outline-navy mt-8 inline-flex rounded-full px-6 py-3 text-sm font-semibold"
              >
                Visit full contact page
              </a>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.1}>
              <div className="panel rounded-[2rem] p-8">
                <h3 className="font-display font-bold">Send us a message</h3>
                <ContactForm className="mt-5" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
