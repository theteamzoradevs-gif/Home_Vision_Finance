import Image from "next/image";
import Link from "next/link";
import { BlogCard } from "@/features/blogs/BlogCard";
import type { BlogPost } from "@/features/landing/data/content";
import { BLOG_POSTS } from "@/features/landing/data/content";

type BlogDetailContentProps = {
  post: BlogPost;
  featuredImage?: string;
};

export function BlogDetailContent({ post, featuredImage }: BlogDetailContentProps) {
  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);
  const imageSrc = featuredImage || post.image;

  return (
    <article className="section-padding bg-white pt-5">
      <div className="container-site max-w-3xl">
        <Link
          href="/blogs"
          className="text-sm font-semibold text-brand transition hover:text-brand-light"
        >
          Back to Blogs
        </Link>

        {imageSrc && (
          <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-card">
            <Image
              src={imageSrc}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>
        )}

        <div className="mt-8 flex flex-wrap items-center gap-3 border-b border-slate-200 pb-6 text-sm text-slate-500">
          <span className="rounded-full bg-brand-pale px-3 py-1 text-xs font-bold uppercase text-brand">
            {post.tag}
          </span>
          <span className="font-medium text-navy">{post.author}</span>
          <span aria-hidden>·</span>
          <time dateTime={post.date}>{post.date}</time>
          <span aria-hidden>·</span>
          <span>{post.readTime}</span>
        </div>

        <div className="prose-blog mt-8 space-y-6 text-base leading-[1.8] text-slate-700 sm:text-lg">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      {related.length > 0 && (
        <section className="container-site mt-14 max-w-5xl border-t border-slate-200 pt-10 sm:mt-16 sm:pt-12">
          <h2 className="mb-6 font-heading text-xl font-bold text-navy sm:mb-8 sm:text-2xl">Related Articles</h2>
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
