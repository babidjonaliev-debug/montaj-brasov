import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/data/services";
import { PRICES } from "@/lib/config";
import { cn } from "@/lib/utils";

export function ServicesGrid() {
  const mainServices = SERVICES.slice(0, 4);
  const smallJobs = SERVICES[4];

  return (
    <section id="servicii" className="border-t border-brass/20 bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-heading text-2xl font-semibold sm:text-3xl">Ce fac</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {mainServices.map((service) => (
            <ServiceCard key={service.slug} slug={service.slug} priceKey={service.priceKey} title={service.navTitle} description={service.shortDescription} />
          ))}
        </div>

        {smallJobs ? (
          <div className="mt-4">
            <ServiceCard
              slug={smallJobs.slug}
              priceKey={smallJobs.priceKey}
              title={smallJobs.navTitle}
              description={smallJobs.shortDescription}
              secondary
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}

function ServiceCard({
  slug,
  priceKey,
  title,
  description,
  secondary = false,
}: {
  slug: string;
  priceKey: keyof typeof PRICES;
  title: string;
  description: string;
  secondary?: boolean;
}) {
  const price = PRICES[priceKey];
  return (
    <Link
      href={`/${slug}`}
      className={cn(
        "group flex flex-col justify-between rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-sm",
        secondary && "sm:flex-row sm:items-center sm:gap-6 bg-card/60",
      )}
    >
      <div>
        <h3 className="font-heading text-lg font-semibold">{title}</h3>
        <p className="mt-1.5 text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 sm:mt-4">
        <span className="tabular text-sm font-medium text-foreground">
          de la {price.fromPrice} {price.unit}
        </span>
        <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
}
