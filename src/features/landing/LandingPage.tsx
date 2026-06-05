import { CtaBanner } from "@/components/sections/CtaBanner";
import { StatsGrid } from "@/components/sections/StatsGrid";
import { WhyChooseGrid } from "@/components/sections/WhyChooseGrid";
import { HeroSection } from "./components/1_HeroSection";
import { SbiBanner } from "./components/2_SbiBanner";
import { UspSection } from "./components/3_OurBiggestStrength";
import { ServicesPreview } from "./components/ServicesPreview";
import { ProcessSection } from "./components/ProcessSection";
import { EmiPreview } from "./components/EmiPreview";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { DocumentsSection } from "./components/DocumentsSection";
import { BlogPreview } from "./components/BlogPreview";
import { ContactPreview } from "./components/ContactPreview";
import { BrokerSection } from "./components/BrokerSection";

export function LandingPage() {
  return (
    <>
      <HeroSection />
      <SbiBanner />
      <UspSection />
      <ServicesPreview />
      <ProcessSection />
      <EmiPreview />
      <section className="section-padding bg-white pt-0">
        <div className="container-site">
          <StatsGrid />
        </div>
      </section>
      <BrokerSection />
      <TestimonialsSection />
      <DocumentsSection />
      <BlogPreview />
      <ContactPreview />
      <WhyChooseGrid light />
      <CtaBanner />
    </>
  );
}
