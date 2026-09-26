import Link from "next/link";
import { MINIMUM_VISIT_FEE, PRICES } from "@/lib/config";
import { SERVICES } from "@/data/services";
import { SERVICE_ICONS } from "@/components/site/service-icons";
import { ArrowRight } from "lucide-react";

export function PricingList({ variant = "compact" }: { variant?: "compact" | "full" }) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
      <div className="mb-2 flex items-baseline justify-between gap-4">
        <span className="kicker">Serviciu</span>
        <span className="kicker">Preț, de la</span>
      </div>
      <div>
        {SERVICES.map((service) => {
          const price = PRICES[service.priceKey];
          const Icon = SERVICE_ICONS[service.iconKey];
          return (
            <Link key={service.slug} href={`/${service.slug}`} className="spec-row group">
              <span className="flex items-center gap-3">
                <Icon className="size-5 shrink-0 text-primary" />
                <span className="text-base font-medium group-hover:text-primary">
                  {price.label}
                </span>
              </span>
              <span className="spec-rule" aria-hidden="true" />
              <span className="tabular whitespace-nowrap text-base font-bold">
                {price.fromPrice}
                <span className="ml-1 text-sm font-medium text-muted-foreground">
                  {price.unit}
                </span>
              </span>
            </Link>
          );
        })}
      </div>

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
