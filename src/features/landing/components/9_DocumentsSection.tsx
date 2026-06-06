import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Icons } from "@/components/ui/icons";
import { DOCUMENTS } from "@/features/landing/data/content";

export function DocumentsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-site">
        <Card hover={false} className="mx-auto max-w-4xl rounded-3xl p-8 sm:p-10">
          <h2 className="font-heading text-2xl font-bold text-navy sm:text-3xl">Documents You&apos;ll Need</h2>
          <p className="mt-2 text-sm text-slate-500">
            Keep these basic documents ready for quick and smooth loan processing.
          </p>

          <div className="mt-8 space-y-3">
            {DOCUMENTS.map((doc) => (
              <div
                key={doc}
                className="flex cursor-pointer items-center gap-3.5 rounded-xl border border-slate-100 bg-slate-50/50 px-5 py-3.5 transition-all duration-200 hover:border-brand/30 hover:bg-brand-pale/20"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-pale text-brand">
                  {Icons.fileCheck}
                </span>
                <span className="text-[15px] font-medium text-slate-700">{doc}</span>
              </div>
            ))}
          </div>

          <Button href="/contact" variant="primary" size="lg" className="mt-8">
            Apply Now
          </Button>
        </Card>
      </div>
    </section>
  );
}
