/* eslint-disable @next/next/no-img-element */

import { capitalizeFirstLetter, cn } from "@/lib/utils";
import { PiStarDuotone, PiStarFill } from "react-icons/pi";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { RiGoogleFill } from "react-icons/ri";

export const TestimonialCard = ({
  author,
  quote,
  stars,
  index,
}: {
  author: string;
  quote: string;
  stars: number;
  index: number;
}) => {
  const MAX_STARS = 5;
  const isEven = index % 2 === 0;

  return (
    <figure
      className={cn(
        "relative w-full h-full cursor-pointer overflow-hidden rounded-3xl px-8 py-12",
        "flex flex-col justify-between gap-6",
        isEven ? "bg-blue-light" : "bg-yellow-light"
      )}
    >
      <blockquote className="text-black font-medium text-lg sm:line-clamp-4">
        "{capitalizeFirstLetter(quote)}"
      </blockquote>

      <div className="flex flex-row items-end justify-between">
        <div className="flex flex-col gap-1">
          <figcaption className="text-xl text-blue-dark font-bold capitalize">
            {author}
          </figcaption>
          <div className="flex items-center gap-1 text-xl text-blue">
            {[...Array(MAX_STARS)].map((_, index) =>
              index < stars ? (
                <PiStarFill key={index} />
              ) : (
                <PiStarDuotone key={index} />
              )
            )}
          </div>
        </div>
        <div className="p-3 bg-blue rounded-full">
          <RiGoogleFill className="text-2xl text-white" />
        </div>
      </div>
    </figure>
  );
};
