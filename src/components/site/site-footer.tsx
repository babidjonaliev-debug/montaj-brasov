import Link from "next/link";
import { BUSINESS_NAME, BUSINESS_TAGLINE, OWNER_NAME, PHONE_DISPLAY } from "@/lib/config";
import { buildTelLink, buildWhatsAppLink } from "@/lib/whatsapp";

const FOOTER_LINKS = [
  { href: "/preturi", label: "Prețuri" },
  { href: "/zone-deservite", label: "Zone deservite" },
  { href: "/articole", label: "Articole" },
  { href: "/contact", label: "Contact" },
  { href: "/politica-de-confidentialitate", label: "Politica de confidențialitate" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-brass/20 bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div className="max-w-sm">
            <p className="font-heading text-lg font-semibold">{BUSINESS_NAME}</p>
            <p className="mt-2 text-sm text-muted-foreground">{BUSINESS_TAGLINE}</p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm">
            <div className="flex flex-col gap-2">
              <span className="font-medium text-foreground">Pagini</span>
              {FOOTER_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-medium text-foreground">Contact — {OWNER_NAME}</span>
              <Link
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                WhatsApp
              </Link>
              {PHONE_DISPLAY ? (
                <Link href={buildTelLink()} className="text-muted-foreground hover:text-foreground">
                  {PHONE_DISPLAY}
                </Link>
              ) : null}
              <span className="text-muted-foreground">Brașov și localitățile din jur</span>
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs text-muted-foreground">
          © {year} {BUSINESS_NAME}. Nu execut instalații electrice complete și nu sunt
          autorizat ANRE.
        </p>
      </div>
    </footer>
  );
}
