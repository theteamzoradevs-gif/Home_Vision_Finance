import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
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
      <PageHero
        label="Plan Your Loan"
        title="Home Loan EMI Calculator"
        description="Get instant estimates for monthly EMI, total interest, and total repayment. Make informed decisions before you apply."
      />
      <section className="pt-6 pb-20 bg-white">
        <div className="container-site">
          {/* DEDICATED PAGE: schedule dikhane ke liye true pass kiya */}
          <EmiCalculatorWidget showScheduleInline={true} />
        </div>
      </section>
      <CtaBanner title="Found Your Ideal EMI?" description="Apply now and let our experts find you the best rate across leading banks." />
    </>
  );
}