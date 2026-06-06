"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Logo, Icons } from "@/components/ui/icons";
import { BRAND, NAV_LINKS, PHONE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={cn(
          "fixed left-0 right-0 top-0 z-[1000] border-b border-slate-200 bg-white/95 backdrop-blur-md transition-shadow duration-300",
          scrolled && "shadow-card"
        )}
      >
        <div className="container-site flex h-[72px] items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 font-heading text-lg font-bold text-navy">
            <Logo size={36} />
            <span>
              Home Vision <span className="text-brand">Finance</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-brand",
                  isActive(link.href) ? "text-brand" : "text-slate-600"
                )}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${PHONE}`}
              className="flex items-center gap-1.5 rounded-full bg-brand-pale px-4 py-2 text-sm font-semibold text-brand transition hover:bg-brand hover:text-white"
            >
              {Icons.phone} {PHONE}
            </a>
            <Button href="/contact" size="sm">
              Apply Now
            </Button>
          </div>

          <button
            type="button"
            className="rounded-lg p-2 text-navy lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            {Icons.menu}
          </button>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-[1002] bg-black/40 backdrop-blur-sm transition-opacity lg:hidden",
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setMobileOpen(false)}
        aria-hidden={!mobileOpen}
      />

      <aside
        className={cn(
          "fixed right-0 top-0 z-[1003] h-full w-[300px] border-l border-slate-200 bg-white p-6 shadow-2xl transition-transform duration-300 lg:hidden",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-label="Mobile navigation"
      >
        <div className="mb-6 flex justify-end">
          <button type="button" onClick={() => setMobileOpen(false)} aria-label="Close menu" className="p-2 text-slate-500">
            {Icons.close}
          </button>
        </div>
        <nav className="flex flex-col">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "border-b border-slate-100 py-3.5 text-base font-medium",
                isActive(link.href) ? "text-brand" : "text-slate-700"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mt-6 flex flex-col gap-3">
          <Button href={`tel:${PHONE}`} className="w-full justify-center">
            Call {BRAND}
          </Button>
          <Button href="/contact" className="w-full justify-center">
            Apply Now
          </Button>
        </div>
      </aside>
    </>
  );
}
