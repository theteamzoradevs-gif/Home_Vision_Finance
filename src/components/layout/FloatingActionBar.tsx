"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  const [callbackOpen, setCallbackOpen] = useState(false);

  // Refs to manage timers and first-load detection
  const initialTimerRef = useRef<number | null>(null);
  const navTimerRef = useRef<number | null>(null);
  const isInitialLoadRef = useRef(true);

  // Show popup 10s after the initial page load
  useEffect(() => {
    initialTimerRef.current = window.setTimeout(() => {
      setCallbackOpen(true);
      // mark that initial load popup has been scheduled/shown
      isInitialLoadRef.current = false;
    }, 10000);

    return () => {
      if (initialTimerRef.current) window.clearTimeout(initialTimerRef.current);
    };
  }, []);

  // On every pathname change after initial load, show popup after 30s
  useEffect(() => {
    // ignore the very first pathname effect if initial load hasn't completed
    if (isInitialLoadRef.current) {
      isInitialLoadRef.current = false;
      return;
    }

    if (navTimerRef.current) window.clearTimeout(navTimerRef.current);
    navTimerRef.current = window.setTimeout(() => {
      setCallbackOpen(true);
    }, 30000);

    return () => {
      if (navTimerRef.current) {
        window.clearTimeout(navTimerRef.current);
        navTimerRef.current = null;
      }
    };
  }, [pathname]);

  const actionItemClass = cn(
    "flex min-h-[44px] flex-col items-center justify-center transition-colors duration-200 hover:bg-brand-pale hover:text-brand",
    "w-[54px] gap-0.5 px-1 py-2",
    "sm:w-[60px] sm:gap-0.5 sm:px-1.5 sm:py-2.5",
    "lg:w-[68px] lg:gap-0 lg:px-2 lg:py-2"
  );

  const labelClass = cn(
    "text-center font-semibold text-navy",
    "text-[8px] leading-tight sm:text-[9px]",
    "lg:text-[10px] lg:leading-[1.1]"
  );

  const iconClass = "flex h-4 w-4 shrink-0 items-center justify-center text-brand sm:h-[18px] sm:w-[18px] [&>svg]:h-full [&>svg]:w-full";

  return (
    <>
      <aside
        className="fixed right-0 top-1/2 z-[997] flex -translate-y-1/2 flex-col overflow-hidden rounded-l-xl border border-r-0 border-slate-200 bg-white shadow-card-lg lg:rounded-l-2xl"
        aria-label="Quick actions"
      >
        {ACTIONS.map((action, index) => (
          <Link
            key={action.id}
            href={action.href}
            className={cn(actionItemClass, index < ACTIONS.length && "border-b border-slate-100")}
            title={action.label}
          >
            <span className={iconClass}>{action.icon}</span>
            <span className={labelClass}>
              <span className="lg:hidden">{action.shortLabel}</span>
              <span className="hidden lg:inline">{action.label}</span>
            </span>
          </Link>
        ))}

        <button
          type="button"
          onClick={() => setCallbackOpen(true)}
          className={actionItemClass}
          title="Instant Callback"
        >
          <span className={iconClass}>{Icons.phoneCall}</span>
          <span className={labelClass}>
            <span className="lg:hidden">Callback</span>
            <span className="hidden lg:inline">Instant Callback</span>
          </span>
        </button>
      </aside>

      <CallbackModal open={callbackOpen} onClose={() => setCallbackOpen(false)} />
    </>
  );
}
