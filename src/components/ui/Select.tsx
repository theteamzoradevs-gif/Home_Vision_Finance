import { useId } from "react";
import { cn } from "@/lib/utils";
import type { SelectHTMLAttributes } from "react";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  error?: string;
  options: { value: string; label: string }[];
  compact?: boolean;
};

export function Select({ label, error, options, compact = false, className, id, ...props }: SelectProps) {
  const generatedId = useId();
  const selectId = id ?? `${generatedId}-${label.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div className={cn("mb-4", compact && "mb-2.5")}>
      <label
        htmlFor={selectId}
        className={cn(
          "mb-1.5 block font-semibold uppercase tracking-wide text-slate-600",
          compact ? "text-[10px]" : "text-xs"
        )}
      >
        {label}
      </label>
      <select
        id={selectId}
        className={cn(
          "w-full rounded-xl border border-slate-200 bg-slate-50 text-slate-800 outline-none transition focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/15 active:border-brand",
          compact
            ? "min-h-[38px] px-3 py-2 text-sm"
            : "min-h-[48px] px-4 py-3 text-base sm:text-[15px]",
          error && "border-red-500 focus:border-red-500 focus:ring-red-500/15",
          className
        )}
        aria-invalid={!!error}
        aria-describedby={error ? `${selectId}-error` : undefined}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && (
        <p id={`${selectId}-error`} className="mt-1.5 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
