"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Icons } from "@/components/ui/icons";
import { LeadForm } from "@/features/forms/LeadForm";
import { useTypewriter } from "@/hooks/useTypewriter";
import { PHONE } from "@/lib/constants";
import { DEFAULT_HERO_DATA, type HeroSectionData } from "@/lib/api/heroService";

const TAGS = ["Fresh Purchase", "Resale", "Balance Transfer", "Plot Loan", "Construction"];

type HeroSectionProps = {
  initialData?: HeroSectionData;
};

export function HeroSection({ initialData = DEFAULT_HERO_DATA }: HeroSectionProps) {
  const heroData = initialData;
  const words = heroData.animatingTexts || [];
  const isLoaded = words.length > 0 || Boolean(heroData.mainHeading);
  const currentWord = useTypewriter(words.length > 0 ? words : [""]);

  return (
    <section className="relative flex min-h-0 w-full items-center overflow-x-hidden border-b border-slate-200 pb-8 pt-20 sm:min-h-[560px] sm:pb-16 sm:pt-28 lg:min-h-[600px]">
      {heroData.backgroundImage && (
        <div className="pointer-events-none absolute inset-0 z-0">
          <Image
            src={heroData.backgroundImage}
            alt="Vision Homes Finance"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      )}

      <div className="absolute inset-0 z-10 bg-gradient-to-r from-white/70 via-brand-pale/60 to-transparent" />
      <div className="absolute inset-0 z-10 overflow-hidden" aria-hidden="true">
        <div className="hero-blue-slide absolute inset-y-0 left-0 w-[200%]" />
      </div>
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-white via-transparent to-transparent opacity-90" />

      <div className="container-site relative z-20 grid w-full items-center gap-6 sm:gap-10 lg:grid-cols-[1fr_360px] lg:gap-16">
        <div>
          {heroData.badgeText && (
            <div className="mb-2.5 inline-flex items-center gap-1.5 rounded-lg bg-brand px-3 py-1.5 text-[11px] font-bold text-white shadow-sm sm:mb-4 sm:gap-2 sm:rounded-xl sm:px-5 sm:py-2.5 sm:text-sm [&_svg]:h-3.5 [&_svg]:w-3.5 sm:[&_svg]:h-4 sm:[&_svg]:w-4">
              {Icons.shield} {heroData.badgeText}
            </div>
          )}

          <h1 className="font-heading text-[1.3rem] font-extrabold leading-[1.12] text-navy sm:text-3xl sm:leading-tight lg:text-4xl">
            <span className="bg-gradient-to-r from-navy to-brand bg-clip-text text-transparent">
              {heroData.mainHeading}
            </span>
            {isLoaded && words.length > 0 && (
              <span className="mt-0.5 block text-[1.125rem] italic leading-[1.12] text-brand sm:mt-1 sm:text-2xl lg:text-3xl">
                {currentWord}
                <span className="ml-0.5 inline-block w-0.5 animate-pulse bg-brand align-middle" aria-hidden="true" />
              </span>
            )}
          </h1>

          <p className="mt-2 max-w-lg text-sm font-semibold leading-snug text-slate-700 sm:mt-4 sm:text-lg sm:leading-relaxed">
            {heroData.subHeading}
          </p>

          <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-6 sm:gap-2">
            {TAGS.map((tag) => (
              <span
                key={tag}
                className="cursor-pointer rounded-full bg-brand px-2.5 py-0.5 text-[10px] font-bold text-white shadow-[0_4px_10px_rgba(26,79,158,0.25)] transition-all duration-200 ease-in-out hover:bg-brand-light hover:shadow-[0_4px_12px_rgba(37,99,235,0.4)] sm:px-3 sm:py-1 sm:text-xs"
              >
                {tag}
              </span>
            ))}
          </div>

          {heroData.bulletPoints && heroData.bulletPoints.length > 0 && (
            <div className="mt-4 grid grid-cols-1 gap-2.5 sm:mt-8 sm:grid-cols-2 sm:gap-3.5">
              {heroData.bulletPoints.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 rounded-xl border border-slate-200/60 bg-white/95 p-2.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-md sm:gap-3 sm:p-3.5"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-pale text-brand sm:h-8 sm:w-8">
                    <span className="flex h-3 w-3 items-center justify-center [&>svg]:h-full [&>svg]:w-full sm:h-3.5 sm:w-3.5">
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
          )}

          <div className="mt-4 flex flex-wrap items-center gap-3 sm:mt-8">
            <Button href="/contact" size="sm" className="shadow-md">
              Get Free Consultation
            </Button>

            <div className="group/call relative inline-flex">
              <span className="pointer-events-none absolute bottom-full left-1/2 z-30 mb-2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-brand px-3 py-1.5 text-sm font-semibold text-white opacity-0 shadow-md transition-all duration-200 group-hover/call:translate-y-0 group-hover/call:opacity-100">
                Call Now
                <span className="absolute left-1/2 top-full -mt-1 -translate-x-1/2 border-4 border-transparent border-t-brand" />
              </span>

              <Button
                href={`tel:${PHONE}`}
                variant="white"
                aria-label="Call now"
                className="flex h-9 w-12 items-center justify-center rounded-full px-0 py-0 text-brand transition-transform duration-200 group-hover/call:scale-105 sm:h-10 sm:w-12"
              >
                <span className="text-brand [&_svg]:h-4 [&_svg]:w-4 [&_svg]:stroke-brand [&_svg]:text-brand sm:[&_svg]:h-5 sm:[&_svg]:w-5">
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
