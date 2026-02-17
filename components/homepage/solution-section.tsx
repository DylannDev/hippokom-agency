import { Typography } from "../ui/typography";
import { Badge } from "../ui/badge";
import { CalendlyButton } from "../ui/calendly-button";
import { PromiseCard } from "./promise-card";
import AnimatedSection from "../ui/animated-section";

const promises = [
  {
    title: "Plus de visibilité locale",
    text: "Vos clients idéaux en Martinique et aux Antilles vous trouvent sur Google et sur les réseaux sociaux, grâce à une stratégie ciblée.",
    image: "/search.svg",
  },
  {
    title: "Un engagement réel",
    text: "Fini les posts sans réaction. Vos contenus génèrent des likes, des commentaires, des partages, et surtout des prises de contact.",
    image: "/commitment.svg",
  },
  {
    title: "Une image professionnelle",
    text: "Visuels cohérents, ligne éditoriale claire, site web soigné : votre marque inspire confiance dès le premier regard.",
    image: "/credibility.svg",
  },
  {
    title: "Du temps retrouvé",
    text: "On gère vos réseaux, vos contenus et votre site. Vous vous concentrez sur vos clients et votre activité.",
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
            Ce que vous gagnez en travaillant avec nous
          </Typography>

          <Typography
            as="p"
            variant="xl"
            weight="medium"
            className="text-gray text-balance text-center"
          >
            On prend en charge votre communication de A à Z (contenus,
            visuels, site web, publicité) pour que vous puissiez vous
            concentrer sur votre activité pendant que votre visibilité grandit.
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
          <CalendlyButton variant="blue" label="Discuter de mon projet" />
        </AnimatedSection>
      </div>
    </section>
  );
}
