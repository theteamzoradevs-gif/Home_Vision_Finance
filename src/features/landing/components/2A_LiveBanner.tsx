"use client";

import { useEffect, useMemo, useState } from "react";
import { DEFAULT_LIVE_BANNER, getActiveBanner, type LiveBannerData } from "@/lib/api/bannerService";
import Link from "next/link";

function splitDiscountHighlight(text: string) {
  const trimmed = text.trim();
  const match = trimmed.match(/^(.+?)\s+(OFF)$/i);
  if (match) return { primary: match[1].trim().toUpperCase(), secondary: "OFF" };
  return { primary: trimmed.toUpperCase(), secondary: null };
}

function OfferCard({ banner }: { banner: LiveBannerData }) {
  const { primary, secondary } = splitDiscountHighlight(banner.discountHighlight);

  return (
    <div className="relative mx-auto w-full max-w-[270px] shrink-0 pt-3 lg:mx-0 lg:mr-12">
      {banner.badgeText && (
        <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2">
          <span className="inline-block whitespace-nowrap rounded-md bg-[#07142e] px-2.5 py-0.5 text-[8px] font-black uppercase tracking-[0.12em] text-[#e8b800] sm:text-[9px]">
            {banner.badgeText}
          </span>
        </div>
      )}

      <div className="rotate-[-3.5deg] rounded-[20px] border-[4px] border-white bg-[#e8b800] px-5 pb-5 pt-6 text-center text-[#07142e] shadow-[0_18px_42px_rgba(0,0,0,0.32)]">
        {banner.discountHighlight && (
          <div className="leading-[0.95]">
            <p className="text-[26px] font-black uppercase tracking-tight sm:text-[28px]" style={{ fontWeight: 900 }}>
              {primary}
            </p>
            {secondary && (
              <p className="text-[26px] font-black uppercase tracking-tight sm:text-[28px]" style={{ fontWeight: 900 }}>
                {secondary}
              </p>
            )}
          </div>
        )}

        {banner.discountSubtext && (
          <p className="mt-3 text-[11px] font-bold uppercase leading-snug tracking-wide sm:text-xs">
            {banner.discountSubtext}
          </p>
        )}

        {banner.expiryText && (
          <>
            <div className="mx-auto my-3.5 h-px w-[82%] bg-[#07142e]/55" />
            <p className="px-1 text-[7px] font-semibold uppercase italic leading-tight tracking-wide text-[#07142e]/90 sm:text-[8px]">
              {banner.expiryText}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export function LiveBanner() {
  const [banner, setBanner] = useState<LiveBannerData>(DEFAULT_LIVE_BANNER);

  useEffect(() => {
    getActiveBanner().then(setBanner).catch(() => {
      /* hidden by default when fetch fails */
    });
  }, []);

  const shouldShow = useMemo(() => {
    if (!banner.isVisible) return false;
    return Boolean(banner.mainHeading || banner.backgroundImage || banner.discountHighlight);
  }, [banner]);

  if (!shouldShow) return null;

  const sectionStyle = banner.backgroundImage
    ? {
        backgroundImage: `linear-gradient(rgba(10, 22, 50, 0.38), rgba(10, 22, 50, 0.38)), url(${banner.backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : undefined;

  return (
    <section className="section-padding bg-white py-8">
      <div
        className="container-site relative isolate overflow-hidden rounded-[28px] border border-slate-200/70 px-5 text-white shadow-lg sm:px-8 lg:min-h-[440px] lg:px-12"
        style={sectionStyle}
      >
        {!banner.backgroundImage && <div className="absolute inset-0 bg-gradient-to-r from-[#0a1632] via-[#17366b] to-brand" aria-hidden />}
        <div className="absolute inset-0 bg-black/22" aria-hidden />

        <div className="relative z-10 flex min-h-[360px] flex-col items-stretch justify-center gap-8 py-10 sm:py-12 lg:min-h-[440px] lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:py-14">
          <div className="max-w-2xl">
            {banner.mainHeading && (
              <h2 className="font-heading text-3xl font-extrabold leading-[1.08] text-white sm:text-4xl lg:text-5xl">
                {banner.mainHeading}
              </h2>
            )}

            {banner.subHeading && (
              <p className="mt-5 text-sm font-semibold text-white/95 sm:text-lg lg:text-xl">{banner.subHeading}</p>
            )}

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center rounded-xl bg-[#b54a67] px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-[#a6425c]"
            >
              {banner.ctaText}
              <span className="ml-2 text-base leading-none">›</span>
            </Link>
          </div>

          {(banner.discountHighlight || banner.discountSubtext) && <OfferCard banner={banner} />}
        </div>
      </div>
    </section>
  );
}
