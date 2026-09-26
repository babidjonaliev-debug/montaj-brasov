import { WhatsAppCta } from "@/components/site/whatsapp-cta";
import { PHONE_DISPLAY } from "@/lib/config";
import { buildTelLink } from "@/lib/whatsapp";
import Link from "next/link";

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-14 pb-16 sm:px-6 sm:pt-20 sm:pb-24">
      <div className="max-w-2xl">
        <p className="mb-4 inline-flex items-center rounded-full bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
          Brașov și localitățile din jur
        </p>
        <h1 className="font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Montaj de pardoseli în Brașov
        </h1>
        <p className="mt-5 text-lg text-muted-foreground sm:text-xl">
          Scrii pe WhatsApp seara, noaptea sau în weekend. Dacă ești în Brașov, vin la
          măsurătoare chiar în ziua aia — gratuit, fără obligații.
        </p>
        <p className="mt-2 text-base text-muted-foreground">
          Laminat, vinil, linoleum, plăci OSB și mici reparații prin casă.
        </p>
        <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
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
