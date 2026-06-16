import Link from "next/link";
import { Card } from "@/components/ui/Card";
import type { BlogPost } from "@/features/landing/data/content";
import { formatBlogMonthYear } from "@/lib/utils";

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  const dateLabel = formatBlogMonthYear(post.date) ?? post.date;

  return (
    <Link href={`/blogs/${post.slug}`} className="block h-full text-left">
      <Card equalHeight className="blog-card-premium flex h-full min-h-[220px] flex-col text-left sm:min-h-[240px]">
        <h3 className="line-clamp-2 font-heading text-lg font-semibold leading-snug text-navy">{post.title}</h3>
        <p className="mt-2 line-clamp-1 text-xs font-bold uppercase tracking-wide text-brand">{post.tag}</p>
        <p className="mt-2 line-clamp-2 flex-1 text-sm text-slate-500">{post.excerpt}</p>
        <p className="mt-4 text-left text-xs text-slate-400">{dateLabel}</p>
      </Card>
    </Link>
  );
}
