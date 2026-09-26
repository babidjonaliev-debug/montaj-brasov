/**
 * Toate datele reale ale afacerii sunt AICI, într-un singur loc.
 * Când proprietarul trimite datele lui, se schimbă doar valorile din acest fișier.
 *
 * Câmpurile marcate TODO sunt placeholder-e deliberate — nu sunt date reale,
 * nu sunt un CUI, nu este un număr de telefon inventat. Site-ul funcționează
 * și cu ele goale: butoanele rămân vizibile, dar nu vor avea un număr valid
 * până când proprietarul îl trimite.
 */

// --- Identitate ---------------------------------------------------------

/**
 * Nume afișat pe site. E un nume descriptiv de serviciu ("Montaj Pardoseli
 * Brașov"), NU un nume de firmă inventat. Nu are CUI, nu are Registrul
 * Comerțului, nu are adresă — pentru că nu le avem. Proprietarul poate
 * înlocui cu numele lui sau cu un nume de firmă odată ce îl are.
 */
export const BUSINESS_NAME = "Montaj Pardoseli Brașov";

export const BUSINESS_TAGLINE =
  "Montaj laminat, vinil, linoleum și OSB în Brașov. Măsurătoare în aceeași zi.";

// --- Contact --------------------------------------------------------------

/**
 * TODO: numărul de WhatsApp în format E.164, ex: "+40712345678".
 * Lăsat gol intenționat — nu inventăm un număr românesc.
 * Butoanele citesc această constantă; când e goală, linkul wa.me se
 * deschide fără destinatar (interfața rămâne funcțională și vizibilă).
 */
export const WHATSAPP_E164 = "";

/**
 * TODO: același număr, pentru linkul tel: și pentru JSON-LD.
 * De obicei identic cu WHATSAPP_E164.
 */
export const PHONE_E164 = "";

/** Cum arată numărul pentru oameni (cu spații), ex: "0712 345 678". */
export const PHONE_DISPLAY = "";

/**
 * TODO: link-ul către Instagram-ul proprietarului (ucrainean).
 * Nu îl punem în header — doar, opțional, ca legendă pe pagina de lucrări,
 * odată ce există poze.
 */
export const INSTAGRAM_URL = "";

// --- Zonă de lucru ----------------------------------------------------------

/** Brașov + localitățile din jur unde se deplasează. */
export const ZONES = [
  "Brașov",
  "Săcele",
  "Ghimbav",
  "Sânpetru",
  "Hărman",
  "Cristian",
  "Codlea",
  "Râșnov",
  "Predeal",
  "Zărnești",
] as const;

/** Ora limită după care o cerere din afara Brașovului trece pe a doua zi dimineață. */
export const SAME_DAY_CUTOFF_HOUR = 16;

// --- Program ----------------------------------------------------------------

export const HOURS_NOTE =
  "Răspund seara, noaptea și în weekend — nu în program de birou.";

export const HOURS_DETAIL = [
  "Luni–vineri: de la ora 17:00 până noaptea.",
  "Sâmbătă și duminică: toată ziua.",
  "În timpul zilei, în lucru la alt client — răspund la primul mesaj liber.",
] as const;

// --- Prețuri ------------------------------------------------------------------

/**
 * Prețuri „de la", ORIENTATIVE — cercetate pe piața Brașov/România 2026,
 * nu prețurile confirmate ale proprietarului. Suma finală se dă în scris
 * după măsurătoare. Proprietarul le poate schimba oricând, doar aici.
 */
export type PriceKey = "laminat" | "vinil" | "linoleum" | "osb" | "lucrariMici";

export interface PriceEntry {
  label: string;
  fromPrice: number;
  unit: string;
}

export const PRICES: Record<PriceKey, PriceEntry> = {
  laminat: { label: "Montaj laminat", fromPrice: 35, unit: "lei/mp" },
  vinil: { label: "Montaj vinil / LVT / SPC", fromPrice: 35, unit: "lei/mp" },
  linoleum: { label: "Montaj linoleum", fromPrice: 40, unit: "lei/mp" },
  osb: { label: "Montaj plăci OSB", fromPrice: 25, unit: "lei/mp" },
  lucrariMici: {
    label: "Prize, întrerupătoare, mici reparații",
    fromPrice: 60,
    unit: "lei/buc",
  },
};

/** Deplasare + o oră de lucru, minim, plătit chiar dacă lucrarea e mică. Măsurătoarea e gratuită. */
export const MINIMUM_VISIT_FEE = 800;

// --- Garanție ------------------------------------------------------------------

export const WARRANTY_MONTHS = 12;

// --- SEO / domeniu ---------------------------------------------------------------

/**
 * TODO: domeniul real, după ce proprietarul cumpără unul și face deploy.
 * Folosit doar pentru metadate și JSON-LD — schimbă o singură valoare aici.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://montaj-pardoseli-brasov.ro";
