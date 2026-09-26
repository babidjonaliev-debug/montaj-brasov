import type { Metadata } from "next";
import { BUSINESS_NAME } from "@/lib/config";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: `Politica de confidențialitate | ${BUSINESS_NAME}`,
  description:
    "Cum sunt folosite datele trimise prin WhatsApp sau telefon de pe acest site.",
  path: "/politica-de-confidentialitate",
});

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-14 sm:px-6">
      <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
        Politica de confidențialitate
      </h1>

      <div className="mt-8 space-y-6 text-muted-foreground">
        <p>
          Acest site nu are formular de contact și nu colectează date automat prin
          cookie-uri de analiză sau reclamă. Singura cale de contact e butonul
          WhatsApp și numărul de telefon.
        </p>

        <div>
          <h2 className="font-heading text-lg font-semibold text-foreground">
            Ce se întâmplă când apeși butonul WhatsApp
          </h2>
          <p className="mt-2">
            Butonul te trimite direct în aplicația WhatsApp, cu un mesaj precompletat.
            Mesajul se trimite din contul tău de WhatsApp către contul WhatsApp al
            afacerii — la fel cum ai trimite un mesaj oricărui alt contact. Site-ul nu
            stochează, nu vede și nu are acces la conținutul conversației.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-lg font-semibold text-foreground">
            Ce date trimiți și de ce
          </h2>
          <p className="mt-2">
            În mesaj apar, de regulă: localitatea, tipul lucrării, suprafața sau numărul
            de prize/întrerupătoare și adresa. Aceste date sunt folosite strict pentru a
            programa măsurătoarea și a face oferta de preț — nu sunt vândute și nu sunt
            trimise altor firme.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-lg font-semibold text-foreground">
            Cât timp se păstrează conversația
          </h2>
          <p className="mt-2">
            Conversația rămâne în WhatsApp, ca orice altă conversație de pe telefonul
            tău și al afacerii, atât timp cât nu o ștergi. Poți cere oricând ștergerea
            mesajelor tale din conversație.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-lg font-semibold text-foreground">
            Telefon
          </h2>
          <p className="mt-2">
            Dacă suni direct, se aplică regulile normale de telefonie ale operatorului
            tău — acest site nu înregistrează apelurile și nu are acces la ele.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-lg font-semibold text-foreground">
            Contact pentru întrebări despre date
          </h2>
          <p className="mt-2">
            Pentru orice întrebare despre datele trimise prin WhatsApp, scrie tot pe
            WhatsApp — e singurul canal disponibil momentan.
          </p>
        </div>
      </div>
    </div>
  );
}
