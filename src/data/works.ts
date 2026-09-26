/**
 * Poze cu lucrări reale. Momentan e goală — nu punem poze de stoc.
 * Secțiunea de lucrări de pe homepage nu se afișează deloc până apare
 * cel puțin o poză aici.
 *
 * Ca să adaugi o lucrare: pune poza în /public/lucrari/ și adaugă un rând:
 * { src: "/lucrari/nume-poza.jpg", alt: "...", caption: "...", location: "Brașov" }
 */
export interface WorkPhoto {
  src: string;
  alt: string;
  caption: string;
  location: string;
}

export const WORKS: WorkPhoto[] = [];
