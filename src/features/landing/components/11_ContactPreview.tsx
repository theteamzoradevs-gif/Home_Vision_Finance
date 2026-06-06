import { Button } from "@/components/ui/Button";
import { Icons } from "@/components/ui/icons";
import { LeadForm } from "@/features/forms/LeadForm";
import { CONSULTANT_ROLE, HOURS, PHONE, WHATSAPP_HOME } from "@/lib/constants";

export function ContactPreview() {
  return (
    <section className="section-padding section-gradient-neutral">
      <div className="container-site grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(300px,380px)]">
        <div className="max-w-md">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-brand">Get In Touch</p>
          <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">Need Home Loan Assistance?</h2>
          <p className="mt-3 text-slate-600">
            Fill the form or reach out directly. Our {CONSULTANT_ROLE.toLowerCase()} will guide you from eligibility to disbursement.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={`tel:${PHONE}`}
              className="flex items-center gap-4 rounded-xl border border-transparent bg-brand-pale p-5 transition hover:border-brand"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white">
                {Icons.phone}
              </span>
              <div>
                <div className="text-xs uppercase tracking-wide text-slate-500">Call Directly</div>
                <div className="font-heading text-xl font-bold text-navy">{PHONE}</div>
              </div>
            </a>
            <a
              href={WHATSAPP_HOME}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-xl border border-transparent bg-brand-pale p-5 transition hover:border-brand"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#25D366] text-white">
                {Icons.wa}
              </span>
              <div>
                <div className="text-xs uppercase tracking-wide text-slate-500">WhatsApp</div>
                <div className="font-heading text-xl font-bold text-navy">Chat with our {CONSULTANT_ROLE}</div>
              </div>
            </a>
          </div>

          <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
            <p className="font-semibold text-navy">{CONSULTANT_ROLE}</p>
            <p>SBI Authorised Channel Partner</p>
            <p className="mt-1">{HOURS}</p>
          </div>

          <Button href="/contact" className="mt-6">
            Go to Contact Page
          </Button>
        </div>
        <LeadForm />
      </div>
    </section>
  );
}
