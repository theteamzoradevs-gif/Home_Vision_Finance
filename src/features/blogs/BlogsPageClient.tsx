"use client";

import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/Card";
// 🌟 Linked real integration service layer from lib/api folder
import { getAllBlogs } from "@/lib/api/blogService"; 

// ─── DATABASE SCHEMA INTERFACE ───
interface BlogItem {
  _id: string; // Backend MongoDB ObjectId document key representation
  title: string;
  subtitle: string;
  slug: string;
  excerpt: string;
  content?: string;
  image: string;
  createdAt?: string; // Mongoose auto-generated timestamp
}

export function BlogsPageClient() {
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // ─── 🌟 FETCH ENGINE INTEGRATION ───
  useEffect(() => {
    const fetchWebsiteBlogs = async () => {
      try {
        setLoading(true);
        const data = await getAllBlogs();
        console.log("Landing page raw blog stream:", data);

        // Safe array wrapping validation checks
        if (Array.isArray(data)) {
          setBlogs(data);
        } else if (data && Array.isArray(data.blogs)) {
          setBlogs(data.blogs);
        } else if (data && Array.isArray(data.data)) {
          setBlogs(data.data);
        } else {
          setBlogs([]);
        }
      } catch (error) {
        console.error("Failed to fetch blogs for landing page client:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWebsiteBlogs();
  }, []);

  // Helper: Format ISO timestamp to standard human-readable date string
  const formatDate = (isoString?: string) => {
    if (!isoString) return "Recent Post";
    return new Date(isoString).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  // ─── SKELETON LOADING VIEW AREA ───
  if (loading) {
    return (
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div key={n} className="animate-pulse flex h-[400px] flex-col bg-slate-50 border border-slate-100 rounded-2xl p-0 overflow-hidden">
                <div className="h-44 w-full bg-slate-200" />
                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="h-4 w-16 bg-slate-200 rounded-full" />
                    <div className="h-6 w-5/6 bg-slate-200 rounded-md" />
                    <div className="h-12 w-full bg-slate-200 rounded-md" />
                  </div>
                  <div className="h-3 w-1/2 bg-slate-200 rounded-md" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-site">
        
        {/* Empty state window protection */}
        {blogs.length === 0 ? (
          <div className="text-center py-16 text-sm text-slate-400 font-medium">
            No published blogs found in the database! Please create your first post from the admin dashboard.
          </div>
        ) : (
          /* DYNAMIC BACKEND GRID DISPLAY STREAM */
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((post) => (
              <Card key={post._id} className="blog-card-premium flex h-full flex-col overflow-hidden group border border-slate-100 shadow-xs hover:shadow-md transition-all duration-300 rounded-2xl bg-white">
                
                {/* 🌟 COVER IMAGE VISUALIZER WITH ERROR BLOCKS FALLBACK */}
                <div className="h-44 w-full bg-slate-50 relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.onerror = null; // Infinite fallback lock bypass
                      e.currentTarget.src = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600"; // Elegant premium default image
                    }}
                  />
                </div>

                <div className="p-5 flex flex-col flex-1 bg-white">
                  {/* Subtitle bound to tag badge with standard fallback string validation */}
                  <span className="w-fit rounded-full bg-brand-pale px-3 py-1 text-[11px] font-bold uppercase text-brand tracking-wider">
                    {post.subtitle || "Interiors"}
                  </span>
                  
                  <h3 className="mt-3 font-heading text-base font-semibold leading-snug text-navy group-hover:text-brand transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="mt-2 flex-1 text-xs text-slate-500 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <p className="mt-4 text-[11px] text-slate-400 font-medium font-mono border-t border-slate-50 pt-2 flex justify-between items-center">
                    <span>{formatDate(post.createdAt)}</span>
                    <span className="text-brand font-semibold cursor-pointer group-hover:underline">
                      Read Path →
                    </span>
                  </p>
                </div>

              </Card>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}