import type { Metadata } from "next";
import Link from "next/link";
import { InstagramIcon } from "@/components/site/social-icons";
import { WorkGallery } from "@/components/site/works-section";
import { WhatsAppCta } from "@/components/site/whatsapp-cta";
import { SERVICES } from "@/data/services";
import {
  BUSINESS_NAME,
  INSTAGRAM_URL,
  OWNER_NAME,
  OWNER_NOW_BUILDING_IN,
  OWNER_WORKED_IN,
  OWNER_YEARS_EXPERIENCE,
  PHONE_DISPLAY,
  ZONES,
} from "@/lib/config";
import { pageMetadata } from "@/lib/seo";
import { buildTelLink } from "@/lib/whatsapp";

const SURROUNDINGS = ZONES.filter((zone) => zone !== "Brașov");

export const metadata: Metadata = pageMetadata({
  title: `Despre ${OWNER_NAME} | ${BUSINESS_NAME}`,
  description: `${OWNER_NAME} montează pardoseli de ${OWNER_YEARS_EXPERIENCE} ani. A lucrat în ${OWNER_WORKED_IN}, acum își construiește afacerea în Brașov. Laminat, vinil, linoleum, OSB. Măsurătoare în aceeași zi, seara, noaptea și în weekend.`,
  path: "/despre",
});

export default function DesprePage() {
  const towns = SURROUNDINGS.join(", ");

  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <p className="kicker">
        <span className="h-px w-6 bg-primary" aria-hidden="true" />
        Cine face montajul
      </p>
      <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
        {OWNER_NAME}
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
        {OWNER_NAME} montează pardoseli de {OWNER_YEARS_EXPERIENCE} ani, cu multe
        proiecte duse la capăt. A lucrat în {OWNER_WORKED_IN}. Acum își construiește
        afacerea în {OWNER_NOW_BUILDING_IN}: laminat, vinil, linoleum și plăci OSB, plus
        lucrări mici prin casă.
      </p>

      <section className="mt-12">
        <h2 className="font-heading text-xl font-bold">Lucrări</h2>
        <p className="mt-3 text-base leading-relaxed text-foreground/90">
          Câteva camere terminate. Mai multe sunt pe Instagram.
        </p>
        <WorkGallery className="mt-6 sm:grid-cols-2 lg:grid-cols-2" />
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-xl font-bold">De unde vine și unde lucrează</h2>
        <div className="mt-3 space-y-4 text-base leading-relaxed text-foreground/90">
          <p>
            {OWNER_YEARS_EXPERIENCE} ani de montaj, multe șantiere. A lucrat în{" "}
            {OWNER_WORKED_IN}. Acum e la Brașov și își face treaba aici, în România.
          </p>
          <p>
            Măsurătoarea și montajul sunt în Brașov și în localitățile din jur: {towns}.{" "}
            {OWNER_NAME} vine în aceeași zi în oraș și în localitățile astea. Nu acoperă
            tot județul Brașov. Dacă ești mai departe de listă, scrii pe WhatsApp — îți
            spune dacă drumul are sens.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-xl font-bold">Ce montează, și ce nu</h2>
        <div className="mt-3 space-y-4 text-base leading-relaxed text-foreground/90">
          <p>Lucrările pe care le face:</p>
          <ul className="space-y-2">
            {SERVICES.map((service) => (
              <li key={service.slug}>
                <Link href={`/${service.slug}`} className="font-medium text-primary hover:underline">
                  {service.navTitle}
                </Link>
                <span className="text-muted-foreground"> — {service.shortDescription}</span>
              </li>
            ))}
          </ul>
          <p>
            Lucrările mici sunt prize, întrerupătoare și reparații punctuale prin casă. Nu
            face instalații electrice complete și nu e autorizat ANRE — pentru un tablou
            nou sau o instalație de la zero e nevoie de un electrician autorizat. Nu
            montează gresie și faianță.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-xl font-bold">Cum merge o măsurătoare</h2>
        <div className="mt-3 space-y-4 text-base leading-relaxed text-foreground/90">
          <p>
            Scrii pe WhatsApp, la{" "}
            <Link href={buildTelLink()} className="font-medium text-primary hover:underline">
              {PHONE_DISPLAY}
            </Link>
            . Răspunde seara, noaptea și în weekend — nu în program de birou. În timpul
            zilei e la o lucrare și răspunde la primul moment liber.
          </p>
          <p>
            În Brașov și în localitățile din jur vine la măsurătoare în aceeași zi.
            Vizita e gratuită și nu te obligă să continui cu montajul.
          </p>
          <p>
            La fața locului măsoară camera pe bucăți, nu din ochi: ruletă sau metru laser
            pentru suprafață și lungimile de tăiere, nivelă pentru suport, și umidometrul
            dacă șapa sau lemnul trebuie verificate. Se uită la uși și la praguri.
            Întreabă ce material vrei sau, dacă nu ai decis, spune ce s-ar potrivi
            camerei. Suma pleacă în scris, pe WhatsApp.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-xl font-bold">Ce urmărește la o pardoseală</h2>
        <div className="mt-3 space-y-4 text-base leading-relaxed text-foreground/90">
          <p>
            Înainte de prima placă se uită la suport. O șapă umedă, crăpată sau cu
            denivelări mari nu primește laminat „să vedem ce iese”. Se strică în câteva
            luni, și o spune la măsurătoare, nu după ce materialul e deja jos.
          </p>
          <p>
            La laminat urmărește rostul de la perete și tăietura de la toc. Tocul se taie
            pe înălțimea plăcii plus folia, ca planșa să intre sub toc, nu să se oprească
            în el. La vinil lipit și la linoleum materialul e subțire și copiază fiecare
            groapă, de-asta planeitatea contează mai mult decât la un laminat gros.
          </p>
          <p>
            Dacă există încălzire în pardoseală, verifică dacă e apă caldă înglobată în
            șapă sau folie pusă direct pe beton. De asta depinde dacă materialul ales are
            rost acolo.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-xl font-bold">Lucrările, pe Instagram</h2>
        <div className="mt-3 space-y-4 text-base leading-relaxed text-foreground/90">
          <p>
            Lucrările echipei sunt pe Instagram, la masterr_fix. Pozele sunt de pe
            șantiere, ca să vezi o cameră terminată înainte să scrii — materialul pus,
            îmbinările, cum arată pragul.
          </p>
          <p>
            <Link
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-primary hover:underline"
            >
              <InstagramIcon className="size-4" />
              Instagram — masterr_fix
            </Link>
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-xl font-bold">Scrie-i lui {OWNER_NAME}</h2>
        <p className="mt-3 text-base leading-relaxed text-foreground/90">
          Același număr, {PHONE_DISPLAY}, pe WhatsApp. Seara, noaptea și în weekend. În
          Brașov și în localitățile din jur, măsurătoarea e în aceeași zi.
        </p>
        <div className="mt-6">
          <WhatsAppCta />
        </div>
      </section>
    </article>
  );
}
