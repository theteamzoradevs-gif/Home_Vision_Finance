import { Button } from "@/components/ui/Button";
import { PHONE, WHATSAPP_HOME } from "@/lib/constants";

type CtaBannerProps = {
  title?: string;
  description?: string;
};

export function CtaBanner({
  title = "Your Dream Home is One Step Away",
  description = "₹0 processing fees · Compare 5+ banks · Expert guidance at zero cost",
}: CtaBannerProps) {
  return (
    <section className="bg-gradient-to-r from-accent to-emerald-700 px-4 py-16 text-center text-white sm:py-20">
      <div className="container-site">
        <h2 className="font-heading text-3xl font-bold sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-3 max-w-xl text-base opacity-90">{description}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href={`tel:${PHONE}`} variant="white" size="lg">
            📞 Call Now — {PHONE}
          </Button>
          <Button href={WHATSAPP_HOME} variant="outline" size="lg" external className="border-white/40 text-white hover:bg-white/15 hover:text-white">
            💬 WhatsApp Us
          </Button>
        </div>
      </div>
    </section>
  );
}
