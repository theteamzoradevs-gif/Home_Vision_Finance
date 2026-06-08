
const DEFAULT_DEV_BASE_URL = "http://localhost:5000/api";

function getBaseUrl() {
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL || DEFAULT_DEV_BASE_URL;
  if (process.env.NODE_ENV === "production" && baseUrl === DEFAULT_DEV_BASE_URL) {
    return null;
  }
  return baseUrl;
}


export const getAllBlogs = async () => {
  try {
    const baseUrl = getBaseUrl();
    if (!baseUrl) return [];

    const res = await fetch(`${baseUrl}/blog/all`, {
      method: "GET",
      credentials: "include",
    });

    const contentType = res.headers.get("content-type");
    if (contentType && contentType.includes("text/html")) {
      const htmlError = await res.text();
      console.error("Backend returned HTML instead of JSON! Full HTML Response:", htmlError);
      throw new Error("Backend ne HTML error page bheja hai bhai, endpoints check karo!");
    }

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Failed to fetch blogs.");
    
    return data;
  } catch (error: any) {
    console.error("BLOG_SERVICE_FETCH_ERROR:", error);
    throw error;
  }
};

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

export async function getBlogBySlug(slug: string): Promise<ApiBlogItem | null> {
  const all = await getAllBlogs();
  const blogs = normalizeBlogArray(all);
  return blogs.find((post) => post.slug === slug) ?? null;
}