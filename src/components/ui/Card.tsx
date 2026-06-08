import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  highlight?: boolean;
  hover?: boolean;
  equalHeight?: boolean;
};

export function Card({
  children,
  className,
  highlight,
  hover = true,
  equalHeight = false,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "card-premium cursor-pointer rounded-2xl border border-slate-200/80 bg-white p-7 shadow-card ring-1 ring-brand/[0.08] transition-all duration-300 motion-reduce:transform-none",
        hover &&
          "hover:-translate-y-1 hover:border-brand/30 hover:bg-brand-pale hover:shadow-card-lg hover:ring-brand/15 motion-reduce:hover:translate-y-0",
        highlight &&
          "border-brand/50 bg-gradient-to-br from-brand-pale/90 via-white to-brand-pale/50 ring-brand/15",
        equalHeight && "flex h-full flex-col",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
