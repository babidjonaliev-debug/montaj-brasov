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

const service = getService("montaj-osb-brasov")!;
const price = PRICES.osb;

export const metadata: Metadata = pageMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: `/${service.slug}`,
});

const FAQ = [
  {
    question: "Ce grosime de OSB trebuie pentru pardoseală?",
    answer:
      "Pe grinzi de lemn, minim 18 mm, ideal 22 mm, la o distanță uzuală de 60 cm între grinzi. Pentru nivelare peste o podea deja solidă, 10-12 mm sunt suficiente.",
  },
  {
    question: "Se poate monta laminat direct pe OSB?",
    answer:
      "Da, OSB-ul e exact stratul suport folosit pentru asta. După montarea plăcilor, verific dacă suprafața e dreaptă și abia apoi pun laminatul, parchetul sau vinilul peste.",
  },
];

export default function OsbPage() {
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
        eyebrow="Montaj plăci OSB"
        icon={SERVICE_ICONS[service.iconKey]}
        title={service.h1}
        lead="Strat suport din OSB, montat pe grinzi de lemn (poduri, mansarde, case pe structură de lemn) sau ca nivelare peste o podea veche neuniformă."
        presetJobType="OSB"
      />

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <h2 className="font-heading text-xl font-bold">Ce include montajul</h2>
            <div className="mt-4">
              <IncludedList
                items={[
                  "Fixare cu șuruburi, nu cuie",
                  "Plăci decalate între rânduri, ca la panotaj",
                  "Rost mic la pereți",
                  "Verificarea planeității înainte de predare",
                ]}
              />
            </div>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold">Ce se plătește separat</h2>
            <div className="mt-4">
              <SeparateList
                items={[
                  "Plăcile OSB în sine (grosime aleasă la măsurătoare)",
                  "Barieră de umiditate, dacă montăm pe beton",
                  "Demontarea podelei vechi, dacă e cazul",
                  "Pardoseala finală montată peste (laminat, parchet, vinil)",
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
            Preț orientativ, doar manoperă, fără costul plăcilor. Suma exactă vine în
            scris, după măsurătoare.{" "}
            <Link href="/preturi" className="text-primary hover:underline">
              Vezi toate prețurile
            </Link>
            .
          </p>
        </div>

        <div className="mt-10 max-w-2xl space-y-4 text-sm text-muted-foreground">
          <h2 className="font-heading text-xl font-bold text-foreground">
            De ce nu orice grosime merge
          </h2>
          <p>
            O placă prea subțire pe grinzi cu deschidere mare „joacă” sub picior și, în
            timp, se aude și cedează la îmbinări. Aleg grosimea la măsurătoare, în funcție
            de distanța reală dintre grinzi, nu după o regulă generală.
          </p>
          <p>
            Dacă pui laminat peste OSB, vezi și{" "}
            <Link href="/montaj-laminat-brasov" className="text-primary hover:underline">
              pagina de montaj laminat
            </Link>
            . Garanție {WARRANTY_MONTHS} luni la montaj.
          </p>
        </div>
      </section>

      <FaqSection items={FAQ} title="Întrebări despre montajul OSB" />
    </>
  );
}
