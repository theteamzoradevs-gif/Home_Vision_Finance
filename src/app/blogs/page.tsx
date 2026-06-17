import { Suspense } from "react";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { BlogsGrid } from "@/features/blogs/BlogsGrid";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Blog",
  "Home loan tips, interest rate guides, balance transfer insights, and document checklists from Vision Homes Finance.",
  "/blogs"
);

export const revalidate = 300;

function BlogsGridSkeleton() {
  return (
    <div className="card-grid-equal grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {[1, 2, 3, 4, 5, 6].map((n) => (
        <div key={n} className="h-44 animate-pulse rounded-2xl border border-slate-100 bg-slate-50" />
      ))}
    </div>
  );
}

export default function BlogsPage() {
  return (
    <>
      <PageHero
        label="Resources"
        title="Home Loan Insights & Guides"
        description="Expert articles to help you make smarter borrowing decisions — rates, transfers, documents, and more."
      />
      <section className="section-padding bg-white text-left">
        <div className="container-site text-left">
          <Suspense fallback={<BlogsGridSkeleton />}>
            <BlogsGrid />
          </Suspense>
        </div>
      </section>
      <CtaBanner title="Need Personalized Advice?" description="Our consultants are ready to answer your home loan questions." />
    </>
  );
}
