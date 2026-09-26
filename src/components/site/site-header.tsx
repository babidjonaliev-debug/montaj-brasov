import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import { BUSINESS_NAME, PHONE_DISPLAY } from "@/lib/config";
import { SERVICES } from "@/data/services";
import { buildTelLink } from "@/lib/whatsapp";
import { WhatsAppCta } from "@/components/site/whatsapp-cta";

const NAV_LINKS = [
  { href: "/preturi", label: "Prețuri" },
  { href: "/zone-deservite", label: "Zone deservite" },
  { href: "/articole", label: "Articole" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="font-heading text-lg font-semibold tracking-tight">
          {BUSINESS_NAME}
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <details className="group relative">
            <summary className="cursor-pointer list-none text-foreground/80 hover:text-foreground">
              Servicii
            </summary>
            <div className="absolute left-0 top-full z-50 mt-2 w-64 rounded-xl border border-border bg-card p-2 shadow-lg">
              {SERVICES.map((service) => (
                <Link
                  key={service.slug}
                  href={`/${service.slug}`}
                  className="block rounded-lg px-3 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-foreground"
                >
                  {service.navTitle}
                </Link>
              ))}
            </div>
          </details>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground/80 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          {PHONE_DISPLAY ? (
            <Link
              href={buildTelLink()}
              className="flex items-center gap-1.5 text-sm font-medium text-foreground/80 hover:text-foreground"
            >
              <Phone className="size-4" />
              {PHONE_DISPLAY}
            </Link>
          ) : null}
          <WhatsAppCta size="default" label="WhatsApp" className="px-4 py-2 text-sm" />
        </div>

        <details className="group md:hidden">
          <summary className="flex size-10 cursor-pointer list-none items-center justify-center rounded-full border border-border text-foreground">
            <Menu className="size-5" />
          </summary>
          <div className="absolute inset-x-0 top-full z-50 border-b border-border bg-background p-4 shadow-lg">
            <nav className="flex flex-col gap-1 text-base">
              {SERVICES.map((service) => (
                <Link
                  key={service.slug}
                  href={`/${service.slug}`}
                  className="rounded-lg px-3 py-2.5 text-foreground/90 hover:bg-muted"
                >
                  {service.navTitle}
                </Link>
              ))}
              <div className="my-2 h-px bg-border" />
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2.5 text-foreground/90 hover:bg-muted"
                >
                  {link.label}
                </Link>
              ))}
              {PHONE_DISPLAY ? (
                <Link
                  href={buildTelLink()}
                  className="rounded-lg px-3 py-2.5 text-foreground/90 hover:bg-muted"
                >
                  {PHONE_DISPLAY}
                </Link>
              ) : null}
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
