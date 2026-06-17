import { CtaBanner } from "@/components/sections/CtaBanner";
import { StatsGrid } from "@/components/sections/StatsGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhyChooseGrid } from "@/components/sections/WhyChooseGrid";
import type { LandingPageData } from "@/lib/api/landingData";
import { HeroSection } from "./components/1_HeroSection";
import { LiveBanner } from "./components/2A_LiveBanner";
import { SbiBanner } from "./components/2_SbiBanner";
import { UspSection } from "./components/3_OurBiggestStrength";
import { ServicesPreview } from "./components/4_OurServices";
import { ProcessSection } from "./components/5_ProcessSection";
import { EmiPreview } from "./components/6_EmiPreview";
import { TestimonialsSection } from "./components/8_TestimonialsSection";
import { DocumentsSection } from "./components/9_DocumentsSection";
import { BlogPreview } from "./components/10_BlogPreview";
import { BrokerSection } from "./components/7_BrokerSection";

type LandingPageProps = {
  data: LandingPageData;
};

export function LandingPage({ data }: LandingPageProps) {
  return (
    <>
      <HeroSection initialData={data.heroData} />
      <LiveBanner initialBanner={data.bannerData} />
      <SbiBanner />
      <UspSection />
      <ServicesPreview />
      <ProcessSection />
      <EmiPreview />
      <section className="section-padding bg-slate-50">
        <div className="container-site">
          <SectionHeading label="Our Impact" title="Numbers That Speak for Us" centered />
          <StatsGrid />
        </div>
      </section>
      <BrokerSection />
      <TestimonialsSection initialReviews={data.testimonials} />
      <DocumentsSection />
      <BlogPreview initialPosts={data.blogPosts} />
      <WhyChooseGrid />
      <CtaBanner />
    </>
  );
}
