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
        "cursor-pointer rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 motion-reduce:transform-none",
        hover &&
          "hover:-translate-y-1.5 hover:scale-[1.02] hover:border-brand/30 hover:shadow-card-lg motion-reduce:hover:scale-100",
        highlight && "border-brand/40 bg-gradient-to-br from-brand-pale to-white",
        equalHeight && "h-full flex flex-col",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
