import { PHONE, WHATSAPP_HOME } from "@/lib/constants";

export function MobileCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[998] flex gap-2.5 border-t border-slate-200 bg-navy p-2.5 lg:hidden">
      <a
        href={`tel:${PHONE}`}
        className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-brand py-2.5 text-sm font-semibold text-white"
      >
        📞 Call Now
      </a>
      <a
        href={WHATSAPP_HOME}
        target="_blank"
        rel="noreferrer"
        className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-[#25D366] py-2.5 text-sm font-semibold text-white"
      >
        💬 WhatsApp
      </a>
    </div>
  );
}
