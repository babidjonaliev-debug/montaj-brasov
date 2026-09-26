/**
 * Poze reale de pe șantiere, de pe site-ul lui David
 * (https://suceavamontajparchet.tilda.ws/), salvate local în /public/lucrari/.
 * Nu sunt stoc și nu sunt servite de pe Tilda.
 *
 * Orașul nu e scris pe poze, așa că legenda e „lucrare”, fără localitate
 * inventată. Site-ul rămâne despre Brașov.
 */
export interface WorkPhoto {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}

export const WORKS: WorkPhoto[] = [
  {
    src: "/lucrari/laminat-spic-dormitor.jpeg",
    alt: "Cameră cu pat și televizor, pardoseală laminată deschisă montată în spic",
    caption: "Lucrare de laminat în spic, cameră cu pat",
    width: 1290,
    height: 1691,
  },
  {
    src: "/lucrari/laminat-spic-camera.jpeg",
    alt: "Cameră goală cu laminat deschis în spic și materiale de montaj lângă perete",
    caption: "Lucrare de laminat în spic, după montaj",
    width: 1290,
    height: 1706,
  },
  {
    src: "/lucrari/laminat-drept-plinte-albe.jpeg",
    alt: "Cameră cu laminat drept, gri-maro, și plinte albe",
    caption: "Lucrare de laminat drept, cu plinte albe",
    width: 1290,
    height: 1573,
  },
  {
    src: "/lucrari/laminat-spic-plinte-albe.jpeg",
    alt: "Cameră cu laminat în spic, nuanță de stejar, și plinte albe",
    caption: "Lucrare de laminat în spic, cu plinte albe",
    width: 1290,
    height: 1361,
  },
  {
    src: "/lucrari/laminat-gri-plinte-negre.jpeg",
    alt: "Cameră cu laminat gri și plinte negre",
    caption: "Lucrare de laminat gri, cu plinte negre",
    width: 1290,
    height: 1589,
  },
  {
    src: "/lucrari/laminat-hol-plinte-negre.jpeg",
    alt: "Hol cu laminat gri și plinte negre, cu uși albe",
    caption: "Lucrare de laminat pe hol, cu plinte negre",
    width: 1290,
    height: 1520,
  },
];
