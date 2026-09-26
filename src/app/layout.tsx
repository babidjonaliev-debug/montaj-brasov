import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { MobileWhatsAppBar } from "@/components/site/mobile-whatsapp-bar";
import { PageBackground } from "@/components/site/page-background";
import { JsonLd } from "@/components/site/json-ld";
import { localBusinessJsonLd } from "@/lib/seo";
import { BUSINESS_NAME, BUSINESS_TAGLINE, SITE_URL } from "@/lib/config";

/**
 * O singură familie — compactă, geometrică, tehnică — pentru tot site-ul.
 * Titlurile folosesc greutăți grele (700/800), textul de corp o greutate
 * mai ușoară (400/450). Fără serif, fără aspect de revistă.
 */
const displayFont = Sora({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BUSINESS_NAME} — montaj laminat, vinil, linoleum, OSB`,
    template: `%s`,
  },
  description: BUSINESS_TAGLINE,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ro"
      className={`${displayFont.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <JsonLd data={localBusinessJsonLd()} />
        <PageBackground />
        <SiteHeader />
        <main className="flex-1 pb-24 md:pb-0">{children}</main>
        <SiteFooter />
        <MobileWhatsAppBar />
      </body>
    </html>
  );
}
