import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Icons } from "@/components/ui/icons";
import { BANKS } from "@/features/landing/data/content";

export function SbiBanner() {
  return (
    <section className="border-b border-slate-200 bg-gradient-to-r from-brand-pale/60 to-white px-4 py-12 sm:py-14">
      <div className="container-site flex flex-wrap items-center gap-10">
        <div className="min-w-[280px] flex-1">
          <div className="mb-4 inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-2.5 text-sm font-bold text-white">
            {Icons.shield} SBI Authorised Channel Partner
          </div>
          <h2 className="font-heading text-2xl font-bold text-navy sm:text-3xl">
            Priority Processing with State Bank of India
          </h2>
          <p className="mt-3 max-w-lg text-slate-600 leading-relaxed">
            As an authorised channel partner of SBI, we offer priority loan processing and best-in-class rates. We also work with other leading banks.
          </p>
        </div>
        <div className="flex flex-col items-start gap-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">We Also Partner With</p>
          <div className="flex flex-wrap gap-2.5">
            {BANKS.map((bank) => (
              <Link
                key={bank.name}
                href="/contact"
                className={`relative flex items-center gap-2 rounded-xl border bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-brand hover:shadow-card ${
                  bank.priority ? "border-brand/40" : "border-slate-200"
                }`}
              >
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: bank.color }} />
                {bank.name}
                {bank.priority && (
                  <span className="absolute -right-2 -top-2 rounded-full bg-accent px-2 py-0.5 text-[9px] font-bold text-white">
                    ★ Partner
                  </span>
                )}
              </Link>
            ))}
          </div>
          <Button href="/contact" variant="outline" size="sm">
            Compare Rates Across Banks →
          </Button>
        </div>
      </div>
    </section>
  );
}
