import React from "react";
import { Typography } from "@/components/ui/typography";
import { caseStudiesArticles } from "@/data";
import AchievementsCard from "./achievements-card";
import { Badge } from "../ui/badge";
import { ButtonArrow } from "../ui/button-arrow";
import Image from "next/image";

const AchievementsSection = () => {
  return (
    <section className="py-20 sm:py-32 px-5 sm:px-6 md:px-8 relative [clip-path:ellipse(250%_100%_at_50%_0%)] sm:[clip-path:ellipse(150%_100%_at_50%_0%)]">
      <div className="w-full h-full aspect-square absolute inset-0 overflow-hidden -z-10">
        <Image
          src="/bg-light-blue.svg"
          alt="Hippô'kom hero background illustration"
          fill
          loading="lazy"
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="">
            <Badge color="white">Nos réalisations</Badge>
            <Typography
              as="h2"
              variant="5xl"
              weight="semibold"
              lineHeight="tightest"
              className="text-white mb-6 text-balance text-center"
            >
              Des résultats concrets pour nos clients
            </Typography>
            <Typography
              as="p"
              variant="xl"
              weight="medium"
              className="text-white text-balance text-center"
            >
              Une stratégie 360° pour faire rayonner votre marque, <br />{" "}
              engager votre audience et convertir vos prospects en clients.
            </Typography>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8">
          {caseStudiesArticles.slice(0, 4).map((caseStudy, index) => (
            <AchievementsCard key={index} article={caseStudy} />
          ))}
        </div>
        <div className="flex justify-center w-full mt-10">
          <ButtonArrow href="/realisations" variant="yellow-medium">
            Voir nos réalisations
          </ButtonArrow>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
