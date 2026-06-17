import { getAllBlogsSafe, getAllBlogsSafeClient, normalizeBlogArray, type ApiBlogItem } from "@/lib/api/blogService";
import { BLOG_POSTS } from "@/features/landing/data/content";
import type { LandingBlogItem } from "@/lib/api/landingData";

export type BlogListItem = {
  _id: string;
  title: string;
  subtitle: string;
  slug: string;
  excerpt: string;
  createdAt?: string;
};

function mapApiBlog(post: ApiBlogItem): BlogListItem {
  return {
    _id: post._id,
    title: post.title,
    subtitle: post.subtitle || "Guide",
    slug: post.slug,
    excerpt: post.excerpt || "",
    createdAt: post.createdAt,
  };
}

function getFallbackBlogs(limit?: number): BlogListItem[] {
  const posts = limit ? BLOG_POSTS.slice(0, limit) : BLOG_POSTS;
  return posts.map((post) => ({
    _id: post.slug,
    title: post.title,
    subtitle: post.tag,
    slug: post.slug,
    excerpt: post.excerpt,
    createdAt: post.date,
  }));
}

export async function getBlogsList(limit?: number): Promise<BlogListItem[]> {
  const blogsPayload = await getAllBlogsSafe();
  const apiBlogs = normalizeBlogArray(blogsPayload);

  if (apiBlogs.length > 0) {
    const mapped = apiBlogs.map(mapApiBlog);
    return limit ? mapped.slice(0, limit) : mapped;
  }

  return getFallbackBlogs(limit);
}

export async function getBlogsListClient(limit?: number): Promise<BlogListItem[]> {
  const blogsPayload = await getAllBlogsSafeClient();
  const apiBlogs = normalizeBlogArray(blogsPayload);

  if (apiBlogs.length > 0) {
    const mapped = apiBlogs.map(mapApiBlog);
    return limit ? mapped.slice(0, limit) : mapped;
  }

  return getFallbackBlogs(limit);
}

export async function getLandingBlogPreview(): Promise<LandingBlogItem[]> {
  return getBlogsList(3);
}

export async function getLandingBlogPreviewClient(): Promise<LandingBlogItem[]> {
  return getBlogsListClient(3);
}
