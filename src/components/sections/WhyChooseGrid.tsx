import { WHY_CHOOSE_ITEMS } from "@/features/landing/data/content";
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
        
        {/* Changed to lg:grid-cols-3 to perfectly match the 3x2 grid in image_a5d485.png */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE_ITEMS.map((item) => (
            <div
              key={item.value}
              className={cn(
                // text-left alignment matches image_a5d485.png
                "cursor-pointer rounded-2xl border p-7 text-left transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-card-lg motion-reduce:transform-none motion-reduce:hover:scale-100",
                light
                  ? "border-white/10 bg-white/5 hover:border-brand-light/30 hover:bg-white/10"
                  : "border-slate-200 bg-white shadow-card hover:border-brand/30"
              )}
            >
              {/* Card Number (01, 02, etc.) */}
              <div
                className={cn(
                  "font-heading text-4xl font-extrabold sm:text-5xl opacity-20", // Added opacity to match the subtle number style
                  light ? "text-brand-light" : "text-brand"
                )}
              >
                {item.value}
              </div>
              
              {/* Title */}
              <div className={cn("mt-4 text-base font-bold", light ? "text-white" : "text-navy")}>
                {item.label}
              </div>
              
              {/* Description */}
              {item.description && (
                <p className={cn("mt-2 text-sm leading-relaxed", light ? "text-white/70" : "text-slate-500")}>
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