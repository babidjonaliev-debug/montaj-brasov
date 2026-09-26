import type { ReactNode } from "react";
import { WhatsAppCta } from "@/components/site/whatsapp-cta";

export function PageHero({
  eyebrow,
  title,
  lead,
  presetJobType,
  children,
}: {
  eyebrow?: string;
  title: string;
  lead: string;
  presetJobType?: string;
  children?: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-14 pb-10 sm:px-6 sm:pt-20">
      <div className="max-w-2xl">
        {eyebrow ? (
          <p className="mb-5 inline-flex items-center gap-2 text-sm font-semibold tracking-[0.14em] text-brass uppercase">
            <span className="h-px w-6 bg-brass" aria-hidden="true" />
            {eyebrow}
          </p>
        ) : null}
        <h1 className="font-heading text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">{lead}</p>
        <div className="mt-8">
          <WhatsAppCta presetJobType={presetJobType} />
        </div>
        {children}
      </div>
    </section>
  );
}
