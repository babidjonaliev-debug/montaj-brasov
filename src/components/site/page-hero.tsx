import type { ComponentType, ReactNode, SVGProps } from "react";
import { WhatsAppCta } from "@/components/site/whatsapp-cta";

export function PageHero({
  eyebrow,
  icon: Icon,
  title,
  lead,
  presetJobType,
  children,
}: {
  eyebrow?: string;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  lead: string;
  presetJobType?: string;
  children?: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-16 pb-14 sm:px-6 sm:pt-24 sm:pb-16">
      <div className="relative max-w-2xl">
        <div
          aria-hidden="true"
          className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-background/85 blur-2xl sm:-inset-10"
        />
        <div className="flex items-center gap-4">
          {Icon ? (
            <span className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-card text-primary">
              <Icon className="size-6" />
            </span>
          ) : null}
          {eyebrow ? (
            <p className="kicker">
              <span className="h-px w-6 bg-primary" aria-hidden="true" />
              {eyebrow}
            </p>
          ) : null}
        </div>
        <h1 className="mt-5 font-heading text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">
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
