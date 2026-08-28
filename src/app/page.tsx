import type { Metadata } from "next";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { GuidesSection } from "@/components/sections/GuidesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { PillarsSection } from "@/components/sections/PillarsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { WhoWeAreSection } from "@/components/sections/WhoWeAreSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqs } from "@/lib/constants";
import { createPageMetadata, getFaqJsonLd } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Mutual Fund Distributor & Financial Planning",
  description:
    "SCUBA CAPITAL PVT LTD — AMFI-registered Mutual Fund Distributor in Dombivli East. SIP planning, portfolio review, retirement and protection solutions.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <JsonLd data={getFaqJsonLd(faqs.slice(0, 5))} />
      <div className="page-shell">
        <HeroSection />
        <TrustSection />
        <GuidesSection />
        <PillarsSection />
        <WhoWeAreSection />
        <PhilosophySection />
        <ServicesSection />
        <ApproachSection />
        <WhyUsSection />
        <BlogSection />
        <FaqSection />
        <ContactSection />
      </div>
    </>
  );
}
