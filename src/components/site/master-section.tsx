import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  OWNER_NAME,
  OWNER_NOW_BUILDING_IN,
  OWNER_WORKED_IN,
  OWNER_YEARS_EXPERIENCE,
} from "@/lib/config";

/**
 * Pe homepage, doar cine e și unde a lucrat. Povestea lungă stă pe /despre.
 * Instagram și cei 8 ani sunt deja în banda de sub hero — nu le repetăm aici.
 */
export function MasterSection() {
  return (
    <section className="border-t border-border bg-secondary">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-14">
        <div className="max-w-xl">
          <h2 className="font-heading text-2xl font-bold">
            {OWNER_NAME}, {OWNER_YEARS_EXPERIENCE} ani în montaj
          </h2>
          <p className="mt-2 text-base text-muted-foreground">
            A lucrat în {OWNER_WORKED_IN}. Acum își construiește afacerea în{" "}
            {OWNER_NOW_BUILDING_IN}.
          </p>
        </div>
        <Link
          href="/despre"
          className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-primary hover:underline"
        >
          Despre
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
