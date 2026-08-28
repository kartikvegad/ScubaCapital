"use client";

import { ContactForm } from "@/components/forms/ContactForm";
import { ContactPageShell } from "@/components/sections/ContactPageShell";
import { contactPages, ctaConfig } from "@/lib/constants";

export function ContactPageContent() {
  return (
    <ContactPageShell
      title={contactPages.consultation.title}
      description={contactPages.consultation.description}
    >
      <ContactForm variant="dark" showInterests />
      <p className="mt-6 text-sm text-white/55">
        Need a portfolio review instead?{" "}
        <a
          href={ctaConfig.portfolioReview.href}
          className="font-semibold text-green transition-colors hover:text-gold-light"
        >
          {ctaConfig.portfolioReview.label}
        </a>
      </p>
    </ContactPageShell>
  );
}
