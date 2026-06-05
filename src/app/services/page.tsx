import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
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
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PAGE_SERVICES.map((service) => (
              <Card key={service.slug} className="flex h-full flex-col">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-pale text-brand">
                  {service.icon}
                </div>
                <h2 className="font-heading text-xl font-semibold text-navy">{service.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{service.description}</p>
                <Button href="/contact" variant="outline" size="sm" className="mt-5 w-fit">
                  Apply Now →
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner title="Ready to Find the Best Loan for You?" description="Speak with our mortgage expert today — free consultation, zero processing fees." />
    </>
  );
}
