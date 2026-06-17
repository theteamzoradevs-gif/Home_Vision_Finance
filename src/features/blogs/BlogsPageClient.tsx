"use client";

import React, { useState, useEffect } from "react";
import { BlogCard } from "@/features/blogs/BlogCard";
import { getAllBlogs, normalizeBlogArray } from "@/lib/api/blogService";
import { BLOG_POSTS } from "@/features/landing/data/content";



interface BlogItem {

  _id: string;

  title: string;

  subtitle: string;

  slug: string;

  excerpt: string;

  createdAt?: string;

}



export function BlogsPageClient() {

  const [blogs, setBlogs] = useState<BlogItem[]>([]);

  const [loading, setLoading] = useState<boolean>(true);



  useEffect(() => {

    const fetchWebsiteBlogs = async () => {

      try {

        setLoading(true);

        const data = await getAllBlogs();

        const apiBlogs = normalizeBlogArray(data);



        if (apiBlogs.length > 0) {

          setBlogs(

            apiBlogs.map((post) => ({

              _id: post._id,

              title: post.title,

              subtitle: post.subtitle || "Guide",

              slug: post.slug,

              excerpt: post.excerpt || "",

              createdAt: post.createdAt,

            }))

          );

        } else {

          setBlogs(

            BLOG_POSTS.map((post) => ({

              _id: post.slug,

              title: post.title,

              subtitle: post.tag,

              slug: post.slug,

              excerpt: post.excerpt,

              createdAt: post.date,

            }))

          );

        }

      } catch {

        setBlogs(

          BLOG_POSTS.map((post) => ({

            _id: post.slug,

            title: post.title,

            subtitle: post.tag,

            slug: post.slug,

            excerpt: post.excerpt,

            createdAt: post.date,

          }))

        );

      } finally {

        setLoading(false);

      }

    };



    fetchWebsiteBlogs();

  }, []);



  if (loading) {

    return (

      <section className="section-padding bg-white">

        <div className="container-site">

          <div className="card-grid-equal grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {[1, 2, 3, 4, 5, 6].map((n) => (

              <div key={n} className="h-44 animate-pulse rounded-2xl border border-slate-100 bg-slate-50" />

            ))}

          </div>

        </div>

      </section>

    );

  }



  return (

    <section className="section-padding bg-white text-left">

      <div className="container-site text-left">

        {blogs.length === 0 ? (

          <div className="py-16 text-left text-sm font-medium text-slate-400">

            No published blogs found. Please check back soon.

          </div>

        ) : (

          <div className="card-grid-equal grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>

        )}

      </div>

    </section>

  );

}

