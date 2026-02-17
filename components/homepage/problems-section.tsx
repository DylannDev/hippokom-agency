"use client";

import { Typography } from "../ui/typography";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { CalendlyButton } from "../ui/calendly-button";
import AnimatedSection from "../ui/animated-section";

const problems = [
  {
    img: "/target.svg",
    alt: "Cible illustration - Hippô'kom",
    title: "Aucune stratégie claire",
    description:
      "Vous publiez au feeling, sans plan défini. Vos contenus manquent d'impact et ne parlent pas à vos clients cibles. Résultat : peu de likes, peu de contacts, peu de retours.",
    bgColor: "bg-white",
  },
  {
    img: "/directions.svg",
    alt: "Panneau Directions illustration - Hippô'kom",
    title: "Un message flou, zéro impact",
    description:
      "Vous ne savez pas quoi publier, ni sur quel canal. Votre image de marque manque de cohérence et vos concurrents, eux, avancent avec une ligne éditoriale claire.",
    bgColor: "bg-white",
  },
  {
    img: "/sandtimer.svg",
    alt: "Sablier illustration - Hippô'kom",
    title: "Des heures perdues sans résultat",
    description:
      "Vous passez du temps à créer des visuels, rédiger des posts, répondre aux messages… mais vos efforts ne génèrent ni visibilité ni nouveaux clients.",
    bgColor: "bg-white",
  },
];

export function ProblemsSection() {
  return (
    <section id="problems" className="py-20 bg-blue-background">
      <div>
        {/* Header */}
        <AnimatedSection
          direction="up"
          delay={0.1}
          className="max-w-3xl mx-auto px-5 sm:px-8 mb-10 sticky top-32"
        >
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
        </AnimatedSection>

        {/* Cartes avec effet sticky */}
        <div className="flex flex-col gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex items-center justify-center sticky top-72 sm:top-80"
            >
              <div className="max-w-3xl mx-auto px-5 sm:px-8 w-full">
                <div
                  className={`${problem.bgColor} border border-blue-light rounded-4xl p-8`}
                >
                  <div className="flex flex-col md:flex-row items-center gap-4">
                    {/* Image à gauche */}
                    <div className="w-full aspect-square relative max-w-[150px] md:max-w-[200px] mx-auto">
                      <Image
                        src={problem.img}
                        alt={problem.alt}
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 150px, 200px"
                        className="object-contain"
                      />
                    </div>

                    {/* Texte à droite */}
                    <div className="flex-1 text-center md:text-left">
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
      <AnimatedSection
        direction="up"
        delay={0.2}
        className="max-w-3xl mx-auto px-5 sm:px-8 mt-20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <Typography as="p" weight="semibold" variant="3xl" className="mb-4">
            Résultat ? <br /> Vous vous épuisez sans retour concret.
          </Typography>

          <Typography as="p" variant="xl" className="text-gray text-balance">
            Chez <strong>Hippô'kom</strong>, on transforme cette frustration en
            clients, en visibilité et en crédibilité, grâce à une stratégie
            pensée pour votre activité et votre marché local.
          </Typography>
        </div>
        <div className="mt-8 sm:mt-10 w-full flex justify-center">
          <CalendlyButton
            label="Parlons de votre communication"
            variant="blue"
          />
        </div>
      </AnimatedSection>
    </section>
  );
}
