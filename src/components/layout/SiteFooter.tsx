import Link from "next/link";
import Image from "next/image";

import { BrandLogo } from "@/components/ui/BrandLogo";

import {
  BRAND,
  CONSULTANT_ROLE,
  EMAIL,
  FOOTER_SERVICES,
  GOOGLE_MAPS_URL,
  NAV_LINKS,
  PHONE,
  SOCIAL_INSTAGRAM,
  SOCIAL_LINKEDIN,
  SOCIAL_YOUTUBE,
} from "@/lib/constants";

const SOCIAL = [
  {
    label: "Call",
    href: `tel:${PHONE}`,
    image: "/footer_logo/call.png",
  },
  {
    label: "Email",
    href: `mailto:${EMAIL}`,
    image: "/footer_logo/gmail.png",
  },
  {
    label: "Location",
    href: GOOGLE_MAPS_URL,
    image: "/footer_logo/location.png",
    external: true,
  },
];

const SOCIAL_MEDIA = [
  {
    label: "Instagram",
    href: SOCIAL_INSTAGRAM,
    image: "/footer_logo/instagram.png",
  },
  {
    label: "LinkedIn",
    href: SOCIAL_LINKEDIN,
    image: "/footer_logo/linkedin.png",
  },
  {
    label: "YouTube",
    href: SOCIAL_YOUTUBE,
    image: "/footer_logo/youtube.png",
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-navy text-slate-300">
      <div className="container-site grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* Company Info */}
        <div>
          <div className="mb-4">
            <BrandLogo
              height={56}
              className="brightness-0 invert max-w-[420px]"
            />
          </div>

          <p className="text-sm leading-relaxed">
            Your trusted home loan partner. SBI Authorised Channel Partner
            helping families get the best deals with ₹0 processing fees.
          </p>

          <p className="mt-4 text-sm text-white">
            <span className="font-semibold">{CONSULTANT_ROLE}</span>
            <br />
            SBI Authorised Channel Partner
          </p>

          {/* Contact Icons */}
          <div className="mt-4 flex gap-3">
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.external ? "_blank" : undefined}
                rel={s.external ? "noopener noreferrer" : undefined}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition duration-200 hover:scale-110 hover:bg-brand"
                aria-label={s.label}
              >
                <Image
                  src={s.image}
                  alt={s.label}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="mb-4 font-heading text-sm font-semibold text-white">
            Services
          </h4>

          <ul className="space-y-2.5">
            {FOOTER_SERVICES.map((item) => (
              <li key={item}>
                <Link
                  href="/services"
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-4 font-heading text-sm font-semibold text-white">
            Quick Links
          </h4>

          <ul className="space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 font-heading text-sm font-semibold text-white">
            Contact
          </h4>

          <ul className="space-y-2.5 text-sm text-slate-400">
            <li>
              <a
                href={`tel:${PHONE}`}
                className="transition hover:text-white"
              >
                Call Us: {PHONE}
              </a>
            </li>

            <li>
              <a
                href={`mailto:${EMAIL}`}
                className="transition hover:text-white"
              >
                {EMAIL}
              </a>
            </li>

            <li>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                Delhi NCR, Gurgaon ~ India
              </a>
            </li>
          </ul>

          {/* Social Media Icons */}
          <div className="mt-4 flex gap-3">
            {SOCIAL_MEDIA.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition duration-200 hover:scale-110 hover:bg-brand"
              >
                <Image
                  src={social.image}
                  alt={social.label}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="container-site flex flex-wrap items-center justify-between gap-4 py-6 text-xs text-slate-500">
          <span>
            © {new Date().getFullYear()} {BRAND}. All rights reserved. | SBI
            Authorised Channel Partner
          </span>

          <span className="flex gap-3">
            <Link
              href="/privacy-policy"
              className="transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-and-conditions"
              className="transition hover:text-white"
            >
              Terms & Conditions
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}