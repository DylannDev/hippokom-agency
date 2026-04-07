import { Metadata } from "next";
import BlogCard from "@/components/Blog/BlogCard";
import { blogArticles } from "@/data/blog-articles";
import { PageHero } from "@/components/services";
import { SITE_URL, buildBreadcrumb, jsonLdScript } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Blog | Hippô'kom - Communication digitale en Martinique",
  description:
    "Conseils, tendances et bonnes pratiques pour booster votre communication digitale en Martinique : community management, SEO, branding, vidéo et stratégie social media.",
  keywords: [
    "blog communication martinique",
    "conseils community management martinique",
    "stratégie digitale antilles",
    "blog marketing martinique",
  ],
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/blog`,
    title: "Blog Hippô'kom - Communication digitale en Martinique",
    description:
      "Conseils et tendances pour booster votre communication digitale en Martinique.",
    siteName: "Hippô'kom",
  },
};

const BlogPage = () => {
  const breadcrumb = buildBreadcrumb([
    { name: "Accueil", url: SITE_URL },
    { name: "Blog", url: `${SITE_URL}/blog` },
  ]);

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/blog#blog`,
    name: "Blog Hippô'kom",
    description:
      "Conseils, tendances et bonnes pratiques pour booster votre communication digitale en Martinique.",
    url: `${SITE_URL}/blog`,
    publisher: { "@id": `${SITE_URL}/#organization` },
    blogPost: blogArticles.map((article) => ({
      "@type": "BlogPosting",
      headline: article.title,
      url: `${SITE_URL}/blog/${article.slug}`,
      datePublished: article.date,
      image: `${SITE_URL}${article.image}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumb)}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(blogSchema)}
      />
      <PageHero
        title="Blog"
        subtitle="Conseils, tendances et bonnes pratiques pour booster votre communication digitale."
      />

      {/* Blog Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogArticles.map((article) => (
              <BlogCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
