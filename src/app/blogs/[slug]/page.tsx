import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { BlogDetailContent } from "@/features/blogs/BlogDetailContent";
import { BLOG_POSTS } from "@/features/landing/data/content";
import { createPageMetadata } from "@/lib/metadata";

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  return createPageMetadata(post.title, post.excerpt, `/blogs/${slug}`);
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <>
      <PageHero label={post.tag} title={post.title} description={post.excerpt} />
      <BlogDetailContent post={post} />
      <CtaBanner
        title="Have Questions About Your Home Loan?"
        description="Speak with our Home Loan Consultant for personalised guidance."
      />
    </>
  );
}
