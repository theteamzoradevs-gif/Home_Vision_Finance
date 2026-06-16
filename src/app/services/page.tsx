import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ServiceDetailBlock } from "@/features/services/ServiceDetailBlock";
import { PAGE_SERVICES } from "@/features/landing/data/services";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Services",
  "Explore home loan, balance transfer, LAP, construction, plot, and business loan services with expert guidance.",
  "/services"
);

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Our Services"
        title="Complete Home Loan Solutions"
        description="From fresh purchases to balance transfers — we compare top banks and deliver ₹0 processing fee support end to end."
      />
      
      {/* section-padding ke sath pt-0 add kiya hai top margin/padding zero karne ke liye */}
      <section className="bg-white pb-5 pt-5 sm:pb-8">
        <div className="container-site space-y-16 sm:space-y-20">
          {PAGE_SERVICES.map((service, i) => (
            <ServiceDetailBlock key={service.slug} service={service} reverse={i % 2 === 1} />
          ))}
        </div>
      </section>

      <CtaBanner
        layout="split"
        title="Ready to Find the Best Loan for You?"
        description="Speak with our mortgage expert today — free consultation, zero processing fees."
      />
    </>
  );
}