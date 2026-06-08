"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icons } from "@/components/ui/icons";
import { REVIEWS } from "@/features/landing/data/content";
import { cn } from "@/lib/utils";

const AUTO_INTERVAL = 3000;
const PAUSE_AFTER_MANUAL = 7000;

function ReviewCard({ review }: { review: (typeof REVIEWS)[number] }) {
  return (
    <Card equalHeight hover={false} className="h-full border-slate-200 shadow-card">
      <h3 className="font-heading text-base font-bold text-navy sm:text-lg">{review.name}</h3>
      <p className="mt-0.5 text-xs text-slate-400">{review.city}</p>
      <div className="mt-3 flex gap-0.5 text-amber-400">
        {Array.from({ length: review.rating }).map((_, i) => (
          <span key={i} className="[&>svg]:fill-amber-400">
            {Icons.star}
          </span>
        ))}
      </div>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
        &ldquo;{review.text}&rdquo;
      </p>
    </Card>
  );
}

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);
  const pauseUntilRef = useRef(0);
  const isScrollingRef = useRef(false);
  const activeIndexRef = useRef(0);
  const isInViewRef = useRef(false);

  activeIndexRef.current = activeIndex;

  const goTo = useCallback((index: number) => {
    const next = ((index % REVIEWS.length) + REVIEWS.length) % REVIEWS.length;
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
  }, []);

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
    const track = trackRef.current;
    if (!track) return;

    const onScroll = () => {
      if (isScrollingRef.current) return;
      const slideWidth = track.clientWidth;
      if (!slideWidth) return;
      const index = Math.round(track.scrollLeft / slideWidth);
      setActiveIndex(Math.max(0, Math.min(index, REVIEWS.length - 1)));
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

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
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (!isInViewRef.current) return;
      if (Date.now() < pauseUntilRef.current) return;
      goTo(activeIndexRef.current + 1);
    }, AUTO_INTERVAL);

    return () => window.clearInterval(timer);
  }, [goTo]);

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
    <section className="section-padding section-gradient-neutral">
      <div className="container-site">
        <SectionHeading label="Client Testimonials" title="Trusted by Families Across India" centered />

        {/* Desktop: unchanged 3-column grid */}
        <div className="card-grid-equal hidden gap-6 md:grid md:grid-cols-3">
          {REVIEWS.map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>

        {/* Mobile: swipeable carousel with dots */}
        <div className="md:hidden">
          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            aria-label="Client testimonials carousel"
          >
            {REVIEWS.map((review) => (
              <div key={review.name} className="w-full shrink-0 snap-start px-0.5">
                <ReviewCard review={review} />
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-center gap-2" role="tablist" aria-label="Testimonial navigation">
            {REVIEWS.map((review, index) => (
              <button
                key={review.name}
                type="button"
                role="tab"
                aria-selected={activeIndex === index}
                aria-label={`Go to review ${index + 1}`}
                onClick={() => handleDotClick(index)}
                className={cn(
                  "h-2.5 rounded-full transition-all duration-300",
                  activeIndex === index ? "w-6 bg-brand" : "w-2.5 bg-slate-300"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
