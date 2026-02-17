import { Metadata } from "next";
import { blogArticles } from "@/data/blog-articles";
import { ArticleFinder } from "@/components/Blog/article-finder";

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
      url: `https://hippokomagency.fr/blog/${article.slug}`,
      images: [
        {
          url: `https://hippokomagency.fr${article.image}`,
          alt: article.title,
        },
      ],
    },
    alternates: {
      canonical: `https://hippokomagency.fr/blog/${article.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }));
}

export default function BlogSinglePage() {
  return (
    <>
      <ArticleFinder articles={blogArticles} />
      <BlogJsonLd />
    </>
  );
}

function BlogJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Blog Hippô'kom",
          description:
            "Conseils, tendances et bonnes pratiques pour booster votre communication digitale en Martinique.",
          url: "https://hippokomagency.fr/blog",
          publisher: {
            "@type": "Organization",
            name: "Hippô'kom",
            url: "https://hippokomagency.fr",
            logo: {
              "@type": "ImageObject",
              url: "https://hippokomagency.fr/logo.png",
            },
          },
        }),
      }}
    />
  );
}
