"use client";

import React from "react";
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
    <div className="flex flex-col gap-8 max-w-[1200px] mx-auto pt-40">
      {/* Header */}
      <div className="flex justify-center items-center gap-4">
        <CategoryBadge category={article.category} />
        {isBlogArticle(article) && (
          <Typography
            as="p"
            variant="base"
            weight="medium"
            className="mb-0 capitalize"
          >
            le {formatDate(article.date)}
          </Typography>
        )}
      </div>

      <Typography
        as="h1"
        variant="5xl"
        weight="semibold"
        lineHeight="tight"
        className="text-balance text-center mb-8"
      >
        {article.title}
      </Typography>

      <div className="relative w-full aspect-video border border-blue-dark rounded-4xl">
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          className="object-cover rounded-4xl"
          priority
        />
      </div>

      {/* Content */}
      <div className="py-12">
        <ProjectResults article={article} />
        <div
          className="rich-text max-w-4xl mx-auto"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>
    </div>
  );
};
