import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number): string {
  return `₹ ${Math.round(amount).toLocaleString("en-IN")}`;
}

export function buildWhatsAppUrl(phone: string, message: string): string {
  return `https://wa.me/91${phone}?text=${encodeURIComponent(message)}`;
}

export function formatBlogMonthYear(isoString?: string): string | null {
  if (!isoString) return null;
  const parsed = new Date(isoString);
  if (Number.isNaN(parsed.getTime())) return isoString;
  return parsed.toLocaleDateString("en-IN", {
    month: "short",
    year: "numeric",
  });
}
