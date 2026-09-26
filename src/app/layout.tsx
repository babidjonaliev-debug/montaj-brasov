import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { MobileWhatsAppBar } from "@/components/site/mobile-whatsapp-bar";
import { JsonLd } from "@/components/site/json-ld";
import { localBusinessJsonLd } from "@/lib/seo";
import { BUSINESS_NAME, BUSINESS_TAGLINE, SITE_URL } from "@/lib/config";

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const headingFont = Fraunces({
  variable: "--font-heading",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
  style: ["normal"],
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
      className={`${bodyFont.variable} ${headingFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <JsonLd data={localBusinessJsonLd()} />
        <SiteHeader />
        <main className="flex-1 pb-24 md:pb-0">{children}</main>
        <SiteFooter />
        <MobileWhatsAppBar />
      </body>
    </html>
  );
}
