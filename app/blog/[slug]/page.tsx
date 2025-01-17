"use client";

import React from "react";
import Image from "next/image";
import { blogArticles } from "@/data";
import { useParams } from "next/navigation";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { PiBookOpenText } from "react-icons/pi";
import CategoryBadge from "@/components/Blog/CategoryBadge";

const ArticlePage = () => {
  const params = useParams();
  const slug = params.slug;
  const article = blogArticles.find((article) => article.slug === slug);

  if (!article) {
    return <p>Article non trouvé</p>;
  }

  return (
    <div className="max-w-[1000px] mx-auto px-6 flex flex-col gap-4">
      <div className="flex justify-center mb-4">
        <CategoryBadge categories={article.categories} />
      </div>
      <h1 className="text-4xl font-semibold">{article.title}</h1>
      <p className="text-lg text-gray-500 font-medium">{article.subtitle}</p>
      <div className="flex items-center justify-between mt-8 text-gray-500">
        <p>
          Écrit par{" "}
          <Link href="/">
            <span className="hover:underline hover:underline-offset-4">
              Aurélie Ciril,
            </span>{" "}
          </Link>{" "}
          le {formatDate(article.date)}
        </p>
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1">
            <PiBookOpenText /> {article.readTime} min de lecture
          </span>
        </div>
      </div>
      <div className="relative w-full aspect-video mb-8">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <div className="text-base text-gray-800">{article.content}</div>
    </div>
  );
};

export default ArticlePage;
