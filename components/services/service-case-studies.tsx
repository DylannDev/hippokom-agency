"use client";

import { Typography } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ServiceCaseStudyCard } from "./service-case-study-card";
import { ButtonArrow } from "@/components/ui/button-arrow";
import Image from "next/image";
import { CaseStudyArticle } from "@/types/articles";

interface ServiceCaseStudiesProps {
  caseStudies: CaseStudyArticle[];
  title?: string;
  badge?: string;
}

export function ServiceCaseStudies({
  caseStudies,
  title = "Nos réalisations",
  badge = "Case Studies",
}: ServiceCaseStudiesProps) {
  const filteredCaseStudies = caseStudies;

  if (filteredCaseStudies.length === 0) {
    return null;
  }

  return (
    <section className="py-20 sm:py-32 px-5 sm:px-6 md:px-8 relative">
      <div className="w-full h-full absolute inset-0 overflow-hidden -z-10">
        <Image
          src="/bg-light-blue.svg"
          alt=""
          fill
          loading="lazy"
          sizes="100vw"
          className="object-cover object-center scale-125"
        />
      </div>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge color="white">{badge}</Badge>
          <Typography
            as="h2"
            variant="5xl"
            weight="semibold"
            lineHeight="tightest"
            className="text-white max-w-3xl mx-auto text-balance mb-4"
          >
            {title}
          </Typography>
          <Typography
            as="p"
            variant="xl"
            weight="medium"
            className="text-white max-w-2xl mx-auto"
          >
            Découvrez comment nous avons accompagné nos clients avec ce service.
          </Typography>
        </motion.div>

        <div className="flex flex-col gap-8">
          {filteredCaseStudies.map((article, index) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceCaseStudyCard article={article} />
            </motion.div>
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
}
