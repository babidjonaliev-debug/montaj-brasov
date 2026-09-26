import { WARRANTY_MONTHS } from "@/lib/config";

export function GuaranteeSection() {
  return (
    <section className="border-t border-border bg-ink text-ink-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-heading text-2xl font-semibold sm:text-3xl">
          Garanție {WARRANTY_MONTHS} luni la montaj
        </h2>
        <p className="mt-4 max-w-2xl text-ink-foreground/80">
          Dacă într-un an de la montaj se desface un rost, se ridică o scândură sau
          plinta cade din cauza muncii mele, vin și repar pe cheltuiala mea. Nu acoperă
          materialul cumpărat de tine, un accident sau o inundație — doar montajul făcut
          de mine.
        </p>
      </div>
    </section>
  );
}
