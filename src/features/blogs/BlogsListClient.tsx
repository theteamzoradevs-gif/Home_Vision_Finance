"use client";

import { useCallback } from "react";
import { BlogCard } from "@/features/blogs/BlogCard";
import { getBlogsListClient, type BlogListItem } from "@/lib/api/blogList";
import { useFreshAdminData } from "@/hooks/useFreshAdminData";

type BlogsListClientProps = {
  initialBlogs: BlogListItem[];
};

export function BlogsListClient({ initialBlogs }: BlogsListClientProps) {
  const fetchBlogs = useCallback(() => getBlogsListClient(), []);
  const blogs = useFreshAdminData(initialBlogs, fetchBlogs);

  if (blogs.length === 0) {
    return (
      <div className="py-16 text-left text-sm font-medium text-slate-400">
        No published blogs found. Please check back soon.
      </div>
    );
  }

  return (
    <div className="card-grid-equal grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {blogs.map((post) => (
        <BlogCard key={post._id} post={post} />
      ))}
    </div>
  );
}
