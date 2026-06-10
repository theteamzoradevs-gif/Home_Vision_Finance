"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Icons } from "@/components/ui/icons";
import { LeadForm } from "@/features/forms/LeadForm";
import { useTypewriter } from "@/hooks/useTypewriter";
import { PHONE } from "@/lib/constants";
import { getHeroSection } from "@/lib/api/heroService";

// Static rahenge
const TAGS = ["Fresh Purchase", "Resale", "Balance Transfer", "Plot Loan", "Construction"];

export function HeroSection() {
  const [heroData, setHeroData] = useState<any>(null);

  useEffect(() => {
    getHeroSection()
      .then((res) => setHeroData(res.data || res))
      .catch((err) => console.error("Error fetching hero:", err));
  }, []);

  const words = heroData?.animatingTexts || ["Trusted Banking Partners"];
  const currentWord = useTypewriter(words);

  if (!heroData) return null;

  return (
    <section className="relative flex min-h-[480px] w-full items-center overflow-x-hidden border-b border-slate-200 pb-12 pt-24 sm:min-h-[560px] sm:pb-16 sm:pt-28 lg:min-h-[600px]">
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src={heroData.backgroundImage || "/hero-bg2.jpeg"}
          alt="Home Vision Finance"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 z-10 bg-gradient-to-r from-white/70 via-brand-pale/60 to-transparent" />
      <div className="absolute inset-0 z-10 overflow-hidden" aria-hidden>
        <div className="hero-blue-slide absolute inset-y-0 left-0 w-[200%]" />
      </div>
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-white via-transparent to-transparent opacity-90" />

      <div className="container-site relative z-20 grid w-full items-center gap-10 lg:grid-cols-[1fr_360px] lg:gap-16">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-2.5 text-sm font-bold text-white shadow-sm">
            {Icons.shield} {heroData.badgeText || "SBI Authorised Channel Partner"}
          </div>

          <h1 className="font-heading text-2xl font-extrabold leading-tight text-navy sm:text-3xl lg:text-4xl">
            <span className="block bg-gradient-to-r from-navy to-brand bg-clip-text text-transparent sm:inline">
              {heroData.mainHeading || "Fast Home Loan Approval with"}
            </span>
            <br />
            <span className="mt-1 block italic text-brand">
              {currentWord}
              <span className="ml-0.5 inline-block w-0.5 animate-pulse bg-brand align-middle" aria-hidden />
            </span>
          </h1>

          <p className="mt-4 max-w-lg text-base font-semibold leading-relaxed text-slate-700 sm:text-lg">
            {heroData.subHeading || "SBI is our authorised partner for priority support. We also compare offers across leading banks to get you the best fit."}
          </p>

          {/* Static Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {TAGS.map((tag) => (
              <span key={tag} className="cursor-pointer rounded-full bg-brand px-3 py-1 text-xs font-bold text-white shadow-[0_4px_10px_rgba(26,79,158,0.25)] transition-all duration-200 ease-in-out hover:bg-brand-light hover:shadow-[0_4px_12px_rgba(37,99,235,0.4)]">
                {tag}
              </span>
            ))}
          </div>

          {/* Dynamic Bullet Points (USPs) */}
          <div className="mt-8 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            {(heroData.bulletPoints || []).map((item: any, idx: number) => (
              <div key={idx} className="flex items-center gap-3 rounded-xl border border-slate-200/60 bg-white/95 p-3.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-md">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-pale text-brand">
                  <span className="flex h-3.5 w-3.5 items-center justify-center [&>svg]:h-full [&>svg]:w-full">
                    {Icons.check}
                  </span>
                </div>
                <div>
                  <h4 className="text-[13px] font-bold leading-tight text-navy">{item.title}</h4>
                  <p className="mt-0.5 text-[11px] text-slate-500">{item.subTitle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Static Buttons */}
          <div className="mt-8 flex flex-wrap items-end gap-3">
            <Button href="/contact" size="sm" className="shadow-md">
              Get Free Consultation
            </Button>

            <div className="group/call relative inline-block translate-y-0.5">
              <span className="pointer-events-none absolute bottom-full left-1/2 z-30 mb-2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-brand px-3 py-1.5 text-sm font-semibold text-white opacity-0 shadow-md transition-all duration-200 group-hover/call:translate-y-0 group-hover/call:opacity-100">
                Call Now
                <span className="absolute left-1/2 top-full -mt-1 -translate-x-1/2 border-4 border-transparent border-t-brand" />
              </span>

              <Button
                href={`tel:${PHONE}`}
                variant="white"
                aria-label="Call now"
                className="flex h-11 w-11 items-center justify-center rounded-full p-0 text-brand transition-transform duration-200 group-hover/call:scale-105"
              >
                <span className="text-brand [&_svg]:h-6 [&_svg]:w-6 [&_svg]:stroke-brand [&_svg]:text-brand">
                  {Icons.phone}
                </span>
              </Button>
            </div>
          </div>
        </div>

        <LeadForm variant="compact" subtitle="Expert callback in minutes" />
      </div>
    </section>
  );
}
// okay
