import type { PriceKey } from "@/lib/config";
import type { ServiceIconKey } from "@/components/site/service-icons";

export interface ServiceDef {
  slug: string;
  priceKey: PriceKey;
  iconKey: ServiceIconKey;
  navTitle: string;
  h1: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
}

export const SERVICES: ServiceDef[] = [
  {
    slug: "montaj-laminat-brasov",
    priceKey: "laminat",
    iconKey: "laminat",
    navTitle: "Montaj laminat",
    h1: "Montaj laminat în Brașov",
    shortDescription:
      "Parchet laminat pus click, cu rost la perete și tăieturi drepte la praguri și uși.",
    metaTitle: "Montaj laminat Brașov — preț de la 35 lei/mp | Montaj Pardoseli Brașov",
    metaDescription:
      "Montaj parchet laminat în Brașov, click pe suport pregătit. Măsurătoare în aceeași zi, preț de la 35 lei/mp, garanție 12 luni la montaj.",
  },
  {
    slug: "montaj-vinil-brasov",
    priceKey: "vinil",
    iconKey: "vinil",
    navTitle: "Montaj vinil / LVT / SPC",
    h1: "Montaj vinil, LVT și SPC în Brașov",
    shortDescription:
      "Vinil click sau lipit, potrivit pentru bucătărie, baie și încălzire în pardoseală.",
    metaTitle: "Montaj vinil, LVT, SPC Brașov — preț de la 35 lei/mp | Montaj Pardoseli Brașov",
    metaDescription:
      "Montaj pardoseală din vinil, LVT sau SPC în Brașov. Click sau lipit, rezistent la apă. Măsurătoare gratuită în aceeași zi, preț de la 35 lei/mp.",
  },
  {
    slug: "montaj-linoleum-brasov",
    priceKey: "linoleum",
    iconKey: "linoleum",
    navTitle: "Montaj linoleum",
    h1: "Montaj linoleum în Brașov",
    shortDescription:
      "Linoleum în rolă, sudat la îmbinări, pentru cabinete, spații comerciale și case de vacanță.",
    metaTitle: "Montaj linoleum Brașov — preț de la 40 lei/mp | Montaj Pardoseli Brașov",
    metaDescription:
      "Montaj linoleum în Brașov, cu sudură la rece la îmbinări. Măsurătoare în aceeași zi, preț de la 40 lei/mp.",
  },
  {
    slug: "montaj-osb-brasov",
    priceKey: "osb",
    iconKey: "osb",
    navTitle: "Montaj plăci OSB",
    h1: "Montaj plăci OSB în Brașov",
    shortDescription:
      "Strat suport din OSB pe grinzi de lemn sau peste podea veche, pregătit pentru laminat sau parchet.",
    metaTitle: "Montaj plăci OSB Brașov — preț de la 25 lei/mp | Montaj Pardoseli Brașov",
    metaDescription:
      "Montaj plăci OSB în Brașov pentru pardoseală pe grinzi de lemn sau nivelare peste podea veche. Preț de la 25 lei/mp.",
  },
  {
    slug: "lucrari-mici-brasov",
    priceKey: "lucrariMici",
    iconKey: "lucrariMici",
    navTitle: "Lucrări mici",
    h1: "Prize, întrerupătoare și mici reparații în Brașov",
    shortDescription:
      "Schimbat prize și întrerupătoare, mici reparații prin casă — nu instalații electrice complete.",
    metaTitle: "Prize, întrerupătoare, mici reparații Brașov | Montaj Pardoseli Brașov",
    metaDescription:
      "Schimb prize și întrerupătoare, mici reparații prin casă în Brașov. Preț de la 60 lei/buc. Nu execut instalații electrice complete sau lucrări care necesită autorizare ANRE.",
  },
];

export function getService(slug: string): ServiceDef | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
