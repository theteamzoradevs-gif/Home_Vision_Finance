import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { BlogsPageClient } from "@/features/blogs/BlogsPageClient";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Blog",
  "Home loan tips, interest rate guides, balance transfer insights, and document checklists from Vision Homes Finance.",
  "/blogs"
);

export default function BlogsPage() {
  return (
    <>
      <PageHero
        label="Resources"
        title="Home Loan Insights & Guides"
        description="Expert articles to help you make smarter borrowing decisions — rates, transfers, documents, and more."
      />
      <BlogsPageClient />
      <CtaBanner title="Need Personalized Advice?" description="Our consultants are ready to answer your home loan questions." />
    </>
  );
}
