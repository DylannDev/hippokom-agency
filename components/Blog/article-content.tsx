"use client";

import Image from "next/image";
import { cn, formatDate } from "@/lib/utils";
import CategoryBadge from "@/components/Blog/CategoryBadge";
import { Typography } from "../ui/typography";
import { Article, isBlogArticle, isCaseStudyArticle } from "@/types/articles";

// Composant pour afficher un highlight individuel
const ProjectHighlight = ({
  highlight,
  index,
}: {
  highlight: { value: string; label: string };
  index: number;
}) => (
  <div
    className={cn(
      "flex flex-col items-center gap-4 w-full px-10 py-16 border rounded-4xl transition-colors duration-300",
      index === 0
        ? "bg-blue-light border-blue"
        : "bg-yellow-light border-yellow"
    )}
  >
    <Typography
      as="span"
      variant="6xl"
      weight="semibold"
      lineHeight="tightest"
      className="mb-0 text-center"
    >
      {highlight.value}
    </Typography>
    <Typography
      as="span"
      variant="lg"
      weight="semibold"
      className="mb-0 uppercase text-center"
    >
      {highlight.label}
    </Typography>
  </div>
);

// Composant pour la section des résultats du projet
const ProjectResults = ({ article }: { article: Article }) => {
  if (!isCaseStudyArticle(article)) return null;

  return (
    <div className="flex flex-col gap-8 max-w-4xl mx-auto text-black">
      <Typography
        as="h3"
        variant="5xl"
        weight="semibold"
        lineHeight="tightest"
        className="mb-0 text-center"
      >
        Résultats Obtenus
      </Typography>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {article.highlights.map((highlight, index) => (
          <ProjectHighlight key={index} highlight={highlight} index={index} />
        ))}
      </div>

      <div className="flex flex-col gap-8 text-left">
        <div className="flex flex-col gap-1">
          <Typography
            as="span"
            variant="xl"
            weight="semibold"
            lineHeight="tightest"
            className="mb-0 uppercase"
          >
            Client
          </Typography>
          <Typography as="h3" variant="xl" weight="medium" className="mb-0">
            {article.client}
          </Typography>
        </div>

        <div className="flex flex-col gap-1">
          <Typography
            as="span"
            variant="xl"
            weight="semibold"
            lineHeight="tightest"
            className="mb-0 uppercase"
          >
            Service
          </Typography>
          <Typography as="h3" variant="xl" weight="medium" className="mb-0">
            {article.service}
          </Typography>
        </div>
      </div>

      <hr className="mt-8 border-gray/20" />
    </div>
  );
};

// Composant client qui gère l'affichage de l'article
export const ArticleContentClient = ({ article }: { article: Article }) => {
  return (
    <div className="flex flex-col">
      {/* Hero Section with Background */}
      <section className="relative">
        <div className="absolute w-full min-h-[450px] sm:min-h-[700px] [clip-path:ellipse(250%_100%_at_50%_0%)] sm:[clip-path:ellipse(150%_100%_at_50%_0%)]">
          <Image
            src="/bg-light-blue.svg"
            alt="Hippô'kom background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center z-0"
          />
        </div>

        <div className="relative z-10 h-full max-w-[1200px] mx-auto px-5 sm:px-8 pt-32 sm:pt-40">
          {/* Header */}
          <div className="flex justify-center items-center gap-4 mb-6">
            <CategoryBadge category={article.category} />
            {isBlogArticle(article) && (
              <Typography
                as="p"
                variant="base"
                weight="medium"
                className="mb-0 capitalize text-white"
              >
                le {formatDate(article.date)}
              </Typography>
            )}
          </div>

          <Typography
            as="h1"
            weight="semibold"
            lineHeight="tight"
            className="text-balance text-3xl sm:text-5xl text-center text-white max-w-4xl mx-auto mb-10"
          >
            {article.title}
          </Typography>
        </div>

        {/* Image overlapping hero and content */}
        <div className="px-5">
          <div className="relative z-20 max-w-[1000px] mx-auto w-full aspect-[3/2] sm:aspect-video ring-2 sm:ring ring-blue/30 rounded-2xl sm:rounded-4xl overflow-hidden">
            <Image
              src={article.image}
              alt={article.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              className="object-cover"
              priority
            />
          </div>
          {/* Content */}
          <div className="relative z-10 py-10 sm:py-16 max-w-[1200px] mx-auto">
            <ProjectResults article={article} />
            <article
              className="rich-text max-w-4xl mx-auto"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
