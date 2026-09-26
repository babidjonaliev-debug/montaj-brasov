import Link from "next/link";
import { InstagramIcon } from "@/components/site/social-icons";
import {
  INSTAGRAM_URL,
  OWNER_NAME,
  OWNER_NOW_BUILDING_IN,
  OWNER_WORKED_IN,
  OWNER_YEARS_EXPERIENCE,
} from "@/lib/config";

const FACTS = [
  { label: "Experiență", value: `${OWNER_YEARS_EXPERIENCE} ani, multe proiecte` },
  { label: "A lucrat în", value: OWNER_WORKED_IN },
  { label: "Acum construiește în", value: OWNER_NOW_BUILDING_IN },
];

/**
 * Blocul „cine face montajul" — David, pe scurt, cu fapte reale, nu cu
 * lozinci. Nu inventăm o firmă și nu punem „10 ani" sau alte cifre în
 * plus. „Echipă" apare doar în sensul confirmat: pe Instagram sunt
 * lucrările și șantierele echipei lui.
 */
export function MasterSection() {
  return (
    <section className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-16">
          <div>
            <p className="kicker">
              <span className="h-px w-6 bg-primary" aria-hidden="true" />
              Cine face montajul
            </p>
            <h2 className="mt-4 font-heading text-2xl font-bold sm:text-3xl">
              {OWNER_NAME}, {OWNER_YEARS_EXPERIENCE} ani în montaj de pardoseli
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              {OWNER_NAME} montează pardoseli de {OWNER_YEARS_EXPERIENCE} ani, cu multe
              proiecte duse la capăt. A lucrat în {OWNER_WORKED_IN}, iar acum își
              construiește afacerea în {OWNER_NOW_BUILDING_IN}.
            </p>
            {INSTAGRAM_URL ? (
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                Lucrările și șantierele echipei lui sunt pe{" "}
                <Link
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-primary hover:underline"
                >
                  <InstagramIcon className="size-4" />
                  Instagram
                </Link>
                .
              </p>
            ) : null}
          </div>

          <div className="rounded-xl border border-border bg-card p-6 sm:p-7">
            {FACTS.map((fact, index) => (
              <div key={fact.label} className={index > 0 ? "mt-4 pt-4 border-t border-border" : ""}>
                <p className="kicker text-[0.68rem]">{fact.label}</p>
                <p className="mt-1.5 text-base font-bold text-foreground">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
