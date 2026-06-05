import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Icons } from "@/components/ui/icons";
import type { ServiceItem } from "@/features/landing/data/services";
import { cn } from "@/lib/utils";

type ServiceDetailBlockProps = {
  service: ServiceItem;
  reverse?: boolean;
};

export function ServiceDetailBlock({ service, reverse = false }: ServiceDetailBlockProps) {
  const imageBlock = (
    <div className="group relative overflow-hidden rounded-3xl shadow-card-lg">
      <div className="aspect-[4/3] overflow-hidden">
        <Image
          src={service.imageUrl}
          alt={service.title}
          width={800}
          height={600}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
    </div>
  );

  const contentBlock = (
    <Card hover={false} className="flex h-full flex-col rounded-2xl p-8 shadow-card">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-pale text-brand">
        {service.icon}
      </div>
      <h2 className="font-heading text-2xl font-bold text-navy sm:text-3xl">{service.title}</h2>
      <p className="mt-3 text-base leading-relaxed text-slate-600">{service.description}</p>
      {service.highlights && service.highlights.length > 0 && (
        <ul className="mt-5 space-y-2.5">
          {service.highlights.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
              <span className="mt-0.5 shrink-0 text-brand">{Icons.check}</span>
              {item}
            </li>
          ))}
        </ul>
      )}
      <Button href="/contact" variant="primary" size="lg" className="mt-8 w-fit">
        Apply Now →
      </Button>
    </Card>
  );

  return (
    <div
      className={cn(
        "grid items-center gap-8 lg:grid-cols-2 lg:gap-12",
        reverse && "lg:[&>*:first-child]:order-2"
      )}
    >
      {reverse ? (
        <>
          {contentBlock}
          {imageBlock}
        </>
      ) : (
        <>
          {imageBlock}
          {contentBlock}
        </>
      )}
    </div>
  );
}
