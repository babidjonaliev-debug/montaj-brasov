import type { Metadata } from "next";
import { WhatsAppCta } from "@/components/site/whatsapp-cta";
import { BUSINESS_NAME, SAME_DAY_CUTOFF_HOUR } from "@/lib/config";
import { pageMetadata, serviceJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/site/json-ld";

export const metadata: Metadata = pageMetadata({
  title: `Zone deservite: Brașov și împrejurimi | ${BUSINESS_NAME}`,
  description:
    "Montaj pardoseli în Brașov, Săcele, Ghimbav, Sânpetru, Hărman, Cristian, Codlea, Râșnov, Predeal și Zărnești. Măsurătoare în aceeași zi.",
  path: "/zone-deservite",
});

const ZONE_DETAILS = [
  {
    name: "Brașov",
    note: "Toate cartierele — Centru, Schei, Tractorul, Astra, Bartolomeu, Noua, Stupini, Dârste, Coresi, Avantgarden. Măsurătoare de obicei în aceeași zi.",
  },
  {
    name: "Săcele",
    note: "La aproximativ 10-15 km de centrul Brașovului. Scrii până la 16:00, vin tot în ziua aia.",
  },
  {
    name: "Ghimbav",
    note: "Case și apartamente de-a lungul DN1/DN73. Aceeași regulă de oră ca la Săcele.",
  },
  { name: "Sânpetru", note: "Aproape de Brașov, spre nord — zonă cu multe case noi." },
  { name: "Hărman", note: "Aproximativ 10 km de Brașov, în același interval de deplasare." },
  { name: "Cristian", note: "Pe drumul spre Râșnov, aproximativ 15 km." },
  { name: "Codlea", note: "La vest de Brașov, aproximativ 15 km." },
  {
    name: "Râșnov",
    note: "Aproximativ 20 km. Case și apartamente, nu doar zonă turistică.",
  },
  {
    name: "Predeal",
    note: "Aproximativ 25 km, pe DN1. Iarna las o rezervă de timp mai mare pentru drum — o spun clar când stabilim data.",
  },
  { name: "Zărnești", note: "Aproximativ 30 km, capătul zonei în care mă deplasez." },
];

export default function ZoneDeservitePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <JsonLd
        data={serviceJsonLd({
          name: "Montaj pardoseli — zonă de deservire",
          description:
            "Montaj laminat, vinil, linoleum și OSB în Brașov și localitățile din jur.",
          path: "/zone-deservite",
        })}
      />
      <div className="max-w-2xl">
        <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
          Zone deservite
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          În Brașov vin de obicei chiar în ziua în care scrii. În localitățile din jur, la
          fel — dacă scrii până la ora {SAME_DAY_CUTOFF_HOUR}:00. Mai târziu, vin
          dimineața următoare, nu pentru că nu vreau, ci pentru că drumul dus-întors nu se
          face în grabă, pe întuneric.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {ZONE_DETAILS.map((zone) => (
          <div key={zone.name} className="rounded-xl border border-border bg-card p-5">
            <h2 className="font-heading text-lg font-bold">{zone.name}</h2>
            <p className="mt-1.5 text-sm text-muted-foreground">{zone.note}</p>
          </div>
        ))}
      </div>

      <p className="mt-8 max-w-2xl text-sm text-muted-foreground">
        Ești în altă localitate din județ, mai departe de lista de mai sus? Scrie-mi pe
        WhatsApp — dacă drumul are sens, vin, doar stabilim ora în funcție de distanță.
      </p>

      <div className="mt-8">
        <WhatsAppCta />
      </div>
    </div>
  );
}
