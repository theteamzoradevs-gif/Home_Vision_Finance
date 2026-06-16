import Image from "next/image";
import Link from "next/link";
import { BlogCard } from "@/features/blogs/BlogCard";
import type { BlogPost } from "@/features/landing/data/content";
import { BLOG_POSTS } from "@/features/landing/data/content";
import { formatBlogMonthYear } from "@/lib/utils";

type BlogDetailContentProps = {
  post: BlogPost;
  featuredImage?: string;
};

export function BlogDetailContent({ post, featuredImage }: BlogDetailContentProps) {
  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);
  const imageSrc = featuredImage || post.image;
  const dateLabel = formatBlogMonthYear(post.date) ?? post.date;

  return (
    <article className="section-padding bg-white pt-5 text-left">
      <div className="container-site text-left">
        <Link
          href="/blogs"
          className="text-left text-sm font-semibold text-brand transition hover:text-brand-light"
        >
          Back to Blogs
        </Link>

        {imageSrc && (
          <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-card">
            <Image
              src={imageSrc}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
              priority
            />
          </div>
        )}

        <div className="max-w-3xl">
          <div className="mt-8 text-left">
            <h2 className="text-left font-heading text-xl font-bold text-navy sm:text-2xl">{post.title}</h2>
            <p className="mt-2 text-left text-sm font-semibold uppercase tracking-wide text-brand">{post.tag}</p>
            <p className="mt-3 text-left text-base leading-relaxed text-slate-600">{post.excerpt}</p>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3 border-b border-slate-200 pb-6 text-left text-sm text-slate-500">
            <span className="font-medium text-navy">{post.author}</span>
            <span aria-hidden>·</span>
            <time dateTime={post.date}>{dateLabel}</time>
          </div>

          <div className="prose-blog mt-8 space-y-6 text-left text-base leading-[1.8] text-slate-700 sm:text-lg">
            {post.content.map((paragraph, index) => (
              <p key={index} className="text-left">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="container-site mt-14 border-t border-slate-200 pt-10 text-left sm:mt-16 sm:pt-12">
          <h2 className="mb-6 text-left font-heading text-xl font-bold text-navy sm:mb-8 sm:text-2xl">
            Related Articles
          </h2>
          <div className="card-grid-equal grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {related.map((relatedPost) => (
              <BlogCard key={relatedPost.slug} post={relatedPost} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
