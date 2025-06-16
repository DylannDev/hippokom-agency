import { PiCalendarCheckDuotone } from "react-icons/pi";
import { Typography } from "../ui/typography";
import { Badge } from "../ui/badge";
import Image from "next/image";
import Button from "../ui/Button";

const problems = [
  {
    img: "/target.svg",
    alt: "Cible illustration - Hippokom",
    title: "Aucune stratégie claire",
    description:
      "Vous publiez au feeling, sans réel plan. Vos posts manquent d’impact et ne parlent pas à vos clients cibles. Avec nous, chaque contenu a un but précis : engager, convaincre, convertir !",
  },
  {
    img: "/directions.svg",
    alt: "Panneau Directions illustration - Hippokom",
    title: "Message dispersé, zéro impact",
    description:
      "Vous ne savez pas quoi publier ni comment mesurer l’efficacité de vos actions. On vous guide avec un plan de contenu précis et des formats adaptés pour valoriser votre expertise.",
  },
  {
    img: "/sandtimer.svg",
    alt: "Sablier illustration - Hippokom",
    title: "Du temps perdu",
    description:
      "Vous passez des heures à gérer vos réseaux, mais vos efforts n’apportent ni visibilité ni nouveaux clients. Chez Hippokom, nous boostons votre visibilité grâce à une stratégie de contenus efficace.",
  },
];

export function ProblemsSection() {
  return (
    <section id="problems" className="py-20">
      <div className="">
        <div className="w-full mx-auto text-center">
          <Badge>Vos blocages</Badge>
          <Typography
            as="h2"
            weight="semibold"
            variant="5xl"
            lineHeight="tightest"
            className="max-w-3xl mx-auto text-balance"
          >
            Votre communication digitale ne décolle pas ?
          </Typography>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {problems.map((problem, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row lg:flex-col items-center gap-8`}
              >
                <div className="w-full aspect-square relative max-w-[200px] sm:max-w-[255px]">
                  <Image
                    src={problem.img}
                    alt={problem.alt}
                    fill
                    loading="lazy"
                    className="object-contain"
                  />
                </div>
                <div className="text-center md:text-left lg:text-center max-w-[500px]">
                  <Typography
                    as="h3"
                    variant="3xl"
                    weight="semibold"
                    className="mb-4"
                  >
                    {problem.title}
                  </Typography>
                  <Typography
                    as="p"
                    variant="lg"
                    weight="medium"
                    className="text-gray text-balance"
                  >
                    {problem.description}
                  </Typography>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <Typography as="p" weight="semibold" variant="3xl">
              Résultat ? Vous vous épuisez sans retour réel.
            </Typography>

            <Typography as="p" variant="xl" className="text-gray text-balance">
              Chez <strong>Hippokom</strong>, on transforme cette frustration en
              résultats concrets, grâce à une stratégie digitale sur-mesure qui
              vous fait gagner du temps, de la visibilité et des clients.
            </Typography>

            <div className="mt-8 sm:mt-10 w-full flex justify-center">
              <Button
                fullWidth
                variant="blue"
                icon={<PiCalendarCheckDuotone />}
              >
                Réserver un appel
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
