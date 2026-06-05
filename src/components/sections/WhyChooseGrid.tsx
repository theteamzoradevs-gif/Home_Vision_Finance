import { ABOUT_WHY_STATS } from "@/features/landing/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export function WhyChooseGrid({ light = false }: { light?: boolean }) {
  return (
    <section className={light ? "section-padding bg-navy text-white" : "section-padding bg-white"}>
      <div className="container-site">
        <SectionHeading
          label="Why Choose Us"
          title="Why Families Trust Home Vision Finance"
          description="With systematic banking networks and a customer-first approach, we expedite your loan pipeline efficiently."
          centered
          light={light}
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ABOUT_WHY_STATS.map((item) => (
            <div
              key={item.label}
              className={cn(
                "cursor-pointer rounded-2xl border p-7 text-center transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-card-lg motion-reduce:transform-none motion-reduce:hover:scale-100",
                light
                  ? "border-white/10 bg-white/5 hover:border-brand-light/30 hover:bg-white/10"
                  : "border-slate-200 bg-white shadow-card hover:border-brand/30"
              )}
            >
              <div
                className={cn(
                  "font-heading text-4xl font-extrabold sm:text-5xl",
                  light ? "text-brand-light" : "text-brand"
                )}
              >
                {item.value}
              </div>
              <div className={cn("mt-2 text-sm font-semibold", light ? "text-white" : "text-navy")}>
                {item.label}
              </div>
              {item.description && (
                <p className={cn("mt-2 text-xs leading-relaxed", light ? "text-white/60" : "text-slate-500")}>
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
