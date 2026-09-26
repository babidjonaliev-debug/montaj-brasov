import { WhatsAppCta } from "@/components/site/whatsapp-cta";
import { PHONE_DISPLAY } from "@/lib/config";
import { buildTelLink } from "@/lib/whatsapp";
import Link from "next/link";

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl overflow-x-clip px-4 pt-16 pb-12 sm:px-6 sm:pt-24 sm:pb-16">
      <div className="relative max-w-2xl">
        <div
          aria-hidden="true"
          className="absolute -inset-8 -z-10 rounded-[2.5rem] bg-background/90 blur-2xl sm:-inset-12"
        />
        <p className="kicker">
          <span className="h-px w-6 bg-primary" aria-hidden="true" />
          Brașov și localitățile din jur
        </p>
        <h1 className="mt-6 font-heading text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
          Montaj de pardoseli în Brașov
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground sm:text-xl">
          Vin la măsurătoare în aceeași zi, în Brașov și în localitățile din jur, seara,
          noaptea și în weekend.
        </p>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
          Laminat, vinil, linoleum, plăci OSB și mici reparații prin casă. Măsurătoarea
          e gratuită.
        </p>
        <div className="mt-10 flex flex-col items-start gap-4">
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
