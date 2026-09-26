import { WARRANTY_MONTHS } from "@/lib/config";

export function GuaranteeSection() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="kicker">
          <span className="h-px w-6 bg-primary-foreground/60" aria-hidden="true" />
          Garanție scrisă, nu vorbe
        </p>
        <h2 className="mt-4 font-heading text-3xl font-bold sm:text-4xl">
          Garanție {WARRANTY_MONTHS} luni la montaj
        </h2>
        <p className="mt-5 max-w-2xl text-lg text-primary-foreground/85">
          Dacă într-un an de la montaj se desface un rost, se ridică o scândură sau
          plinta cade din cauza muncii mele, vin și repar pe cheltuiala mea. Nu acoperă
          materialul cumpărat de tine, un accident sau o inundație — doar montajul făcut
          de mine.
        </p>
      </div>
    </section>
  );
}
