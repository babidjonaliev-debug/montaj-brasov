import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

interface WhatsAppCtaProps {
  presetJobType?: string;
  label?: string;
  size?: "default" | "lg";
  className?: string;
}

export function WhatsAppCta({
  presetJobType,
  label = "Scrie pe WhatsApp",
  size = "lg",
  className,
}: WhatsAppCtaProps) {
  return (
    <Link
      href={buildWhatsAppLink(presetJobType)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-2 rounded-lg bg-primary font-bold text-primary-foreground shadow-sm transition-colors hover:bg-teal-deep",
        size === "lg" ? "px-6 py-3 text-base" : "px-4 py-2 text-sm",
        className,
      )}
    >
      <WhatsAppIcon className="size-5" />
      {label}
    </Link>
  );
}

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.02 3C9.4 3 4 8.39 4 15.02c0 2.3.63 4.55 1.83 6.5L4 29l7.68-1.77a12.9 12.9 0 0 0 4.34.75h.01c6.62 0 12.02-5.39 12.02-12.02C28.05 8.39 22.66 3 16.02 3Zm0 21.86h-.01a10.7 10.7 0 0 1-5.46-1.5l-.39-.23-4.06.94.94-3.96-.25-.4a10.75 10.75 0 0 1-1.65-5.7c0-5.96 4.86-10.82 10.83-10.82 2.89 0 5.6 1.13 7.65 3.18a10.75 10.75 0 0 1 3.17 7.65c0 5.97-4.86 10.83-10.77 10.84Zm5.93-8.1c-.32-.16-1.9-.94-2.2-1.05-.29-.11-.5-.16-.72.16-.21.32-.82 1.05-1 1.26-.19.21-.37.24-.69.08-1.87-.94-3.09-1.67-4.32-3.79-.33-.56.33-.52.94-1.74.1-.21.05-.4-.04-.56-.1-.16-.72-1.73-.98-2.37-.26-.63-.53-.55-.72-.56-.19-.01-.4-.01-.62-.01-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65 0 1.57 1.14 3.08 1.3 3.3.16.21 2.2 3.36 5.33 4.58 2.64 1.03 3.18.83 3.75.78.58-.05 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.13-.29-.21-.61-.36Z" />
    </svg>
  );
}
