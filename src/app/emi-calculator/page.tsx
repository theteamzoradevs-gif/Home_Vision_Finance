import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ScrollToHash } from "@/components/layout/ScrollToHash";
import { EmiCalculatorWidget } from "@/features/emi/EmiCalculatorWidget";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "EMI Calculator",
  "Calculate your home loan EMI instantly. Adjust loan amount, interest rate, and tenure to plan your finances.",
  "/emi-calculator"
);

export default function EmiCalculatorPage() {
  return (
    <>
      <ScrollToHash />
      <PageHero
        label="Plan Your Loan"
        title="Home Loan EMI Calculator"
        description="Get instant estimates for monthly EMI, total interest, and total repayment. Make informed decisions before you apply."
      />
      <section className="section-padding section-gradient-light pt-5">
        <div className="container-site">
          <EmiCalculatorWidget showScheduleInline={true} />
        </div>
      </section>
      <CtaBanner
        title="Found Your Ideal EMI?"
        description="Apply now and let our experts find you the best rate across leading banks."
      />
    </>
  );
}
