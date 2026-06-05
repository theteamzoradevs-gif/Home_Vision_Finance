"use client";

import { Button } from "@/components/ui/Button";
import { Icons } from "@/components/ui/icons";
import { PHONE } from "@/lib/constants";

export function PromoRibbon() {
  return (
    <div className="fixed left-0 right-0 top-0 z-[1001] border-b border-slate-200 bg-gradient-to-r from-navy to-navy-light px-4 py-3 text-white">
      <div className="container-site flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-sm font-bold sm:text-base">
          <span className="text-accent-light">{Icons.percent}</span>
          <span>
            <strong className="text-accent-light">₹0 Processing Fees</strong> on all home loans
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button href="/contact" variant="green" size="sm">
            Apply Now {Icons.arrow}
          </Button>
          <Button href={`tel:${PHONE}`} variant="outline" size="sm" className="border-white/40 text-white hover:border-white hover:bg-white/10 hover:text-white">
            {Icons.phone} Call Now
          </Button>
        </div>
      </div>
    </div>
  );
}
