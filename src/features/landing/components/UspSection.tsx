import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icons } from "@/components/ui/icons";
import { USPS } from "@/features/landing/data/content";

const ICONS = [Icons.rupee, Icons.zap, Icons.shield, Icons.doc, Icons.handshake, Icons.percent];

export function UspSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-site">
        <SectionHeading
          label="Why Home Vision Finance"
          title="Our Biggest Strengths — Your Advantage"
          description="We provide a complete support system from your first call to final disbursement."
          centered
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {USPS.map((usp, i) => (
            <Card key={usp.title} highlight={usp.highlight}>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-pale text-brand">
                {ICONS[i]}
              </div>
              <h3 className="font-heading text-lg font-semibold text-navy">{usp.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{usp.description}</p>
              {usp.highlight && (
                <span className="mt-3 inline-block rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                  Biggest USP
                </span>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
