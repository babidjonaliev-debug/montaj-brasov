# Montaj Pardoseli Brașov

Site de prezentare + generare de lead-uri pentru un montator de pardoseli din
Brașov (laminat, vinil/LVT/SPC, linoleum, plăci OSB și mici reparații prin
casă). Site 100% în română, orientat spre un singur canal de contact:
**WhatsApp**.

Stack: **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + shadcn/ui**.

## De ce există site-ul

Proprietarul răspunde seara, noaptea și în weekend, pe WhatsApp, și vine la
măsurătoare în aceeași zi în Brașov. Site-ul e construit în jurul acestui
hook, nu în jurul unei liste de servicii. Detaliile de strategie (preturi,
Google Business, anunțuri OLX, ordinea de lansare) sunt în planul din
depozitul agentului, la
`docs/brasov-flooring-plan.md`.

## Un singur loc pentru datele reale

Tot ce ține de identitatea afacerii (nume afișat, telefon, WhatsApp,
Instagram, prețuri, program, zonă deservită, domeniu) e într-un singur
fișier: [`src/lib/config.ts`](./src/lib/config.ts). Câmpurile marcate `TODO`
sunt placeholder-e intenționate — site-ul funcționează și fără ele, dar
butoanele nu au încă un număr real în spate.

Prețurile "de la" (orientative, piața Brașov 2026) sunt tot în acel fișier,
în obiectul `PRICES`.

## Structura site-ului

- `/` — hero, cele 5 servicii, cum lucrăm, prețuri, zonă, lucrări (apare doar
  când există poze reale în `src/data/works.ts`), garanție, întrebări
  frecvente, ghiduri.
- `/montaj-laminat-brasov`, `/montaj-vinil-brasov`, `/montaj-linoleum-brasov`,
  `/montaj-osb-brasov`, `/lucrari-mici-brasov` — câte o pagină per serviciu,
  cu conținut unic (nu texte spinate).
- `/preturi`, `/zone-deservite`, `/contact`,
  `/politica-de-confidentialitate`.
- `/articole` + `/articole/[slug]` — ghiduri SEO, câte un articol per
  întrebare reală de căutare (preț, laminat vs. vinil, încălzire în
  pardoseală etc.), definite în `src/data/articles.ts`.
- `sitemap.xml`, `robots.ts` — generate automat din datele de mai sus.

## Rulare locală

```bash
npm install
npm run dev -- -p 47291 -H 0.0.0.0
```

Apoi deschide `http://localhost:47291`.

```bash
npm run build   # build de producție
npm run start   # rulează build-ul
npm run lint    # ESLint
```

## Adăugarea de poze la lucrări

Pune poza în `public/lucrari/nume-poza.jpg` și adaugă un rând în
`src/data/works.ts`. Secțiunea de lucrări de pe homepage apare automat de
îndată ce lista nu mai e goală — nu există galerie falsă sau poze de stoc.

## Deploy

Nu e făcut deploy încă. Recomandare: [Vercel](https://vercel.com) — conectezi
repo-ul, setezi variabila de mediu `NEXT_PUBLIC_SITE_URL` cu domeniul real și
publici. Pașii de după deploy (Search Console, Google Business Profile,
OLX) sunt detaliați în `docs/brasov-flooring-plan.md`.
