import { Typography } from "../ui/typography";
import { Badge } from "../ui/badge";
import { ServiceCard } from "./service-card";
import { CalendlyButton } from "../ui/calendly-button";
import AnimatedSection from "../ui/animated-section";

const services = [
  {
    icon: "/assets/icons/community.svg",
    title: "Community management",
    slug: "community-management",
    description:
      "Attirez des abonnés qualifiés et transformez-les en clients grâce à une stratégie de contenu pensée pour vos objectifs.",
  },
  {
    icon: "/assets/icons/content.svg",
    title: "Productions audiovisuelles",
    slug: "productions-audiovisuelles",
    description:
      "Montrez le meilleur de votre activité avec des photos et vidéos professionnelles qui renforcent votre crédibilité.",
  },
  {
    icon: "/assets/icons/web-development.svg",
    title: "Site Web & Webdesign",
    slug: "site-web-webdesign",
    description:
      "Convertissez vos visiteurs en clients avec un site rapide, moderne et optimisé pour Google.",
  },
  {
    icon: "/assets/icons/redaction-web.svg",
    title: "Rédaction Web",
    slug: "redaction-web",
    description:
      "Remontez dans les résultats Google grâce à des contenus SEO qui attirent du trafic qualifié sur votre site.",
  },
  {
    icon: "/assets/icons/communication.svg",
    title: "Com' événementielle",
    slug: "communication-evenementielle",
    description:
      "Remplissez vos événements et prolongez leur impact grâce à une communication avant, pendant et après le jour J.",
  },
  {
    icon: "/assets/icons/ads.svg",
    title: "Campagnes publicitaires",
    slug: "campagnes-publicitaires",
    description:
      "Touchez vos clients idéaux avec des publicités ciblées sur Facebook, Instagram et Google, optimisées pour le ROI.",
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
          <Badge>Nos services</Badge>
          <Typography
            as="h2"
            variant="5xl"
            weight="semibold"
            lineHeight="tightest"
            className="mb-8 text-center"
          >
            Tout ce qu'il faut pour une communication qui convertit
          </Typography>

          <Typography
            as="p"
            variant="xl"
            weight="medium"
            className="text-gray text-balance text-center"
          >
            Réseaux sociaux, vidéo, site web, rédaction, événementiel,
            publicité. On couvre l'ensemble de vos besoins en communication
            digitale et terrain.
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

        <AnimatedSection
          direction="up"
          delay={0.3}
          staggerChildren={0}
          className="mt-8 sm:mt-10 w-full flex justify-center"
        >
          <CalendlyButton variant="blue" label="Voir comment on peut vous aider" />
        </AnimatedSection>
      </div>
    </section>
  );
}
