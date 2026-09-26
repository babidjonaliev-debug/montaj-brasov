import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ARTICLES } from "@/data/articles";

export function ArticlesTeaser({ quiet = false }: { quiet?: boolean }) {
  const featured = ARTICLES.slice(0, 4);
  return (
    <section className={quiet ? undefined : "border-t border-border"}>
      <div
        className={
          quiet
            ? "mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14"
            : "mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28"
        }
      >
        <div className="flex items-baseline justify-between gap-4">
          <h2
            className={
              quiet
                ? "font-heading text-lg font-semibold text-foreground/80"
                : "font-heading text-2xl font-bold sm:text-3xl"
            }
          >
            Ghiduri
          </h2>
          <Link
            href="/articole"
            className="hidden text-sm font-medium text-primary hover:underline sm:inline-flex sm:items-center sm:gap-1"
          >
            Toate articolele <ArrowRight className="size-4" />
          </Link>
        </div>
        {quiet ? (
          <ul className="mt-5 space-y-2">
            {featured.map((article) => (
              <li key={article.slug}>
                <Link
                  href={`/articole/${article.slug}`}
                  className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                >
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((article) => (
              <Link
                key={article.slug}
                href={`/articole/${article.slug}`}
                className="group rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-sm"
              >
                <h3 className="text-base font-bold leading-snug">{article.title}</h3>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Citește
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        )}
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
