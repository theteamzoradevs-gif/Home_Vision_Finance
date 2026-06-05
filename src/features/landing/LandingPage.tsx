import { CtaBanner } from "@/components/sections/CtaBanner";
import { StatsGrid } from "@/components/sections/StatsGrid";
import { WhyChooseGrid } from "@/components/sections/WhyChooseGrid";
import { HeroSection } from "./components/1_HeroSection";
import { SbiBanner } from "./components/2_SbiBanner";
import { UspSection } from "./components/3_OurBiggestStrength";
import { ServicesPreview } from "./components/4_OurServices";
import { ProcessSection } from "./components/5_ProcessSection";
import { EmiPreview } from "./components/6_EmiPreview";
import { TestimonialsSection } from "./components/8_TestimonialsSection";
import { DocumentsSection } from "./components/9_DocumentsSection";
import { BlogPreview } from "./components/10_BlogPreview";
import { ContactPreview } from "./components/11_ContactPreview";
import { BrokerSection } from "./components/7_BrokerSection";

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
