import { Typography } from "../ui/typography";
import Image from "next/image";

interface PromiseCardProps {
  promise: {
    title: string;
    text: string;
    image: string;
  };
  index: number;
}

export function PromiseCard({ promise, index }: PromiseCardProps) {
  const containerClasses = `flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 lg:gap-8 items-start rounded-4xl px-8 py-12 ${
    index % 3 === 0 ? "md:bg-blue-light" : "md:bg-yellow-light"
  } ${index % 2 === 0 ? "bg-blue-light" : "bg-yellow-light"}`;

  return (
    <div className={containerClasses}>
      <div className="w-full aspect-square max-h-[90px] max-w-[90px] relative mb-4">
        <Image
          src={promise.image}
          alt={`${promise.title} - Illustration Hippokom`}
          fill
          className="object-contain"
        />
      </div>
      <div className="flex flex-col items-start text-black">
        <Typography as="h3" variant="3xl" weight="semibold" className="mb-4">
          {promise.title}
        </Typography>
        <Typography
          as="p"
          variant="lg"
          weight="medium"
          className="text-balance"
        >
          {promise.text}
        </Typography>
      </div>
    </div>
  );
}
