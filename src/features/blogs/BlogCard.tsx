import Link from "next/link";
import { formatBlogMonthYear } from "@/lib/utils";

export type BlogCardPost = {
  slug: string;
  title: string;
  subtitle?: string;
  tag?: string;
  excerpt: string;
  createdAt?: string;
  date?: string;
};

type BlogCardProps = {
  post: BlogCardPost;
};

export function BlogCard({ post }: BlogCardProps) {
  const dateLabel = formatBlogMonthYear(post.createdAt ?? post.date);
  const category = post.subtitle ?? post.tag ?? "Guide";

  return (
    <Link
      href={`/blogs/${post.slug}`}
      className="blog-card-premium group flex h-full min-h-[220px] flex-col p-5 text-left sm:min-h-[240px] sm:p-6"
    >
      <h3 className="line-clamp-2 font-heading text-lg font-semibold leading-snug text-navy group-hover:text-brand">
        {post.title}
      </h3>
      <p className="mt-2 line-clamp-1 text-xs font-bold uppercase tracking-wide text-brand">{category}</p>
      <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-slate-500">{post.excerpt}</p>
      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
        {dateLabel ? <span className="text-xs text-slate-400">{dateLabel}</span> : <span />}
        <span className="rounded-lg bg-slate-100 px-3.5 py-1.5 text-xs font-semibold text-navy transition-colors group-hover:bg-slate-200">
          Read Article
        </span>
      </div>
    </Link>
  );
}
