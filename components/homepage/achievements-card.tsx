import Link from "next/link";
import Image from "next/image";
import { CaseStudyArticle } from "@/types/articles";
import { Typography } from "../ui/typography";
import CategoryBadge from "../Blog/CategoryBadge";
import { ArrowRotateButton } from "../ui/button-arrow-rotate";

const AchievementsCard = ({ article }: { article: CaseStudyArticle }) => {
  return (
    <Link
      href={`/realisations/${article.slug}`}
      className="group cursor-pointer p-5 sm:p-8 bg-white rounded-4xl"
    >
      <div className="relative p-0 h-full flex flex-col w-full bg-transparent justify-center items-center">
        <div className="w-full aspect-square max-h-[400px] relative overflow-hidden rounded-3xl">
          <Image
            src={article.image}
            alt="hippokom blog article illustration"
            fill
            sizes="25vw"
            className="object-cover object-center rounded-t-3xl transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>

        <div className="pt-5 flex flex-1 flex-col justify-between gap-8">
          <div className="flex flex-col gap-4 sm:gap-6 h-full">
            <CategoryBadge category={article.category} />
            <Typography
              as="h3"
              weight="semibold"
              className="text-lg sm:text-[28px] leading-tight line-clamp-4 sm:line-clamp-3 mb-0 group-hover:text-blue transition-colors duration-300 flex-grow"
            >
              {article.title}
            </Typography>
          </div>

          <div className="flex justify-end">
            <ArrowRotateButton />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AchievementsCard;
