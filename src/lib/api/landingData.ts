import { cache } from "react";
import { getActiveBanner, DEFAULT_LIVE_BANNER, type LiveBannerData } from "@/lib/api/bannerService";
import { getAllBlogsSafe, normalizeBlogArray } from "@/lib/api/blogService";
import { DEFAULT_HERO_DATA, getHeroSection, type HeroSectionData } from "@/lib/api/heroService";
import { getTestimonials, type Testimonial } from "@/lib/api/testimonials";
import { BLOG_POSTS } from "@/features/landing/data/content";

export type LandingBlogItem = {
  _id: string;
  title: string;
  subtitle: string;
  slug: string;
  excerpt: string;
  createdAt?: string;
};

export type LandingPageData = {
  heroData: HeroSectionData;
  bannerData: LiveBannerData;
  testimonials: Testimonial[];
  blogPosts: LandingBlogItem[];
};

function mapApiBlogsToPreview(apiBlogs: ReturnType<typeof normalizeBlogArray>): LandingBlogItem[] {
  return apiBlogs.slice(0, 3).map((post) => ({
    _id: post._id,
    title: post.title,
    subtitle: post.subtitle || "Guide",
    slug: post.slug,
    excerpt: post.excerpt || "",
    createdAt: post.createdAt,
  }));
}

function getFallbackBlogPosts(): LandingBlogItem[] {
  return BLOG_POSTS.slice(0, 3).map((post) => ({
    _id: post.slug,
    title: post.title,
    subtitle: post.tag,
    slug: post.slug,
    excerpt: post.excerpt,
    createdAt: post.date,
  }));
}

export const getLandingPageData = cache(async (): Promise<LandingPageData> => {
  const [heroData, bannerData, testimonials, blogsPayload] = await Promise.all([
    getHeroSection(),
    getActiveBanner(),
    getTestimonials(),
    getAllBlogsSafe(),
  ]);

  const apiBlogs = normalizeBlogArray(blogsPayload);
  const blogPosts = apiBlogs.length > 0 ? mapApiBlogsToPreview(apiBlogs) : getFallbackBlogPosts();

  return {
    heroData: heroData ?? DEFAULT_HERO_DATA,
    bannerData: bannerData ?? DEFAULT_LIVE_BANNER,
    testimonials,
    blogPosts,
  };
});
