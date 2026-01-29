"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BlogCard from "./BlogCard";
import { Typography } from "@/components/ui/typography";
import {
  Article,
  BlogArticle,
  CaseStudyArticle,
  isBlogArticle,
} from "@/types/articles";
import AchievementsCard from "../homepage/achievements-card";

interface ArticleCarouselProps {
  title: string;
  items: Article[];
  excludeSlug?: string;
  type: "blog" | "case-study";
  maxItems?: number;
}

export function ArticleCarousel({
  title,
  items,
  excludeSlug,
  type,
  maxItems = 6,
}: ArticleCarouselProps) {
  // Filter out the current article and limit items
  let filteredItems = excludeSlug
    ? items.filter((item) => item.slug !== excludeSlug)
    : items;

  // Sort by date if blog articles
  if (type === "blog") {
    filteredItems = [...filteredItems].sort((a, b) => {
      if (isBlogArticle(a) && isBlogArticle(b)) {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return 0;
    });
  }

  // Limit items
  filteredItems = filteredItems.slice(0, maxItems);

  if (filteredItems.length === 0) return null;

  return (
    <section className="py-16 sm:py-20 border-t border-gray-300">
      <div className="">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-center sm:items-end justify-center sm:justify-between mb-8 gap-6">
            <Typography
              as="h2"
              variant="4xl"
              weight="semibold"
              lineHeight="tightest"
              className="mb-0 text-balance text-center sm:text-left"
            >
              {title}
            </Typography>
            <div className="flex items-center justify-center gap-4">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </div>

          <CarouselContent>
            {filteredItems.map((item) => (
              <CarouselItem
                key={item.slug}
                className="md:basis-1/2 lg:basis-1/3 flex justify-center"
              >
                {type === "blog" ? (
                  <BlogCard article={item as BlogArticle} />
                ) : (
                  <AchievementsCard
                    article={item as CaseStudyArticle}
                    variant="light"
                  />
                )}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
