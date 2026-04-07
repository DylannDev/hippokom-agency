import { services, caseStudiesArticles } from "@/data";
import { notFound } from "next/navigation";
import {
  PageHero,
  ServiceBenefits,
  ServiceMethod,
  ServiceCaseStudies,
  ServiceFaq,
} from "@/components/services";
import { TestimonialsSection } from "@/components/homepage/testimonials-section";
import { Metadata } from "next";
import { SITE_URL, buildBreadcrumb, jsonLdScript } from "@/lib/seo";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return { title: "Service introuvable" };
  }

  const url = `${SITE_URL}/${service.slug}`;

  return {
    title: `${service.title} en Martinique | Hippô'kom`,
    description: service.hero.subtitle,
    keywords: [
      service.title.toLowerCase(),
      `${service.title.toLowerCase()} martinique`,
      `${service.title.toLowerCase()} antilles`,
      `agence ${service.title.toLowerCase()} martinique`,
      "hippokom",
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      url,
      title: `${service.title} en Martinique | Hippô'kom`,
      description: service.hero.subtitle,
      siteName: "Hippô'kom",
    },
  };
}

const ServicePage = async ({ params }: ServicePageProps) => {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const url = `${SITE_URL}/${service.slug}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: service.title,
    serviceType: service.title,
    description: service.hero.subtitle,
    url,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: [
      { "@type": "Place", name: "Martinique" },
      { "@type": "Place", name: "Antilles" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.title,
      itemListElement: service.benefits.map((b) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: b.title,
          description: b.description,
        },
      })),
    },
  };

  const breadcrumbSchema = buildBreadcrumb([
    { name: "Accueil", url: SITE_URL },
    { name: service.title, url },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(serviceSchema)}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbSchema)}
      />
      <PageHero
        title={service.hero.title}
        subtitle={service.hero.subtitle}
        icon={service.icon}
        showCta
      />

      <ServiceBenefits
        benefits={service.benefits}
        title="Ce que nous vous apportons"
        badge="Avantages"
      />

      <ServiceMethod
        steps={service.method}
        title="Chaque projet suit un plan clair"
        badge="Notre approche"
      />

      <ServiceCaseStudies
        caseStudies={caseStudiesArticles.filter(
          (article) => article.category === service.category
        )}
        title="Quelques études de cas"
        badge="Réalisations"
      />

      <TestimonialsSection />

      <ServiceFaq
        data={service.faq}
        title="Questions fréquentes"
        badge="FAQ"
        variant="white"
      />
    </>
  );
};

export default ServicePage;
