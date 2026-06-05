import { Button } from "@/components/ui/Button";
import { PHONE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type CtaBannerProps = {
  title?: string;
  description?: string;
  layout?: "centered" | "split";
};

export function CtaBanner({
  title = "Your Dream Home is One Step Away",
  description = "₹0 processing fees · Compare 5+ banks · Expert guidance at zero cost",
  layout = "centered",
}: CtaBannerProps) {
  const isSplit = layout === "split";

  return (
    <section className="border-t border-slate-200 bg-gradient-to-br from-white via-brand-pale/60 to-brand-pale px-4 py-16 sm:py-20">
      <div className={cn("container-site", isSplit ? "" : "text-center")}>
        {isSplit ? (
          <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl text-left">
              <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">{title}</h2>
              <p className="mt-3 text-base text-slate-600">{description}</p>
            </div>
            <Button href={`tel:${PHONE}`} variant="primary" size="lg" className="w-full shrink-0 sm:w-auto">
              Call Now — {PHONE}
            </Button>
          </div>
        ) : (
          <>
            <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">{title}</h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-slate-600">{description}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href={`tel:${PHONE}`} variant="primary" size="lg">
                Call Now — {PHONE}
              </Button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
