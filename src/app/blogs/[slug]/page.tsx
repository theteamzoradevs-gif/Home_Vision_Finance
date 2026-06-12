import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { BlogDetailContent } from "@/features/blogs/BlogDetailContent";
import { BLOG_POSTS } from "@/features/landing/data/content";
import type { BlogPost } from "@/features/landing/data/content";
import { createPageMetadata } from "@/lib/metadata";
import { getBlogBySlug } from "@/lib/api/blogService";

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = true;

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

function mapApiToPost(apiPost: NonNullable<Awaited<ReturnType<typeof getBlogBySlug>>>): BlogPost {
  const paragraphs = apiPost.content
    ? apiPost.content.split(/\n\n+/).filter(Boolean)
    : [apiPost.excerpt || ""];

  return {
    slug: apiPost.slug,
    title: apiPost.title,
    tag: apiPost.subtitle || "Blog",
    date: apiPost.createdAt
      ? new Date(apiPost.createdAt).toLocaleDateString("en-IN", { month: "short", year: "numeric" })
      : "Recent",
    readTime: "5 min read",
    featured: false,
    excerpt: apiPost.excerpt || "",
    author: "Vision Home Finance",
    image: apiPost.image || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
    content: paragraphs,
  };
}

export async function generateMetadata({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const fallback = BLOG_POSTS.find((p) => p.slug === slug);
  let title = fallback?.title;
  let description = fallback?.excerpt;

  if (!title) {
    try {
      const apiPost = await getBlogBySlug(slug);
      if (apiPost) {
        title = apiPost.title;
        description = apiPost.excerpt || "";
      }
    } catch {
      /* use fallback */
    }
  }

  if (!title) return {};
  return createPageMetadata(title, description || "", `/blogs/${slug}`);
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const fallback = BLOG_POSTS.find((p) => p.slug === slug);

  let apiPost: Awaited<ReturnType<typeof getBlogBySlug>> | null = null;
  try {
    apiPost = await getBlogBySlug(slug);
  } catch {
    apiPost = null;
  }

  const post = fallback ?? (apiPost ? mapApiToPost(apiPost) : null);
  if (!post) notFound();

  return (
    <>
      <PageHero layout="blog" label={post.tag} title={post.title} description={post.excerpt} />
      <BlogDetailContent post={post} featuredImage={apiPost?.image || post.image} />
      <CtaBanner
        title="Have Questions About Your Home Loan?"
        description="Speak with our Home Loan Consultant for personalised guidance."
      />
    </>
  );
}
