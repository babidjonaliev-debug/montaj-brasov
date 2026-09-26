import Image from "next/image";
import { WORKS } from "@/data/works";

export function WorksSection() {
  if (WORKS.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <h2 className="font-heading text-2xl font-bold sm:text-3xl">Lucrări</h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {WORKS.map((work) => (
          <figure key={work.src} className="overflow-hidden rounded-xl border border-border">
            <Image
              src={work.src}
              alt={work.alt}
              width={640}
              height={480}
              className="h-56 w-full object-cover"
            />
            <figcaption className="p-3 text-sm text-muted-foreground">
              {work.caption} — {work.location}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
