import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROCESS_STEPS } from "@/features/landing/data/content";

export function ProcessSection() {
  return (
    <section className="py-8 md:py-10 bg-white">
      <div className="container-site">
        <SectionHeading
          label="How It Works"
          title="4 Simple Steps to Your Home Loan"
          centered
        />

        <div className="relative mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div
            className="absolute left-[12%] right-[12%] top-7 hidden h-0.5 bg-gradient-to-r from-brand/30 to-brand-light/30 lg:block"
            aria-hidden
          />

          {PROCESS_STEPS.map((step) => (
            <div key={step.step} className="relative z-10 text-center">
              <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-brand text-lg font-bold text-white shadow-card sm:h-14 sm:w-14 sm:text-xl">
                {step.step}
              </div>

              <h3 className="font-heading text-sm font-semibold text-navy sm:text-base">
                {step.title}
              </h3>

              <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 text-center">
          <Button
            href="/contact"
            size="md"
            className="sm:px-8 sm:py-3.5"
          >
            Get Your Free Application
          </Button>
        </div>
      </div>
    </section>
  );
}