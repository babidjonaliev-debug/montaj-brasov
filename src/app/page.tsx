import type { Metadata } from "next";
import { Hero } from "@/components/site/hero";
import { InstagramSection } from "@/components/site/instagram-section";
import { ServicesGrid } from "@/components/site/services-grid";
import { PricingList } from "@/components/site/pricing-list";
import { ZonesSection } from "@/components/site/zones-section";
import { WorksSection } from "@/components/site/works-section";
import { MasterSection } from "@/components/site/master-section";
import { FaqSection } from "@/components/site/faq-section";
import { ArticlesTeaser } from "@/components/site/articles-teaser";
import { JsonLd } from "@/components/site/json-ld";
import { HOME_FAQ } from "@/data/faq";
import { faqPageJsonLd, pageMetadata } from "@/lib/seo";
import { BUSINESS_NAME } from "@/lib/config";

export const metadata: Metadata = pageMetadata({
  title: `${BUSINESS_NAME} — montaj laminat, vinil, linoleum, OSB`,
  description:
    "Montaj laminat, vinil, linoleum și plăci OSB în Brașov și în localitățile din jur. Măsurătoare gratuită în aceeași zi. Scrii pe WhatsApp, seara, noaptea sau în weekend.",
  path: "/",
});

export default function Home() {
  const faqJsonLd = faqPageJsonLd(
    HOME_FAQ.map((item) => ({ question: item.question, answer: item.answer })),
  );

  return (
    <>
      <JsonLd data={faqJsonLd} />
      <Hero />
      <InstagramSection />
      <ServicesGrid />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <h2 className="font-heading text-2xl font-bold sm:text-3xl">Prețuri, de la</h2>
        <div className="mt-10 max-w-2xl">
          <PricingList variant="compact" />
        </div>
      </section>
      <WorksSection />
      <MasterSection />
      <ZonesSection quiet />
      <FaqSection items={HOME_FAQ} quiet />
      <ArticlesTeaser quiet />
    </>
  );
}
