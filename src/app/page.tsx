import { CollectSection } from "@/components/sections/CollectSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PlanningCardSection } from "@/components/sections/PlanningCardSection";
import { SecureFlowSection } from "@/components/sections/SecureFlowSection";
import { TabFeatureSection } from "@/components/sections/TabFeatureSection";
import { TrustSection } from "@/components/sections/TrustSection";

export default function Home() {
  return (
    <div className="page-shell">
      <HeroSection />
      <TrustSection />
      <TabFeatureSection />
      <PlanningCardSection />
      <SecureFlowSection />
      <CollectSection />
      <ContactSection />
    </div>
  );
}
