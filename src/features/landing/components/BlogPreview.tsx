import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BLOG_POSTS } from "@/features/landing/data/content";

export function BlogPreview() {
  const posts = BLOG_POSTS.slice(0, 3);

  return (
    <section className="section-padding bg-slate-50">
      <div className="container-site">
        <SectionHeading
          label="Resources"
          title="Latest from Our Blog"
          description="Tips, guides, and insights for smarter home loan decisions."
          centered
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href="/blogs"
              className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-card-lg"
            >
              <span className="inline-block rounded-full bg-brand-pale px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-brand">
                {post.tag}
              </span>
              <h3 className="mt-3 font-heading text-lg font-semibold leading-snug text-navy">{post.title}</h3>
              <p className="mt-2 text-xs text-slate-400">
                {post.date} · {post.readTime}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
