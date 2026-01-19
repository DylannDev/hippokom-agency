"use client";

import { Typography } from "../ui/typography";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { CalendlyButton } from "../ui/calendly-button";

const problems = [
  {
    img: "/target.svg",
    alt: "Cible illustration - Hippokom",
    title: "Aucune stratégie claire",
    description:
      "Vous publiez au feeling, sans réel plan. Vos posts manquent d'impact et ne parlent pas à vos clients cibles. Avec nous, chaque contenu a un but précis : engager, convaincre, convertir !",
    bgColor: "bg-white",
  },
  {
    img: "/directions.svg",
    alt: "Panneau Directions illustration - Hippokom",
    title: "Message dispersé, zéro impact",
    description:
      "Vous ne savez pas quoi publier ni comment mesurer l'efficacité de vos actions. On vous guide avec un plan de contenu précis et des formats adaptés pour valoriser votre expertise.",
    bgColor: "bg-white",
  },
  {
    img: "/sandtimer.svg",
    alt: "Sablier illustration - Hippokom",
    title: "Du temps perdu",
    description:
      "Vous passez des heures à gérer vos réseaux, mais vos efforts n'apportent ni visibilité ni nouveaux clients. Chez Hippokom, nous boostons votre visibilité.",
    bgColor: "bg-white",
  },
];

export function ProblemsSection() {
  return (
    <section id="problems" className="py-20 bg-blue-background">
      <div>
        {/* Header */}
        <div className="max-w-3xl mx-auto px-5 sm:px-8 mb-10 sticky top-10">
          <div className="w-full text-center">
            <Badge>Le Problème</Badge>
            <Typography
              as="h2"
              weight="semibold"
              variant="5xl"
              lineHeight="tightest"
              className="max-w-3xl mx-auto text-balance"
            >
              Votre communication digitale ne décolle pas ?
            </Typography>
          </div>
        </div>

        {/* Cartes avec effet sticky */}
        <div className="flex flex-col gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex items-center justify-center sticky top-60"
            >
              <div className="max-w-3xl mx-auto px-5 sm:px-8 w-full">
                <div
                  className={`${problem.bgColor} border border-blue-light rounded-4xl p-8`}
                >
                  <div className="flex items-center gap-4">
                    {/* Image à gauche */}
                    <div className="w-full aspect-square relative max-w-[200px] mx-auto">
                      <Image
                        src={problem.img}
                        alt={problem.alt}
                        fill
                        loading="lazy"
                        className="object-contain"
                      />
                    </div>

                    {/* Texte à droite */}
                    <div className="text-left flex-1">
                      <Typography
                        as="h3"
                        variant="2xl"
                        weight="semibold"
                        className="mb-4"
                      >
                        {problem.title}
                      </Typography>
                      <Typography
                        as="p"
                        variant="lg"
                        weight="medium"
                        className="text-gray text-balance mb-0"
                      >
                        {problem.description}
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Conclusion */}
      <div className="max-w-3xl mx-auto px-5 sm:px-8 mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <Typography as="p" weight="semibold" variant="3xl" className="mb-4">
            Résultat ? Vous vous épuisez sans retour réel.
          </Typography>

          <Typography as="p" variant="xl" className="text-gray text-balance">
            Chez <strong>Hippokom</strong>, on transforme cette frustration en
            résultats concrets, grâce à une stratégie digitale sur-mesure qui
            vous fait gagner du temps, de la visibilité et des clients.
          </Typography>
        </div>
        <div className="mt-8 sm:mt-10 w-full flex justify-center">
          <CalendlyButton variant="blue" />
        </div>
      </div>
    </section>
  );
}
