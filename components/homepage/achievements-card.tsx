import Link from "next/link";
import Image from "next/image";
import { CaseStudyArticle } from "@/types/articles";
import { Typography } from "../ui/typography";

const AchievementsCard = ({ article }: { article: CaseStudyArticle }) => {
  return (
    <Link
      href={`/realisations/${article.slug}`}
      className="group cursor-pointer block h-full"
    >
      <div className="relative h-full w-full bg-white/20 backdrop-blur-md border border-white/40 rounded-3xl overflow-hidden flex flex-col">
        {/* Image */}
        <div className="w-full aspect-video relative overflow-hidden">
          <Image
            src={article.image}
            alt={`${article.client} - ${article.title}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-6">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1.5 bg-blue-dark backdrop-blur-sm rounded-lg text-xs text-white font-medium">
              {article.category}
            </span>
          </div>

          {/* Description */}
          <div className="flex flex-col gap-2 flex-1">
            <Typography
              as="h3"
              weight="semibold"
              lineHeight="tight"
              className="text-xl md:text-2xl text-white mb-0 group-hover:text-yellow transition-colors duration-300"
            >
              {article.client}
            </Typography>
            <Typography
              as="p"
              weight="normal"
              className="text-white text-base line-clamp-2 mb-0"
            >
              {article.title}
            </Typography>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AchievementsCard;
