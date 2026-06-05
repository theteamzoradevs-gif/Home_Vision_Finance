import { Icons } from "@/components/ui/icons";
import { WHATSAPP_HOME } from "@/lib/constants";

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_HOME}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-20 left-5 z-[999] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-110 lg:bottom-6 lg:left-auto lg:right-20"
      aria-label="Chat on WhatsApp"
    >
      {Icons.wa}
    </a>
  );
}
