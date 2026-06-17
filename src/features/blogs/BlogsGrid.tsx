import { BlogCard } from "@/features/blogs/BlogCard";
import { getAllBlogsSafe, normalizeBlogArray } from "@/lib/api/blogService";
import { BLOG_POSTS } from "@/features/landing/data/content";

export async function BlogsGrid() {
  const blogsPayload = await getAllBlogsSafe();
  const apiBlogs = normalizeBlogArray(blogsPayload);

  const blogs =
    apiBlogs.length > 0
      ? apiBlogs.map((post) => ({
          _id: post._id,
          title: post.title,
          subtitle: post.subtitle || "Guide",
          slug: post.slug,
          excerpt: post.excerpt || "",
          createdAt: post.createdAt,
        }))
      : BLOG_POSTS.map((post) => ({
          _id: post.slug,
          title: post.title,
          subtitle: post.tag,
          slug: post.slug,
          excerpt: post.excerpt,
          createdAt: post.date,
        }));

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
