import { RiGoogleFill } from "react-icons/ri";
import { Badge } from "../ui/badge";
import Button from "../ui/button";
import { Typography } from "../ui/typography";
import { CarouselTestimonials } from "./carousel-testimonials";
import { reviewLink } from "@/data";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20">
      <div className="flex flex-col lg:flex-row items-center lg:items-end justify-center lg:justify-between mb-8">
        <div className="mb-8 lg:mb-0">
          <Badge variant="left">avis clients</Badge>
          <Typography
            as="h2"
            variant="5xl"
            weight="semibold"
            lineHeight="tightest"
            className="mb-0 text-balance text-center lg:text-left max-w-xl"
          >
            Ce que nos clients <br /> disent de l'agence
          </Typography>
        </div>

        <div className="flex justify-center w-full lg:w-fit lg:h-fit">
          <Button
            icon={<RiGoogleFill />}
            iconPosition="right"
            href={reviewLink}
            target="_blank"
          >
            Laisser un avis
          </Button>
        </div>
      </div>

      <CarouselTestimonials />
    </section>
  );
}
