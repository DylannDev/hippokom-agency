import { Typography } from "../ui/typography";
import Image from "next/image";
import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";

interface ServiceCardProps {
  service: {
    icon: string;
    title: string;
    slug: string;
    description: string;
  };
  index: number;
  totalServices: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <Link href={`/services/${service.slug}`} className="group">
      <div
        className={`text-black border cursor-pointer h-full flex flex-col sm:flex-row md:flex-col gap-4 sm:gap-8 items-start rounded-4xl px-8 py-12 transition-all duration-300 hover:-translate-y-2 ${
          index % 2 === 0
            ? "bg-blue-light border-blue"
            : "bg-yellow-light border-yellow"
        }`}
      >
        <div className="w-full aspect-square max-h-[100px] sm:max-h-[160px] max-w-[100px] sm:max-w-[160px] relative mb-4 transition-transform duration-300 group-hover:scale-105">
          <Image
            src={service.icon}
            alt={`${service.title} - Illustration Hippokom`}
            fill
            className="object-contain"
          />
        </div>
        <div className="flex flex-col items-start justify-between text-black h-full">
          <Typography
            as="h3"
            variant="3xl"
            weight="bold"
            className="mb-4 capitalize"
          >
            {service.title}
          </Typography>

          <Typography
            as="p"
            variant="lg"
            weight="medium"
            className="text-balance"
          >
            {service.description}
          </Typography>
          <Typography
            as="span"
            variant="xl"
            weight="bold"
            className="text-balance mt-4 flex items-center gap-1 group-hover:text-blue transition-colors duration-300"
          >
            En savoir plus
            <RiArrowRightLine className="inline-block transition-transform duration-300 group-hover:translate-x-1" />
          </Typography>
        </div>
      </div>
    </Link>
  );
}
