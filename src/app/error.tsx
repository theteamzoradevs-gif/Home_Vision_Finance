"use client";

import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="container-site flex min-h-[60vh] flex-col items-center justify-center pt-[140px] text-center">
      <h1 className="font-heading text-2xl font-bold text-navy">Something went wrong</h1>
      <p className="mt-2 text-slate-600">{error.message || "Please try again."}</p>
      <Button onClick={reset} className="mt-6">
        Try again
      </Button>
    </div>
  );
}
