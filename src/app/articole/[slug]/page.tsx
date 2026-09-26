import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ARTICLES, getArticle } from "@/data/articles";
import { WhatsAppCta } from "@/components/site/whatsapp-cta";
import { JsonLd } from "@/components/site/json-ld";
import { articleJsonLd, faqPageJsonLd, pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return pageMetadata({
    title: article.metaTitle,
    description: article.metaDescription,
    path: `/articole/${article.slug}`,
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <article className="mx-auto max-w-2xl px-4 py-14 sm:px-6">
      <JsonLd
        data={articleJsonLd({
          headline: article.title,
          description: article.metaDescription,
          path: `/articole/${article.slug}`,
          datePublished: article.datePublished,
          dateModified: article.dateModified,
        })}
      />
      <JsonLd data={faqPageJsonLd(article.qa)} />

      <Link
        href="/articole"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        Toate articolele
      </Link>

      <h1 className="mt-6 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
        {article.title}
      </h1>

      <div className="mt-8 space-y-4 text-base leading-relaxed text-foreground/90">
        {article.intro.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {article.sections.map((section) => (
        <div key={section.heading} className="mt-8">
          <h2 className="font-heading text-xl font-bold">{section.heading}</h2>
          <div className="mt-3 space-y-4 text-base leading-relaxed text-foreground/90">
            {section.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      ))}

      {article.qa.length > 0 ? (
        <div className="mt-10 space-y-6 rounded-xl border border-border bg-card p-6">
          {article.qa.map((item) => (
            <div key={item.question}>
              <h3 className="font-medium">{item.question}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{item.answer}</p>
            </div>
          ))}
        </div>
      ) : null}

      <div className="mt-10 flex flex-wrap gap-3 text-sm">
        {article.related.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-full border border-border px-4 py-2 font-medium hover:bg-muted"
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="mt-10">
        <WhatsAppCta />
      </div>
    </article>
  );
}
