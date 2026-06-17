"use client";

import { useEffect, useMemo, useState } from "react";
import { DEFAULT_LIVE_BANNER, getActiveBanner, type LiveBannerData } from "@/lib/api/bannerService";

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
    <section className="section-padding bg-white py-10 sm:py-12">
      <div
        className="container-site relative overflow-hidden rounded-3xl border border-slate-200 px-6 py-10 text-white shadow-xl sm:px-10"
        style={sectionStyle}
      >
        {!banner.backgroundImage && (
          <div className="absolute inset-0 bg-gradient-to-r from-brand to-brand-light" aria-hidden />
        )}

        <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            {banner.badgeText && (
              <span className="inline-flex rounded-full border border-white/40 bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                {banner.badgeText}
              </span>
            )}

            {banner.mainHeading && (
              <h2 className="mt-3 font-heading text-2xl font-extrabold leading-tight sm:text-3xl">
                {banner.mainHeading}
              </h2>
            )}

            {banner.subHeading && (
              <p className="mt-3 max-w-2xl text-sm text-white/90 sm:text-base">{banner.subHeading}</p>
            )}

            {banner.expiryText && <p className="mt-3 text-xs font-medium uppercase text-white/80">{banner.expiryText}</p>}
          </div>

          {(banner.discountHighlight || banner.discountSubtext) && (
            <div className="w-full max-w-sm rounded-2xl border border-white/35 bg-white/15 p-5 backdrop-blur-sm lg:w-auto">
              {banner.discountHighlight && <p className="text-2xl font-extrabold leading-tight">{banner.discountHighlight}</p>}
              {banner.discountSubtext && <p className="mt-1 text-sm text-white/85">{banner.discountSubtext}</p>}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
