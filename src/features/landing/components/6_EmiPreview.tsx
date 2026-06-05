import { SectionHeading } from "@/components/ui/SectionHeading";
import { EmiCalculatorWidget } from "@/features/emi/EmiCalculatorWidget";

export function EmiPreview() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-site">
        <SectionHeading
          label="Plan Your Loan"
          title="EMI Calculator"
          description="Estimate your monthly EMI instantly. Adjust values to plan your finances better."
          centered
        />
        <EmiCalculatorWidget />
      </div>
    </section>
  );
}
