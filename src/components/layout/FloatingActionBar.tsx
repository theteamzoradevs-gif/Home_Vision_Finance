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
    shortLabel: "Missed Call",
    icon: Icons.phone,
    href: `tel:${PHONE}`,
  },
  {
    id: "apply-online",
    label: "Apply Online",
    shortLabel: "Apply",
    icon: Icons.doc,
    href: "/contact",
  },
] as const;

export function FloatingActionBar() {
  const [callbackOpen, setCallbackOpen] = useState(false);

  const actionItemClass = cn(
    "flex flex-col items-center gap-1 transition-colors duration-200 hover:bg-brand-pale hover:text-brand",
    "w-14 px-1.5 py-2.5 sm:w-[80px] sm:px-3 sm:py-3"
  );

  const labelClass = "text-center text-[9px] font-semibold leading-tight text-navy sm:text-[11px]";

  return (
    <>
      <aside
        className="fixed right-0 top-1/2 z-[997] flex -translate-y-1/2 flex-col gap-2 overflow-visible sm:gap-0 sm:overflow-hidden sm:rounded-l-2xl sm:border sm:border-r-0 sm:border-slate-200 sm:bg-white sm:shadow-card-lg"
        aria-label="Quick actions"
      >
        {ACTIONS.map((action, index) => (
          <Link
            key={action.id}
            href={action.href}
            className={cn(
              actionItemClass,
              "rounded-l-xl border border-r-0 border-slate-200 bg-white shadow-card sm:rounded-none sm:border-0 sm:shadow-none",
              index < ACTIONS.length && "sm:border-b sm:border-slate-100"
            )}
            title={action.label}
          >
            <span className="flex h-5 w-5 shrink-0 items-center justify-center text-brand [&>svg]:h-full [&>svg]:w-full">
              {action.icon}
            </span>
            <span className={labelClass}>
              <span className="sm:hidden">{action.shortLabel}</span>
              <span className="hidden sm:inline">{action.label}</span>
            </span>
          </Link>
        ))}

        <button
          type="button"
          onClick={() => setCallbackOpen(true)}
          className={cn(
            actionItemClass,
            "rounded-l-xl border border-r-0 border-slate-200 bg-white shadow-card sm:rounded-none sm:border-0 sm:shadow-none"
          )}
          title="Instant Callback"
        >
          <span className="flex h-5 w-5 shrink-0 items-center justify-center text-brand [&>svg]:h-full [&>svg]:w-full">
            {Icons.phoneCall}
          </span>
          <span className={labelClass}>
            <span className="sm:hidden">Callback</span>
            <span className="hidden sm:inline">Instant Callback</span>
          </span>
        </button>
      </aside>

      <CallbackModal open={callbackOpen} onClose={() => setCallbackOpen(false)} />
    </>
  );
}
