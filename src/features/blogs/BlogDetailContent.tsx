import Link from "next/link";
import { BlogCard } from "@/features/blogs/BlogCard";
import type { BlogPost } from "@/features/landing/data/content";
import { BLOG_POSTS } from "@/features/landing/data/content";

type BlogDetailContentProps = {
  post: BlogPost;
};

export function BlogDetailContent({ post }: BlogDetailContentProps) {
  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <article className="section-padding bg-white pt-5">
      <div className="container-site max-w-3xl">
        <Link
          href="/blogs"
          className="text-sm font-semibold text-brand transition hover:text-brand-light"
        >
          Back to Blogs
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-3 border-b border-slate-200 pb-8 text-sm text-slate-500">
          <span className="font-medium text-navy">{post.author}</span>
          <span aria-hidden>·</span>
          <time>{post.date}</time>
          <span aria-hidden>·</span>
          <span>{post.readTime}</span>
        </div>

        <div className="mt-8 space-y-5 text-base leading-relaxed text-slate-700">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      {related.length > 0 && (
        <section className="container-site mt-16 max-w-5xl border-t border-slate-200 pt-12">
          <h2 className="mb-8 font-heading text-2xl font-bold text-navy">Related Articles</h2>
          <div className="card-grid-equal gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((relatedPost) => (
              <BlogCard key={relatedPost.slug} post={relatedPost} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
