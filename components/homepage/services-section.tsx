import { Typography } from "../ui/typography";
import { Badge } from "../ui/badge";
import { ServiceCard } from "./service-card";
import AnimatedSection from "../ui/animated-section";

const services = [
  {
    icon: "/assets/icons/community.svg",
    title: "Community management",
    slug: "community-management",
    description:
      "Développez votre présence sur les réseaux sociaux avec une stratégie de contenu personnalisée qui inspire, fidélise et convertit.",
  },
  {
    icon: "/assets/icons/content.svg",
    title: "Productions audiovisuelles",
    slug: "productions-audiovisuelles",
    description:
      "Valorisez vos produits, événements et votre équipe avec du contenu multimédia immersif et professionnel (photos, vidéos, habillage sonore).",
  },
  {
    icon: "/assets/icons/web-development.svg",
    title: "Site Web & Webdesign",
    slug: "site-web-webdesign",
    description:
      "Offrez à vos visiteurs une expérience fluide, moderne et responsive, avec un site conçu pour convertir.",
  },
  {
    icon: "/assets/icons/redaction-web.svg",
    title: "Rédaction Web",
    slug: "redaction-web",
    description:
      "Optimisez votre visibilité en ligne avec des textes clairs, structurés et pensés pour le référencement naturel (SEO).",
  },
  {
    icon: "/assets/icons/communication.svg",
    title: "Com' événementielle",
    slug: "communication-evenementielle",
    description:
      "Créez l'impact en dehors du digital avec des actions de terrain pensées pour marquer les esprits.",
  },
  {
    icon: "/assets/icons/ads.svg",
    title: "Campagnes publicitaires",
    slug: "campagnes-publicitaires",
    description:
      "Générez plus de visibilité et de conversions avec des campagnes publicitaires ciblées et rentables.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto p-4 sm:px-6 md:px-8">
        <AnimatedSection
          direction="up"
          delay={0.2}
          className="max-w-4xl mx-auto"
        >
          <Badge>Notre expertise</Badge>
          <Typography
            as="h2"
            variant="5xl"
            weight="semibold"
            lineHeight="tightest"
            className="mb-8 text-center"
          >
            On s'occupe de votre Kom' !
          </Typography>

          <Typography
            as="p"
            variant="xl"
            weight="medium"
            className="text-gray text-balance text-center"
          >
            Des services sur-mesure pour booster votre visibilité, votre image
            de marque et vos résultats, en ligne comme sur le terrain.
          </Typography>
        </AnimatedSection>

        <AnimatedSection
          direction="up"
          delay={0.2}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              totalServices={services.length}
            />
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
