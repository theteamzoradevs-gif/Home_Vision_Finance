import Image from "next/image";
import Link from "next/link";
import { BRAND } from "@/lib/constants";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  height?: number;
  className?: string;
  priority?: boolean;
};

export function BrandLogo({ height = 40, className, priority = false }: BrandLogoProps) {
  return (
    <Link
      href="/"
      className={cn("inline-flex shrink-0 items-center", className)}
      aria-label={`${BRAND} — Home`}
    >
      <Image
        src="/logo_HVF.png"
        alt={BRAND}
        width={Math.round(height * 3.2)}
        height={height}
        className="h-auto w-auto max-w-[240px] object-contain object-left sm:max-w-[280px]"
        style={{ maxHeight: `${height}px` }}
        priority={priority}
      />
    </Link>
  );
}
