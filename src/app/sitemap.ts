import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/config";
import { SERVICES } from "@/data/services";
import { ARTICLES } from "@/data/articles";

const STATIC_PATHS = [
  "",
  "preturi",
  "zone-deservite",
  "contact",
  "politica-de-confidentialitate",
  "articole",
  "despre",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.map((path) => ({
    url: new URL(path ? `/${path}` : "/", SITE_URL).toString(),
    lastModified: new Date(),
  }));

  const serviceEntries: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: new URL(`/${service.slug}`, SITE_URL).toString(),
    lastModified: new Date(),
  }));

  const articleEntries: MetadataRoute.Sitemap = ARTICLES.map((article) => ({
    url: new URL(`/articole/${article.slug}`, SITE_URL).toString(),
    lastModified: new Date(article.dateModified),
  }));

  return [...staticEntries, ...serviceEntries, ...articleEntries];
}
