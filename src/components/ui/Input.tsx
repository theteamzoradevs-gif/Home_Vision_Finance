import { useId } from "react";
import { cn } from "@/lib/utils";
import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  compact?: boolean;
  containerClassName?: string;
};

export function Input({ label, error, compact = false, containerClassName, className, id, ...props }: InputProps) {
  const generatedId = useId();
  const inputId = id ?? `${generatedId}-${label.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div className={cn(containerClassName ?? (compact ? "mb-2.5" : "mb-4"))}>
      <label
        htmlFor={inputId}
        className={cn(
          "mb-1.5 block font-semibold uppercase tracking-wide text-slate-600",
          compact ? "text-[10px]" : "text-xs"
        )}
      >
        {label}
      </label>
      <input
        id={inputId}
        className={cn(
          "w-full rounded-xl border border-slate-200 bg-slate-50 text-slate-800 outline-none transition focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/15 active:border-brand",
          compact
            ? "min-h-[38px] px-3 py-2 text-sm"
            : "min-h-[48px] px-4 py-3 text-base sm:text-[15px]",
          error && "border-red-500 focus:border-red-500 focus:ring-red-500/15",
          className
        )}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : undefined}
        {...props}
      />
      {error && (
        <p id={`${inputId}-error`} className="mt-1.5 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
