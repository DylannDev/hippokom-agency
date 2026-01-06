import Link from "next/link";
import Image from "next/image";
import { BlogArticle } from "@/types/articles";
import { formatDate } from "@/lib/utils";
import { Typography } from "../ui/typography";
import CategoryBadge from "./CategoryBadge";
import { ArrowRotateButton } from "../ui/button-arrow-rotate";

interface BlogCardProps {
  article: BlogArticle;
}

const BlogCard = ({ article }: BlogCardProps) => {
  const date = new Date();

  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group cursor-pointer w-full h-full"
    >
      <div className="relative h-full w-full bg-transparent flex flex-col gap-6">
        <div className="w-full h-full aspect-4/3 max-h-[300px] relative overflow-hidden rounded-3xl">
          <Image
            src={article.image}
            alt="hippokom blog article illustration"
            fill
            sizes="25vw"
            className="object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>

        <div className="flex flex-col justify-between gap-4 w-full">
          <div className="flex items-center justify-between">
            <CategoryBadge category={article.category} />
            <Typography
              as="p"
              variant="base"
              weight="semibold"
              lineHeight="tight"
              className="line-clamp-3 capitalize mb-0"
            >
              {formatDate(date)}
            </Typography>
          </div>
          <Typography
            as="h3"
            weight="semibold"
            lineHeight="tight"
            className="text-xl sm:text-2xl md:text-3xl text-balance line-clamp-4 mb-0 group-hover:text-blue transition-colors duration-300"
          >
            {article.title}
          </Typography>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
