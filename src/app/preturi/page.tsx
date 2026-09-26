import type { Metadata } from "next";
import Link from "next/link";
import { PricingList } from "@/components/site/pricing-list";
import { WhatsAppCta } from "@/components/site/whatsapp-cta";
import { BUSINESS_NAME } from "@/lib/config";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: `Prețuri montaj pardoseli Brașov | ${BUSINESS_NAME}`,
  description:
    "Prețuri de la pentru montaj laminat, vinil, linoleum, OSB și lucrări mici în Brașov. Suma finală vine în scris, după măsurătoare.",
  path: "/preturi",
});

export default function PreturiPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="max-w-2xl">
        <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
          Prețuri
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Prețurile de mai jos sunt „de la” — pentru manoperă, pe suport deja pregătit.
          Suma finală, cu tot ce ține de camera ta, o dau în scris, pe WhatsApp, după
          măsurătoare.
        </p>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <PricingList variant="full" />
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="font-heading text-xl font-bold">
              Ce schimbă suma finală
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                Starea suportului — o șapă dreaptă costă mai puțin decât una care are
                nevoie de nivelare înainte.
              </li>
              <li>Numărul de tăieturi — praguri, uși, colțuri, nișe.</li>
              <li>
                Cine cumpără materialul — de obicei tu, dar dacă vrei să-l aduc eu,
                discutăm separat.
              </li>
              <li>
                Demontarea pardoselii vechi, dacă există una și trebuie scoasă înainte.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold">Cum plătești</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Discutăm suma și data pe WhatsApp, în scris, înainte să începem. Nu cer
              plată integrală în avans pentru lucrări mici — pentru lucrări mai mari,
              stabilim un avans rezonabil, tot în scris.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold">De ce nu „negociabil”</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Prefer un preț clar, chiar dacă e mai mare decât cel mai ieftin anunț de pe
              internet, decât un număr mic care se schimbă când ajung la tine acasă.
            </p>
          </div>

          <WhatsAppCta />
        </div>
      </div>

      <p className="mt-12 max-w-2xl text-sm text-muted-foreground">
        Vrei să vezi ce include exact fiecare serviciu?{" "}
        <Link href="/montaj-laminat-brasov" className="text-primary hover:underline">
          Laminat
        </Link>
        ,{" "}
        <Link href="/montaj-vinil-brasov" className="text-primary hover:underline">
          vinil
        </Link>
        ,{" "}
        <Link href="/montaj-linoleum-brasov" className="text-primary hover:underline">
          linoleum
        </Link>
        ,{" "}
        <Link href="/montaj-osb-brasov" className="text-primary hover:underline">
          OSB
        </Link>{" "}
        sau{" "}
        <Link href="/lucrari-mici-brasov" className="text-primary hover:underline">
          lucrări mici
        </Link>
        .
      </p>
    </div>
  );
}
