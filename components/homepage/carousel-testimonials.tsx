import * as React from "react";
import { TestimonialCard } from "./testimonial-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote:
      "HIPPÔ'KOM a complètement transformé notre présence en ligne. Notre engagement a augmenté de 200% en seulement 3 mois !",
    author: "Sophie",
    stars: 5,
  },
  {
    quote:
      "Une équipe professionnelle qui comprend vraiment les enjeux de la communication digitale en Martinique.",
    author: "Marc",
    stars: 5,
  },
  {
    quote:
      "Grâce à leur expertise, nous avons pu toucher notre clientèle locale de manière beaucoup plus efficace.",
    author: "Julie",
    stars: 5,
  },
  {
    quote:
      "HIPPÔ'KOM a complètement transformé notre présence en ligne. Notre engagement a augmenté de 200% en seulement 3 mois !",
    author: "Sophie",
    stars: 5,
  },
  {
    quote:
      "Une équipe professionnelle qui comprend vraiment les enjeux de la communication digitale en Martinique.",
    author: "Marc",
    stars: 5,
  },
  {
    quote:
      "Grâce à leur expertise, nous avons pu toucher notre clientèle locale de manière beaucoup plus efficace.",
    author: "Julie",
    stars: 5,
  },
];

export function CarouselTestimonials() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 min-[1200px]:basis-1/3 flex justify-center"
          >
            <TestimonialCard {...testimonial} index={index} />
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
