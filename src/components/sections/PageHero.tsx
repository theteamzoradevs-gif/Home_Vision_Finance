import { cn } from "@/lib/utils";

type PageHeroProps = {
  label?: string;
  title: string;
  description: string;
  className?: string;
};

export function PageHero({ label, title, description, className }: PageHeroProps) {
  return (
    <section
      className={cn(
        "border-b border-slate-200 bg-gradient-to-br from-slate-50 via-brand-pale/40 to-white pt-[140px] pb-16 sm:pb-20",
        className
      )}
    >
      <div className="container-site">
        {label && (
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-brand">{label}</p>
        )}
        <h1 className="font-heading text-3xl font-extrabold text-navy sm:text-4xl lg:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">{description}</p>
      </div>
    </section>
  );
}
