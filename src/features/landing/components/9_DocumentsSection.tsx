import { Button } from "@/components/ui/Button";
import { Icons } from "@/components/ui/icons";
import { LeadForm } from "@/features/forms/LeadForm";
import { CONSULTANT_ROLE, HOURS, PHONE, WHATSAPP_HOME } from "@/lib/constants";
import { DOCUMENTS } from "@/features/landing/data/content";

export function DocumentsSection() {
  return (
    // 'section-padding' ko hata kar top padding 'pt-16 md:pt-20' rakhi h
    // Aur bottom padding ko drastically kam karke 'pb-6 md:pb-8' kar diya h taaki space kam ho jaye
    <section className="pt-16 md:pt-20 pb-6 md:pb-8 bg-white">
      <div className="flex justify-center">
  <p className="text-xs font-bold uppercase tracking-[0.2em] mb-10 text-brand">
    Documentation
  </p>
</div>
      <div className="container-site">
        <div className="grid items-start gap-8 lg:grid-cols-[1fr_minmax(300px,380px)] lg:gap-12">
          {/* Left: documents checklist */}
          <div>
            {/* <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">Documentation</p> */}
            <h2 className="mt-2 font-heading text-2xl font-bold text-navy sm:text-3xl">
              Documents You&apos;ll Need
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Keep these documents ready for faster eligibility checks and smoother bank processing.
            </p>

            <ul className="mt-8 grid grid-cols-2 gap-2.5 sm:gap-3">
              {DOCUMENTS.map((doc) => (
                <li
                  key={doc}
                  className="flex items-center gap-2.5 rounded-xl border border-slate-100 bg-slate-50/80 px-3 py-3 sm:gap-3 sm:px-4 sm:py-3.5"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-pale text-brand sm:h-9 sm:w-9">
                    {Icons.fileCheck}
                  </span>
                  <span className="min-w-0 text-xs font-medium leading-snug text-slate-700 sm:text-sm">
                    {doc}
                  </span>
                </li>
              ))}
            </ul>

            <Button href="/contact" size="sm" className="mt-6 w-fit self-start">
              Apply Now
            </Button>
          </div>

          {/* Right: consultation form */}
          <LeadForm
            variant="compact"
            title="Get Free Consultation"
            subtitle="Quick details — expert callback in minutes"
          />
        </div>

        {/* Below both columns: contact shortcuts */}
        {/* Yahan 'mt-10 pt-8' spacing upar ke blocks ke liye standard lag rahi hai */}
        <div className="mt-10 grid gap-4 border-t border-slate-100 pt-8 sm:grid-cols-3 sm:gap-5">
          <a
            href={`tel:${PHONE}`}
            className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-card ring-1 ring-brand/[0.08] transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:bg-brand-pale hover:shadow-card-lg"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand text-white">
              {Icons.phone}
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Call Directly</p>
              <p className="font-heading text-base font-bold text-navy">Call Now</p>
            </div>
          </a>

          <a
            href={WHATSAPP_HOME}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-card ring-1 ring-brand/[0.08] transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:bg-brand-pale hover:shadow-card-lg"
          >
            <span className="btn-whatsapp-outline flex h-10 w-10 items-center justify-center rounded-lg">
              {Icons.wa}
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">WhatsApp</p>
              <p className="font-heading text-base font-bold text-navy">Instant Response</p>
            </div>
          </a>

          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-card ring-1 ring-brand/[0.08] transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:bg-brand-pale hover:shadow-card-lg">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-pale text-brand">
              {Icons.shield}
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{CONSULTANT_ROLE}</p>
              <p className="text-sm font-medium text-navy">SBI Authorised Partner</p>
              <p className="text-xs text-slate-500">{HOURS}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}