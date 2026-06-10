"use client";

import { Icons } from "@/components/ui/icons";
import { WHATSAPP_HOME } from "@/lib/constants";

export function WhatsAppFab() {
  return (
    <div
      className="whatsapp-fab-group fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] z-[998] sm:bottom-[max(1.5rem,env(safe-area-inset-bottom))] sm:right-[max(4.25rem,env(safe-area-inset-right))] lg:right-[max(4.75rem,env(safe-area-inset-right))]"
      aria-label="WhatsApp support"
    >
      <a
        href={WHATSAPP_HOME}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-fab-link group/link relative flex items-center gap-2.5 focus-visible:outline-none"
        aria-label="Chat on WhatsApp — Instant WhatsApp Reply"
      >
        <span
          className="whatsapp-fab-bubble pointer-events-none hidden rounded-full bg-white px-3.5 py-2 text-xs font-semibold text-navy shadow-[0_4px_20px_rgba(11,29,53,0.15)] ring-1 ring-slate-200/80 sm:inline-flex sm:text-sm"
          aria-hidden
        >
          Instant WhatsApp Reply
          <span className="absolute -right-1.5 top-1/2 h-3 w-3 -translate-y-1/2 rotate-45 border-b border-r border-slate-200/80 bg-white" />
        </span>

        <span className="relative flex shrink-0 items-center justify-center">
          <span
            className="whatsapp-fab-ping absolute inset-0 rounded-full bg-whatsapp/40"
            aria-hidden
          />
          <span
            className="whatsapp-fab-btn relative flex h-12 w-12 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_6px_24px_rgba(37,211,102,0.45)] transition-transform duration-200 hover:scale-110 active:scale-95 focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2 sm:h-[52px] sm:w-[52px]"
          >
            <span className="flex h-6 w-6 items-center justify-center [&>svg]:h-full [&>svg]:w-full">
              {Icons.wa}
            </span>
          </span>
        </span>
      </a>

      <span className="whatsapp-fab-bubble-mobile pointer-events-none absolute bottom-full right-0 mb-2 max-w-[calc(100vw-2rem)] rounded-lg bg-white px-2.5 py-1.5 text-[10px] font-semibold text-navy shadow-[0_4px_16px_rgba(11,29,53,0.12)] ring-1 ring-slate-200/80 sm:hidden">
        Instant WhatsApp Reply
      </span>
    </div>
  );
}
