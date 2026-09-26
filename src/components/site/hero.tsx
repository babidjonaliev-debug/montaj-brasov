import { WhatsAppCta } from "@/components/site/whatsapp-cta";
import { PHONE_DISPLAY } from "@/lib/config";
import { buildTelLink } from "@/lib/whatsapp";
import Link from "next/link";

const SPECS = [
  { label: "Zonă", value: "Brașov + împrejurimi" },
  { label: "Măsurătoare", value: "aceeași zi" },
  { label: "Program", value: "seară · noapte · weekend" },
];

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-16 pb-16 sm:px-6 sm:pt-24 sm:pb-20">
      <div className="relative max-w-2xl">
        <div
          aria-hidden="true"
          className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-background/85 blur-2xl sm:-inset-10"
        />
        <p className="kicker">
          <span className="h-px w-6 bg-primary" aria-hidden="true" />
          Brașov și localitățile din jur
        </p>
        <h1 className="mt-5 font-heading text-5xl font-bold leading-[1.02] tracking-tight text-foreground sm:text-6xl">
          Montaj de pardoseli în Brașov
        </h1>
        <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
          Scrii pe WhatsApp seara, noaptea sau în weekend. Dacă ești în Brașov, vin la
          măsurătoare chiar în ziua aia — gratuit, fără obligații.
        </p>
        <p className="mt-2 text-base text-muted-foreground">
          Laminat, vinil, linoleum, plăci OSB și mici reparații prin casă.
        </p>
        <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <WhatsAppCta />
          {PHONE_DISPLAY ? (
            <Link
              href={buildTelLink()}
              className="text-base font-medium text-foreground underline-offset-4 hover:underline"
            >
              sau sună la {PHONE_DISPLAY}
            </Link>
          ) : null}
        </div>
      </div>

      <div className="mt-12 flex max-w-2xl flex-wrap gap-x-8 gap-y-4 border-t border-border pt-6">
        {SPECS.map((spec) => (
          <div key={spec.label}>
            <p className="kicker text-[0.68rem]">{spec.label}</p>
            <p className="mt-1 text-sm font-bold text-foreground">{spec.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
