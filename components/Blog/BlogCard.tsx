import Link from "next/link";
import Image from "next/image";
import { BlogArticle } from "@/types/articles";
import { formatDate } from "@/lib/utils";
import { Typography } from "../ui/typography";
import { PiCalendarBlank, PiTag } from "react-icons/pi";

interface BlogCardProps {
  article: BlogArticle;
}

const BlogCard = ({ article }: BlogCardProps) => {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group cursor-pointer w-full h-full"
    >
      <div className="relative h-full w-full bg-white border border-gray-300 rounded-3xl overflow-hidden flex flex-col">
        {/* Image */}
        <div className="w-full aspect-video relative overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-6">
          <div className="flex-1">
            <Typography
              as="h3"
              weight="semibold"
              lineHeight="tight"
              className="text-xl md:text-[22px] text-black text-balance line-clamp-3 mb-3 group-hover:text-blue transition-colors duration-300"
            >
              {article.title}
            </Typography>
            <div
              className="text-sm text-black line-clamp-3 mb-0 [&>*]:mb-0 [&>*]:inline"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>

          {/* Footer */}
          <div className="flex items-center gap-4 mt-6 pt-6 border-t border-gray-300">
            <div className="flex items-center gap-2 text-gray">
              <PiCalendarBlank className="text-lg text-blue" />
              <span className="text-sm">
                {formatDate(new Date(article.date))}
              </span>
            </div>
            <div className="w-px h-4 bg-gray-300" />
            <div className="flex items-center gap-2 text-gray">
              <PiTag className="text-lg text-blue" />
              <span className="text-sm capitalize">{article.category}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
