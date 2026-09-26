import Link from "next/link";
import { MINIMUM_VISIT_FEE, PRICES } from "@/lib/config";
import { SERVICES } from "@/data/services";
import { ArrowRight } from "lucide-react";

export function PricingList({ variant = "compact" }: { variant?: "compact" | "full" }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
      <ul className="divide-y divide-border">
        {SERVICES.map((service) => {
          const price = PRICES[service.priceKey];
          return (
            <li key={service.slug} className="flex items-baseline justify-between gap-4 py-3">
              <Link href={`/${service.slug}`} className="text-base font-medium hover:text-primary">
                {price.label}
              </Link>
              <span className="tabular whitespace-nowrap text-base font-semibold">
                de la {price.fromPrice} {price.unit}
              </span>
            </li>
          );
        })}
      </ul>

      <div className="mt-6 space-y-2 border-t border-border pt-6 text-sm text-muted-foreground">
        <p>Măsurătoarea e gratuită, indiferent de rezultat.</p>
        <p className="tabular">
          Minim {MINIMUM_VISIT_FEE} lei pe vizită de lucru — o cameră mică nu se calculează
          sub acest prag.
        </p>
        <p>
          Prețurile sunt orientative, pentru piața Brașov 2026. Suma exactă vine în scris,
          pe WhatsApp, după măsurătoare.
        </p>
      </div>

      {variant === "compact" ? (
        <Link
          href="/preturi"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
        >
          Toate prețurile și ce e inclus
          <ArrowRight className="size-4" />
        </Link>
      ) : null}
    </div>
  );
}
