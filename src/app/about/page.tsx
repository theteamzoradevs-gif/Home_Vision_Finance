import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { StatsGrid } from "@/components/sections/StatsGrid";
import { WhyChooseGrid } from "@/components/sections/WhyChooseGrid";
import { MissionVisionCards } from "@/components/sections/MissionVisionCards";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "About Us",
  "Learn about Home Vision Finance — SBI Authorised Channel Partner helping families secure stress-free home loans.",
  "/about"
);

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="Who We Are"
        title="Making Your Home Loan Journey Stress-Free"
        description="Home Vision Finance is a certified premium financial consultancy specializing in retail mortgages. As an authorised channel partner of SBI, we help families lock down dream homes with expert coordination and ₹0 processing fee charges."
      />

      <MissionVisionCards />
      <WhyChooseGrid />

      <section className="section-padding bg-slate-50">
        <div className="container-site">
          <SectionHeading label="Our Impact" title="Numbers That Speak for Us" centered />
          <StatsGrid />
        </div>
      </section>

      <CtaBanner
        layout="split"
        title="Ready to Talk to Our Mortgage Expert?"
        description="Connect instantly for premium application screening with absolute clarity."
      />
    </>
  );
}
