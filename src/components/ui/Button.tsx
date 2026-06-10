import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

const variants = {
  primary:
    "bg-brand text-white shadow-md hover:bg-brand-light hover:-translate-y-0.5 active:translate-y-0 active:bg-navy active:shadow-sm focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
  navy:
    "bg-navy text-white shadow-md hover:bg-navy-light hover:-translate-y-0.5 active:translate-y-0 active:bg-navy-light active:shadow-sm focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2",
  outline:
    "border-2 border-brand bg-transparent text-brand hover:bg-brand hover:text-white active:bg-navy active:border-navy focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
  whatsapp:
    "border-2 border-whatsapp bg-transparent text-whatsapp hover:bg-whatsapp/10 active:bg-whatsapp/15 focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2",
  whatsappSolid:
    "bg-whatsapp text-white shadow-md hover:bg-whatsapp-dark hover:-translate-y-0.5 active:translate-y-0 active:bg-[#128C7E] active:shadow-sm focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2",
  white:
    "border border-slate-200 bg-white text-navy shadow-card hover:-translate-y-0.5 hover:shadow-card-lg active:translate-y-0 active:shadow-sm focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-2",
  ghost: "bg-transparent text-slate-600 hover:text-brand active:text-navy",
};

const sizes = {
  sm: "px-4 py-2 text-xs sm:px-5 sm:py-2.5 sm:text-sm",
  md: "px-5 py-2.5 text-sm sm:px-7 sm:py-3.5 sm:text-[15px]",
  lg: "px-6 py-3 text-sm sm:px-9 sm:py-4 sm:text-base",
};

type Variant = keyof typeof variants;
type Size = keyof typeof sizes;

type SharedProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
    external?: undefined;
  };

type ButtonAsLink = SharedProps & {
  href: string;
  external?: boolean;
  "aria-label"?: string;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  external = false,
  "aria-label": ariaLabel,
  ...props
}: ButtonAsButton | ButtonAsLink) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    const isNativeLink = href.startsWith("tel:") || href.startsWith("mailto:");
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noreferrer" aria-label={ariaLabel}>
          {children}
        </a>
      );
    }
    if (isNativeLink) {
      return (
        <a href={href} className={classes} aria-label={ariaLabel}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = props as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
