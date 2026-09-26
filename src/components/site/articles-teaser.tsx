import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ARTICLES } from "@/data/articles";

export function ArticlesTeaser() {
  const featured = ARTICLES.slice(0, 4);
  return (
    <section className="border-t border-brass/20">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="font-heading text-2xl font-semibold sm:text-3xl">Ghiduri</h2>
          <Link
            href="/articole"
            className="hidden text-sm font-medium text-primary hover:underline sm:inline-flex sm:items-center sm:gap-1"
          >
            Toate articolele <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((article) => (
            <Link
              key={article.slug}
              href={`/articole/${article.slug}`}
              className="group rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-sm"
            >
              <h3 className="text-base font-semibold leading-snug">{article.title}</h3>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
                Citește
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
        <Link
          href="/articole"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline sm:hidden"
        >
          Toate articolele <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
