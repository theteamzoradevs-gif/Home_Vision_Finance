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
            <Card key={review.name} className="hover:-translate-y-2 hover:shadow-card-lg">
              <h3 className="font-heading text-lg font-bold text-navy">{review.name}</h3>
              <p className="mt-0.5 text-xs text-slate-400">{review.city}</p>
              <div className="mt-3 flex gap-0.5 text-amber-400">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} className="[&>svg]:fill-amber-400">
                    {Icons.star}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
                &ldquo;{review.text}&rdquo;
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
