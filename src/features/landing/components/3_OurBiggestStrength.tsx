import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { SectionHeadingHighlight } from "@/components/ui/SectionHeadingHighlight";
import { Icons } from "@/components/ui/icons";
import { SBI_LOGO_URL, USPS } from "@/features/landing/data/content";
import type { ReactNode } from "react";

const USP_ICONS: ReactNode[] = [
  Icons.wallet,
  Icons.timer,
  "sbi-logo",
  Icons.fileCheck,
  Icons.handshake,
  Icons.bell,
];

function UspIcon({ icon, title }: { icon: ReactNode; title: string }) {
  if (icon === "sbi-logo") {
    return (
      <div className="mb-3 flex h-10 w-14 items-center justify-center rounded-xl bg-white sm:mb-4 sm:h-12 sm:w-16">
        <Image
          src={SBI_LOGO_URL}
          alt={`${title} logo`}
          width={64}
          height={32}
          className="h-7 w-auto object-contain contrast-125 mix-blend-multiply sm:h-8"
          unoptimized
        />
      </div>
    );
  }

  return (
    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-pale/80 text-brand ring-1 ring-brand/10 transition-transform duration-300 group-hover:scale-110 sm:mb-4 sm:h-12 sm:w-12">
      {icon}
    </div>
  );
}

export function UspSection() {
  return (
    <section className="section-padding border-b border-slate-100 section-gradient-light">
      <div className="container-site">
        <SectionHeadingHighlight
          label="Our Biggest Strength"
          title="Why Choose Vision Home Finance"
          highlightText="Vision Home Finance"
          description="We provide a complete support system from your first call to final disbursement."
          centered
        />
        <div className="card-grid-equal grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
          {USPS.map((usp, i) => (
            <Card
              key={usp.title}
              equalHeight
              className="group flex h-full min-h-[180px] flex-col p-4 sm:min-h-[220px] sm:p-7"
            >
              <UspIcon icon={USP_ICONS[i]} title={usp.title} />
              <h3 className="font-heading text-sm font-semibold text-navy sm:text-lg">{usp.title}</h3>
              <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-500 sm:text-sm">{usp.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
