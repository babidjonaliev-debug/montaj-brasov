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

/**
 * Fapte reale despre David, confirmate de el — nu inventăm nimic în plus
 * (nicio firmă, niciun CUI, niciun "10 ani"). Folosite în blocul de
 * prezentare de pe homepage și, pe scurt, în footer.
 */
export const OWNER_YEARS_EXPERIENCE = 8;
export const OWNER_WORKED_IN = "Ucraina";
/** Acum își construiește afacerea în România, la Brașov. */
export const OWNER_NOW_BUILDING_IN = "România, la Brașov";

// --- Contact --------------------------------------------------------------

/** Numărul de WhatsApp, în format E.164. Folosit pentru linkul wa.me. */
export const WHATSAPP_E164 = "+40743447564";

/** Același număr, pentru linkul tel: și pentru JSON-LD. */
export const PHONE_E164 = "+40743447564";

/** Cum arată numărul pentru oameni. */
export const PHONE_DISPLAY = "+40 743 447 564";

/**
 * Instagram-ul lui David. Aici sunt lucrările și șantierele echipei lui —
 * nu contul ucrainean, nu poze copiate de pe alt cont. Link către profil,
 * fără parametri de urmărire (ex. `?stkn=...`) — doar adresa curată.
 */
export const INSTAGRAM_URL = "https://www.instagram.com/masterr_fix";

// --- Zonă de lucru ----------------------------------------------------------

/**
 * Brașov + localitățile din jur unde se deplasează.
 * Măsurătoarea în aceeași zi acoperă orașul și localitățile de aici,
 * nu tot județul.
 */
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
 * Domeniul public. metadataBase, canonical, sitemap, Open Graph și JSON-LD
 * citesc această valoare. NEXT_PUBLIC_SITE_URL o poate suprascrie la build.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.montajparchet.homes";
