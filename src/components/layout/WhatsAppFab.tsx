"use client";

import { Icons } from "@/components/ui/icons";
import { WHATSAPP_HOME } from "@/lib/constants";

export function WhatsAppFab() {
  return (
    <div className="group fixed bottom-5 right-[3.75rem] z-[998] sm:bottom-6 sm:right-[4.25rem] lg:right-[4.75rem]">
      <span
        className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-lg bg-[#128C7E] px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:text-sm"
        aria-hidden
      >
        Chat Now
        <span className="absolute left-1/2 top-full -mt-1 -translate-x-1/2 border-4 border-transparent border-t-[#128C7E]" />
      </span>

      <a
        href={WHATSAPP_HOME}
        target="_blank"
        rel="noreferrer"
        className="btn-whatsapp flex h-11 w-11 items-center justify-center rounded-full shadow-lg transition hover:scale-105 sm:h-12 sm:w-12"
        aria-label="Chat on WhatsApp"
      >
        <span className="flex h-5 w-5 items-center justify-center sm:h-6 sm:w-6 [&>svg]:h-full [&>svg]:w-full">
          {Icons.wa}
        </span>
      </a>
    </div>
  );
}
