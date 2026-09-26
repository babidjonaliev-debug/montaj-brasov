import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ZONES } from "@/lib/config";

export function ZonesSection() {
  return (
    <section className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <h2 className="font-heading text-2xl font-bold sm:text-3xl">Unde ajung</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          În Brașov și în localitățile din jur vin la măsurătoare în aceeași zi. Scrii
          seara, noaptea sau în weekend. Lista de mai jos e zona în care mă deplasez — nu
          tot județul.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {ZONES.map((zone) => (
            <span
              key={zone}
              className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-foreground/80"
            >
              {zone}
            </span>
          ))}
        </div>
        <Link
          href="/zone-deservite"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
        >
          Detalii pe localitate
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
