import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BANKS } from "@/features/landing/data/content";

function PartnerMarquee() {
  const marqueeBanks = [...BANKS, ...BANKS];

  return (
    <div className="relative mt-10 w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-slate-50/90 to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-brand-pale/40 to-transparent sm:w-24" />

      <div className="marquee-track motion-reduce:hidden flex w-max items-center gap-10 sm:gap-16">
        {marqueeBanks.map((bank, index) => (
          <Link
            key={`${bank.name}-${index}`}
            href="/contact"
            className="relative flex shrink-0 items-center justify-center rounded-lg p-2 transition-all duration-200 hover:scale-110"
          >
            {bank.priority && (
              <span className="absolute -top-7 left-1/2 z-10 flex -translate-x-1/2 items-center gap-0.5 whitespace-nowrap rounded-full bg-brand px-2.5 py-0.5 text-[10px] font-bold text-white shadow-sm">
                ★ Partner
              </span>
            )}

            <div className="relative flex h-14 w-28 items-center justify-center overflow-hidden">
              <Image
                src={bank.imageUrl}
                alt={`${bank.name} Logo`}
                width={128}
                height={56}
                className="object-contain contrast-125 mix-blend-multiply"
                unoptimized
              />
            </div>

            <span className="sr-only">{bank.name}</span>
          </Link>
        ))}
      </div>

      <div className="mt-8 hidden flex-wrap items-center justify-center gap-8 sm:gap-12 motion-reduce:flex">
        {BANKS.map((bank) => (
          <Link
            key={bank.name}
            href="/contact"
            className="relative flex items-center justify-center rounded-lg p-2 transition-all duration-200 hover:scale-110"
          >
            {bank.priority && (
              <span className="absolute -top-7 left-1/2 z-10 flex -translate-x-1/2 items-center gap-0.5 whitespace-nowrap rounded-full bg-brand px-2.5 py-0.5 text-[10px] font-bold text-white shadow-sm">
                ★ Partner
              </span>
            )}
            <div className="relative flex h-14 w-28 items-center justify-center overflow-hidden">
              <Image
                src={bank.imageUrl}
                alt={`${bank.name} Logo`}
                width={128}
                height={56}
                className="object-contain contrast-125 mix-blend-multiply"
                unoptimized
              />
            </div>
            <span className="sr-only">{bank.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function SbiBanner() {
  return (
    <section className="section-padding border-b border-slate-100 bg-gradient-to-b from-white via-slate-50/50 to-brand-pale/30">
      <div className="container-site text-center">
        <SectionHeading
          title="Our Trusted Partners"
          description="Unlock priority access, exclusive institutional loan rates, and secure end-to-end processing. We are your dedicated gateway to seamless financial solutions through India's most reputable banking networks."
          centered
        />

        <PartnerMarquee />

        <div className="mt-10">
          <Button href="/contact" variant="primary" size="lg">
            Compare Rates Across Banks
          </Button>
        </div>
      </div>
    </section>
  );
}
