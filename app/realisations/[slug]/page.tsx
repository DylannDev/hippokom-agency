import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleFinder } from "@/components/Blog/article-finder";
import { caseStudiesArticles } from "@/data";
import { SITE_URL, buildBreadcrumb, jsonLdScript } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return caseStudiesArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = caseStudiesArticles.find((a) => a.slug === slug);

  if (!article) {
    return { title: "Étude de cas introuvable | Hippô'kom" };
  }

  const url = `${SITE_URL}/realisations/${article.slug}`;
  const description = `Étude de cas Hippô'kom : ${article.title}. Client : ${article.client}. Service : ${article.service}.`;

  return {
    title: `${article.title} | Étude de cas - Hippô'kom`,
    description,
    keywords: [
      article.category.toLowerCase(),
      article.service.toLowerCase(),
      article.client.toLowerCase(),
      "étude de cas martinique",
      "agence communication martinique",
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      url,
      title: article.title,
      description,
      siteName: "Hippô'kom",
      images: [
        {
          url: `${SITE_URL}${article.image}`,
          alt: article.title,
        },
      ],
    },
  };
}

export default async function AchievementsSinglePage({ params }: Props) {
  const { slug } = await params;
  const article = caseStudiesArticles.find((a) => a.slug === slug);

  if (!article) notFound();

  const url = `${SITE_URL}/realisations/${article.slug}`;

  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: `Étude de cas : ${article.client} - ${article.service}`,
    image: `${SITE_URL}${article.image}`,
    url,
    author: { "@id": `${SITE_URL}/#aurelie-ciril` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    about: {
      "@type": "Thing",
      name: article.service,
    },
  };

  const breadcrumb = buildBreadcrumb([
    { name: "Accueil", url: SITE_URL },
    { name: "Réalisations", url: `${SITE_URL}/realisations` },
    { name: article.title, url },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(caseStudySchema)}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumb)}
      />
      <ArticleFinder articles={caseStudiesArticles} />
    </>
  );
}
