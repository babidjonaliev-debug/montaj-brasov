import Link from "next/link";
import { Phone } from "lucide-react";
import { buildTelLink, buildWhatsAppLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/site/whatsapp-cta";
import { OWNER_NAME } from "@/lib/config";

export function MobileWhatsAppBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex items-stretch gap-2 border-t border-border bg-background p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden">
      <Link
        href={buildWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-bold text-primary-foreground shadow-sm active:bg-teal-deep"
      >
        <WhatsAppIcon className="size-5" />
        Scrie-i lui {OWNER_NAME}
      </Link>
      <Link
        href={buildTelLink()}
        aria-label="Sună"
        className="flex items-center justify-center rounded-lg border border-border bg-card px-4 text-foreground"
      >
        <Phone className="size-5" />
      </Link>
    </div>
  );
}
