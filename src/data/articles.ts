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
  {
    slug: "pret-montaj-parchet-pe-mp",
    title: "Preț montaj parchet pe mp în Brașov",
    metaTitle: "Preț montaj parchet pe mp în Brașov | Montaj Pardoseli Brașov",
    metaDescription:
      "Cât costă montajul unei pardoseli pe metru pătrat în Brașov, pe tip de material — laminat, vinil, linoleum — și ce înseamnă „parchet” în anunțuri.",
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    intro: [
      "În anunțuri și căutări, „parchet” e folosit des ca termen general pentru orice pardoseală dură — laminat, vinil sau chiar parchet lamelar clasic, din lemn masiv. Prețul pe mp diferă mult în funcție de care dintre ele vorbim de fapt, așa că înainte de sumă, hai să clarificăm termenul.",
      "Eu fac montaj de laminat, vinil (LVT/SPC), linoleum și OSB — nu montez parchet masiv lipit sau bătut în cuie, e o meserie separată, cu scule și experiență diferite. Dacă tu cauți „parchet” dar de fapt vrei laminat sau vinil, prețurile de mai jos sunt pentru manoperă, orientative.",
    ],
    sections: [
      {
        heading: "Preț pe mp, pe tip de material",
        paragraphs: [
          "Laminat: de la 35 lei/mp. Vinil, LVT sau SPC: de la 35 lei/mp. Linoleum: de la 40 lei/mp, pentru că are și pasul de sudură la îmbinări. Toate sunt prețuri de manoperă, pe un suport deja pregătit — materialul se cumpără separat, de obicei de client.",
        ],
      },
      {
        heading: "Ce schimbă suma finală pe mp",
        paragraphs: [
          "Starea șapei — o șapă dreaptă costă mai puțin decât una care are nevoie de nivelare înainte. Numărul de tăieturi la praguri, uși și colțuri. Suprafața totală — sub minimul de 800 lei pe vizită, o cameră mică plătește minimul, nu prețul pe mp înmulțit cu metrii.",
        ],
      },
      {
        heading: "Dacă vrei parchet masiv sau lamelar clasic",
        paragraphs: [
          "Nu e serviciul meu — recomand un meseriaș specializat în parchet lipit sau bătut în cuie, urmat de șlefuire și lăcuire. Dacă în schimb te interesează un aspect similar de lemn, dar montaj mai simplu, laminatul de calitate cu textură de lemn e o variantă mai rapidă și mai ieftină la manoperă.",
        ],
      },
    ],
    qa: [
      {
        question: "De ce prețul pe mp diferă între anunțuri?",
        answer:
          "Pentru că „parchet” înseamnă lucruri diferite — de la laminat ieftin la parchet masiv lăcuit la fața locului. Manopera și timpul de lucru diferă mult între ele, deci și prețul.",
      },
      {
        question: "Montezi și parchet masiv, dacă îl aduc eu deja tăiat?",
        answer:
          "Nu, montajul de parchet masiv (lipit sau în cuie) cere scule și tehnică diferite de laminat sau vinil. Recomand un specialist pe parchet clasic pentru asta.",
      },
    ],
    related: [
      { href: "/montaj-laminat-brasov", label: "Montaj laminat" },
      { href: "/montaj-vinil-brasov", label: "Montaj vinil / LVT / SPC" },
      { href: "/preturi", label: "Toate prețurile" },
    ],
  },
  {
    slug: "timp-montaj-laminat",
    title: "În cât timp se montează laminatul",
    metaTitle: "În cât timp se montează laminatul | Montaj Pardoseli Brașov",
    metaDescription:
      "Cât durează montajul de laminat pentru o cameră, un apartament întreg, și ce anume prelungește lucrarea.",
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    intro: [
      "Pentru o cameră obișnuită, cu suport deja pregătit, montajul de laminat durează câteva ore, într-o singură vizită. Timpul crește odată cu suprafața, cu numărul de tăieturi și cu starea șapei — nu e un număr fix, dar există reguli simple de estimare.",
    ],
    sections: [
      {
        heading: "Pentru o cameră (15-20 mp)",
        paragraphs: [
          "Cu suport drept, curat și uscat, de obicei 3-5 ore, incluzând tăieturile la praguri și uși și rostul de dilatare la pereți. Aici nu intră timpul de aclimatizare a laminatului, care se face înainte, nu în ziua montajului.",
        ],
      },
      {
        heading: "Pentru un apartament întreg",
        paragraphs: [
          "Pentru 60-80 mp, pe camere separate, calculez de obicei 1-2 zile de lucru, în funcție de câte praguri și colțuri sunt și dacă e nevoie de nivelare pe undeva. Spun timpul estimat clar la măsurătoare, nu-l aflu abia când ajung cu sculele.",
        ],
      },
      {
        heading: "Ce prelungește lucrarea",
        paragraphs: [
          "Nivelarea suportului, dacă șapa are denivelări — se adaugă timp de uscare între straturi. Multe praguri, nișe sau colțuri neregulate — fiecare tăietură suplimentară costă timp. Demontarea unei pardoseli vechi, dacă nu e scoasă deja înainte să vin.",
        ],
      },
    ],
    qa: [
      {
        question: "Pot sta în casă cât montezi laminatul?",
        answer:
          "Da, fără probleme — de obicei lucrez camera cu camera, ca să ai mereu un spațiu liber de mers.",
      },
      {
        question: "Se poate monta laminat într-o singură zi în tot apartamentul?",
        answer:
          "Pentru apartamente mici, uneori da. Pentru unele mai mari sau cu suport care are nevoie de pregătire, de obicei sunt 2 zile — îți spun exact la măsurătoare, cu zilele estimate.",
      },
    ],
    related: [
      { href: "/montaj-laminat-brasov", label: "Montaj laminat" },
      { href: "/preturi", label: "Toate prețurile" },
    ],
  },
  {
    slug: "aclimatizarea-laminatului-inainte-de-montaj",
    title: "Aclimatizarea laminatului înainte de montaj",
    metaTitle: "Aclimatizarea laminatului înainte de montaj | Montaj Pardoseli Brașov",
    metaDescription:
      "De ce laminatul trebuie lăsat în cameră câteva zile înainte de montaj și ce se întâmplă dacă sari peste acest pas.",
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    intro: [
      "Laminatul are miez din lemn presat (HDF) — se mișcă puțin în funcție de temperatură și umiditate. Dacă vine direct din depozit sau din maşină rece și se montează pe loc, plăcile se pot dilata sau contracta după montaj, iar rosturile se deschid sau se ridică în timp.",
    ],
    sections: [
      {
        heading: "Cât timp durează aclimatizarea",
        paragraphs: [
          "De obicei 48 de ore, cu cutiile puse orizontal, nedesfăcute complet, direct în camera unde se montează — nu în hol sau garaj, unde temperatura e diferită de cea din cameră.",
        ],
      },
      {
        heading: "Ce condiții trebuie să fie în cameră",
        paragraphs: [
          "Temperatură normală de locuit, în jur de 18-24°C, și umiditate care nu variază brusc. Dacă tocmai s-a terminat zugrăveala sau șapa e proaspătă, umiditatea din aer e mai mare decât normal — aștept și asta să se stabilizeze, nu doar temperatura.",
        ],
      },
      {
        heading: "Ce se întâmplă dacă sari peste acest pas",
        paragraphs: [
          "Plăcile montate „la rece” se pot dilata în primele săptămâni, mai ales dacă apoi pornești caloriferele. Rezultatul e un rost care se deschide vizibil sau o placă ce se ridică ușor la margine — o problemă care apare abia după montaj, nu în ziua lucrării.",
        ],
      },
    ],
    qa: [
      {
        question: "Trebuie să desfac cutiile de laminat cât aclimatizează?",
        answer:
          "Nu complet — le las în cameră, cu folia parțial deschisă, ca aerul din jur să ajungă la plăci, fără să le expun direct la praf sau umezeală de pe jos.",
      },
      {
        question: "Aclimatizarea e inclusă în ziua montajului?",
        answer:
          "Nu, se face înainte, de obicei cu 2 zile mai devreme, în camera respectivă. Dacă materialul e deja la tine de câteva zile, de multe ori e deja aclimatizat până vin eu.",
      },
    ],
    related: [
      { href: "/montaj-laminat-brasov", label: "Montaj laminat" },
      { href: "/preturi", label: "Toate prețurile" },
    ],
  },
  {
    slug: "pregatirea-sapei-inainte-de-parchet",
    title: "Pregătirea șapei înainte de parchet",
    metaTitle: "Pregătirea șapei înainte de parchet | Montaj Pardoseli Brașov",
    metaDescription:
      "Ce verific la șapă înainte de a monta laminat, vinil sau linoleum — planeitate, umiditate, fisuri — și cum se rezolvă problemele găsite.",
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    intro: [
      "Orice pardoseală pusă peste o șapă nepotrivită se strică în timp, nu la montaj. De asta verific șapa înainte să pun prima placă, nu după — iar dacă are probleme, prefer să le spun direct decât să le ascund sub un strat nou.",
    ],
    sections: [
      {
        heading: "Planeitatea",
        paragraphs: [
          "Verific cu nivela pe mai multe direcții. O denivelare de peste 2-3 mm pe 2 metri liniari se simte sub pardoseală și, în timp, produce scârțâit sau rosturi deschise. Se rezolvă cu autonivelantă sau folie de nivelare, cost separat, spus înainte să începem.",
        ],
      },
      {
        heading: "Umiditatea",
        paragraphs: [
          "O șapă nouă are nevoie de timp de uscare — cu regula generală de aproximativ o lună per centimetru de grosime, în condiții normale. Dacă e o șapă recentă și nu sunt sigur, verific cu un aparat de măsură înainte de montaj, nu ghicesc din ochi.",
        ],
      },
      {
        heading: "Fisurile și praful",
        paragraphs: [
          "O fisură mică, stabilă, nu e neapărat o problemă — dar una activă (care se mișcă) trebuie tratată înainte, altfel se transmite în pardoseala nouă. Praful și resturile de construcție se curăță complet — orice rămâne dedesubt se simte cu timpul.",
        ],
      },
    ],
    qa: [
      {
        question: "Cine face nivelarea, tu sau altcineva?",
        answer:
          "O fac eu, cu autonivelantă sau folie de nivelare, ca parte din pregătire — cost separat de manopera pardoselii, spus clar înainte să începem.",
      },
      {
        question: "Cât timp trebuie să treacă de la o șapă nouă până montezi?",
        answer:
          "Depinde de grosime, dar orientativ o lună per centimetru. Verific cu aparatul la măsurătoare dacă e pe muchie de timp — nu montez pe o șapă încă umedă, garanția nu are sens altfel.",
      },
    ],
    related: [
      { href: "/montaj-laminat-brasov", label: "Montaj laminat" },
      { href: "/montaj-vinil-brasov", label: "Montaj vinil / LVT / SPC" },
      { href: "/preturi", label: "Toate prețurile" },
    ],
  },
  {
    slug: "diferenta-dintre-spc-si-lvt",
    title: "Diferența dintre SPC și LVT",
    metaTitle: "Diferența dintre SPC și LVT | Montaj Pardoseli Brașov",
    metaDescription:
      "SPC și LVT sunt amândouă pardoseli vinilice, dar cu miez diferit — ce înseamnă asta pentru rezistență, senzație la pas și preț.",
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    intro: [
      "Amândouă sunt pardoseli vinilice, click, rezistente la apă — dar miezul din interiorul plăcii e diferit, și asta schimbă cum se simt la pas și unde au sens.",
    ],
    sections: [
      {
        heading: "SPC — miez rigid",
        paragraphs: [
          "Miezul e din piatră măcinată și PVC, foarte rigid și stabil dimensional — se mișcă puțin la variații de temperatură, de asta merge bine pe încălzire în pardoseală. E mai puțin „moale” la pas decât LVT-ul, ceva mai apropiat de senzația unei gresii ușoare, dar cu cald la contact.",
        ],
      },
      {
        heading: "LVT — miez flexibil",
        paragraphs: [
          "Miezul e din PVC flexibil, fără piatră. Se simte mai plăcut și mai „cald” la pas, aproape ca vinilul clasic în rolă, dar are nevoie de un suport foarte bine nivelat — orice denivelare mică se transmite mai vizibil prin el decât prin SPC.",
        ],
      },
      {
        heading: "Care are sens pentru tine",
        paragraphs: [
          "Pentru bucătărie, hol sau trafic intens, cu suport nu perfect neted, SPC e varianta mai sigură. Pentru dormitor sau living, unde vrei senzația cea mai plăcută la pas și suportul e deja foarte bine pregătit, LVT poate fi alegerea mai bună. Manopera de montaj e similară la amândouă.",
        ],
      },
    ],
    qa: [
      {
        question: "SPC-ul e mai scump decât LVT-ul?",
        answer:
          "De obicei da, la material — miezul rigid din piatră costă mai mult decât PVC-ul flexibil. La manoperă, prețul e același.",
      },
      {
        question: "Se montează la fel, în click, amândouă?",
        answer:
          "Da, majoritatea variantelor de SPC și LVT se montează click, fără lipici. Unele variante de LVT se lipesc integral, dar e mai rar cerut — se vede la măsurătoare ce ai ales.",
      },
    ],
    related: [
      { href: "/montaj-vinil-brasov", label: "Montaj vinil / LVT / SPC" },
      { href: "/preturi", label: "Toate prețurile" },
    ],
  },
  {
    slug: "linoleum-sau-vinil",
    title: "Linoleum sau vinil: ce alegi",
    metaTitle: "Linoleum sau vinil: ce alegi | Montaj Pardoseli Brașov",
    metaDescription:
      "Diferența practică dintre linoleum în rolă și vinil click (LVT/SPC) — montaj, preț, unde are sens fiecare.",
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    intro: [
      "Amândouă sunt rezistente la apă și la trafic, dar se montează complet diferit și au sens în spații diferite. Nu e o alegere „care e mai bun”, ci „ce se potrivește la tine”.",
    ],
    sections: [
      {
        heading: "Cum se montează, diferența reală",
        paragraphs: [
          "Linoleumul vine în rolă, se lipește integral pe toată suprafața, iar îmbinările dintre role se sudează. Vinilul (LVT/SPC) vine în plăci sau șipci, de obicei montate click, fără lipici, plăci care se pot demonta și schimba individual dacă se strică una.",
        ],
      },
      {
        heading: "Unde are sens linoleumul",
        paragraphs: [
          "Spații comerciale, cabinete, cămine, garsoniere de închiriat — locuri cu trafic constant, unde întreținerea ușoară contează mai mult decât aspectul premium. E și mai ieftin la material, de obicei, decât un vinil de calitate similară.",
        ],
      },
      {
        heading: "Unde are sens vinilul",
        paragraphs: [
          "Locuințe, unde vrei un aspect mai plăcut, texturi de lemn sau piatră realiste, și posibilitatea să schimbi o placă deteriorată fără să refaci toată camera. Merge și pe încălzire în pardoseală, mai ales varianta SPC.",
        ],
      },
    ],
    qa: [
      {
        question: "Care rezistă mai bine la apă, linoleumul sau vinilul?",
        answer:
          "Amândouă rezistă bine, dar punctul sensibil la linoleum e îmbinarea dintre role, dacă nu e sudată corect. Vinilul click, montat corect cu rost la pereți, nu are acest risc.",
      },
      {
        question: "Linoleumul se poate demonta și refolosi ca vinilul?",
        answer:
          "Nu, e lipit integral pe toată suprafața, deci demontarea înseamnă practic distrugerea lui. Vinilul click se poate demonta plăcuță cu plăcuță.",
      },
    ],
    related: [
      { href: "/montaj-linoleum-brasov", label: "Montaj linoleum" },
      { href: "/montaj-vinil-brasov", label: "Montaj vinil / LVT / SPC" },
      { href: "/preturi", label: "Toate prețurile" },
    ],
  },
  {
    slug: "montaj-plinte",
    title: "Montaj plinte: cum se face și cât costă",
    metaTitle: "Montaj plinte: cum se face și cât costă | Montaj Pardoseli Brașov",
    metaDescription:
      "Cum se montează plinta după pardoseală, ce tipuri există și cât costă montajul pe metru liniar în Brașov.",
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    intro: [
      "Plinta se montează după ce pardoseala e pusă, nu înainte — acoperă rostul de dilatare de la perete și dă un aspect finit camerei. E o lucrare separată de montajul pardoselii, cu preț propriu.",
    ],
    sections: [
      {
        heading: "Tipuri de plintă",
        paragraphs: [
          "MDF, cea mai des folosită cu laminat — vine adesea în același decor ca placa, se taie la unghi în colțuri. PVC, mai rezistentă la umezeală, potrivită pentru vinil în bucătărie sau baie. Plinta din lemn masiv, mai rar cerută, mai scumpă și mai greu de montat drept pe pereți neuniformi.",
        ],
      },
      {
        heading: "Cum se montează",
        paragraphs: [
          "Se fixează cu clipsuri sau adeziv, în funcție de tip și de peretele pe care se pune (gips-carton vs zidărie). Colțurile se taie la 45°, iar la pereți lungi, îmbinările între bucăți se fac cu piese de conectare sau tăietură dreaptă, ca să nu se vadă rostul.",
        ],
      },
      {
        heading: "Cât costă",
        paragraphs: [
          "Manopera de montaj plintă e de obicei 15-25 lei/ml, în funcție de tipul de plintă și de numărul de colțuri și îmbinări. Plinta în sine se adaugă separat, la prețul din magazin. Nu e inclusă automat în prețul de montaj al pardoselii — o spun clar la măsurătoare.",
        ],
      },
    ],
    qa: [
      {
        question: "Plinta e inclusă în prețul de montaj al laminatului?",
        answer:
          "Nu, e o lucrare separată, cu preț propriu pe metru liniar. O pot face în aceeași vizită, dar se calculează distinct.",
      },
      {
        question: "Pot să-mi cumpăr singur plinta, ca și materialul pentru pardoseală?",
        answer:
          "Da, la fel ca la pardoseală — tu alegi și cumperi plinta, eu o montez. Îți spun la măsurătoare ce tip se potrivește cu pardoseala aleasă.",
      },
    ],
    related: [
      { href: "/montaj-laminat-brasov", label: "Montaj laminat" },
      { href: "/preturi", label: "Toate prețurile" },
    ],
  },
  {
    slug: "montaj-osb-sub-parchet",
    title: "Montaj OSB sub parchet: când ai nevoie",
    metaTitle: "Montaj OSB sub parchet: când ai nevoie | Montaj Pardoseli Brașov",
    metaDescription:
      "Când are sens un strat de OSB sub laminat sau parchet, ce rezolvă și de ce nu e nevoie de el peste orice șapă.",
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    intro: [
      "OSB-ul nu e obligatoriu sub orice pardoseală — e o soluție pentru două situații clare: podea pe structură de lemn (grinzi) sau o șapă/podea veche prea neuniformă ca să primească direct pardoseala finală. Pe o șapă dreaptă și în stare bună, nu ai nevoie de el.",
    ],
    sections: [
      {
        heading: "Când ai nevoie de OSB",
        paragraphs: [
          "Pe grinzi de lemn — poduri, mansarde, case pe structură de lemn — OSB-ul creează suportul rigid pe care se montează apoi laminatul, vinilul sau parchetul. Pe o podea veche din lemn, deformată sau cu scârțâit, un strat de OSB nivelează și rigidizează suprafața înainte de pardoseala nouă.",
        ],
      },
      {
        heading: "Când nu ai nevoie",
        paragraphs: [
          "Pe o șapă de beton dreaptă și uscată, OSB-ul nu ajută cu nimic — laminatul sau vinilul se montează direct pe folie sau spumă. Adăugarea lui inutilă înseamnă doar cost și grosime în plus, fără beneficiu real.",
        ],
      },
      {
        heading: "Cum se pregătește pentru pardoseala finală",
        paragraphs: [
          "Plăcile trebuie fixate corect, cu șuruburi, fără joc, și cu rosturi mici între ele pentru dilatare, la fel ca pentru pardoseala care urmează peste ele. Grosimea și modul exact de fixare depind de distanța dintre grinzi — le detaliez la măsurătoare, când văd structura.",
        ],
      },
    ],
    qa: [
      {
        question: "OSB-ul sub parchet ține loc de nivelare?",
        answer:
          "Doar dacă podeaua de dedesubt e din lemn. Peste o șapă de beton denivelată, folosesc autonivelantă, nu OSB — sunt soluții pentru probleme diferite.",
      },
      {
        question: "Se poate monta parchet direct pe OSB, fără altceva?",
        answer:
          "Pentru laminat sau vinil click, da, cu folie sau spumă peste OSB. Pentru parchet masiv lipit sau în cuie, discutăm separat — nu e serviciul meu de bază.",
      },
    ],
    related: [
      { href: "/montaj-osb-brasov", label: "Montaj plăci OSB" },
      { href: "/articole/montaj-placi-osb", label: "Montaj plăci OSB — grosime și montaj" },
      { href: "/montaj-laminat-brasov", label: "Montaj laminat" },
      { href: "/preturi", label: "Toate prețurile" },
    ],
  },
  {
    slug: "parchet-intr-un-apartament-nou",
    title: "Parchet într-un apartament nou: ce trebuie să știi",
    metaTitle: "Parchet într-un apartament nou: ce trebuie să știi | Montaj Pardoseli Brașov",
    metaDescription:
      "De ce nu montezi pardoseala imediat după predarea apartamentului nou și ce verific înainte, ca să nu se strice în primul an.",
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    intro: [
      "Într-un apartament nou, cea mai frecventă greșeală e graba — montaj imediat după predare, pe o șapă încă umedă. Se vede bine abia peste câteva luni, când rosturile se deschid sau placa se ridică, exact în perioada de garanție a construcției, nu a mea.",
    ],
    sections: [
      {
        heading: "Șapa proaspătă are nevoie de timp",
        paragraphs: [
          "Regula generală e aproximativ o lună de uscare per centimetru de grosime a șapei, în condiții normale de temperatură. Pentru o șapă de 5 cm, asta înseamnă câteva luni, nu câteva săptămâni. Verific cu aparatul de umiditate la măsurătoare, nu presupun.",
        ],
      },
      {
        heading: "Ce mai verific într-un apartament nou",
        paragraphs: [
          "Planeitatea șapei — constructorii lasă adesea denivelări mici, acoperite ușor de tencuială și zugrăveală, dar vizibile la nivelă. Dacă ai încălzire în pardoseală, cer protocolul de încălzire-răcire de la instalator înainte să montez — obligatoriu pentru șape noi, altfel garanția pe montaj nu are sens.",
        ],
      },
      {
        heading: "Ce poți face în așteptare",
        paragraphs: [
          "Aerisești constant, fără să forțezi uscarea cu căldură prea mare dintr-o dată — o șapă uscată forțat crapă. Poți alege și cumpăra materialul din timp, ca să fie deja aclimatizat în apartament când șapa e, în sfârșit, pregătită.",
        ],
      },
    ],
    qa: [
      {
        question: "Pot monta laminat la o lună de la predarea apartamentului?",
        answer:
          "Depinde de grosimea șapei și de cât de bine se usucă — verific cu aparatul, nu dau un răspuns fix fără să văd apartamentul.",
      },
      {
        question: "Dacă montez prea repede, ce riscuri sunt?",
        answer:
          "Umiditatea rămasă în șapă trece în pardoseală — laminatul se poate umfla, vinilul se poate dezlipi la îmbinări. E o problemă care apare la câteva luni, când e mai greu și mai costisitor de reparat.",
      },
    ],
    related: [
      { href: "/montaj-laminat-brasov", label: "Montaj laminat" },
      { href: "/montaj-vinil-brasov", label: "Montaj vinil / LVT / SPC" },
      { href: "/preturi", label: "Toate prețurile" },
    ],
  },
];

export function getArticle(slug: string): ArticleDef | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
