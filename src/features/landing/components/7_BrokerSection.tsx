import { Button } from "@/components/ui/Button";
import { Icons } from "@/components/ui/icons";
import { PHONE, WHATSAPP_HOME } from "@/lib/constants";

export function BrokerSection() {
  return (
    <section className="section-padding bg-gradient-to-r from-brand to-navy text-white">
      <div className="container-site flex flex-wrap items-center justify-between gap-8">
        <div className="max-w-xl">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">
            Builders, Brokers & CAs — Let&apos;s Work Together
          </h2>
          <p className="mt-3 leading-relaxed text-white/80">
            Attractive payout and fast coordination support. We prioritize your clients&apos; files for quick processing.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href={`tel:${PHONE}`} variant="white">
            {Icons.phone} Call Now
          </Button>
          <Button href={WHATSAPP_HOME} variant="white" external>
            {Icons.wa} WhatsApp Now
          </Button>
        </div>
      </div>
    </section>
  );
}
