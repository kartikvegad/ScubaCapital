import { PartnersStrip } from "@/components/layout/PartnersStrip";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PartnersStrip />
      <FeaturesSection />
      <StatsSection />
      <ServicesSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
