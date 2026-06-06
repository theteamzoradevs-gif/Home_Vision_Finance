import { useId } from "react";
import { cn } from "@/lib/utils";
import type { TextareaHTMLAttributes } from "react";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
};

export function Textarea({ label, error, className, id, ...props }: TextareaProps) {
  const generatedId = useId();
  const textareaId = id ?? `${generatedId}-${label.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div className="mb-4">
      <label htmlFor={textareaId} className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-600">
        {label}
      </label>
      <textarea
        id={textareaId}
        rows={4}
        className={cn(
          "min-h-[120px] w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-800 outline-none transition focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/15 active:border-brand sm:text-[15px]",
          error && "border-red-500 focus:border-red-500 focus:ring-red-500/15",
          className
        )}
        aria-invalid={!!error}
        aria-describedby={error ? `${textareaId}-error` : undefined}
        {...props}
      />
      {error && (
        <p id={`${textareaId}-error`} className="mt-1.5 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
