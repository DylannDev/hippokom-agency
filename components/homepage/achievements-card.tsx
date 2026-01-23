import Link from "next/link";
import Image from "next/image";
import { CaseStudyArticle } from "@/types/articles";
import { Typography } from "../ui/typography";
import { PiTag } from "react-icons/pi";

interface AchievementsCardProps {
  article: CaseStudyArticle;
  variant?: "dark" | "light" | "blue";
}

const getVariantStyles = (variant: "dark" | "light" | "blue") => {
  switch (variant) {
    case "dark":
      return {
        card: "bg-white/10 backdrop-blur-md border border-white/40",
        imageBorder: "border-white/20",
        text: "text-white",
        hover: "group-hover:text-yellow",
        footer: "border-white/40 text-white",
        tagIcon: "text-yellow",
      };
    case "blue":
      return {
        card: "bg-white border border-blue-light",
        imageBorder: "border-blue-light",
        text: "text-black",
        hover: "group-hover:text-blue",
        footer: "border-blue-light text-gray",
        tagIcon: "text-blue",
      };
    case "light":
    default:
      return {
        card: "bg-white border border-gray-300",
        imageBorder: "border-gray-300",
        text: "text-black",
        hover: "group-hover:text-blue",
        footer: "border-gray-300 text-gray",
        tagIcon: "text-blue",
      };
  }
};

const AchievementsCard = ({
  article,
  variant = "dark",
}: AchievementsCardProps) => {
  const styles = getVariantStyles(variant);

  return (
    <Link
      href={`/realisations/${article.slug}`}
      className="group cursor-pointer block h-full"
    >
      <div
        className={`relative h-full w-full rounded-3xl overflow-hidden flex flex-col ${styles.card}`}
      >
        {/* Image */}
        <div
          className={`w-full aspect-video relative overflow-hidden border-b ${styles.imageBorder}`}
        >
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
          {/* Description */}
          <div className="flex flex-col gap-2 flex-1">
            <Typography
              as="h3"
              weight="semibold"
              lineHeight="tight"
              className={`text-xl md:text-2xl mb-0 transition-colors duration-300 ${styles.text} ${styles.hover}`}
            >
              {article.client}
            </Typography>
            <Typography
              as="p"
              weight="normal"
              className={`text-base line-clamp-2 mb-0 ${styles.text}`}
            >
              {article.title}
            </Typography>
          </div>

          {/* Tag Footer */}
          <div
            className={`flex items-center gap-2 mt-6 pt-6 border-t ${styles.footer}`}
          >
            <PiTag className={`text-lg ${styles.tagIcon}`} />
            <span className="text-sm">{article.category}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AchievementsCard;
