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
      "Vous publiez au feeling, sans réel plan. Vos posts manquent d'impact et ne parlent pas à vos clients cibles. Avec nous, chaque contenu a un but précis : engager, convaincre, convertir !",
    bgColor: "bg-white",
  },
  {
    img: "/directions.svg",
    alt: "Panneau Directions illustration - Hippô'kom",
    title: "Message dispersé, zéro impact",
    description:
      "Vous ne savez pas quoi publier ni comment mesurer l'efficacité de vos actions. On vous guide avec un plan de contenu précis et des formats adaptés pour valoriser votre expertise.",
    bgColor: "bg-white",
  },
  {
    img: "/sandtimer.svg",
    alt: "Sablier illustration - Hippô'kom",
    title: "Du temps perdu",
    description:
      "Vous passez des heures à gérer vos réseaux, mais vos efforts n'apportent ni visibilité ni nouveaux clients. Chez Hippô'kom, nous boostons votre visibilité.",
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
            Résultat ? <br /> Vous vous épuisez sans retour réel.
          </Typography>

          <Typography as="p" variant="xl" className="text-gray text-balance">
            Chez <strong>Hippô'kom</strong>, on transforme cette frustration en
            résultats concrets, grâce à une stratégie digitale sur-mesure qui
            vous fait gagner du temps, de la visibilité et des clients.
          </Typography>
        </div>
        <div className="mt-8 sm:mt-10 w-full flex justify-center">
          <CalendlyButton
            label="Concevons une stratégie sur mesure"
            variant="blue"
          />
        </div>
      </AnimatedSection>
    </section>
  );
}
