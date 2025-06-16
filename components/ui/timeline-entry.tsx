import { Typography } from "./typography";
import Image from "next/image";

interface TimelineEntryProps {
  item: {
    title: string;
    description: string;
    icon: string;
  };
  index: number;
}

export function TimelineEntryDesktop({ item, index }: TimelineEntryProps) {
  return (
    <div className="hidden md:grid grid-cols-3 relative z-10">
      {/* Left column */}
      <div className="flex flex-col gap-2">
        <Typography
          as="span"
          variant="xl"
          weight="bold"
          className="text-blue capitalize mb-0"
        >
          étape {index + 1}
        </Typography>
        <Typography
          as="h3"
          variant="3xl"
          weight="bold"
          className="mb-4 capitalize"
        >
          {item.title}
        </Typography>
      </div>

      {/* Middle column */}
      <div className="flex items-start justify-center">
        <div className="relative w-full h-full aspect-square max-w-[150px] lg:max-w-[180px] max-h-[150px] lg:max-h-[180px]">
          <Image
            src={item.icon}
            alt={item.title}
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Right column */}
      <Typography
        as="p"
        variant="lg"
        weight="medium"
        className="text-balance text-gray"
      >
        {item.description}
      </Typography>
    </div>
  );
}

export function TimelineEntryMobile({ item, index }: TimelineEntryProps) {
  return (
    <div className="md:hidden flex flex-col gap-8 pl-8 relative">
      {/* Yellow dot indicator */}
      <div className="absolute -left-[8px] top-[136px] w-5 h-5 rounded-full bg-yellow ring-4 ring-white border-4 border-blue-medium" />

      {/* Content */}
      <div className="relative w-full aspect-square max-w-[100px] max-h-[100px]">
        <Image
          src={item.icon}
          alt={item.title}
          fill
          className="object-contain"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Typography
          as="span"
          variant="2xl"
          weight="bold"
          className="text-blue capitalize mb-0"
        >
          étape {index + 1}
        </Typography>
        <Typography
          as="h3"
          variant="3xl"
          weight="bold"
          className="mb-2 capitalize"
        >
          {item.title}
        </Typography>
        <Typography
          as="p"
          variant="lg"
          weight="medium"
          className="text-balance text-gray"
        >
          {item.description}
        </Typography>
      </div>
    </div>
  );
}
