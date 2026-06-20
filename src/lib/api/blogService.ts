import { cache } from "react";
import { apiFetch, clientApiFetch } from "@/lib/api/apiClient";

export type ApiBlogItem = {
  _id: string;
  title: string;
  subtitle?: string;
  slug: string;
  excerpt?: string;
  content?: string;
  image?: string;
  createdAt?: string;
};

export function normalizeBlogArray(payload: unknown): ApiBlogItem[] {
  if (Array.isArray(payload)) return payload as ApiBlogItem[];
  if (payload && typeof payload === "object") {
    const obj = payload as Record<string, unknown>;
    if (Array.isArray(obj.blogs)) return obj.blogs as ApiBlogItem[];
    if (Array.isArray(obj.data)) return obj.data as ApiBlogItem[];
  }
  return [];
}

async function fetchAllBlogs(
  fetchFn: (path: string, init?: RequestInit) => Promise<Response> = apiFetch
) {
  const res = await fetchFn("/blog/all", { method: "GET" });

  const contentType = res.headers.get("content-type");
  if (contentType?.includes("text/html")) {
    throw new Error("Backend returned HTML instead of JSON.");
  }

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Failed to fetch blog.");

  return data;
}

export const getAllBlogs = cache(() => fetchAllBlogs(apiFetch));
export const getAllBlogsClient = () => fetchAllBlogs(clientApiFetch);

export async function getAllBlogsSafe() {
  try {
    return await getAllBlogs();
  } catch (error) {
    console.error("BLOG_SERVICE_FETCH_ERROR:", error);
    return [];
  }
}

export async function getAllBlogsSafeClient() {
  try {
    return await getAllBlogsClient();
  } catch (error) {
    console.error("BLOG_SERVICE_FETCH_ERROR:", error);
    return [];
  }
}

export const getBlogBySlug = cache(async (slug: string): Promise<ApiBlogItem | null> => {
  const all = await getAllBlogsSafe();
  const blogs = normalizeBlogArray(all);
  return blogs.find((post) => post.slug === slug) ?? null;
});
