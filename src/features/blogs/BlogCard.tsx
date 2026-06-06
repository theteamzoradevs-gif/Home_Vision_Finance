import Link from "next/link";
import { Card } from "@/components/ui/Card";
import type { BlogPost } from "@/features/landing/data/content";

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blogs/${post.slug}`} className="block h-full">
      <Card equalHeight className="blog-card-premium h-full">
        <span className="w-fit rounded-full bg-brand-pale px-3 py-1 text-[11px] font-bold uppercase text-brand">
          {post.tag}
        </span>
        <h3 className="mt-3 font-heading text-lg font-semibold leading-snug text-navy">{post.title}</h3>
        <p className="mt-2 flex-1 text-sm text-slate-500">{post.excerpt}</p>
        <p className="mt-4 text-xs text-slate-400">
          {post.date} · {post.readTime}
        </p>
      </Card>
    </Link>
  );
}
