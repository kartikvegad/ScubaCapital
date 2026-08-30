import type { Metadata } from "next";
import { SipCalculatorPageContent } from "@/components/sections/SipCalculatorPageContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Inflation Adjusted SIP Calculator",
  description:
    "Calculate SIP returns, estimated corpus, and inflation-adjusted purchasing power for your mutual fund investments with SCUBA CAPITAL.",
  path: "/tools/sip-calculator",
});

export default function SipCalculatorPage() {
  return <SipCalculatorPageContent />;
}
