import Link from "next/link";
import { InstagramIcon } from "@/components/site/social-icons";
import { INSTAGRAM_URL } from "@/lib/config";

export function InstagramSection() {
  return (
    <section aria-label="Instagram" className="mx-auto max-w-6xl px-4 pb-4 sm:px-6">
      <div className="flex flex-col gap-6 rounded-2xl border border-border bg-card px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:py-10">
        <div className="flex items-start gap-4">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-background text-primary">
            <InstagramIcon className="size-6" />
          </span>
          <div>
            <h2 className="font-heading text-2xl font-bold tracking-tight">
              <Link
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                masterr_fix
              </Link>
            </h2>
            <p className="mt-1.5 text-base text-muted-foreground">Lucrările echipei sunt acolo.</p>
          </div>
        </div>
        <Link
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center gap-2 rounded-lg border border-primary/30 px-5 py-2.5 text-sm font-bold text-primary transition-colors hover:bg-accent"
        >
          <InstagramIcon className="size-4" />
          Instagram
        </Link>
      </div>
    </section>
  );
}
