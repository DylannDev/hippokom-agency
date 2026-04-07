import { Metadata } from "next";
import { blogArticles } from "@/data/blog-articles";
import { ArticleFinder } from "@/components/Blog/article-finder";
import { SITE_URL, buildBreadcrumb, jsonLdScript } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = blogArticles.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Article introuvable - Hippô'kom",
    };
  }

  return {
    title: `${article.title} | Hippô'kom - Agence de Communication Martinique`,
    description: article.description,
    keywords: article.keywords,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.date,
      url: `${SITE_URL}/blog/${article.slug}`,
      images: [
        {
          url: `${SITE_URL}${article.image}`,
          alt: article.title,
        },
      ],
    },
    alternates: {
      canonical: `${SITE_URL}/blog/${article.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function BlogSinglePage({ params }: Props) {
  const { slug } = await params;
  const article = blogArticles.find((a) => a.slug === slug);

  const breadcrumb = article
    ? buildBreadcrumb([
        { name: "Accueil", url: SITE_URL },
        { name: "Blog", url: `${SITE_URL}/blog` },
        { name: article.title, url: `${SITE_URL}/blog/${article.slug}` },
      ])
    : null;

  return (
    <>
      {breadcrumb && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(breadcrumb)}
        />
      )}
      <ArticleFinder articles={blogArticles} />
    </>
  );
}
