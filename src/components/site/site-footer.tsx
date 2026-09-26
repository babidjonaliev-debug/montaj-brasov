import Link from "next/link";
import { InstagramIcon } from "@/components/site/social-icons";
import {
  BUSINESS_NAME,
  BUSINESS_TAGLINE,
  INSTAGRAM_URL,
  OWNER_NAME,
  OWNER_NOW_BUILDING_IN,
  OWNER_WORKED_IN,
  OWNER_YEARS_EXPERIENCE,
  PHONE_DISPLAY,
} from "@/lib/config";
import { buildTelLink, buildWhatsAppLink } from "@/lib/whatsapp";

const FOOTER_LINKS = [
  { href: "/preturi", label: "Prețuri" },
  { href: "/zone-deservite", label: "Zone deservite" },
  { href: "/articole", label: "Articole" },
  { href: "/despre", label: "Despre" },
  { href: "/contact", label: "Contact" },
  { href: "/politica-de-confidentialitate", label: "Politica de confidențialitate" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div className="max-w-sm">
            <p className="font-heading text-lg font-bold">{BUSINESS_NAME}</p>
            <p className="mt-2 text-sm text-muted-foreground">{BUSINESS_TAGLINE}</p>
            <p className="mt-3 text-sm text-muted-foreground">
              {OWNER_NAME} montează pardoseli de {OWNER_YEARS_EXPERIENCE} ani — a lucrat
              în {OWNER_WORKED_IN}, acum își construiește afacerea în{" "}
              {OWNER_NOW_BUILDING_IN}.
            </p>
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
              {INSTAGRAM_URL ? (
                <Link
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground"
                >
                  <InstagramIcon className="size-4" />
                  Instagram — masterr_fix
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
