import { WHY_CHOOSE } from "@/features/landing/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyChooseGrid({ light = false }: { light?: boolean }) {
  return (
    <section className={light ? "bg-navy section-padding text-white" : "section-padding bg-white"}>
      <div className="container-site">
        <SectionHeading
          label="Why Choose Us"
          title="Why Families Trust Home Vision Finance"
          description="With systematic banking networks and a customer-first approach, we expedite your loan pipeline efficiently."
          centered
          light={light}
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE.map((item, i) => (
            <div
              key={item.title}
              className={
                light
                  ? "rounded-2xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-1 hover:bg-white/10"
                  : "rounded-2xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:shadow-card"
              }
            >
              <div className={light ? "mb-3 font-heading text-4xl font-extrabold text-white/10" : "mb-3 font-heading text-4xl font-extrabold text-slate-200"}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mb-2 font-heading text-lg font-semibold">{item.title}</h3>
              <p className={light ? "text-sm leading-relaxed text-white/60" : "text-sm leading-relaxed text-slate-500"}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
