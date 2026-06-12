import { Card } from "@/components/ui/Card";
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
          title="Why Families Trust Vision Home Finance"
          description="With systematic banking networks and a customer-first approach, we expedite your loan pipeline efficiently."
          centered
          light={light}
        />

        <div className="card-grid-equal grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
          {WHY_CHOOSE_ITEMS.map((item) => (
            <Card
              key={item.value}
              equalHeight
              highlight={false}
              className={cn(
                "flex h-full min-h-[180px] flex-col p-4 sm:min-h-[220px] sm:p-7",
                light &&
                  "border-white/10 bg-white/5 text-white ring-white/10 hover:border-brand-light/30 hover:bg-white/10 hover:ring-brand-light/20"
              )}
            >
              <div
                className={cn(
                  "font-heading text-5xl font-extrabold leading-none sm:text-4xl",
                  light ? "text-white" : "text-navy"
                )}
              >
                {item.value}
              </div>

              <div
                className={cn(
                  "mt-3 text-sm font-bold leading-tight sm:mt-4 sm:text-base",
                  light ? "text-white" : "text-navy"
                )}
              >
                {item.label}
              </div>

              {item.description && (
                <p
                  className={cn(
                    "mt-2 line-clamp-2 max-w-full flex-1 text-xs leading-snug sm:text-sm lg:line-clamp-none lg:max-w-none",
                    light ? "text-white/70" : "text-slate-500"
                  )}
                >
                  {item.description}
                </p>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
