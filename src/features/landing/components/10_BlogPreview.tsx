"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BlogCard } from "@/features/blogs/BlogCard";
import { getAllBlogs, normalizeBlogArray } from "@/lib/api/blogService";
import { BLOG_POSTS } from "@/features/landing/data/content";
import { cn } from "@/lib/utils";

const AUTO_INTERVAL = 3000;
const PAUSE_AFTER_MANUAL = 7000;

interface BlogItem {
  _id: string;
  title: string;
  subtitle: string;
  slug: string;
  excerpt: string;
  createdAt?: string;
}

export function BlogPreview() {
  const [posts, setPosts] = useState<BlogItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);
  const pauseUntilRef = useRef(0);
  const isScrollingRef = useRef(false);
  const activeIndexRef = useRef(0);
  const isInViewRef = useRef(false);

  activeIndexRef.current = activeIndex;

  const goTo = useCallback(
    (index: number) => {
      if (posts.length === 0) return;
      const next = ((index % posts.length) + posts.length) % posts.length;
      setActiveIndex(next);
      const track = trackRef.current;
      if (!track) return;

      const slideWidth = track.clientWidth;
      if (!slideWidth) return;

      isScrollingRef.current = true;
      track.scrollTo({ left: next * slideWidth, behavior: "smooth" });

      window.setTimeout(() => {
        isScrollingRef.current = false;
      }, 500);
    },
    [posts.length]
  );

  const pauseAutoSlide = useCallback(() => {
    pauseUntilRef.current = Date.now() + PAUSE_AFTER_MANUAL;
  }, []);

  const handleDotClick = useCallback(
    (index: number) => {
      pauseAutoSlide();
      goTo(index);
    },
    [goTo, pauseAutoSlide]
  );

  useEffect(() => {
    const fetchTopBlogs = async () => {
      try {
        setLoading(true);
        const data = await getAllBlogs();
        const apiBlogs = normalizeBlogArray(data);

        if (apiBlogs.length > 0) {
          setPosts(
            apiBlogs.slice(0, 3).map((post) => ({
              _id: post._id,
              title: post.title,
              subtitle: post.subtitle || "Guide",
              slug: post.slug,
              excerpt: post.excerpt || "",
              createdAt: post.createdAt,
            }))
          );
        } else {
          setPosts(
            BLOG_POSTS.slice(0, 3).map((post) => ({
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
        setPosts(
          BLOG_POSTS.slice(0, 3).map((post) => ({
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

    fetchTopBlogs();
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onScroll = () => {
      if (isScrollingRef.current) return;
      const slideWidth = track.clientWidth;
      if (!slideWidth) return;
      const index = Math.round(track.scrollLeft / slideWidth);
      setActiveIndex(Math.max(0, Math.min(index, posts.length - 1)));
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [posts.length]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isInViewRef.current = entry.isIntersecting;
      },
      { threshold: 0.25 }
    );

    observer.observe(track);
    return () => observer.disconnect();
  }, [loading, posts.length]);

  useEffect(() => {
    if (posts.length <= 1) return;

    const timer = window.setInterval(() => {
      if (!isInViewRef.current) return;
      if (Date.now() < pauseUntilRef.current) return;
      goTo(activeIndexRef.current + 1);
    }, AUTO_INTERVAL);

    return () => window.clearInterval(timer);
  }, [goTo, posts.length]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };

  const onTouchEnd = () => {
    if (touchDeltaX.current < -40) {
      pauseAutoSlide();
      goTo(activeIndexRef.current + 1);
    } else if (touchDeltaX.current > 40) {
      pauseAutoSlide();
      goTo(activeIndexRef.current - 1);
    }
  };

  return (
    <section className="section-padding bg-slate-50">
      <div className="container-site">
        <SectionHeading
          label="Resources"
          title="Latest from Our Blog"
          description="Tips, guides, and insights for smarter home loan decisions."
          centered
        />

        {loading ? (
          <>
            <div className="card-grid-equal hidden gap-4 md:grid md:grid-cols-3">
              {[1, 2, 3].map((n) => (
                <div key={n} className="h-40 animate-pulse rounded-2xl border border-slate-200 bg-white" />
              ))}
            </div>
            <div className="md:hidden">
              <div className="h-40 animate-pulse rounded-2xl border border-slate-200 bg-white" />
            </div>
          </>
        ) : posts.length === 0 ? (
          <div className="py-6 text-center text-sm text-slate-400">No blog posts available yet.</div>
        ) : (
          <>
            <div className="card-grid-equal hidden gap-4 md:grid md:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post._id} post={post} />
              ))}
            </div>

            <div className="md:hidden">
              <div
                ref={trackRef}
                className="flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
                aria-label="Blog posts carousel"
              >
                {posts.map((post) => (
                  <div key={post._id} className="w-full shrink-0 snap-start px-0.5">
                    <BlogCard post={post} />
                  </div>
                ))}
              </div>

              {posts.length > 1 && (
                <div className="mt-5 flex items-center justify-center gap-2" role="tablist" aria-label="Blog navigation">
                  {posts.map((post, index) => (
                    <button
                      key={post._id}
                      type="button"
                      role="tab"
                      aria-selected={activeIndex === index}
                      aria-label={`Go to blog post ${index + 1}`}
                      onClick={() => handleDotClick(index)}
                      className={cn(
                        "h-2.5 rounded-full transition-all duration-300",
                        activeIndex === index ? "w-6 bg-brand" : "w-2.5 bg-slate-300"
                      )}
                    />
                  ))}
                </div>
              )}
            </div>
          </>
        )}

        <div className="mt-8 text-center">
          <Button href="/blogs" size="md">
            View All Blogs
          </Button>
        </div>
      </div>
    </section>
  );
}
