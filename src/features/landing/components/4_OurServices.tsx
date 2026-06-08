import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LANDING_SERVICES } from "@/features/landing/data/services";

export function ServicesPreview() {
  return (
    <section className="section-padding section-gradient-neutral">
      <div className="container-site">
        <SectionHeading
          label="Our Services"
          title="Home Loan Solutions for Every Need"
          description="Whether buying your first home or transferring an existing loan — we have the right solution."
          centered
        />
        <div className="card-grid-equal grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
          {LANDING_SERVICES.map((service) => (
            <Card key={service.slug} equalHeight className="flex h-full flex-col p-4 sm:p-7">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-pale/80 text-brand ring-1 ring-brand/10 sm:mb-4 sm:h-12 sm:w-12">
                {service.icon}
              </div>
              <h3 className="font-heading text-sm font-semibold text-navy sm:text-lg">{service.title}</h3>
              <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-500 sm:text-sm">{service.description}</p>
              <Button
                href="/contact"
                variant="white"
                size="sm"
                className="mt-4 w-fit self-start px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm"
              >
                Apply Now
              </Button>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center sm:mt-10">
          <Button href="/services" size="md">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}
