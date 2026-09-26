export interface ArticleDef {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  datePublished: string;
  dateModified: string;
  intro: string[];
  sections: { heading: string; paragraphs: string[] }[];
  qa: { question: string; answer: string }[];
  related: { href: string; label: string }[];
}

const PUBLISHED = "2026-09-26";

export const ARTICLES: ArticleDef[] = [
  {
    slug: "cat-costa-montaj-laminat-brasov",
    title: "Cât costă montajul de laminat în Brașov",
    metaTitle: "Cât costă montajul de laminat în Brașov | Montaj Pardoseli Brașov",
    metaDescription:
      "Prețul manoperei la laminat în Brașov, ce intră în preț și ce se plătește separat. Cu exemplu de calcul pentru o cameră de 15 mp.",
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    intro: [
      "Manopera la laminat în Brașov pornește de la 35 lei/mp, pe un suport deja drept și uscat. E un preț orientativ — suma exactă o dau după ce văd camera, nu la telefon.",
      "Pentru o cameră de 15 mp, cu suport bun, calculul simplu e 15 × 35 = 525 lei manoperă. Sub minimul de 800 lei pe vizită, deci pentru o cameră singură plătești minimul, nu prețul pe metru înmulțit.",
    ],
    sections: [
      {
        heading: "Ce e inclus în prețul de bază",
        paragraphs: [
          "Montaj click, folie sau spumă sub laminat, deformare la perete, tăieturi la ușă și la praguri. Atât. Restul se adaugă pe rânduri separate, ca să vezi exact pentru ce plătești.",
        ],
      },
      {
        heading: "Ce se plătește separat",
        paragraphs: [
          "Plinta, montat separat, de obicei 15-25 lei/ml. Demontarea pardoselii vechi, dacă există una. Nivelarea suportului, dacă șapa are denivelări peste 2-3 mm pe 2 metri — asta se vede la măsurătoare, nu pe telefon. Praguri și profile de trecere între camere, bucată cu bucată.",
        ],
      },
      {
        heading: "De ce nu dau un preț fix fără să văd camera",
        paragraphs: [
          "Un laminat pus pe o șapă dreaptă durează câteva ore. Același laminat, pe o șapă cu o gaură de 5 mm, are nevoie de nivelare înainte — altfel se aude și se mișcă în timp. Diferența de preț e reală, nu inventată ca să scot bani în plus după ce am început treaba.",
        ],
      },
    ],
    qa: [
      {
        question: "De ce prețul de pe site e „de la” și nu un număr fix?",
        answer:
          "Pentru că prețul final depinde de starea suportului, de tăieturi și de câte praguri sunt. Suma exactă vine în scris, pe WhatsApp, după ce am văzut camera.",
      },
      {
        question: "Există un preț minim, chiar și pentru o cameră mică?",
        answer:
          "Da, 800 lei pe vizită de lucru. Măsurătoarea în sine e gratuită. Pentru o cameră de 5-6 mp, minimul e mai mare decât metrii × prețul pe mp — îl spun direct, nu îl ascund într-un rând mic.",
      },
    ],
    related: [
      { href: "/montaj-laminat-brasov", label: "Montaj laminat în Brașov" },
      { href: "/preturi", label: "Toate prețurile" },
    ],
  },
  {
    slug: "laminat-sau-vinil",
    title: "Laminat sau vinil: ce alegi",
    metaTitle: "Laminat sau vinil: ce alegi | Montaj Pardoseli Brașov",
    metaDescription:
      "Diferența reală dintre laminat și vinil (LVT/SPC): apă, preț, cameră potrivită. Fără reclamă la un singur produs.",
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    intro: [
      "Nu există un răspuns universal — depinde de cameră, nu de care e „mai bun”. Laminatul are miez din lemn presat (HDF), vinilul (LVT/SPC) are miez din PVC sau piatră și plastic. Diferența asta explică tot restul.",
    ],
    sections: [
      {
        heading: "Unde câștigă laminatul",
        paragraphs: [
          "Living, dormitor, birou — camere uscate, trafic normal. E mai cald la picior, prețul manoperei e similar cu vinilul, dar materialul de calitate comparabilă e de obicei puțin mai ieftin. Nu-l pune în baie sau bucătărie cu risc de baltă lăsată pe jos — miezul din lemn se umflă la umezeală ținută mult timp.",
        ],
      },
      {
        heading: "Unde câștigă vinilul (LVT/SPC)",
        paragraphs: [
          "Bucătărie, baie, hol, spații cu trafic intens sau cu risc de apă vărsată. SPC-ul, cu miez rigid din piatră și plastic, e practic impermeabil și merge bine pe încălzire în pardoseală. LVT-ul clasic e mai flexibil, mai plăcut la pas, dar are nevoie de suport foarte bine nivelat, mai ales dacă se lipește.",
        ],
      },
      {
        heading: "Ce nu se schimbă la niciunul",
        paragraphs: [
          "Amândouă au nevoie de suport plan și uscat. Amândouă se montează click, fără lipici, în varianta cea mai des cerută. Prețul manoperei e apropiat — diferența reală e la materialul cumpărat, nu la munca de montaj.",
        ],
      },
    ],
    qa: [
      {
        question: "Vinilul e mai scump decât laminatul?",
        answer:
          "La manoperă, nu mult diferit. La material, vinilul de calitate (SPC/LVT) e de obicei peste laminatul echivalent, dar rezistă mai bine la umezeală și trafic — se compensează pe termen lung, mai ales în bucătărie sau hol.",
      },
      {
        question: "Pot pune laminat în baie dacă e „water resistant”?",
        answer:
          "Nu recomand. Etichetele „water resistant” rezistă la stropi ștersi rapid, nu la umezeală ținută. Într-o baie cu duș, miezul din lemn se umflă în timp. Pentru baie, alege vinil SPC.",
      },
    ],
    related: [
      { href: "/montaj-laminat-brasov", label: "Montaj laminat" },
      { href: "/montaj-vinil-brasov", label: "Montaj vinil / LVT / SPC" },
    ],
  },
  {
    slug: "montaj-linoleum-brasov",
    title: "Montaj linoleum în Brașov: cum se face",
    metaTitle: "Montaj linoleum în Brașov: cum se face | Montaj Pardoseli Brașov",
    metaDescription:
      "Cum se montează linoleumul în rolă, cum se sudează îmbinările și pentru ce spații se alege în Brașov.",
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    intro: [
      "Linoleumul vine în rolă, nu în plăci — asta schimbă tot procesul față de laminat sau vinil click. Se lipește pe toată suprafața, nu doar pe margini, iar îmbinările dintre role se sudează, nu se lasă simplu una lângă alta.",
    ],
    sections: [
      {
        heading: "Pentru ce spații are sens",
        paragraphs: [
          "Cabinete, spații comerciale, cămine, garsoniere de închiriat — locuri unde trebuie curățenie ușoară și trafic constant, nu neapărat aspect de lux. Se pretează și la subsoluri sau case de vacanță, unde nu contează grosimea sau finisajul premium.",
        ],
      },
      {
        heading: "Cum se montează, în practică",
        paragraphs: [
          "Suportul trebuie plan, curat, uscat — orice denivelare mică se vede prin linoleum, pentru că e un material subțire și flexibil. Rola se aclimatizează în cameră, se lipește cu adeziv, iar la fiecare îmbinare între role se face o sudură la rece sau la cald, ca apa să nu intre pe sub el.",
        ],
      },
    ],
    qa: [
      {
        question: "Linoleumul rezistă la apă?",
        answer:
          "Materialul în sine da, dar punctul sensibil e îmbinarea dintre role. De asta se sudează — o îmbinare nesudată lasă apa să intre dedesubt și se dezlipește în timp.",
      },
      {
        question: "Cât durează montajul pentru o cameră medie?",
        answer:
          "Pentru o cameră de 15-20 mp, cu suport pregătit, de obicei o zi, incluzând timpul de lipire și sudură. Pentru spații mai mari, discutăm durata exactă la măsurătoare.",
      },
    ],
    related: [
      { href: "/montaj-linoleum-brasov", label: "Montaj linoleum — preț și detalii" },
      { href: "/preturi", label: "Toate prețurile" },
    ],
  },
  {
    slug: "montaj-placi-osb",
    title: "Montaj plăci OSB: când ai nevoie și cât costă",
    metaTitle: "Montaj plăci OSB: când ai nevoie și cât costă | Montaj Pardoseli Brașov",
    metaDescription:
      "Când folosești OSB ca strat suport pentru pardoseală, ce grosime alegi și cât costă montajul în Brașov.",
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    intro: [
      "OSB-ul nu e o pardoseală finală — e stratul de dedesubt care pregătește suportul pentru laminat, parchet sau vinil. Îl folosești în două situații clare: pe grinzi de lemn (poduri, mansarde, case pe structură de lemn) sau ca nivelare peste o podea veche neuniformă.",
    ],
    sections: [
      {
        heading: "Ce grosime alegi",
        paragraphs: [
          "Pentru pardoseală cu rol portant pe grinzi, minim 18 mm, ideal 22 mm, dacă distanța dintre grinzi e în jur de 60 cm. Pentru simplă nivelare peste o podea deja solidă, plăcile mai subțiri (10-12 mm) sunt suficiente. Grosimea greșită înseamnă podea care „joacă” sub picior.",
        ],
      },
      {
        heading: "Cum se montează",
        paragraphs: [
          "Plăcile se pun cu latura lungă perpendicular pe grinzi, decalate între rânduri ca să nu se alinieze îmbinările. Se fixează cu șuruburi, nu cuie — cuiul cedează în timp la vibrație. Dacă urmează laminat sau parchet peste, las un rost mic la pereți, la fel ca pentru pardoseala finală.",
        ],
      },
    ],
    qa: [
      {
        question: "OSB-ul se poate monta direct pe beton?",
        answer:
          "Se poate, dar cu barieră de umiditate dedesubt — betonul lasă umezeală care deformează placa în timp dacă nu e izolată corect.",
      },
      {
        question: "Cât costă montajul OSB-ului?",
        answer:
          "Manopera pornește de la 25 lei/mp, fără placa în sine. Prețul placii se adaugă separat, în funcție de grosimea aleasă.",
      },
    ],
    related: [
      { href: "/montaj-osb-brasov", label: "Montaj plăci OSB — preț și detalii" },
      { href: "/montaj-laminat-brasov", label: "Montaj laminat" },
    ],
  },
  {
    slug: "masurare-in-aceeasi-zi",
    title: "Măsurătoare în aceeași zi: cum funcționează",
    metaTitle: "Măsurătoare în aceeași zi în Brașov: cum funcționează | Montaj Pardoseli Brașov",
    metaDescription:
      "Cum funcționează măsurătoarea gratuită în aceeași zi, în Brașov și în localitățile din jur, și ce se întâmplă după.",
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    intro: [
      "„Aceeași zi” nu e un slogan — e o regulă simplă, legată de când scrii pe WhatsApp și de unde ești.",
    ],
    sections: [
      {
        heading: "În Brașov",
        paragraphs: [
          "Scrii pe WhatsApp, de obicei seara sau noaptea, când sunt liber. De regulă vin la măsurătoare a doua zi, sau chiar în aceeași seară dacă am o oră liberă. Măsurătoarea e gratuită și nu te obligă la nimic — vin, măsor, îți spun ce cred despre suport, și îți trimit suma pe WhatsApp.",
        ],
      },
      {
        heading: "În Săcele, Ghimbav, Sânpetru, Hărman, Cristian, Codlea, Râșnov, Predeal, Zărnești",
        paragraphs: [
          "Dacă scrii până la ora 16:00, vin tot în ziua aia. Dacă scrii mai târziu, vin dimineața următoare — nu pentru că nu vreau, ci pentru că drumul dus-întors nu se face în grabă, seara, pe întuneric, fără rost.",
        ],
      },
      {
        heading: "Ce iau cu mine la măsurătoare",
        paragraphs: [
          "O ruletă, o nivelă și, dacă e cazul, un aparat pentru umiditatea șapei. Măsor camera pe bucăți, verific ușile și pragurile, întreb ce material vrei sau, dacă nu ai decis, îți spun ce s-ar potrivi. Suma vine în scris, în aceeași zi sau a doua zi cel târziu.",
        ],
      },
    ],
    qa: [
      {
        question: "Măsurătoarea costă ceva?",
        answer: "Nu, măsurătoarea e gratuită, indiferent dacă lucrarea se face sau nu.",
      },
      {
        question: "Ce trebuie să pregătesc înainte să vin?",
        answer:
          "Ideal, camera golită sau cel puțin cu spațiu de trecere. Dacă ai deja materialul cumpărat, pune-l undeva vizibil ca să verific tipul și cantitatea.",
      },
      {
        question: "Dacă nu sunt acasă, poate măsura altcineva în locul meu?",
        answer:
          "Da, dacă persoana care mă lasă în casă poate confirma suprafața și accesul. Suma finală tot cu tine o discut, pe WhatsApp.",
      },
    ],
    related: [
      { href: "/zone-deservite", label: "Zone deservite" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    slug: "laminat-pe-incalzire-in-pardoseala",
    title: "Parchet laminat pe încălzire în pardoseală: se poate?",
    metaTitle:
      "Parchet laminat pe încălzire în pardoseală: se poate? | Montaj Pardoseli Brașov",
    metaDescription:
      "Când merge laminatul pe încălzire în pardoseală, ce sistem e compatibil și care e limita de temperatură.",
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    intro: [
      "Se poate, dar nu cu orice sistem de încălzire și nu la orice temperatură. Regula scurtă: da pentru încălzire cu apă caldă înglobată în șapă, nu pentru folie termică pusă direct pe beton, sub pardoseală.",
    ],
    sections: [
      {
        heading: "Ce sistem e compatibil",
        paragraphs: [
          "Încălzirea cu apă caldă, integrată în șapă, e cea recomandată sub laminat. Sistemele electrice cu folie termică, așezate direct pe stratul suport (fără să fie înglobate în șapă sau beton), nu sunt recomandate de producători — riscul e ca temperatura să nu fie uniformă și placa să se deformeze.",
        ],
      },
      {
        heading: "Limita de temperatură",
        paragraphs: [
          "Producătorii indică, în general, o limită de 27-28°C la suprafața pardoselii, nu la agentul termic din țevi. Peste acest prag crește riscul ca rosturile să se deschidă sau colțurile plăcilor să se ridice.",
        ],
      },
      {
        heading: "Ce verific eu, la măsurătoare",
        paragraphs: [
          "Tipul sistemului de încălzire, dacă e integrat în șapă sau pe folie, și dacă șapa a trecut prin protocolul de încălzire-răcire înainte de montaj (obligatoriu pentru șape noi). Dacă nu ai certificatul acesta de la instalator, îl cer înainte să pun laminatul — altfel garanția pe montaj nu are sens.",
        ],
      },
    ],
    qa: [
      {
        question: "SPC-ul e mai bun decât laminatul pe încălzire în pardoseală?",
        answer:
          "De regulă da — miezul rigid din piatră și plastic conduce căldura mai uniform și se mișcă mai puțin la variații de temperatură decât miezul din lemn al laminatului.",
      },
      {
        question: "Trebuie să opresc încălzirea înainte de montaj?",
        answer:
          "Da. Sistemul trebuie coborât treptat la o temperatură joasă (de obicei în jur de 18°C) cu câteva zile înainte de montaj și ținut așa și câteva zile după, ca placa să nu se deformeze din cauza schimbării brute de temperatură.",
      },
    ],
    related: [
      { href: "/montaj-laminat-brasov", label: "Montaj laminat" },
      { href: "/montaj-vinil-brasov", label: "Montaj vinil / LVT / SPC" },
    ],
  },
  {
    slug: "cine-cumpara-materialul",
    title: "Cine cumpără materialul: tu sau meseriașul?",
    metaTitle: "Cine cumpără materialul: tu sau meseriașul? | Montaj Pardoseli Brașov",
    metaDescription:
      "De obicei clientul cumpără parchetul sau vinilul, iar meseriașul face montajul. Cum te ajut să alegi corect dacă nu te-ai decis.",
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    intro: [
      "Regula scurtă: cumperi tu materialul, eu fac montajul. Prețurile de pe site sunt doar pentru manoperă — parchetul, vinilul sau linoleumul se adaugă separat, la prețul din magazinul de unde le iei.",
    ],
    sections: [
      {
        heading: "De ce merge mai bine așa",
        paragraphs: [
          "Alegi tu culoarea, modelul și bugetul pentru material, fără să depinzi de ce am eu în stoc sau de marja pe care aș pune-o pe un produs cumpărat prin mine. Eu văd exact ce ai luat, la măsurătoare sau înainte de montaj, și îți spun dacă se potrivește camerei — nu după ce e deja montat.",
        ],
      },
      {
        heading: "Dacă nu te-ai decis încă",
        paragraphs: [
          "Îți spun la măsurătoare ce clasă de rezistență (AC3, AC4, AC5) are sens pentru camera respectivă, dacă trebuie material rezistent la apă pentru bucătărie sau baie, și dacă e compatibil cu încălzirea în pardoseală, dacă ai una. Nu te trimit la un magazin anume — îți spun ce să ceri, tu alegi de unde.",
        ],
      },
    ],
    qa: [
      {
        question: "Pot să pun eu doar materialul și tu doar munca?",
        answer: "Exact așa funcționează în majoritatea cazurilor.",
      },
      {
        question: "Ce se întâmplă dacă materialul cumpărat nu e potrivit?",
        answer:
          "Îți spun direct la măsurătoare sau înainte să tai prima placă. Dacă materialul e deja nepotrivit pentru cameră (de exemplu laminat obișnuit într-o baie), prefer să discutăm înainte, nu după ce e pe jos.",
      },
    ],
    related: [
      { href: "/preturi", label: "Toate prețurile" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export function getArticle(slug: string): ArticleDef | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
