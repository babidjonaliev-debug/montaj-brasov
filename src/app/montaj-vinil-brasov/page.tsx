import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";
import { IncludedList, SeparateList } from "@/components/site/included-list";
import { FaqSection } from "@/components/site/faq-section";
import { JsonLd } from "@/components/site/json-ld";
import { PRICES, WARRANTY_MONTHS } from "@/lib/config";
import { getService } from "@/data/services";
import { SERVICE_ICONS } from "@/components/site/service-icons";
import { faqPageJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";

const service = getService("montaj-vinil-brasov")!;
const price = PRICES.vinil;

export const metadata: Metadata = pageMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: `/${service.slug}`,
});

const FAQ = [
  {
    question: "Vinilul rezistă la apă în bucătărie și baie?",
    answer:
      "SPC-ul, cu miez din piatră și plastic, e practic impermeabil. LVT-ul clasic rezistă bine la apă vărsată, dar la îmbinări lipite are nevoie de un suport foarte bine nivelat, altfel apa poate intra pe la margini.",
  },
  {
    question: "Merge pe încălzire în pardoseală?",
    answer:
      "Da, SPC-ul e de obicei cea mai bună alegere pentru încălzire în pardoseală — miezul rigid conduce căldura uniform. Verific la măsurătoare tipul sistemului tău înainte să confirm.",
  },
];

export default function VinilPage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: service.h1,
          description: service.metaDescription,
          path: `/${service.slug}`,
        })}
      />
      <JsonLd data={faqPageJsonLd(FAQ)} />

      <PageHero
        eyebrow="Montaj vinil / LVT / SPC"
        icon={SERVICE_ICONS[service.iconKey]}
        title={service.h1}
        lead="Vinil click sau lipit, potrivit pentru bucătărie, baie, hol și spații cu trafic intens. Rezistă bine la apă și la încălzire în pardoseală, în funcție de tip."
        presetJobType="vinil / LVT / SPC"
      />

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <h2 className="font-heading text-xl font-bold">Ce include montajul</h2>
            <div className="mt-4">
              <IncludedList
                items={[
                  "Montaj click sau lipit, după tipul plăcii",
                  "Verificarea și pregătirea de bază a suportului",
                  "Rost de dilatare unde e nevoie",
                  "Tăieturi la ușă și la praguri",
                ]}
              />
            </div>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold">Ce se plătește separat</h2>
            <div className="mt-4">
              <SeparateList
                items={[
                  "Amorsare sau nivelare avansată a suportului",
                  "Demontarea pardoselii vechi",
                  "Plintă și profile de trecere",
                  "Adeziv, pentru varianta lipită",
                ]}
              />
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-xl border border-border bg-card p-6 sm:p-8">
          <p className="tabular text-2xl font-bold">
            de la {price.fromPrice} {price.unit}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Preț orientativ, doar manoperă. Suma exactă vine în scris, după măsurătoare.{" "}
            <Link href="/preturi" className="text-primary hover:underline">
              Vezi toate prețurile
            </Link>
            .
          </p>
        </div>

        <div className="mt-10 max-w-2xl space-y-4 text-sm text-muted-foreground">
          <h2 className="font-heading text-xl font-bold text-foreground">
            Click sau lipit — care e diferența
          </h2>
          <p>
            Varianta click e mai rapidă și se poate demonta ulterior fără să distrugi
            placa. Varianta lipită ține mai bine în spații cu trafic intens sau umiditate
            constantă, dar cere un suport foarte bine nivelat — orice denivelare se vede
            prin placa lipită.
          </p>
          <p>
            Dacă nu ești sigur ce variantă are sens pentru camera ta, comparăm și cu{" "}
            <Link href="/montaj-laminat-brasov" className="text-primary hover:underline">
              laminatul
            </Link>{" "}
            la măsurătoare. Garanție {WARRANTY_MONTHS} luni la montaj.
          </p>
        </div>
      </section>

      <FaqSection items={FAQ} title="Întrebări despre montajul vinilului" />
    </>
  );
}
