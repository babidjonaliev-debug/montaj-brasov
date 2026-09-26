import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES, type ServiceDef } from "@/data/services";
import { SERVICE_ICONS } from "@/components/site/service-icons";
import { PRICES } from "@/lib/config";
import { cn } from "@/lib/utils";

export function ServicesGrid() {
  const mainServices = SERVICES.slice(0, 4);
  const smallJobs = SERVICES[4];

  return (
    <section id="servicii">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <h2 className="font-heading text-2xl font-bold sm:text-3xl">Ce fac</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {mainServices.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        {smallJobs ? (
          <div className="mt-6">
            <ServiceCard service={smallJobs} secondary />
          </div>
        ) : null}
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  secondary = false,
}: {
  service: ServiceDef;
  secondary?: boolean;
}) {
  const price = PRICES[service.priceKey];
  const Icon = SERVICE_ICONS[service.iconKey];
  return (
    <Link
      href={`/${service.slug}`}
      className={cn(
        "group flex flex-col justify-between rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30 sm:p-7",
        secondary && "sm:flex-row sm:items-center sm:gap-8",
      )}
    >
      <div className={cn("flex items-start gap-4", secondary && "sm:items-center")}>
        <span className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-primary/25 bg-background text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          <Icon className="size-6" />
        </span>
        <div>
          <h3 className="font-heading text-lg font-bold">{service.navTitle}</h3>
          <p className="mt-1.5 text-sm text-muted-foreground">{service.shortDescription}</p>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 sm:mt-4">
        <span className="tabular text-sm font-bold text-foreground">
          de la {price.fromPrice} {price.unit}
        </span>
        <ArrowRight className="size-4 text-primary transition-transform group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
}
