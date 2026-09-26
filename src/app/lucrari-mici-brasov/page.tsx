import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";
import { IncludedList, SeparateList } from "@/components/site/included-list";
import { FaqSection } from "@/components/site/faq-section";
import { JsonLd } from "@/components/site/json-ld";
import { PRICES } from "@/lib/config";
import { getService } from "@/data/services";
import { SERVICE_ICONS } from "@/components/site/service-icons";
import { faqPageJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";

const service = getService("lucrari-mici-brasov")!;
const price = PRICES.lucrariMici;

export const metadata: Metadata = pageMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: `/${service.slug}`,
});

const FAQ = [
  {
    question: "Faci și instalații electrice complete sau tablou nou?",
    answer:
      "Nu. Nu sunt autorizat ANRE. Schimb prize și întrerupătoare existente și rezolv mici defecte prin casă. Pentru un tablou electric nou sau o instalație de la zero, ai nevoie de un electrician autorizat.",
  },
  {
    question: "Ce înțelegi prin „mici reparații”?",
    answer:
      "Lucruri simple, care nu cer scule speciale sau autorizare: un dulap prins în perete, o ușă care nu se mai închide bine, o priză care s-a slăbit. Dacă nu ești sigur dacă e o lucrare mică, scrie-mi și îți spun direct.",
  },
];

export default function LucrariMiciPage() {
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
        eyebrow="Lucrări mici"
        icon={SERVICE_ICONS[service.iconKey]}
        title={service.h1}
        lead="Schimb prize și întrerupătoare existente și rezolv mici defecte prin casă. Nu execut instalații electrice complete și nu sunt autorizat ANRE."
        presetJobType="lucrări mici (prize/întrerupătoare)"
      />

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <h2 className="font-heading text-xl font-bold">Ce fac</h2>
            <div className="mt-4">
              <IncludedList
                items={[
                  "Înlocuire prize și întrerupătoare existente",
                  "Montare corp de iluminat simplu",
                  "Mici fixări și reparații prin casă",
                  "Depanare defecte simple (nu chemi doi meseriași pentru un lucru mic)",
                ]}
              />
            </div>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold">Ce NU fac</h2>
            <div className="mt-4">
              <SeparateList
                items={[
                  "Instalații electrice complete sau tablou nou",
                  "Lucrări care necesită autorizare ANRE",
                  "Instalații sanitare complexe",
                  "Lucrări la structura electrică a clădirii",
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
            Preț orientativ, doar manoperă, fără piesele înlocuite. Suma exactă vine în
            scris, după ce văd exact ce e de făcut.{" "}
            <Link href="/preturi" className="text-primary hover:underline">
              Vezi toate prețurile
            </Link>
            .
          </p>
        </div>

        <div className="mt-10 max-w-2xl space-y-4 text-sm text-muted-foreground">
          <h2 className="font-heading text-xl font-bold text-foreground">
            De ce e serviciu secundar, nu principal
          </h2>
          <p>
            Munca mea de bază e montajul de pardoseli —{" "}
            <Link href="/montaj-laminat-brasov" className="text-primary hover:underline">
              laminat
            </Link>
            ,{" "}
            <Link href="/montaj-vinil-brasov" className="text-primary hover:underline">
              vinil
            </Link>{" "}
            și{" "}
            <Link href="/montaj-linoleum-brasov" className="text-primary hover:underline">
              linoleum
            </Link>
            . Lucrările mici le fac în plus, când sunt deja la tine în casă sau când e o
            treabă simplă. Pentru instalații electrice serioase, îndrum spre un
            electrician autorizat — nu-mi asum ce nu pot garanta.
          </p>
        </div>
      </section>

      <FaqSection items={FAQ} title="Întrebări despre lucrările mici" />
    </>
  );
}
