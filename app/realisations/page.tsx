import { Metadata } from "next";
import AchievementsCard from "@/components/homepage/achievements-card";
import { caseStudiesArticles } from "@/data";
import { PageHero } from "@/components/services";
import { SITE_URL, buildBreadcrumb, jsonLdScript } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Nos réalisations | Hippô'kom - Agence de communication Martinique",
  description:
    "Découvrez les études de cas Hippô'kom : community management, identité visuelle, communication événementielle et stratégie digitale réalisés pour nos clients en Martinique et aux Antilles.",
  keywords: [
    "réalisations agence communication martinique",
    "études de cas hippokom",
    "portfolio agence martinique",
    "projets community management martinique",
  ],
  alternates: {
    canonical: `${SITE_URL}/realisations`,
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/realisations`,
    title: "Nos réalisations | Hippô'kom",
    description:
      "Études de cas et projets clients de notre agence de communication en Martinique.",
    siteName: "Hippô'kom",
  },
};

const RealisationsPage = () => {
  const breadcrumb = buildBreadcrumb([
    { name: "Accueil", url: SITE_URL },
    { name: "Réalisations", url: `${SITE_URL}/realisations` },
  ]);

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Réalisations Hippô'kom",
    description:
      "Études de cas et projets clients de l'agence Hippô'kom en Martinique.",
    url: `${SITE_URL}/realisations`,
    isPartOf: { "@id": `${SITE_URL}/#organization` },
    hasPart: caseStudiesArticles.map((article) => ({
      "@type": "CreativeWork",
      name: article.title,
      url: `${SITE_URL}/realisations/${article.slug}`,
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
        dangerouslySetInnerHTML={jsonLdScript(collectionSchema)}
      />
      <PageHero
        title="Nos réalisations"
        subtitle="Découvrez comment nous avons accompagné nos clients dans leur transformation digitale et boosté leur communication."
      />

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudiesArticles.map((article) => (
              <AchievementsCard
                key={article.slug}
                article={article}
                variant="light"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default RealisationsPage;
