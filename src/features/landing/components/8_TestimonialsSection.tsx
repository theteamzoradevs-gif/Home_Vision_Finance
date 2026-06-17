"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icons } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/lib/api/testimonials";

const AUTO_INTERVAL = 3000;
const PAUSE_AFTER_MANUAL = 7000;

function ReviewCard({ review }: { review: Testimonial }) {
  return (
    <Card equalHeight hover={false} className="h-full border-slate-200 shadow-card">
      {/* 1. Name */}
      <h3 className="font-heading text-base font-bold text-navy sm:text-lg">
        {review?.clientName || "Anonymous User"}
      </h3>
      
      <p className="mt-0.5 text-xs text-slate-400">
        {review?.location}
      </p>
      {/* 3. Rating */}
      <div className="mt-3 flex gap-0.5 text-amber-400">
        {Array.from({ length: Number(review?.rating) || 5 }).map((_, i) => (
          <span key={i} className="[&>svg]:fill-amber-400">
            {Icons.star}
          </span>
        ))}
      </div>
      {/* 4. Feedback/Comment */}
      <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
        &ldquo;{review?.feedback || "No feedback provided."}&rdquo;
      </p>
    </Card>
  );
}

type TestimonialsSectionProps = {
  initialReviews?: Testimonial[];
};

export function TestimonialsSection({ initialReviews = [] }: TestimonialsSectionProps) {
  const reviews = initialReviews;
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const pauseUntilRef = useRef(0);
  const isScrollingRef = useRef(false);
  const activeIndexRef = useRef(0);
  const isInViewRef = useRef(false);

  activeIndexRef.current = activeIndex;

  const goTo = useCallback((index: number) => {
    if (reviews.length === 0) return;
    const next = ((index % reviews.length) + reviews.length) % reviews.length;
    setActiveIndex(next);
    const track = trackRef.current;
    if (!track) return;
    const slideWidth = track.clientWidth;
    if (!slideWidth) return;
    isScrollingRef.current = true;
    track.scrollTo({ left: next * slideWidth, behavior: "smooth" });
    window.setTimeout(() => { isScrollingRef.current = false; }, 500);
  }, [reviews.length]);

  const handleDotClick = useCallback((index: number) => {
    pauseUntilRef.current = Date.now() + PAUSE_AFTER_MANUAL;
    goTo(index);
  }, [goTo]);

  // Observer aur Scroll listeners
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      if (isScrollingRef.current || reviews.length === 0) return;
      const index = Math.round(track.scrollLeft / track.clientWidth);
      setActiveIndex(Math.max(0, Math.min(index, reviews.length - 1)));
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [reviews.length]);

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
  }, [reviews.length]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (!isInViewRef.current || reviews.length === 0) return;
      if (Date.now() < pauseUntilRef.current) return;
      goTo(activeIndexRef.current + 1);
    }, AUTO_INTERVAL);
    return () => window.clearInterval(timer);
  }, [goTo, reviews.length]);

  if (reviews.length === 0) return null;

  return (
    <section className="section-padding section-gradient-neutral">
      <div className="container-site">
        <SectionHeading label="Client Testimonials" title="Trusted by Families Across India" centered />
        
        {/* Desktop View */}
        <div className="card-grid-equal hidden gap-6 md:grid md:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard key={review._id} review={review} />
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden">
          <div ref={trackRef} className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {reviews.map((review) => (
              <div key={review._id} className="w-full shrink-0 snap-start px-0.5">
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
          <div className="mt-5 flex items-center justify-center gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={cn("h-2.5 rounded-full transition-all duration-300", activeIndex === index ? "w-6 bg-brand" : "w-2.5 bg-slate-300")}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}