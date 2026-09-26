import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { WhatsAppCta, WhatsAppIcon } from "@/components/site/whatsapp-cta";
import {
  BUSINESS_NAME,
  HOURS_DETAIL,
  HOURS_NOTE,
  OWNER_NAME,
  PHONE_DISPLAY,
  SAME_DAY_CUTOFF_HOUR,
} from "@/lib/config";
import { buildTelLink, buildWhatsAppLink } from "@/lib/whatsapp";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: `Contact | ${BUSINESS_NAME}`,
  description:
    "Scrie pe WhatsApp sau sună. Program seara, noaptea și în weekend. Măsurătoare gratuită, în aceeași zi în Brașov.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
        Contact — {OWNER_NAME}
      </h1>
      <p className="kicker mt-3">
        Scrii direct cu {OWNER_NAME}, fără telefonist sau secretariat
      </p>
      <p className="mt-4 text-lg text-muted-foreground">{HOURS_NOTE}</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <Link
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-xl border border-border bg-card p-5 hover:shadow-sm"
        >
          <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <WhatsAppIcon className="size-5" />
          </span>
          <span>
            <span className="block text-base font-bold">Scrie-i lui {OWNER_NAME}</span>
            <span className="block text-sm text-muted-foreground">
              Cel mai rapid — mesaj precompletat pe WhatsApp
            </span>
          </span>
        </Link>

        <Link
          href={buildTelLink()}
          className="flex items-center gap-3 rounded-xl border border-border bg-card p-5 hover:shadow-sm"
        >
          <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-foreground">
            <Phone className="size-5" />
          </span>
          <span>
            <span className="block text-base font-bold">
              Sună-l pe {OWNER_NAME}
            </span>
            <span className="block text-sm text-muted-foreground">
              {PHONE_DISPLAY || "Telefon"} — a doua opțiune
            </span>
          </span>
        </Link>
      </div>

      <div className="mt-12">
        <h2 className="font-heading text-xl font-bold">Program</h2>
        <ul className="mt-4 space-y-2 text-muted-foreground">
          {HOURS_DETAIL.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="font-heading text-xl font-bold">
          Când e realistă măsurătoarea în aceeași zi
        </h2>
        <p className="mt-3 text-muted-foreground">
          În Brașov, aproape întotdeauna. În localitățile din jur, dacă scrii până la ora{" "}
          {SAME_DAY_CUTOFF_HOUR}:00 — mai târziu, vin dimineața următoare. Nu promit
          „chiar acum” pentru orice oră din zi; promit un răspuns și o oră concretă, cât
          mai devreme posibil.
        </p>
      </div>

      <div className="mt-10">
        <WhatsAppCta />
      </div>

      <p className="mt-10 text-sm text-muted-foreground">
        Vezi și{" "}
        <Link href="/politica-de-confidentialitate" className="text-primary hover:underline">
          politica de confidențialitate
        </Link>{" "}
        — cum trimit mesajul de pe acest site prin WhatsApp.
      </p>
    </div>
  );
}
