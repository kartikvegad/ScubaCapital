"use client";

import { PortfolioReviewForm } from "@/components/forms/PortfolioReviewForm";
import { ContactPageShell } from "@/components/sections/ContactPageShell";
import { contactPages, ctaConfig } from "@/lib/constants";

export function PortfolioReviewPageContent() {
  return (
    <ContactPageShell
      title={contactPages.portfolioReview.title}
      description={contactPages.portfolioReview.description}
    >
      <PortfolioReviewForm />
      <p className="mt-6 text-sm text-white/55">
        Want a broader consultation instead?{" "}
        <a
          href={ctaConfig.consultation.href}
          className="font-semibold text-green transition-colors hover:text-gold-light"
        >
          {ctaConfig.consultation.label}
        </a>
      </p>
    </ContactPageShell>
  );
}
