import { Typography } from "../ui/typography";
import { Badge } from "../ui/badge";
import Button from "../ui/button";
import { PiCalendarCheckDuotone } from "react-icons/pi";
import { PromiseCard } from "./promise-card";

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
    <section id="solution" className="py-20 bg-white">
      <div className="w-full ">
        <div className="max-w-4xl mx-auto">
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
        </div>

        <div className="grid gap-8 md:grid-cols-2 mt-10">
          {promises.map((promise, index) => (
            <PromiseCard key={index} promise={promise} index={index} />
          ))}
        </div>
        <div className="mt-8 sm:mt-10 w-full flex justify-center">
          <Button variant="blue" icon={<PiCalendarCheckDuotone />}>
            Réserver un appel
          </Button>
        </div>
      </div>
    </section>
  );
}
