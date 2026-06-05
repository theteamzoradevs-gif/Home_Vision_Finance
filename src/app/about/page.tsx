import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { StatsGrid } from "@/components/sections/StatsGrid";
import { WhyChooseGrid } from "@/components/sections/WhyChooseGrid";
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

      <section className="section-padding bg-white">
        <div className="container-site grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading label="Our Mission" title="Empowering Homeownership" />
            <p className="text-slate-600 leading-relaxed">
              To simplify home financing for every Indian family by offering transparent advice, multi-bank comparison, and dedicated support from application to disbursement — without hidden fees.
            </p>
          </div>
          <div>
            <SectionHeading label="Our Vision" title="India's Most Trusted Loan Partner" />
            <p className="text-slate-600 leading-relaxed">
              To become the go-to mortgage advisory brand known for integrity, speed, and customer-first service — where every borrower feels confident and informed at every step.
            </p>
          </div>
        </div>
      </section>

      <WhyChooseGrid />

      <section className="section-padding bg-slate-50">
        <div className="container-site">
          <SectionHeading label="Our Impact" title="Numbers That Speak for Us" centered />
          <StatsGrid />
        </div>
      </section>

      <CtaBanner title="Ready to Talk to Our Mortgage Expert?" description="Connect instantly for premium application screening with absolute clarity." />
    </>
  );
}
