"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export function ContactSection() {
  return (
    <>
      <section className="cta-gradient relative overflow-hidden py-24 lg:py-32">
        <div className="relative mx-auto max-w-6xl px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Book a consultation to start
              <br />
              your wealth journey
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base text-white/60">
              Join 50+ families who trust Scuba Capital for honest, goal-based
              financial guidance.
            </p>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20financial%20consultation.`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-foreground transition-opacity hover:opacity-90"
            >
              Book a Consultation
              <ArrowRight className="size-4" />
            </a>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h3 className="font-display text-2xl font-bold">Get in touch</h3>
              <p className="mt-3 text-muted">
                Reach out for a free consultation. We typically respond within 24
                hours.
              </p>
              <div className="mt-8 space-y-4">
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-foreground"
                >
                  <Phone className="size-4 text-accent" />
                  {siteConfig.phone}
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-foreground"
                >
                  <Mail className="size-4 text-accent" />
                  {siteConfig.email}
                </a>
                <p className="flex items-start gap-3 text-sm text-muted">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
                  {siteConfig.address}
                </p>
              </div>
            </div>

            <div className="card-shadow rounded-2xl bg-surface p-8">
              <h3 className="font-display font-bold">Send us a message</h3>
              <form
                className="mt-5 space-y-4"
                aria-label="Contact inquiry form"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const data = new FormData(form);
                  const name = data.get("name");
                  const email = data.get("email");
                  const phone = data.get("phone");
                  const message = data.get("message");
                  const text = encodeURIComponent(
                    `Hi, I'm ${name}. Email: ${email}, Phone: ${phone}. ${message ?? ""}`,
                  );
                  window.open(
                    `https://wa.me/${siteConfig.whatsapp}?text=${text}`,
                    "_blank",
                  );
                }}
              >
                <div>
                  <label htmlFor="contact-name" className="sr-only">
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    required
                    placeholder="Full Name"
                    autoComplete="name"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="Email"
                    autoComplete="email"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="sr-only">
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="Phone Number"
                    autoComplete="tel"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={3}
                    placeholder="Tell us about your financial goals (optional)"
                    className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-foreground py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
