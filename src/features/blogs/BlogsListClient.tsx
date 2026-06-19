import { BlogCard } from "@/features/blogs/BlogCard";
import type { BlogListItem } from "@/lib/api/blogList";

type BlogsListClientProps = {
  initialBlogs: BlogListItem[];
};

export function BlogsListClient({ initialBlogs }: BlogsListClientProps) {
  if (initialBlogs.length === 0) {
    return (
      <div className="py-16 text-left text-sm font-medium text-slate-400">
        No published blogs found. Please check back soon.
      </div>
    );
  }

  return (
    <div className="card-grid-equal grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {initialBlogs.map((post) => (
        <BlogCard key={post._id} post={post} />
      ))}
    </div>
  );
}
