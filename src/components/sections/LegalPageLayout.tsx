import { PageHero } from "@/components/sections/PageHero";
import type { ReactNode } from "react";

type LegalSection = {
  title: string;
  content: ReactNode;
};

type LegalPageLayoutProps = {
  title: string;
  description: string;
  lastUpdated?: string;
  sections: LegalSection[];
};

export function LegalPageLayout({ title, description, lastUpdated, sections }: LegalPageLayoutProps) {
  return (
    <>
      <PageHero label="Legal" title={title} description={description} />
      <section className="section-padding section-gradient-light pt-8 text-left">
        <div className="container-site max-w-3xl text-left">
          {lastUpdated && (
            <p className="mb-10 text-left text-sm text-slate-500">Last updated: {lastUpdated}</p>
          )}
          <div className="space-y-10 text-left">
            {sections.map((section) => (
              <article key={section.title} className="text-left">
                <h2 className="text-left font-heading text-xl font-bold text-navy sm:text-2xl">
                  {section.title}
                </h2>
                <div className="mt-3 space-y-3 text-left text-sm leading-relaxed text-slate-600 sm:text-base">
                  {section.content}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
