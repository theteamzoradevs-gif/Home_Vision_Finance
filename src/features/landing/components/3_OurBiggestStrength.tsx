import { Card } from "@/components/ui/Card";
import { SectionHeadingHighlight } from "@/components/ui/SectionHeadingHighlight";
import { Icons } from "@/components/ui/icons";
import { USPS } from "@/features/landing/data/content";

const ICONS = [
  Icons.wallet,
  Icons.trendingUp,
  Icons.shield,
  Icons.fileCheck,
  Icons.handshake,
  Icons.bell,
];

export function UspSection() {
  return (
    <section className="section-padding border-b border-slate-100 section-gradient-light">
      <div className="container-site">
        <SectionHeadingHighlight
          label="Our Biggest Strength"
          title="Why Choose Home Vision Finance"
          highlightText="Home Vision Finance"
          description="We provide a complete support system from your first call to final disbursement."
          centered
        />
        <div className="card-grid-equal gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {USPS.map((usp, i) => (
            <Card
              key={usp.title}
              highlight={usp.highlight}
              equalHeight
              className="group hover:bg-brand-pale/50"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-pale text-brand transition-transform duration-300 group-hover:scale-110">
                {ICONS[i]}
              </div>
              <h3 className="font-heading text-lg font-semibold text-navy">{usp.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{usp.description}</p>
              {usp.highlight && (
                <span className="mt-3 inline-block rounded-full bg-brand px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
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
