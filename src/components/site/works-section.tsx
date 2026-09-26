import Image from "next/image";
import { WORKS } from "@/data/works";
import { cn } from "@/lib/utils";

export function WorkGallery({ className }: { className?: string }) {
  return (
    <div className={cn("grid gap-8 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {WORKS.map((work) => (
        <figure key={work.src} className="overflow-hidden rounded-2xl border border-border bg-card">
          <Image
            src={work.src}
            alt={work.alt}
            width={work.width}
            height={work.height}
            sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 100vw"
            className="aspect-[4/5] w-full object-cover"
          />
          <figcaption className="px-4 py-3 text-sm leading-relaxed text-muted-foreground">
            {work.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export function WorksSection() {
  if (WORKS.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <h2 className="font-heading text-2xl font-bold sm:text-3xl">Lucrări</h2>
      <p className="mt-3 max-w-xl text-base text-muted-foreground">Câteva camere terminate.</p>
      <WorkGallery className="mt-10" />
    </section>
  );
}
