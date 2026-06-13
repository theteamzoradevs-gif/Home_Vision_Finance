import { cn } from "@/lib/utils";

type PageHeroProps = {
  label?: string;
  title: string;
  description: string;
  className?: string;
  /** Blog layout: title → subtitle (label) → description */
  layout?: "default" | "blog";
};

export function PageHero({ label, title, description, className, layout = "default" }: PageHeroProps) {
  const isBlog = layout === "blog";

  return (
    <section
      className={cn(
        "border-b border-slate-200 bg-gradient-to-br from-slate-50 via-brand-pale/50 to-white pb-5 pt-24 text-left sm:pb-6 sm:pt-28",
        className
      )}
    >
      <div className="container-site w-full text-left">
        {isBlog ? (
          <>
            <h1 className="text-left font-heading text-2xl font-extrabold text-navy sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            {label && (
              <p className="mt-3 text-left text-sm font-semibold uppercase tracking-wide text-brand sm:text-base">
                {label}
              </p>
            )}
            <p className="mt-4 max-w-2xl text-left text-base leading-relaxed text-slate-600 sm:text-lg">
              {description}
            </p>
          </>
        ) : (
          <>
            {label && (
              <p className="mb-2 text-left text-xs font-bold uppercase tracking-[0.2em] text-brand">{label}</p>
            )}
            <h1 className="text-left font-heading text-2xl font-extrabold text-navy sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            <p className="mt-4 max-w-2xl text-left text-base leading-relaxed text-slate-600 sm:text-lg">
              {description}
            </p>
          </>
        )}
      </div>
    </section>
  );
}
