import { InstagramIcon } from "@/components/site/social-icons";
import { WhatsAppCta } from "@/components/site/whatsapp-cta";
import {
  INSTAGRAM_URL,
  OWNER_YEARS_EXPERIENCE,
  PHONE_DISPLAY,
  PRICES,
} from "@/lib/config";
import { buildTelLink } from "@/lib/whatsapp";
import Link from "next/link";

/** Cel mai mic „de la” deja publicat, la metru pătrat. Lucrările mici sunt la bucată. */
const FROM_PRICE_PER_SQM = Math.min(
  PRICES.laminat.fromPrice,
  PRICES.vinil.fromPrice,
  PRICES.linoleum.fromPrice,
  PRICES.osb.fromPrice,
);

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl overflow-x-clip px-4 pt-20 pb-20 sm:px-6 sm:pt-28 sm:pb-28">
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
        <p className="mt-6 text-lg text-foreground sm:text-xl">
          Vin la măsurătoare în aceeași zi, în Brașov și în localitățile din jur, seara,
          noaptea și în weekend.
        </p>
        <p className="mt-2 text-base text-muted-foreground">
          Laminat, vinil, linoleum, plăci OSB și mici reparații prin casă. Măsurătoarea
          e gratuită.
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

      <div className="mt-12 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-4 border-t border-border pt-6 sm:grid-cols-4">
        <div>
          <p className="text-sm font-bold text-foreground">Măsurătoare azi</p>
        </div>
        <div>
          <Link href="/preturi" className="text-sm font-bold text-foreground hover:text-primary">
            Preț de la {FROM_PRICE_PER_SQM} lei/mp
          </Link>
        </div>
        <div>
          <Link href="/despre" className="text-sm font-bold text-foreground hover:text-primary">
            {OWNER_YEARS_EXPERIENCE} ani
          </Link>
        </div>
        <div>
          <Link
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-foreground hover:text-primary"
          >
            <InstagramIcon className="size-4 shrink-0" />
            Instagram
          </Link>
          <p className="mt-0.5 text-xs text-muted-foreground">lucrările reale</p>
        </div>
      </div>
    </section>
  );
}
