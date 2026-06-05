"use client";

import { Button } from "@/components/ui/Button";
import { Icons } from "@/components/ui/icons";
import { LeadForm } from "@/features/forms/LeadForm";
import { useTypewriter } from "@/hooks/useTypewriter";
import { PHONE } from "@/lib/constants";

const WORDS = ["Trusted Banking Partners", "SBI Authorised Partners", "₹0 Processing Fees"];

const HERO_USPS = [
  { text: "₹0 Processing Fees — Save Thousands", bold: true },
  { text: "Processing Support & Quick Eligibility", bold: false },
  { text: "Builder & Broker Coordination", bold: false },
  { text: "Rates starting from 8.50%* p.a.", bold: false },
];

const TAGS = ["Fresh Purchase", "Resale", "Balance Transfer", "Plot Loan", "Construction"];

export function HeroSection() {
  const currentWord = useTypewriter(WORDS);

  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-slate-50 via-brand-pale/50 to-white pt-[140px] pb-16 sm:pb-20">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-brand/5" />
      <div className="container-site relative grid items-center gap-12 lg:grid-cols-[1fr_420px] lg:gap-16">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand-pale px-4 py-2 text-sm font-bold text-brand">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
            SBI Authorised Channel Partner — Verified
          </div>

          <h1 className="font-heading text-3xl font-extrabold leading-tight text-navy sm:text-4xl lg:text-5xl">
            <span className="bg-gradient-to-r from-navy to-brand bg-clip-text text-transparent">
              Fast Home Loan Approval with
            </span>
            <br />
            <span className="italic text-brand">
              {currentWord}
              <span className="ml-0.5 inline-block w-0.5 animate-pulse bg-brand align-middle" aria-hidden />
            </span>
          </h1>

          <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg">
            SBI is our authorised partner for priority support. We also compare offers across leading banks to get you the best fit.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {TAGS.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-sm font-semibold text-slate-700 transition hover:border-brand hover:bg-brand-pale hover:text-brand"
              >
                {tag}
              </span>
            ))}
          </div>

          <ul className="mt-6 space-y-2.5">
            {HERO_USPS.map((item) => (
              <li key={item.text} className="flex items-center gap-2.5 text-[15px] text-slate-700">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent-pale text-accent">
                  {Icons.check}
                </span>
                {item.bold ? <strong className="text-accent">{item.text}</strong> : <span>{item.text}</span>}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact" variant="green" size="lg">
              Get Free Consultation →
            </Button>
            <Button href={`tel:${PHONE}`} variant="outline" size="lg">
              {Icons.phone}
            </Button>
          </div>
        </div>

        <LeadForm />
      </div>
    </section>
  );
}
