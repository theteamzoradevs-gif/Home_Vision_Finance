import { PageHero } from "@/components/sections/PageHero";
import { WhyChooseGrid } from "@/components/sections/WhyChooseGrid";
import { ContactForm } from "@/features/forms/ContactForm";
import { Icons } from "@/components/ui/icons";
import {
  ADDRESS,
  CONSULTANT_ROLE,
  EMAIL,
  GOOGLE_MAPS_EMBED_URL,
  GOOGLE_MAPS_URL,
  HOURS,
  PHONE,
  WHATSAPP_CONTACT,
} from "@/lib/constants";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Contact Us",
  "Get in touch with Vision Home Finance for home loan inquiries. Call, WhatsApp, or send us a message.",
  "/contact"
);

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="We're Here to Help"
        description="Reach out for home loan assistance, eligibility checks, or partnership inquiries. Our team responds within 24 hours."
      />

      <section className="bg-white py-10 sm:py-12">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="font-heading text-2xl font-bold text-navy">Contact Information</h2>
            <p className="mt-2 text-slate-600">
              Speak directly with our {CONSULTANT_ROLE.toLowerCase()} or send an inquiry below.
            </p>

            <ul className="mt-8 space-y-5">
              <li className="flex gap-4 rounded-xl border border-slate-200 bg-slate-50 p-5">
                <span className="text-brand">{Icons.phone}</span>
                <div>
                  <p className="text-xs font-semibold uppercase text-slate-500">Phone</p>
                  <a href={`tel:${PHONE}`} className="font-semibold text-navy hover:text-brand">
                    Call Now
                  </a>
                </div>
              </li>
              <li className="flex gap-4 rounded-xl border border-slate-200 bg-slate-50 p-5">
                <span className="text-brand">{Icons.mail}</span>
                <div>
                  <p className="text-xs font-semibold uppercase text-slate-500">Email</p>
                  <a href={`mailto:${EMAIL}`} className="font-semibold text-navy hover:text-brand">
                    {EMAIL}
                  </a>
                </div>
              </li>
              <li>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-4 rounded-xl border border-slate-200 bg-slate-50 p-5 transition hover:border-brand/30 hover:bg-brand-pale/40"
                >
                  <span className="text-brand">{Icons.map}</span>
                  <div>
                    <p className="text-xs font-semibold uppercase text-slate-500">Office</p>
                    <p className="font-semibold text-navy">{ADDRESS}</p>
                    <p className="mt-1 text-sm text-slate-500">{HOURS}</p>
                    <p className="mt-2 text-xs font-semibold text-brand">Open in Google Maps →</p>
                  </div>
                </a>
              </li>
            </ul>

            <div className="mt-6 flex justify-center sm:justify-start">
              <a
                href={WHATSAPP_CONTACT}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-whatsapp px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-whatsapp-dark sm:text-base"
              >
                {Icons.wa} Chat on WhatsApp
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <section className="bg-slate-50 py-10 sm:py-12">
        <div className="container-site">
          <h2 className="mb-4 font-heading text-xl font-bold text-navy">Find Us</h2>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
            <iframe
              src={GOOGLE_MAPS_EMBED_URL}
              title="Vision Home Finance office location"
              className="h-64 w-full border-0 sm:h-80 lg:h-[450px]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand transition hover:text-brand-light"
          >
            Open in Google Maps
            {Icons.chevronRight}
          </a>
        </div>
      </section>

      <WhyChooseGrid />
    </>
  );
}
