import Link from "next/link";
import { BlogCard } from "@/features/blogs/BlogCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BLOG_POSTS } from "@/features/landing/data/content";

export function BlogPreview() {
  const posts = BLOG_POSTS.slice(0, 3);

  return (
    <section className="section-padding section-gradient-neutral">
      <div className="container-site">
        <SectionHeading
          label="Resources"
          title="Latest from Our Blog"
          description="Tips, guides, and insights for smarter home loan decisions."
          centered
        />
        <div className="card-grid-equal gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/blogs" className="text-sm font-semibold text-brand hover:underline">
            View all articles
          </Link>
        </div>
      </div>
    </section>
  );
}
