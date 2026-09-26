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
    <section className="mx-auto max-w-6xl px-4 pt-12 pb-10 sm:px-6 sm:pt-16">
      <div className="max-w-2xl">
        {eyebrow ? (
          <p className="mb-4 inline-flex items-center rounded-full bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="font-heading text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">{lead}</p>
        <div className="mt-7">
          <WhatsAppCta presetJobType={presetJobType} />
        </div>
        {children}
      </div>
    </section>
  );
}
