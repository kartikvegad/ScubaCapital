"use client";

import { useEffect, useRef } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { founder, siteConfig } from "@/lib/constants";

const CONTACT_VIDEO = "/videos/hero-ocean.mp4";
const CONTACT_POSTER = "/videos/hero-ocean-poster.jpg";

export function ContactPageContent() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) {
      video.pause();
      return;
    }

    video.play().catch(() => undefined);
  }, []);

  return (
    <section className="theme-dark relative min-h-[100svh] overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={CONTACT_POSTER}
          disablePictureInPicture
          controls={false}
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full scale-110 object-cover object-center blur-[4px]"
        >
          <source src={CONTACT_VIDEO} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#252947]/45" />
        <div className="hero-vignette absolute inset-0" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-32 pb-20 lg:px-8 lg:pt-36 lg:pb-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal direction="left">
            <p className="eyebrow !text-white">Get in Touch</p>
            <h1 className="font-display mt-3 text-3xl font-bold text-white sm:text-4xl">
              Let&apos;s Connect
            </h1>
            <p className="mt-2 text-sm text-white/65">{siteConfig.legalName}</p>

            <div className="mt-8 space-y-5">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-3 text-sm text-white/75 transition-colors hover:text-white"
              >
                <span className="flex size-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 backdrop-blur-sm">
                  <Phone className="size-4 text-gold-light" />
                </span>
                {siteConfig.phoneDisplay}
              </a>
              {siteConfig.emails.map((email) => (
                <a
                  key={email}
                  href={`mailto:${email}`}
                  className="flex items-center gap-3 text-sm text-white/75 transition-colors hover:text-white"
                >
                  <span className="flex size-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 backdrop-blur-sm">
                    <Mail className="size-4 text-gold-light" />
                  </span>
                  {email}
                </a>
              ))}
              <p className="flex items-start gap-3 text-sm text-white/75">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 backdrop-blur-sm">
                  <MapPin className="size-4 text-gold-light" />
                </span>
                {siteConfig.address}
              </p>
            </div>

            <div className="glass-panel mt-8 rounded-2xl p-5 text-sm text-white/75">
              <p>
                <strong className="text-white">Founder:</strong> {founder.name}
              </p>
              <p className="mt-2">
                <strong className="text-white">AMFI ARN:</strong> {siteConfig.amfiArn}
              </p>
              <p className="mt-2">
                <strong className="text-white">Website:</strong> {siteConfig.website}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.1}>
            <div className="glass-panel rounded-[2rem] p-8 lg:p-10">
              <h2 className="font-display text-xl font-bold text-white">
                Send us a message
              </h2>
              <p className="mt-2 text-sm text-white/65">
                Fill in your details and we&apos;ll respond as soon as possible.
              </p>
              <ContactForm className="mt-6" variant="glass" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
