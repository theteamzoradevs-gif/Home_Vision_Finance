import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ContactForm } from "@/features/forms/ContactForm";
import { Icons } from "@/components/ui/icons";
import { ADDRESS, CONSULTANT, EMAIL, HOURS, PHONE, PHONE_DISPLAY, WHATSAPP_CONTACT } from "@/lib/constants";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Contact Us",
  "Get in touch with Home Vision Finance for home loan inquiries. Call, WhatsApp, or send us a message.",
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

      <section className="section-padding pt-5 bg-white">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="font-heading text-2xl font-bold text-navy">Contact Information</h2>
            <p className="mt-2 text-slate-600">Speak directly with {CONSULTANT} or send an inquiry below.</p>

            <ul className="mt-8 space-y-5">
              <li className="flex gap-4 rounded-xl border border-slate-200 bg-slate-50 p-5">
                <span className="text-brand">{Icons.phone}</span>
                <div>
                  <p className="text-xs font-semibold uppercase text-slate-500">Phone</p>
                  <a href={`tel:${PHONE}`} className="font-semibold text-navy hover:text-brand">
                    {PHONE_DISPLAY}
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
              <li className="flex gap-4 rounded-xl border border-slate-200 bg-slate-50 p-5">
                <span className="text-brand">{Icons.map}</span>
                <div>
                  <p className="text-xs font-semibold uppercase text-slate-500">Office</p>
                  <p className="font-semibold text-navy">{ADDRESS}</p>
                  <p className="mt-1 text-sm text-slate-500">{HOURS}</p>
                </div>
              </li>
            </ul>

            <a
              href={WHATSAPP_CONTACT}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 font-semibold text-white transition hover:opacity-90"
            >
              {Icons.wa} Chat on WhatsApp
            </a>
          </div>

          <ContactForm />
        </div>
      </section>

      <section className="section-padding bg-slate-50 pt-0">
        <div className="container-site">
          <h2 className="mb-4 font-heading text-xl font-bold text-navy">Find Us</h2>
          <div
            className="flex h-64 items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white text-slate-400 sm:h-80"
            role="img"
            aria-label="Map placeholder"
          >
            <div className="text-center">
              <span className="text-4xl">📍</span>
              <p className="mt-2 text-sm">Google Map — Delhi NCR</p>
              <p className="text-xs text-slate-400">Embed your map iframe here</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
