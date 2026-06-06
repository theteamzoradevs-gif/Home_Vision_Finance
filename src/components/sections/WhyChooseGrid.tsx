import { WHY_CHOOSE_ITEMS } from "@/features/landing/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export function WhyChooseGrid({ light = false }: { light?: boolean }) {
  return (
    <section
      className={cn(
        "section-padding",
        light ? "bg-navy text-white" : "section-gradient-light"
      )}
    >
      <div className="container-site">
        <SectionHeading
          label="Why Choose Us"
          title="Why Families Trust Home Vision Finance"
          description="With systematic banking networks and a customer-first approach, we expedite your loan pipeline efficiently."
          centered
          light={light}
        />

        <div className="card-grid-equal gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE_ITEMS.map((item) => (
            <div
              key={item.value}
              className={cn(
                "flex h-full flex-col rounded-2xl border p-7 text-left transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-lg motion-reduce:transform-none",
                light
                  ? "border-white/10 bg-white/5 hover:border-brand-light/30 hover:bg-white/10"
                  : "border-slate-200 bg-white text-navy shadow-card hover:border-brand/30"
              )}
            >
              <div
                className={cn(
                  "font-heading text-4xl font-extrabold opacity-20 sm:text-5xl",
                  light ? "text-brand-light" : "text-brand"
                )}
              >
                {item.value}
              </div>

              <div className={cn("mt-4 text-base font-bold", light ? "text-white" : "text-navy")}>
                {item.label}
              </div>

              {item.description && (
                <p className={cn("mt-2 flex-1 text-sm leading-relaxed", light ? "text-white/70" : "text-slate-500")}>
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
