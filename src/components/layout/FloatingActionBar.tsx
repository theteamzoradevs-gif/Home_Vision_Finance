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

function CallbackIcon() {
  return (
    <svg width={20} height={20} fill="none" viewBox="0 0 24 24" aria-hidden>
      <path
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
      <path
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 3h4v4M17 1v6"
      />
    </svg>
  );
}

export function FloatingActionBar() {
  const [callbackOpen, setCallbackOpen] = useState(false);

  return (
    <>
      <aside
        className="fixed right-0 top-1/2 z-[997] flex -translate-y-1/2 flex-col overflow-hidden rounded-l-2xl border border-r-0 border-slate-200 bg-white shadow-card-lg"
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
          onClick={() => setCallbackOpen(true)}
          className="flex w-[72px] flex-col items-center gap-1.5 px-2 py-3 transition-colors duration-200 hover:bg-brand-pale hover:text-brand sm:w-[80px] sm:px-3"
        >
          <span className="flex h-5 w-5 items-center justify-center text-brand">
            <CallbackIcon />
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
