import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROCESS_STEPS } from "@/features/landing/data/content";

export function ProcessSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-brand-pale/50 via-brand-pale/20 to-white">
      <div className="container-site">
        <SectionHeading label="How It Works" title="4 Simple Steps to Your Home Loan" centered />
        <div className="relative card-grid-equal gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div
            className="absolute left-[12%] right-[12%] top-9 hidden h-0.5 bg-gradient-to-r from-brand/30 to-brand-light/30 lg:block"
            aria-hidden
          />
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="relative z-10 flex h-full flex-col rounded-2xl border border-slate-100 bg-white/80 p-5 text-center shadow-card"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand to-navy text-xl font-bold text-white shadow-card">
                {step.step}
              </div>
              <h3 className="font-heading font-semibold text-navy">{step.title}</h3>
              <p className="mt-2 flex-1 text-sm text-slate-500">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/contact" size="lg">
            Start Your Application — It&apos;s Free
          </Button>
        </div>
      </div>
    </section>
  );
}
