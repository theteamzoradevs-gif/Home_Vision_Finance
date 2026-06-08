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
    <section className="relative overflow-hidden border-t border-brand/20 bg-gradient-to-br from-brand/15 via-brand-pale to-brand/25 px-4 py-12 sm:py-16">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(26,79,158,0.18),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(37,99,235,0.12),transparent_50%)]"
        aria-hidden
      />
      <div className={cn("container-site relative", isSplit ? "" : "text-center")}>
        {isSplit ? (
          <div className="flex flex-col items-start gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl text-left">
              <h2 className="font-heading text-2xl font-bold text-navy sm:text-3xl">{title}</h2>
              <p className="mt-2 text-sm text-slate-600 sm:text-base">{description}</p>
            </div>
            <Button href={`tel:${PHONE}`} variant="primary" size="md" className="w-full shrink-0 sm:w-auto">
              Call Now
            </Button>
          </div>
        ) : (
          <>
            <h2 className="font-heading text-2xl font-bold text-navy sm:text-3xl">{title}</h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-slate-600 sm:text-base">{description}</p>
            <div className="mt-6 flex justify-center sm:mt-8">
              <Button href={`tel:${PHONE}`} variant="primary" size="md">
                Call Now
              </Button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
