"use client";

import { useState } from "react";
import { ArrowRight, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { founder, processSteps, siteConfig } from "@/lib/constants";

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          message: data.get("message"),
        }),
      });

      const result: { error?: string } = await response.json();

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(result.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage(
        "Unable to send your message. Please check your connection and try again.",
      );
    }
  }

  return (
    <>
      <section id="approach" className="bg-background-soft py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              We Don&apos;t Start With a Product.{" "}
              <span className="text-blue">We Start With You.</span>
            </h2>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step) => (
              <div key={step.step} className="panel rounded-[1.75rem] p-5">
                <span className="inline-flex size-9 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
                  {step.step}
                </span>
                <h3 className="font-display mt-3 font-bold">{step.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hero-bg py-24 lg:py-32">
        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center lg:px-8">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Your Financial Journey Starts With a{" "}
            <span className="text-[#93c5fd]">Conversation</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-white/70">
            {siteConfig.subheadline}
          </p>
          <a
            href="#contact"
            className="pill-dark mt-10 inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold"
          >
            Book a Consultation
            <ArrowRight className="size-4" />
          </a>
        </div>
      </section>

      <section id="contact" className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h3 className="font-display text-2xl font-bold">Let&apos;s Connect</h3>
              <p className="mt-2 text-muted">{siteConfig.legalName}</p>
              <div className="mt-8 space-y-4">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-3 text-sm text-muted hover:text-foreground"
                >
                  <Phone className="size-4 text-blue" />
                  {siteConfig.phoneDisplay}
                </a>
                {siteConfig.emails.map((email) => (
                  <a
                    key={email}
                    href={`mailto:${email}`}
                    className="flex items-center gap-3 text-sm text-muted hover:text-foreground"
                  >
                    <Mail className="size-4 text-blue" />
                    {email}
                  </a>
                ))}
                <p className="flex items-start gap-3 text-sm text-muted">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-blue" />
                  {siteConfig.address}
                </p>
              </div>
              <p className="mt-6 text-sm text-muted">
                Founder: {founder.name}
                <br />
                AMFI ARN: {siteConfig.amfiArn}
              </p>
            </div>

            <div className="panel rounded-[2rem] p-8">
              <h3 className="font-display font-bold">Send us a message</h3>
              {status === "success" ? (
                <div className="mt-5 rounded-2xl bg-accent-light p-6 text-sm">
                  <p className="font-semibold text-blue">Message sent successfully!</p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-4 text-sm font-semibold text-blue"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
                  <input
                    name="name"
                    required
                    placeholder="Full Name"
                    disabled={status === "loading"}
                    className="w-full rounded-full border border-border bg-background-soft px-5 py-3 text-sm outline-none focus:border-accent"
                  />
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Email"
                    disabled={status === "loading"}
                    className="w-full rounded-full border border-border bg-background-soft px-5 py-3 text-sm outline-none focus:border-accent"
                  />
                  <input
                    name="phone"
                    type="tel"
                    required
                    placeholder="Phone Number"
                    disabled={status === "loading"}
                    className="w-full rounded-full border border-border bg-background-soft px-5 py-3 text-sm outline-none focus:border-accent"
                  />
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Your message (optional)"
                    disabled={status === "loading"}
                    className="w-full resize-none rounded-2xl border border-border bg-background-soft px-5 py-3 text-sm outline-none focus:border-accent"
                  />
                  {status === "error" && (
                    <p className="text-sm text-danger">{errorMessage}</p>
                  )}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="pill-blue flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm font-semibold disabled:opacity-60"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="size-4 animate-spin" /> Sending...
                      </>
                    ) : (
                      "Submit Inquiry"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
