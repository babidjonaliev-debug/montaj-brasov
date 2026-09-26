import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";
import { IncludedList, SeparateList } from "@/components/site/included-list";
import { FaqSection } from "@/components/site/faq-section";
import { JsonLd } from "@/components/site/json-ld";
import { PRICES, WARRANTY_MONTHS } from "@/lib/config";
import { getService } from "@/data/services";
import { faqPageJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";

const service = getService("montaj-laminat-brasov")!;
const price = PRICES.laminat;

export const metadata: Metadata = pageMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: `/${service.slug}`,
});

const FAQ = [
  {
    question: "Îmi pot cumpăra eu laminatul, sau îl aduci tu?",
    answer:
      "De obicei clientul își cumpără laminatul. Eu fac montajul. Dacă nu te-ai decis, îți spun la măsurătoare ce clasă de rezistență (AC3, AC4) are sens pentru camera ta.",
  },
  {
    question: "Cât durează montajul pentru o cameră obișnuită?",
    answer:
      "Pentru 15-20 mp, cu suport pregătit, de obicei câteva ore, într-o singură vizită. Dacă e nevoie de nivelare înainte, spun asta clar la măsurătoare, cu timpul în plus necesar.",
  },
];

export default function LaminatPage() {
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
        eyebrow="Montaj laminat"
        title={service.h1}
        lead="Parchet laminat pus click, cu rost la perete, tăieturi drepte la praguri și uși. Suprafața rămâne dreaptă și fără scârțâit, dacă suportul e pregătit corect."
        presetJobType="laminat"
      />

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <h2 className="font-heading text-xl font-semibold">Ce include montajul</h2>
            <div className="mt-4">
              <IncludedList
                items={[
                  "Montaj click pe suport pregătit",
                  "Folie sau spumă sub laminat",
                  "Rost de dilatare la pereți",
                  "Tăieturi la ușă și la praguri",
                ]}
              />
            </div>
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold">Ce se plătește separat</h2>
            <div className="mt-4">
              <SeparateList
                items={[
                  "Plintă, montată separat",
                  "Demontarea pardoselii vechi",
                  "Nivelarea suportului, dacă e nevoie",
                  "Praguri și profile de trecere",
                ]}
              />
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-card p-6 sm:p-8">
          <p className="tabular text-2xl font-semibold">
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
          <h2 className="font-heading text-xl font-semibold text-foreground">
            Pentru ce camere se potrivește
          </h2>
          <p>
            Living, dormitor, birou, hol uscat — camere fără risc de apă lăsată pe jos.
            Miezul laminatului e din lemn presat (HDF) și se umflă dacă stă umed mult
            timp, așa că pentru baie sau bucătărie cu risc de baltă recomand{" "}
            <Link href="/montaj-vinil-brasov" className="text-primary hover:underline">
              vinil sau SPC
            </Link>{" "}
            în loc.
          </p>
          <p>
            Garanție {WARRANTY_MONTHS} luni la montaj: dacă un rost se desface sau o
            scândură se ridică din cauza muncii mele, vin și repar.
          </p>
        </div>
      </section>

      <FaqSection items={FAQ} title="Întrebări despre montajul laminatului" />
    </>
  );
}
