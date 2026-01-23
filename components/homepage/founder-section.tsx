"use client";

import Image from "next/image";
import { Typography } from "@/components/ui/typography";
import { Badge } from "../ui/badge";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import { IoMdStar } from "react-icons/io";
import { PiUsers } from "react-icons/pi";
import { cn } from "@/lib/utils";
import { IconType } from "react-icons";

const founderInfo = {
  name: "Aurélie Ciril",
  role: "Fondatrice & directrice créative",
};

const stats: {
  value: string;
  label: string;
  icon: IconType;
  showStars?: boolean;
}[] = [
  {
    value: "20+",
    label: "Clients accompagnés",
    icon: PiUsers,
  },
  {
    value: "5/5",
    label: "Noté par nos clients",
    icon: IoMdStar,
    showStars: true,
  },
];

export function FounderSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge>À propos</Badge>
          <Typography
            as="h2"
            variant="5xl"
            weight="semibold"
            lineHeight="tightest"
            className="mb-4 text-balance"
          >
            Une agence qui fait la différence
          </Typography>
          <Typography
            as="p"
            variant="xl"
            weight="medium"
            className="text-gray max-w-2xl mx-auto"
          >
            Une vision créative, une exigence stratégique, une approche humaine.
          </Typography>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 items-center">
          {/* Left - Image */}
          <div className="relative group">
            <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden">
              {/* Image 1 - Default */}
              <Image
                src="/founder-1.jpg"
                alt="Aurélie Ciril - Fondatrice Hippô'Kom"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center transition-opacity duration-500 group-hover:opacity-0"
              />
              {/* Image 2 - On Hover */}
              <Image
                src="/founder-2.jpg"
                alt="Aurélie Ciril - Fondatrice Hippô'Kom"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
            </div>

            {/* Info Card */}
            <div className="flex items-center gap-2 text-blue-dark group-hover:text-white transition-all duration-500 shadow-lg absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto bg-white/30 backdrop-blur-md border border-white rounded-2xl p-5">
              <Image
                src="/assets/icons/bag.svg"
                alt="Icône"
                width={30}
                height={30}
                className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] flex-shrink-0"
              />
              <div className="flex flex-col">
                <Typography
                  as="h4"
                  variant="2xl"
                  weight="semibold"
                  className="mb-0 w-fit"
                >
                  {founderInfo.name}
                </Typography>
                <Typography
                  as="p"
                  variant="base"
                  weight="normal"
                  className="text-sm sm:text-base mb-0 w-fit"
                >
                  {founderInfo.role}
                </Typography>
              </div>
            </div>
          </div>

          {/* Right - Text */}
          <div>
            <Typography
              as="h3"
              variant="3xl"
              weight="semibold"
              lineHeight="tight"
              className="mb-6"
            >
              Pourquoi ai-je créé Hippô'Kom ?
            </Typography>

            <div className="flex flex-col gap-4 text-gray">
              <Typography as="p" variant="lg" className="mb-0">
                Après plusieurs années passées à accompagner des entreprises
                dans leur communication, j'ai réalisé que trop de marques
                manquaient d'une image claire, cohérente et surtout alignée avec
                ce qu'elles font vraiment.
              </Typography>

              <Typography as="p" variant="lg" className="mb-0">
                C'est pour combler ce vide que j'ai lancé Hippô'Kom : une agence
                à taille humaine, engagée, qui place l'authenticité, l'impact
                visuel et la stratégie au cœur de chaque projet.
              </Typography>

              <div className="relative p-6 bg-blue-light border border-blue rounded-2xl">
                <BiSolidQuoteAltRight className="absolute bottom-3 right-4 text-blue/50 text-4xl" />
                <BiSolidQuoteAltLeft className="absolute top-3 left-4 text-blue/50 text-4xl" />
                <Typography
                  as="p"
                  variant="lg"
                  weight="semibold"
                  className="mb-0 relative z-10"
                >
                  Mon ambition ? Offrir aux TPE, PME et entrepreneurs une
                  communication qui inspire confiance, attire les bons clients
                  et les aide à grandir.
                </Typography>
              </div>
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex flex-col items-center text-blue-dark text-center p-8 border rounded-2xl bg-yellow-light border-yellow"
                    )}
                  >
                    <Typography
                      as="p"
                      weight="semibold"
                      className="text-3xl md:text-6xl mb-1"
                    >
                      {stat.value}
                    </Typography>
                    <Typography
                      as="p"
                      variant="base"
                      weight="semibold"
                      className="mb-2"
                    >
                      {stat.label}
                    </Typography>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <IoMdStar key={i} className="text-xl" />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FounderSection;
