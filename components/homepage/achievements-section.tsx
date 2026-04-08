import { Typography } from "@/components/ui/typography";
import { caseStudiesArticles } from "@/data";
import AchievementsCard from "./achievements-card";
import { Badge } from "../ui/badge";
import { ButtonArrow } from "../ui/button-arrow";
import Image from "next/image";
import AnimatedSection from "../ui/animated-section";

const AchievementsSection = () => {
  return (
    <section className="py-20 sm:py-32 px-5 sm:px-6 md:px-8 relative [clip-path:ellipse(350%_100%_at_50%_0%)] sm:[clip-path:ellipse(150%_100%_at_50%_0%)]">
      <div className="w-full h-full aspect-square absolute inset-0 overflow-hidden -z-10">
        <Image
          src="/bg-light-blue.avif"
          alt="Hippô'kom hero background illustration"
          fill
          loading="lazy"
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection
          direction="up"
          delay={0.1}
          className="flex flex-col items-center justify-center mb-8"
        >
          <Badge color="white">Nos réalisations</Badge>
          <Typography
            as="h2"
            variant="5xl"
            weight="semibold"
            lineHeight="tightest"
            className="text-white mb-6 text-balance text-center"
          >
            Ce qu'on a fait pour eux, on peut le faire pour vous
          </Typography>
          <Typography
            as="p"
            variant="xl"
            weight="medium"
            className="text-white text-balance text-center"
          >
            Études de cas réelles, avec les chiffres, les stratégies
            déployées et les résultats obtenus.
          </Typography>
        </AnimatedSection>

        <AnimatedSection
          direction="up"
          delay={0.2}
          className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8"
        >
          {caseStudiesArticles.slice(0, 4).map((caseStudy, index) => (
            <AchievementsCard key={index} article={caseStudy} />
          ))}
        </AnimatedSection>
        <AnimatedSection
          direction="up"
          delay={0.3}
          staggerChildren={0}
          className="flex justify-center w-full mt-10"
        >
          <ButtonArrow href="/realisations" variant="yellow">
            Voir nos réalisations
          </ButtonArrow>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AchievementsSection;
