import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icons } from "@/components/ui/icons";
import { DOCUMENTS } from "@/features/landing/data/content";

export function DocumentsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-site">
        <SectionHeading
          label="Be Prepared"
          title="Documents You'll Need"
          description="Keep these basic documents ready for quick and smooth processing."
          centered
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {DOCUMENTS.map((doc) => (
            <div
              key={doc}
              className="flex items-center gap-3.5 rounded-xl border border-slate-200 bg-white px-5 py-4 transition hover:border-accent hover:shadow-card"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-pale text-accent">
                {Icons.check}
              </span>
              <span className="text-[15px] font-medium text-slate-700">{doc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
