"use client";

import { useState } from "react";
import Link from "next/link";
import { CallbackModal } from "@/components/layout/CallbackModal";
import { Icons } from "@/components/ui/icons";
import { PHONE } from "@/lib/constants";
import { cn } from "@/lib/utils";

const ACTIONS = [
  {
    id: "missed-call",
    label: "Give a Missed Call",
    icon: Icons.phone,
    href: `tel:${PHONE}`,
  },
  {
    id: "apply-online",
    label: "Apply Online",
    icon: Icons.doc,
    href: "/contact",
  },
] as const;

export function FloatingActionBar() {
  const [callbackOpen, setCallbackOpen] = useState(false);

  return (
    <>
      <aside
        className="fixed right-0 top-1/2 z-[997] hidden -translate-y-1/2 flex-col overflow-hidden rounded-l-2xl border border-r-0 border-slate-200 bg-white shadow-card-lg sm:flex"
        aria-label="Quick actions"
      >
        {ACTIONS.map((action, index) => (
          <Link
            key={action.id}
            href={action.href}
            className={cn(
              "flex w-[72px] flex-col items-center gap-1.5 px-2 py-3 transition-colors duration-200 hover:bg-brand-pale hover:text-brand sm:w-[80px] sm:px-3",
              index < ACTIONS.length && "border-b border-slate-100"
            )}
          >
            <span className="flex h-5 w-5 items-center justify-center text-brand [&>svg]:h-full [&>svg]:w-full">
              {action.icon}
            </span>
            <span className="text-center text-[10px] font-semibold leading-tight text-navy sm:text-[11px]">
              {action.label}
            </span>
          </Link>
        ))}

        <button
          type="button"
          onClick={() => {
            // #region agent log
            fetch("http://127.0.0.1:7773/ingest/70187406-a2fe-413e-a354-c324290141b0", {
              method: "POST",
              headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "f9f9bf" },
              body: JSON.stringify({
                sessionId: "f9f9bf",
                runId: "post-fix",
                hypothesisId: "D",
                location: "FloatingActionBar.tsx:onClick",
                message: "Instant Callback clicked",
                data: { scrollY: window.scrollY, activeElement: document.activeElement?.tagName },
                timestamp: Date.now(),
              }),
            }).catch(() => {});
            // #endregion
            setCallbackOpen(true);
          }}
          className="flex w-[72px] flex-col items-center gap-1.5 px-2 py-3 transition-colors duration-200 hover:bg-brand-pale hover:text-brand sm:w-[80px] sm:px-3"
        >
          <span className="flex h-5 w-5 items-center justify-center text-brand [&>svg]:h-full [&>svg]:w-full">
            {Icons.phoneCall}
          </span>
          <span className="text-center text-[10px] font-semibold leading-tight text-navy sm:text-[11px]">
            Instant Callback
          </span>
        </button>
      </aside>

      <CallbackModal open={callbackOpen} onClose={() => setCallbackOpen(false)} />
    </>
  );
}
