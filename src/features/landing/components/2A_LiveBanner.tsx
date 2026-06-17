"use client";

import { useEffect, useMemo, useState } from "react";
import { DEFAULT_LIVE_BANNER, getActiveBanner, type LiveBannerData } from "@/lib/api/bannerService";
import Link from "next/link";

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
        backgroundImage: `linear-gradient(rgba(10, 22, 50, 0.62), rgba(10, 22, 50, 0.62)), url(${banner.backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : undefined;

  return (
    <section className="section-padding bg-white py-8">
      <div
        className="container-site relative isolate overflow-hidden rounded-[28px] border border-slate-200/70 px-5 py-8 text-white shadow-lg sm:px-8 sm:py-10 lg:min-h-[400px] lg:px-12 lg:py-12"
        style={sectionStyle}
      >
        {!banner.backgroundImage && <div className="absolute inset-0 bg-gradient-to-r from-[#0a1632] via-[#17366b] to-brand" aria-hidden />}
        <div className="absolute inset-0 bg-black/32" aria-hidden />

        <div className="relative z-10 grid min-h-[320px] items-center gap-8 py-2 lg:grid-cols-[1fr_280px]">
          <div className="max-w-2xl">
            {banner.mainHeading && (
              <h2 className="mt-4 font-heading text-3xl font-extrabold leading-[1.08] text-white sm:text-4xl lg:text-5xl">
                {banner.mainHeading}
              </h2>
            )}

            {banner.subHeading && <p className="mt-4 text-lg font-semibold text-white/95 sm:text-3xl">{banner.subHeading}</p>}

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center rounded-xl bg-[#b54a67] px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-[#a6425c]"
            >
              {banner.ctaText}
              <span className="ml-2 text-base leading-none">›</span>
            </Link>
          </div>

          {(banner.discountHighlight || banner.discountSubtext) && (
            <div className="mx-auto w-full max-w-[260px] rotate-[-4deg] rounded-[22px] border-4 border-white bg-[#d8a800] px-5 py-6 text-center text-[#07142e] shadow-[0_20px_45px_rgba(0,0,0,0.35)] lg:mx-0">
              {banner.discountHighlight && <p className="text-4xl font-black uppercase leading-none">{banner.discountHighlight}</p>}
              {banner.discountSubtext && <p className="mt-4 text-sm font-bold uppercase">{banner.discountSubtext}</p>}
              {banner.expiryText && <p className="mt-5 text-[10px] font-bold uppercase tracking-wide opacity-90">{banner.expiryText}</p>}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
