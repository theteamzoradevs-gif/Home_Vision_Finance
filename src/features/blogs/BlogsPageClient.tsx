"use client";

import { useMemo, useState } from "react";
import { Card } from "@/components/ui/Card";
import { Icons } from "@/components/ui/icons";
import { BLOG_CATEGORIES, BLOG_POSTS } from "@/features/landing/data/content";

export function BlogsPageClient() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("All");

  const featured = BLOG_POSTS.find((p) => p.featured);

  const filtered = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory = category === "All" || post.tag === category;
      const q = search.toLowerCase().trim();
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tag.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <>
      {featured && (
        <section className="border-b border-slate-200 bg-gradient-to-r from-brand-pale/80 to-white py-10">
          <div className="container-site">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-brand">Featured Article</p>
            <Card hover={false} className="lg:flex lg:items-center lg:gap-10">
              <div className="flex-1">
                <span className="rounded-full bg-brand-pale px-3 py-1 text-xs font-bold uppercase text-brand">
                  {featured.tag}
                </span>
                <h2 className="mt-3 font-heading text-2xl font-bold text-navy sm:text-3xl">{featured.title}</h2>
                <p className="mt-3 text-slate-600">{featured.excerpt}</p>
                <p className="mt-3 text-sm text-slate-400">
                  {featured.date} · {featured.readTime}
                </p>
              </div>
            </Card>
          </div>
        </section>
      )}

      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative max-w-md flex-1">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">{Icons.search}</span>
              <input
                type="search"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/15"
                aria-label="Search blog articles"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {BLOG_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    category === cat
                      ? "bg-brand text-white"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-brand hover:text-brand"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 py-16 text-center">
              <p className="text-4xl">📭</p>
              <h3 className="mt-3 font-heading text-lg font-semibold text-navy">No articles found</h3>
              <p className="mt-1 text-sm text-slate-500">Try a different search term or category.</p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((post) => (
                <Card key={post.slug} className="flex h-full flex-col">
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
          )}
        </div>
      </section>
    </>
  );
}
