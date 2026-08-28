import { ApproachSection } from "@/components/sections/ApproachSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { GuidesSection } from "@/components/sections/GuidesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { PillarsSection } from "@/components/sections/PillarsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhoWeAreSection } from "@/components/sections/WhoWeAreSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";

export default function Home() {
  return (
    <div className="page-shell">
      <HeroSection />
      <GuidesSection />
      <PillarsSection />
      <WhoWeAreSection />
      <PhilosophySection />
      <ServicesSection />
      <ApproachSection />
      <WhyUsSection />
      <FaqSection />
      <ContactSection />
    </div>
  );
}
