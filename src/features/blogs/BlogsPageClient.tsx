"use client";



import React, { useState, useEffect } from "react";

import Link from "next/link";

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



function formatDate(isoString?: string): string | null {

  if (!isoString) return null;

  return new Date(isoString).toLocaleDateString("en-IN", {

    day: "numeric",

    month: "short",

    year: "numeric",

  });

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

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {[1, 2, 3, 4, 5, 6].map((n) => (

              <div key={n} className="h-44 animate-pulse rounded-2xl border border-slate-100 bg-slate-50" />

            ))}

          </div>

        </div>

      </section>

    );

  }



  return (

    <section className="section-padding bg-white">

      <div className="container-site">

        {blogs.length === 0 ? (

          <div className="py-16 text-center text-sm font-medium text-slate-400">

            No published blogs found. Please check back soon.

          </div>

        ) : (

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {blogs.map((post) => {

              const dateLabel = formatDate(post.createdAt);



              return (

                <Link

                  key={post._id}

                  href={`/blogs/${post.slug}`}

                  className="blog-card-premium group flex h-full flex-col p-5 sm:p-6"

                >

                  <span className="w-fit rounded-full bg-brand-pale px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand">

                    {post.subtitle}

                  </span>

                  <h3 className="mt-3 font-heading text-lg font-semibold leading-snug text-navy group-hover:text-brand line-clamp-2">

                    {post.title}

                  </h3>

                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500 line-clamp-3">{post.excerpt}</p>

                  <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">

                    {dateLabel ? <span className="text-xs text-slate-400">{dateLabel}</span> : <span />}

                    <span className="rounded-lg bg-slate-100 px-3.5 py-1.5 text-xs font-semibold text-navy transition-colors group-hover:bg-slate-200">

                      Read Article

                    </span>

                  </div>

                </Link>

              );

            })}

          </div>

        )}

      </div>

    </section>

  );

}

