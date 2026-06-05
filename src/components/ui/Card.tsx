import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  highlight?: boolean;
  hover?: boolean;
};

export function Card({ children, className, highlight, hover = true, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-200",
        hover && "hover:-translate-y-1 hover:border-brand/30 hover:shadow-card-lg",
        highlight && "border-accent/40 bg-gradient-to-br from-accent-pale to-white",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
