"use client";

import { useMemo, useState } from "react";
import { BlogCard } from "@/features/blogs/BlogCard";
import { BLOG_CATEGORIES, BLOG_POSTS } from "@/features/landing/data/content";
import { cn } from "@/lib/utils";

export function BlogsPageClient() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") return BLOG_POSTS;
    return BLOG_POSTS.filter((post) => post.tag === activeCategory);
  }, [activeCategory]);

  return (
    <section className="section-padding section-gradient-neutral">
      <div className="container-site">
        <div className="mb-8 flex flex-wrap gap-2">
          {BLOG_CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200",
                activeCategory === category
                  ? "bg-brand text-white shadow-md"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-brand/30 hover:text-brand"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredPosts.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white px-8 py-16 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-pale text-2xl text-brand">
              📄
            </div>
            <h3 className="mt-4 font-heading text-xl font-bold text-navy">No articles found</h3>
            <p className="mt-2 max-w-md text-sm text-slate-500">
              We couldn&apos;t find any blog posts in this category. Try selecting a different filter or check back soon for new content.
            </p>
            <button
              type="button"
              onClick={() => setActiveCategory("All")}
              className="mt-6 rounded-xl bg-brand px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-light"
            >
              View All Articles
            </button>
          </div>
        ) : (
          <div className="card-grid-equal gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
