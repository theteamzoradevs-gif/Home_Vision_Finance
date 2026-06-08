import { Icons } from "@/components/ui/icons";
import { PHONE, WHATSAPP_HOME } from "@/lib/constants";

export function MobileCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[998] flex gap-2.5 border-t border-slate-200 bg-navy p-2.5 lg:hidden">
      <a
        href={`tel:${PHONE}`}
        className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-brand py-2.5 text-sm font-semibold text-white transition hover:bg-brand-light"
      >
        {Icons.phone}
        Call Now
      </a>
      <a
        href={WHATSAPP_HOME}
        target="_blank"
        rel="noreferrer"
        className="btn-whatsapp-outline flex flex-1 items-center justify-center gap-1.5 rounded-lg py-2.5 text-sm font-semibold"
      >
        {Icons.wa}
        WhatsApp
      </a>
    </div>
  );
}
