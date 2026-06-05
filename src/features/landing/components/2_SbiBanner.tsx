// components/SbiBanner.tsx
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { BANKS } from "@/features/landing/data/content";

export function SbiBanner() {
  return (
    /* FIXED: Switched section background to slate tint to make the white card pop */
    <section className="bg-slate-50/60 px-4 py-16 text-center sm:py-24">
      
      {/* FIXED: Solidified inner container to pure white and enhanced elevation shadow */}
      <div className="mx-auto max-w-5xl rounded-[32px] border border-slate-100 bg-white p-8 shadow-[0_24px_60px_-15px_rgba(15,23,42,0.08)] sm:p-16">
        <div className="mx-auto max-w-4xl flex flex-col items-center">
          
          {/* Main Heading */}
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Our Trusted Partners
          </h2>

          {/* Subtitle / Description */}
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Unlock priority access, exclusive institutional loan rates, and secure end-to-end processing. 
            We are your dedicated gateway to seamless financial solutions through India's most reputable banking networks.
          </p>

          {/* Centralised Box for Bank Images */}
          <div className="relative mt-12 flex w-full flex-wrap items-center justify-center gap-8 rounded-2xl border border-slate-100/80 bg-slate-50/40 px-8 py-8 sm:gap-12 sm:px-12">
            
            {BANKS.map((bank) => (
              <Link
                key={bank.name}
                href="/contact"
                className="relative flex items-center justify-center rounded-lg p-2 transition-all duration-200 hover:scale-110"
              >
                {/* ★ Partner Green Pill Badge - Only for SBI */}
                {bank.priority && (
                  <span className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-emerald-600 px-2.5 py-0.5 text-[10px] font-bold text-white shadow-sm flex items-center gap-0.5 z-10">
                    ★ Partner
                  </span>
                )}
                
                {/* Large Image Container */}
                <div className="relative h-12 w-24 overflow-hidden flex items-center justify-center">
                  <Image
                    src={bank.imageUrl}
                    alt={`${bank.name} Logo`}
                    width={112}
                    height={48}
                    className="object-contain filter contrast-125 mix-blend-multiply"
                    unoptimized
                  />
                </div>
                
                {/* Hidden visually, but kept for screen readers/SEO accessibility */}
                <span className="sr-only">{bank.name}</span>
              </Link>
            ))}
          </div>

          {/* Bottom Action Button with Custom Light-Up Hover Transition */}
          <div className="mt-10">
            <Button 
              href="/contact" 
              className="rounded-2xl bg-[#004c8f] px-8 py-4 text-sm font-bold text-white transition-colors duration-300 ease-in-out hover:bg-[#1a73e8] shadow-md hover:shadow-lg"
            >
              Compare Rates Across Banks →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}