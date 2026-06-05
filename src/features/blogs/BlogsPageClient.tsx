import { Card } from "@/components/ui/Card";
import { BLOG_POSTS } from "@/features/landing/data/content";

export function BlogsPageClient() {
  return (
    <section className="section-padding bg-white">
      <div className="container-site">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <Card key={post.slug} className="blog-card-premium flex h-full flex-col">
              <span className="w-fit rounded-full bg-brand-pale px-3 py-1 text-[11px] font-bold uppercase text-brand">
                {post.tag}
              </span>
              <h3 className="mt-3 font-heading text-lg font-semibold leading-snug text-navy">{post.title}</h3>
              <p className="mt-2 flex-1 text-sm text-slate-500">{post.excerpt}</p>
              <p className="mt-4 text-xs text-slate-400">
                {post.date} · {post.readTime}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
