import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BlogCard from "../Blog/BlogCard";
import { Typography } from "@/components/ui/typography";
import { Badge } from "../ui/badge";
import { BlogArticle } from "@/types/articles";

export function CarouselBlog({ data }: { data: BlogArticle[] }) {
  return (
    <div className="max-w-7xl mx-auto">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-center lg:justify-between mb-8">
          <div className="mb-8 lg:mb-0">
            <Badge variant="left">blog</Badge>
            <Typography
              as="h2"
              variant="5xl"
              weight="semibold"
              lineHeight="tightest"
              className="mb-0 max-w-xl text-balance text-center lg:text-left"
            >
              Consultez nos derniers articles de blog
            </Typography>
          </div>

          {/* <div className="flex justify-center w-full lg:w-fit lg:h-fit">
            <Button
              href="/blog"
              variant="blue"
              icon={
                <RiArrowRightLine className="group-hover:translate-x-2 transition-all duration-300" />
              }
              iconPosition="right"
            >
              Découvrir nos articles
            </Button>
          </div> */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </div>
        <CarouselContent>
          {data.map((data, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 flex justify-center"
            >
              <BlogCard key={data.slug} article={data} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
