import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icons } from "@/components/ui/icons";
import { REVIEWS } from "@/features/landing/data/content";

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-site">
        <SectionHeading label="Client Testimonials" title="Trusted by Families Across India" centered />
        <div className="grid gap-6 md:grid-cols-3">
          {REVIEWS.map((review) => (
            <Card key={review.name}>
              <div className="mb-3 flex gap-0.5 text-amber-400">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i}>{Icons.star}</span>
                ))}
              </div>
              <p className="mb-5 text-[15px] italic leading-relaxed text-slate-600">&ldquo;{review.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-pale font-bold text-brand">
                  {review.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold text-navy">{review.name}</div>
                  <div className="text-xs text-slate-400">{review.city}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
