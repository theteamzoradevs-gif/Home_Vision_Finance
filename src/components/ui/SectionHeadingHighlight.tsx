"use client";

import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";
import { SectionHeading } from "@/components/ui/SectionHeading";

type SectionHeadingHighlightProps = {
  label?: string;
  title: string;
  highlightText: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
};

export function SectionHeadingHighlight({
  label,
  title,
  highlightText,
  description,
  centered = false,
  light = false,
  className,
}: SectionHeadingHighlightProps) {
  const { ref, isVisible } = useInView<HTMLHeadingElement>();
  const parts = title.split(highlightText);

  if (parts.length < 2) {
    return (
      <SectionHeading
        label={label}
        title={title}
        description={description}
        centered={centered}
        light={light}
        className={className}
      />
    );
  }

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
        ref={ref}
        className={cn(
          "font-heading text-3xl font-bold leading-tight sm:text-4xl",
          light ? "text-white" : "text-navy"
        )}
      >
        {parts[0]}
        <span className="relative inline-block">
          <span className="relative z-10">{highlightText}</span>
          <span
            className={cn(
              "absolute inset-0 -mx-1 rounded-md bg-brand/25 motion-reduce:scale-x-100",
              "origin-left scale-x-0 transition-transform duration-500 ease-out",
              isVisible && "scale-x-100"
            )}
            aria-hidden
          />
        </span>
        {parts[1]}
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
