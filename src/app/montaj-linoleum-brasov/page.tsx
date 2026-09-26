import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";
import { IncludedList, SeparateList } from "@/components/site/included-list";
import { FaqSection } from "@/components/site/faq-section";
import { JsonLd } from "@/components/site/json-ld";
import { PRICES, WARRANTY_MONTHS } from "@/lib/config";
import { getService } from "@/data/services";
import { faqPageJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";

const service = getService("montaj-linoleum-brasov")!;
const price = PRICES.linoleum;

export const metadata: Metadata = pageMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: `/${service.slug}`,
});

const FAQ = [
  {
    question: "De ce se sudează îmbinările la linoleum?",
    answer:
      "Linoleumul vine în rolă, nu în plăci. Fără sudură la îmbinări, apa poate intra pe sub el și se dezlipește în timp. Sudura la rece sau la cald ține îmbinarea etanșă.",
  },
  {
    question: "Pentru ce spații recomanzi linoleum, nu laminat sau vinil?",
    answer:
      "Pentru cabinete, spații comerciale, cămine sau garsoniere de închiriat — locuri unde contează curățenia ușoară și traficul constant, nu neapărat aspectul premium.",
  },
];

export default function LinoleumPage() {
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
        eyebrow="Montaj linoleum"
        title={service.h1}
        lead="Linoleum în rolă, lipit pe toată suprafața și sudat la îmbinări. Potrivit pentru cabinete, spații comerciale și case de vacanță."
        presetJobType="linoleum"
      />

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <h2 className="font-heading text-xl font-semibold">Ce include montajul</h2>
            <div className="mt-4">
              <IncludedList
                items={[
                  "Lipirea rolei pe toată suprafața",
                  "Sudură la îmbinări (la rece sau la cald)",
                  "Tăieturi la ușă și la colțuri",
                  "Verificarea suportului înainte de lipire",
                ]}
              />
            </div>
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold">Ce se plătește separat</h2>
            <div className="mt-4">
              <SeparateList
                items={[
                  "Nivelarea suportului, dacă are denivelări",
                  "Demontarea pardoselii vechi",
                  "Plintă, dacă vrei să o schimbăm",
                  "Adeziv, în funcție de tipul de rolă",
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
            Cum se pregătește suportul
          </h2>
          <p>
            Linoleumul e subțire și flexibil, deci orice denivelare mică a suportului se
            vede prin el. Verific suportul la măsurătoare și, dacă e nevoie, adaug o
            nivelare înainte de lipire — cost separat, spus înainte să începem.
          </p>
          <p>
            Nu ești sigur dacă linoleumul e alegerea potrivită? Poți vedea și{" "}
            <Link href="/montaj-vinil-brasov" className="text-primary hover:underline">
              vinilul
            </Link>{" "}
            ca alternativă. Garanție {WARRANTY_MONTHS} luni la montaj.
          </p>
        </div>
      </section>

      <FaqSection items={FAQ} title="Întrebări despre montajul linoleumului" />
    </>
  );
}
