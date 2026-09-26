import { WARRANTY_MONTHS } from "@/lib/config";

export function GuaranteeSection() {
  return (
    <section className="border-t border-brass/25 bg-ink text-ink-foreground">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <span className="mb-4 inline-block h-px w-10 bg-brass" aria-hidden="true" />
        <h2 className="font-heading text-3xl font-semibold sm:text-4xl">
          Garanție {WARRANTY_MONTHS} luni la montaj
        </h2>
        <p className="mt-5 max-w-2xl text-lg text-ink-foreground/75">
          Dacă într-un an de la montaj se desface un rost, se ridică o scândură sau
          plinta cade din cauza muncii mele, vin și repar pe cheltuiala mea. Nu acoperă
          materialul cumpărat de tine, un accident sau o inundație — doar montajul făcut
          de mine.
        </p>
      </div>
    </section>
  );
}
