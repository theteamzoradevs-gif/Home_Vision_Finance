import Link from "next/link";
import { Icons, Logo } from "@/components/ui/icons";
import {
  BRAND,
  CONSULTANT_ROLE,
  EMAIL,
  FOOTER_SERVICES,
  NAV_LINKS,
  PHONE,
  PHONE_DISPLAY,
  SOCIAL_INSTAGRAM,
  SOCIAL_LINKEDIN,
  SOCIAL_YOUTUBE,
} from "@/lib/constants";

const SOCIAL = [
  { label: "WhatsApp", href: `https://wa.me/91${PHONE}`, icon: Icons.wa },
  { label: "Call", href: `tel:${PHONE}`, icon: Icons.phone },
  { label: "Email", href: `mailto:${EMAIL}`, icon: Icons.mail },
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
            <span className="font-semibold">{CONSULTANT_ROLE}</span>
            <br />
            SBI Authorised Channel Partner
            <br />
            {PHONE_DISPLAY}
          </p>
          <div className="mt-4 flex gap-3">
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-brand-light transition hover:bg-brand hover:text-white"
                aria-label={s.label}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noreferrer" : undefined}
              >
                <span className="flex h-5 w-5 items-center justify-center [&>svg]:h-full [&>svg]:w-full">
                  {s.icon}
                </span>
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
          <div className="mt-4 flex gap-3">
            {[
              { label: "Instagram", href: SOCIAL_INSTAGRAM, icon: Icons.instagram },
              { label: "LinkedIn", href: SOCIAL_LINKEDIN, icon: Icons.linkedin },
              { label: "YouTube", href: SOCIAL_YOUTUBE, icon: Icons.youtube },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-slate-300 transition duration-200 hover:scale-110 hover:bg-brand hover:text-white"
              >
                {social.icon}
              </a>
            ))}
          </div>
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
