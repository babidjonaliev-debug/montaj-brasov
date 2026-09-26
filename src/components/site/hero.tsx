import { WhatsAppCta } from "@/components/site/whatsapp-cta";
import { PHONE_DISPLAY } from "@/lib/config";
import { buildTelLink } from "@/lib/whatsapp";
import Link from "next/link";

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-16 pb-20 sm:px-6 sm:pt-24 sm:pb-28">
      <div className="max-w-2xl">
        <p className="mb-5 inline-flex items-center gap-2 text-sm font-semibold tracking-[0.14em] text-brass uppercase">
          <span className="h-px w-6 bg-brass" aria-hidden="true" />
          Brașov și localitățile din jur
        </p>
        <h1 className="font-heading text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl">
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
    </section>
  );
}
