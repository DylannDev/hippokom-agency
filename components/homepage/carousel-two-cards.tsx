import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BlogCard from "../Blog/BlogCard";
import { BlogArticle } from "@/types/articles";

export function CarouselTwoCards({ data }: { data: BlogArticle[] }) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-4">
        {data.map((data, index) => (
          <CarouselItem
            key={index}
            className="lg:basis-1/2 flex justify-center items-center"
          >
            <BlogCard key={data.slug} article={data} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex items-center justify-center gap-4 mt-8">
        <CarouselPrevious className="static translate-y-0" />
        <CarouselNext className="static translate-y-0" />
      </div>
    </Carousel>
  );
}
