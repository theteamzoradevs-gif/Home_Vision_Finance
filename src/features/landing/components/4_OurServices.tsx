import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icons } from "@/components/ui/icons";
import { LANDING_SERVICES } from "@/features/landing/data/services";

export function ServicesPreview() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-site">
        <SectionHeading
          label="Our Services"
          title="Home Loan Solutions for Every Need"
          description="Whether buying your first home or transferring an existing loan — we have the right solution."
          centered
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {LANDING_SERVICES.map((service) => (
            <Link key={service.slug} href="/services">
              <Card className="h-full cursor-pointer">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-pale text-brand transition group-hover:bg-brand group-hover:text-white">
                  {service.icon}
                </div>
                <h3 className="font-heading text-lg font-semibold text-navy">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{service.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                  Apply Now
                </span>
              </Card>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/services" className="text-sm font-semibold text-brand hover:underline">
            View all services →
          </Link>
        </div>
      </div>
    </section>
  );
}
