import { Badge } from "../ui/badge";
import { Typography } from "../ui/typography";
import { Timeline } from "../ui/timeline";

const steps = [
  {
    icon: "/assets/method-section/audit.svg",
    title: "Audit personnalisé",
    description:
      "On commence par une analyse approfondie de votre communication actuelle, vos canaux, vos contenus et vos objectifs. Cette étape permet de bien cerner vos forces, vos points d’amélioration et les opportunités inexploitées.",
  },
  {
    icon: "/assets/method-section/strategy.svg",
    title: "Stratégie & plan d'action",
    description:
      "Une fois les bases posées, on construit un plan sur-mesure : axes de communication, types de contenus, calendrier éditorial, choix des canaux... Chaque action est alignée avec vos ambitions business.",
  },
  {
    icon: "/assets/method-section/execution.svg",
    title: "Création & diffusion",
    description:
      "Visuels, textes, posts, stories, vidéos… on conçoit et publie du contenu engageant, à votre image. Vous n’avez plus à gérer les réseaux : on s’occupe de tout.",
  },
  {
    icon: "/assets/method-section/analytics.svg",
    title: "Suivi & ajustements",
    description:
      "On reste à vos côtés : analyse des performances, ajustements stratégiques, optimisations continues. L'objectif est de maximiser vos résultats tout en gardant une approche agile.",
  },
];

export function MethodSection() {
  return (
    <section id="method" className="my-20 bg-white">
      <div className="max-w-5xl mx-auto mb-12 text-center">
        <Badge>Notre méthode</Badge>
        <Typography
          as="h2"
          variant="5xl"
          weight="semibold"
          lineHeight="tightest"
          className="mb-6 text-balance"
        >
          Comment on passe de zéro à une communication qui performe
        </Typography>
        <Typography
          as="p"
          variant="xl"
          weight="medium"
          className="text-gray text-balance"
        >
          Un processus clair en 4 étapes, construit autour de votre réalité
          terrain, vos objectifs et vos ressources. Pas de surprise, que des
          résultats.
        </Typography>
      </div>

      <Timeline data={steps} />
    </section>
  );
}
