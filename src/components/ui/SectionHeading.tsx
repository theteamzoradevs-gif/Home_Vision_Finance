import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
};

export function SectionHeading({
  label,
  title,
  description,
  centered = false,
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-10 sm:mb-12", centered && "text-center", className)}>
      {label && (
        <p
          className={cn(
            "mb-2 text-xs font-bold uppercase tracking-[0.2em]",
            light ? "text-accent-light" : "text-brand"
          )}
        >
          {label}
        </p>
      )}
      <h2
        className={cn(
          "font-heading text-3xl font-bold leading-tight sm:text-4xl",
          light ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-3 max-w-xl text-base leading-relaxed",
            centered && "mx-auto",
            light ? "text-white/70" : "text-slate-500"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
