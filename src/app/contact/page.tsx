import type { Metadata } from "next";
import { ContactPageContent } from "@/components/sections/ContactPageContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Book a Consultation",
  description:
    "Book a financial consultation with SCUBA CAPITAL PVT LTD for mutual fund distribution, SIP planning, goal-based planning and protection solutions. AMFI ARN-288339.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactPageContent />;
}
