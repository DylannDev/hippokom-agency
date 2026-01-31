import { MetadataRoute } from "next";
import { blogArticles } from "@/data/blog-articles";
import { caseStudiesArticles, services } from "@/data";

const BASE_URL = "https://hippokomagency.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // Pages statiques
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/realisations`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/mentions-legales`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/cgv`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];

  // Pages services (dynamiques via /[slug])
  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${BASE_URL}/${service.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Articles de blog (dynamiques via /blog/[slug])
  const blogPages: MetadataRoute.Sitemap = blogArticles.map((article) => ({
    url: `${BASE_URL}/blog/${article.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  // Études de cas (dynamiques via /realisations/[slug])
  const caseStudyPages: MetadataRoute.Sitemap = caseStudiesArticles.map(
    (article) => ({
      url: `${BASE_URL}/realisations/${article.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    })
  );

  return [...staticPages, ...servicePages, ...blogPages, ...caseStudyPages];
}
