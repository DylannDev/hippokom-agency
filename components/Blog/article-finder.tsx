"use client";

import { useParams } from "next/navigation";
import { ArticleContentClient } from "./article-content";
import NotFound from "@/app/not-found";
import { BlogArticle, CaseStudyArticle } from "@/types/articles";

export const ArticleFinder = ({
  articles,
}: {
  articles: BlogArticle[] | CaseStudyArticle[];
}) => {
  const params = useParams();
  const slug = params.slug as string;
  const article = articles.find((article) => article.slug === slug);

  if (!article) {
    return <NotFound />;
  }

  return <ArticleContentClient article={article} />;
};
