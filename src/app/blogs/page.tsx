import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { BlogsGrid } from "@/features/blogs/BlogsGrid";
import { BlogsListClient } from "@/features/blogs/BlogsListClient";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Blog",
  "Home loan tips, interest rate guides, balance transfer insights, and document checklists from Vision Homes Finance.",
  "/blogs"
);

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default async function BlogsPage() {
  const initialBlogs = await BlogsGrid();

  return (
    <>
      <PageHero
        label="Resources"
        title="Home Loan Insights & Guides"
        description="Expert articles to help you make smarter borrowing decisions — rates, transfers, documents, and more."
      />
      <section className="section-padding bg-white text-left">
        <div className="container-site text-left">
          <BlogsListClient initialBlogs={initialBlogs} />
        </div>
      </section>
      <CtaBanner title="Need Personalized Advice?" description="Our consultants are ready to answer your home loan questions." />
    </>
  );
}
