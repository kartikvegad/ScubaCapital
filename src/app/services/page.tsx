import type { Metadata } from "next";
import { ServicesPageContent } from "@/components/sections/ServicesPageContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Services",
  description:
    "Personal finance, risk management, retirement planning and succession services from SCUBA CAPITAL — AMFI-registered Mutual Fund Distributor, ARN-288339.",
  path: "/services",
});

export default function ServicesPage() {
  return <ServicesPageContent />;
}
