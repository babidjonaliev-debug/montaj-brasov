export interface FaqItem {
  question: string;
  answer: string;
}

export const HOME_FAQ: FaqItem[] = [
  {
    question: "Cât costă montajul unui metru pătrat de pardoseală?",
    answer:
      "Depinde de material și de starea suportului. Laminat de la 35 lei/mp, vinil/LVT/SPC de la 35 lei/mp, linoleum de la 40 lei/mp, OSB de la 25 lei/mp. Astea sunt prețuri orientative pentru manoperă, doar pentru orientare — suma exactă o dau după ce văd camera și șapa, nu la telefon.",
  },
  {
    question: "Pot să-mi cumpăr eu materialul?",
    answer:
      "Da, majoritatea clienților își cumpără parchetul sau vinilul singuri. Eu pun ce aduci tu. Dacă nu ai de unde, îți spun ce să ceri la magazin ca să nu iei ceva nepotrivit pentru camera respectivă.",
  },
  {
    question: "Ce se întâmplă dacă șapa nu e dreaptă?",
    answer:
      "Verific la măsurătoare cu nivela. Dacă are denivelări mici, se rezolvă cu autonivelantă sau folie de nivelare, cost separat, spus înainte să începem. Dacă șapa e crăpată sau umedă, îți spun direct — nu pun pardoseală bună pe bază proastă, se strică în câteva luni.",
  },
  {
    question: "Se poate monta pe încălzire în pardoseală?",
    answer:
      "Laminatul și SPC-ul merg pe încălzire în pardoseală, dar doar cea din șapă, cu apă caldă — nu pe folie termică pusă direct pe beton. Temperatura la suprafață nu trebuie să treacă de 27-28°C. Îți spun la măsurătoare dacă sistemul tău e potrivit.",
  },
  {
    question: "Vii chiar în aceeași zi la măsurătoare?",
    answer:
      "În Brașov, da, de obicei. Scriu pe WhatsApp seara sau noaptea, vin la măsurătoare a doua zi sau chiar în aceeași seară, dacă am o oră liberă. Pentru Săcele, Ghimbav, Sânpetru și restul — dacă scrii până la 16:00, vin tot în ziua aia, mai târziu vin dimineața următoare.",
  },
  {
    question: "Faci și lucrări mici, nu doar pardoseală?",
    answer:
      "Da — schimb prize, întrerupătoare și rezolv mici defecte prin casă. Nu fac instalații electrice complete și nu sunt autorizat ANRE, deci pentru un tablou nou sau o instalație de la zero trebuie să chemi un electrician autorizat.",
  },
];
