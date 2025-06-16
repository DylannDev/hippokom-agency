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
      className="group cursor-pointer bg-white rounded-3xl sm:rounded-4xl px-5 pt-5 pb-6 sm:p-6 w-full"
    >
      <div className="relative h-full w-full bg-transparent flex flex-col sm:flex-row justify-start items-center gap-6">
        <div className="w-full sm:w-1/2 h-full aspect-square lg:aspect-1/2 xl:aspect-square max-h-[300px] relative overflow-hidden rounded-3xl">
          <Image
            src={article.image}
            alt="hippokom blog article illustration"
            fill
            sizes="25vw"
            className="object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>

        <div className="flex flex-col justify-between gap-4 w-full sm:w-1/2">
          <div className="flex items-center gap-2 ">
            <CategoryBadge category={article.category} />
            {/* <span className="font-semibold capitalize">{formatDate(date)}</span> */}
          </div>
          <Typography
            as="h3"
            weight="semibold"
            lineHeight="tight"
            className="text-xl sm:text-2xl md:text-3xl lg:text-xl line-clamp-4 mb-0 text-balance group-hover:text-blue transition-colors duration-300"
          >
            {article.title}
          </Typography>
          <Typography
            as="p"
            variant="base"
            weight="semibold"
            lineHeight="tight"
            className="line-clamp-3 capitalize mb-8 text-balance text-gray transition-colors duration-300"
          >
            {formatDate(date)}
          </Typography>

          <div className="absolute bottom-0 right-0">
            <ArrowRotateButton small />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
