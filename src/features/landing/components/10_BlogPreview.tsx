"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
// 🌟 Linked real integration service layer from lib/api folder
import { getAllBlogs } from "@/lib/api/blogService"; 

// ─── DATABASE SCHEMA INTERFACE ───
interface BlogItem {
  _id: string;
  title: string;
  subtitle: string;
  slug: string;
  excerpt: string;
  image: string;
  createdAt?: string;
}

export function BlogPreview() {
  const [posts, setPosts] = useState<BlogItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // ─── 🌟 FETCH ENGINE INTEGRATION ───
  useEffect(() => {
    const fetchTopBlogs = async () => {
      try {
        setLoading(true);
        const data = await getAllBlogs();
        console.log("Blog Preview raw data:", data);

        let allBlogs: BlogItem[] = [];
        if (Array.isArray(data)) {
          allBlogs = data;
        } else if (data && Array.isArray(data.blogs)) {
          allBlogs = data.blogs;
        } else if (data && Array.isArray(data.data)) {
          allBlogs = data.data;
        }

        // 🚀 SLICE ACTION: Extracted top 3 latest dynamic items from array
        setPosts(allBlogs.slice(0, 3));
      } catch (error) {
        console.error("Failed to fetch top blogs for home preview:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTopBlogs();
  }, []);

  // Timestamp formatting helper
  const formatDate = (isoString?: string) => {
    if (!isoString) return "Recent Post";
    return new Date(isoString).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric"
    });
  };

  return (
    <section className="section-padding bg-slate-50">
      <div className="container-site">
        {/* 🌟 TEXT REMAINS EXACTLY THE SAME AS REQUESTED */}
        <SectionHeading
          label="Resources"
          title="Latest from Our Blog"
          description="Tips, guides, and insights for smarter home loan decisions."
          centered
        />
        
        {/* Loading Skeleton Mode */}
        {loading ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div key={n} className="animate-pulse rounded-2xl border border-slate-200 bg-white overflow-hidden h-[380px] space-y-3">
                <div className="h-48 w-full bg-slate-200" />
                <div className="p-6 space-y-3">
                  <div className="h-4 w-16 bg-slate-100 rounded-full" />
                  <div className="h-6 w-5/6 bg-slate-100 rounded-md" />
                  <div className="h-3 w-1/2 bg-slate-100 rounded-md mt-4" />
                </div>
              </div>
            ))}
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-6 text-xs text-slate-400 font-medium">
            No real blogs published in the database yet!
          </div>
        ) : (
          /* DYNAMIC 3 LATEST BLOGS CARDS WITH FIXED IMAGE LAYOUT WRAPPER */
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post._id}
                href="/blogs"
                className="group rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col h-full"
              >
                <div>
                  {/* 🌟 SOLID LAYOUT CONTAINER: Browser height collapse bypass applied */}
                  <div className="w-full h-48 bg-slate-100 relative block overflow-hidden border-b border-slate-100">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 block"
                      onError={(e) => {
                        e.currentTarget.onerror = null; // Infinite fallback lock check bypass
                        e.currentTarget.src = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600"; // Premium backup texture if string is corrupt
                      }}
                    />
                  </div>

                  {/* CONTENT INTERIOR DETAILS */}
                  <div className="p-6">
                    <span className="inline-block rounded-full bg-brand-pale px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-brand">
                      {post.subtitle || "Interiors"}
                    </span>
                    <h3 className="mt-3 font-heading text-base font-semibold leading-snug text-navy group-hover:text-brand transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* BOTTOM DATE LAYER */}
                <div className="px-6 pb-6 pt-2 text-xs text-slate-400 font-medium font-mono border-t border-slate-50 flex justify-between items-center mt-auto">
                  <span>{formatDate(post.createdAt)}</span>
                  <span className="text-brand font-bold group-hover:underline">Read Now →</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}