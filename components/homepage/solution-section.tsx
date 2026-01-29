import { Typography } from "../ui/typography";
import { Badge } from "../ui/badge";
import { CalendlyButton } from "../ui/calendly-button";
import { PromiseCard } from "./promise-card";
import AnimatedSection from "../ui/animated-section";

const promises = [
  {
    title: "Visibilité",
    text: "Augmentez votre présence locale et sectorielle avec une stratégie social media ciblée. Soyez vu par les bonnes personnes, au bon endroit.",
    image: "/search.svg",
  },
  {
    title: "Engagement",
    text: "Générez de vraies interactions avec des contenus conçus pour engager et attirer des prospects qualifiés sur vos réseaux sociaux.",
    image: "/commitment.svg",
  },
  {
    title: "Crédibilité",
    text: "Renforcez votre image de marque grâce à des visuels cohérents, des contenus professionnels et une communication différenciante.",
    image: "/credibility.svg",
  },
  {
    title: "Liberté",
    text: "Déléguez votre communication et concentrez-vous sur votre activité. Gagnez du temps tout en obtenant des résultats visibles.",
    image: "/time.svg",
  },
];

export function SolutionSection() {
  return (
    <section id="solution" className="py-20 bg-blue-background">
      <div className="w-full max-w-7xl mx-auto p-4 sm:px-6 md:px-8">
        <AnimatedSection
          direction="up"
          delay={0.1}
          className="max-w-4xl mx-auto"
        >
          <Badge>Notre Promesse</Badge>
          <Typography
            as="h2"
            variant="5xl"
            weight="semibold"
            lineHeight="tightest"
            className="mb-8 text-center"
          >
            Une stratégie digitale qui génère de vrais résultats pour votre
            entreprise !
          </Typography>

          <Typography
            as="p"
            variant="xl"
            weight="medium"
            className="text-gray text-balance text-center"
          >
            On conçoit une communication digitale complète, contenus engageants,
            visuels percutants, site web cohérent, pour attirer vos clients
            idéaux et soutenir votre croissance.
          </Typography>
        </AnimatedSection>

        <AnimatedSection
          direction="up"
          delay={0.2}
          className="grid gap-8 md:grid-cols-2 mt-10"
        >
          {promises.map((promise, index) => (
            <PromiseCard key={index} promise={promise} index={index} />
          ))}
        </AnimatedSection>
        <AnimatedSection
          direction="up"
          delay={0.3}
          staggerChildren={0}
          className="mt-8 sm:mt-10 w-full flex justify-center"
        >
          <CalendlyButton variant="blue" />
        </AnimatedSection>
      </div>
    </section>
  );
}
