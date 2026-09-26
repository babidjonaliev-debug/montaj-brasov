import Link from "next/link";
import {
  OWNER_NAME,
  OWNER_NOW_BUILDING_IN,
  OWNER_WORKED_IN,
  OWNER_YEARS_EXPERIENCE,
} from "@/lib/config";

/** O singură propoziție către /despre. Povestea lungă stă pe pagina aia. */
export function MasterSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
      <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
        <Link
          href="/despre"
          className="font-medium text-foreground underline-offset-4 hover:underline"
        >
          Despre {OWNER_NAME}
        </Link>
        {" — "}
        {OWNER_YEARS_EXPERIENCE} ani de montaj. A lucrat în {OWNER_WORKED_IN}, acum își
        construiește afacerea în {OWNER_NOW_BUILDING_IN}.
      </p>
    </section>
  );
}
