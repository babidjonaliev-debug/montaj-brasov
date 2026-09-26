/**
 * Toate datele reale ale afacerii sunt AICI, într-un singur loc.
 * Dacă proprietarul trimite date noi, se schimbă doar valorile din acest fișier.
 *
 * Nu inventăm un nume de firmă, un CUI sau o adresă — nu le avem. Numele
 * afișat e prenumele proprietarului, David, nu o denumire de companie.
 */

// --- Identitate ---------------------------------------------------------

/**
 * Nume afișat pe site. E un nume descriptiv de serviciu ("Montaj Pardoseli
 * Brașov"), NU un nume de firmă inventat. Nu are CUI, nu are Registrul
 * Comerțului, nu are adresă — pentru că nu le avem.
 */
export const BUSINESS_NAME = "Montaj Pardoseli Brașov";

export const BUSINESS_TAGLINE =
  "Montaj laminat, vinil, linoleum și OSB în Brașov. Măsurătoare în aceeași zi.";

/**
 * Prenumele proprietarului — persoana reală care răspunde pe WhatsApp și
 * vine la măsurătoare. Apare în header, footer, pe pagina de contact și pe
 * bara fixă de pe mobil, ca să fie clar cu cine vorbește clientul.
 */
export const OWNER_NAME = "David";

// --- Contact --------------------------------------------------------------

/** Numărul de WhatsApp, în format E.164. Folosit pentru linkul wa.me. */
export const WHATSAPP_E164 = "+40743447564";

/** Același număr, pentru linkul tel: și pentru JSON-LD. */
export const PHONE_E164 = "+40743447564";

/** Cum arată numărul pentru oameni. */
export const PHONE_DISPLAY = "+40 743 447 564";

/**
 * TODO: link-ul către Instagram-ul proprietarului, dacă și când există unul.
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
