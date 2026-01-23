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

  return {
    title: `${service.title} | Hippô'Kom - Agence de Communication`,
    description: service.hero.subtitle,
  };
}

const ServicePage = async ({ params }: ServicePageProps) => {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageHero
        title={service.hero.title}
        subtitle={service.hero.subtitle}
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
