import { RiGoogleFill } from "react-icons/ri";
import { PiStar, PiUsers, PiThumbsUp, PiUsersFill } from "react-icons/pi";
import { Badge } from "../ui/badge";
import Button from "../ui/Button";
import { Typography } from "../ui/typography";
import { reviewLink } from "@/data";
import { Marquee } from "../ui/marquee";
import { TestimonialCard } from "./testimonial-card";

const testimonials = [
  {
    quote:
      "Agence Hippô'kom, au top des top !! Très à l'écoute et attentive à mes besoins et de très bons conseils ! Depuis que je me suis adressée à cette agence, je suis beaucoup plus détendue dans ma communication et je vois une nette amélioration et une plus grande visibilité, grâce à ses différentes stratégies !",
    author: "Catherine Chillan",
    stars: 5,
  },
  {
    quote:
      "Travail de qualité. A l'écoute des demandes. Rapidité. Visuel des flyers excellent!. L'équipe d'eclat gourmand jyf toujours satisfait du travail!",
    author: "Yasmina Toussay",
    stars: 5,
  },
  {
    quote:
      "HIPPÔ'KOM une agence toujours à l'écoute des besoins, sait s'adapter selon nos demandes et est de bon conseil. Si la kom n'est pas votre points fort, je vous recommande vivement leurs services.",
    author: "KARIBS Victory",
    stars: 5,
  },
  {
    quote:
      "Une agence au top ! Un accompagnement personnalisé avec une personne attentive à notre demande et besoins. De plus, ne m'y connaissant pas dans le domaine, j'ai pu bénéficier d'une vulgarisation de celui-ci.",
    author: "Elodie Thimon",
    stars: 5,
  },
  {
    quote:
      "L'agence a pris en compte mes besoins et a tout géré à la perfection. Grâce à la stratégie proposée je vois une nette amélioration!",
    author: "St D.",
    stars: 5,
  },
  {
    quote:
      "Franchement rien a dire, le sens de l'écoute réactif aux demandes et Très bon professionnalisme. Et surtout un travail de qualité. Franchement je recommande.",
    author: "Fabien Azile",
    stars: 5,
  },
  {
    quote:
      "Travail excellent, des idées innovantes ! Au top du top merci beaucoup d'être à l'écoute et d'avoir fait décoller notre business !",
    author: "tijojo 972",
    stars: 5,
  },
  {
    quote:
      "Service de qualité, avec un large panel de prestations qui s'adaptent aux besoins du client.",
    author: "Anthony JOSEPH",
    stars: 5,
  },
  {
    quote:
      "Accompagnement riche en propositions, bonne réactivité, bonne expérience je recommande",
    author: "David Laurent Caruge",
    stars: 5,
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-blue-background">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-5 mb-12">
        <div className="flex justify-between items-center">
          {/* Left - Title */}
          <div className="text-center lg:text-left">
            <Badge variant="left">avis clients</Badge>
            <Typography
              as="h2"
              variant="5xl"
              weight="semibold"
              lineHeight="tightest"
              className="mb-4 text-balance"
            >
              Ils nous font confiance
            </Typography>
            <Typography
              as="p"
              variant="xl"
              weight="medium"
              className="text-gray max-w-lg mx-auto lg:mx-0"
            >
              Découvrez ce que nos clients disent de notre accompagnement et de
              nos services.
            </Typography>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
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
      </div>

      {/* Testimonials Marquee */}
      <div className="relative flex h-[600px] w-full flex-row items-center justify-center overflow-hidden">
        {/* Mobile: Single column */}
        <div className="flex md:hidden w-full justify-center">
          <Marquee pauseOnHover vertical className="[--duration:40s]">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full max-w-[350px] mx-auto">
                <TestimonialCard {...testimonial} index={index} />
              </div>
            ))}
          </Marquee>
        </div>

        {/* Tablet: Two columns */}
        <div className="hidden md:flex lg:hidden w-full justify-center">
          <Marquee pauseOnHover vertical className="[--duration:40s]">
            {firstColumn.map((testimonial, index) => (
              <div key={index} className="w-full max-w-[400px]">
                <TestimonialCard {...testimonial} index={index} />
              </div>
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover vertical className="[--duration:40s]">
            {secondColumn.map((testimonial, index) => (
              <div key={index} className="w-full max-w-[400px]">
                <TestimonialCard {...testimonial} index={index + 3} />
              </div>
            ))}
          </Marquee>
        </div>

        {/* Desktop: Three columns */}
        <div className="hidden lg:flex w-full justify-center">
          <Marquee pauseOnHover vertical className="[--duration:40s]">
            {firstColumn.map((testimonial, index) => (
              <div key={index} className="w-full max-w-[400px]">
                <TestimonialCard {...testimonial} index={index} />
              </div>
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover vertical className="[--duration:40s]">
            {secondColumn.map((testimonial, index) => (
              <div key={index} className="w-full max-w-[400px]">
                <TestimonialCard {...testimonial} index={index + 3} />
              </div>
            ))}
          </Marquee>
          <Marquee pauseOnHover vertical className="[--duration:40s]">
            {thirdColumn.map((testimonial, index) => (
              <div key={index} className="w-full max-w-[400px]">
                <TestimonialCard {...testimonial} index={index + 6} />
              </div>
            ))}
          </Marquee>
        </div>

        {/* Gradient fade effects */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-blue-background"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-blue-background"></div>
      </div>
    </section>
  );
}
