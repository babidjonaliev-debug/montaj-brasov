import type { Metadata } from "next";
import { Hero } from "@/components/site/hero";
import { ServicesGrid } from "@/components/site/services-grid";
import { StepsSection } from "@/components/site/steps-section";
import { PricingList } from "@/components/site/pricing-list";
import { ZonesSection } from "@/components/site/zones-section";
import { WorksSection } from "@/components/site/works-section";
import { GuaranteeSection } from "@/components/site/guarantee-section";
import { FaqSection } from "@/components/site/faq-section";
import { ArticlesTeaser } from "@/components/site/articles-teaser";
import { JsonLd } from "@/components/site/json-ld";
import { HOME_FAQ } from "@/data/faq";
import { faqPageJsonLd, pageMetadata } from "@/lib/seo";
import { BUSINESS_NAME } from "@/lib/config";

export const metadata: Metadata = pageMetadata({
  title: `${BUSINESS_NAME} — montaj laminat, vinil, linoleum, OSB`,
  description:
    "Montaj laminat, vinil, linoleum și plăci OSB în Brașov. Măsurătoare gratuită în aceeași zi. Scrii pe WhatsApp, seara, noaptea sau în weekend.",
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
      <ServicesGrid />
      <StepsSection />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-heading text-2xl font-semibold sm:text-3xl">Prețuri, de la</h2>
        <div className="mt-8 max-w-2xl">
          <PricingList variant="compact" />
        </div>
      </section>
      <ZonesSection />
      <WorksSection />
      <GuaranteeSection />
      <FaqSection items={HOME_FAQ} />
      <ArticlesTeaser />
    </>
  );
}
