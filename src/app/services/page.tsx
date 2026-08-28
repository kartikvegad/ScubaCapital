import type { Metadata } from "next";
import { ServicesPageContent } from "@/components/sections/ServicesPageContent";

export const metadata: Metadata = {
  title: "Services | SCUBA CAPITAL PVT LTD",
  description:
    "Personal finance, risk management, retirement planning, and estate succession services from SCUBA CAPITAL — AMFI registered mutual fund distributor.",
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
