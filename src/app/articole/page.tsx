import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ARTICLES } from "@/data/articles";
import { BUSINESS_NAME } from "@/lib/config";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: `Articole despre montaj pardoseli | ${BUSINESS_NAME}`,
  description:
    "Răspunsuri concrete la întrebările pe care le pun clienții înainte de montaj: preț, materiale, încălzire în pardoseală, măsurătoare.",
  path: "/articole",
});

export default function ArticolePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
      <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
        Articole
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Răspunsuri scurte, concrete, la întrebările pe care mi le pun clienții cel mai
        des, înainte de măsurătoare.
      </p>

      <div className="mt-10 space-y-4">
        {ARTICLES.map((article) => (
          <Link
            key={article.slug}
            href={`/articole/${article.slug}`}
            className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-5 hover:shadow-sm"
          >
            <div>
              <h2 className="text-lg font-bold">{article.title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {article.metaDescription}
              </p>
            </div>
            <ArrowRight className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
          </Link>
        ))}
      </div>
    </div>
  );
}
