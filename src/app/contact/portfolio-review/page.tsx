import type { Metadata } from "next";
import { PortfolioReviewPageContent } from "@/components/sections/PortfolioReviewPageContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Request a Portfolio Review",
  description:
    "Request a structured portfolio review from SCUBA CAPITAL PVT LTD. Understand your holdings, goal alignment, and areas that may need attention. AMFI ARN-288339.",
  path: "/contact/portfolio-review",
});

export default function PortfolioReviewPage() {
  return <PortfolioReviewPageContent />;
}
