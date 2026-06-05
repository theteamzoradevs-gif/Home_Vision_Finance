import Link from "next/link";
import { Logo } from "@/components/ui/icons";
import {
  BRAND,
  CONSULTANT,
  EMAIL,
  FOOTER_SERVICES,
  NAV_LINKS,
  PHONE,
  PHONE_DISPLAY,
} from "@/lib/constants";

const SOCIAL = [
  { label: "WhatsApp", href: `https://wa.me/91${PHONE}`, icon: "💬" },
  { label: "Call", href: `tel:${PHONE}`, icon: "📞" },
  { label: "Email", href: `mailto:${EMAIL}`, icon: "✉️" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-navy text-slate-300">
      <div className="container-site grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-2.5">
            <Logo size={32} />
            <span className="font-heading text-lg font-bold text-white">{BRAND}</span>
          </div>
          <p className="text-sm leading-relaxed">
            Your trusted home loan partner. SBI Authorised Channel Partner helping families get the best deals with ₹0 processing fees.
          </p>
          <p className="mt-4 text-sm text-white">
            <span className="font-semibold">{CONSULTANT}</span>
            <br />
            {PHONE_DISPLAY}
          </p>
          <div className="mt-4 flex gap-3">
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg transition hover:bg-brand hover:text-white"
                aria-label={s.label}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 font-heading text-sm font-semibold text-white">Services</h4>
          <ul className="space-y-2.5">
            {FOOTER_SERVICES.map((item) => (
              <li key={item}>
                <Link href="/services" className="text-sm text-slate-400 transition hover:text-white">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-heading text-sm font-semibold text-white">Quick Links</h4>
          <ul className="space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-slate-400 transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-heading text-sm font-semibold text-white">Contact</h4>
          <ul className="space-y-2.5 text-sm text-slate-400">
            <li>
              <a href={`tel:${PHONE}`} className="transition hover:text-white">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="transition hover:text-white">
                {EMAIL}
              </a>
            </li>
            <li>Delhi NCR, India</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-wrap items-center justify-between gap-4 py-6 text-xs text-slate-500">
          <span>© {new Date().getFullYear()} {BRAND}. All rights reserved. | SBI Authorised Channel Partner</span>
          <span className="flex gap-3">
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white">
              Terms
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
