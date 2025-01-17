import Link from "next/link";
import Image from "next/image";
import { BlogArticle } from "@/types/blog";
import { formatDate } from "@/lib/utils";

interface BlogCardProps {
  article: BlogArticle;
}

const BlogCard = ({ article }: BlogCardProps) => {
  const date = new Date();

  return (
    <Link href={`/blog/${article.slug}`} className="cursor-pointer">
      <div className="relative p-0 h-full flex flex-col w-full bg-transparent justify-center items-center rounded-3xl border">
        <div className="w-full h-[270px] relative overflow-hidden rounded-t-3xl">
          <Image
            src={article.image}
            alt="hippokom blog article illustration"
            fill
            sizes="25vw"
            className="object-cover object-center rounded-t-3xl transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>

        <div className="p-5 flex flex-col justify-between gap-4 flex-grow">
          <div className="rounded-full bg-blue-background w-fit py-[2px] px-4 text-sm font-semibold text-blue">
            {article.categories}
          </div>
          <h1 className="text-2xl font-medium line-clamp-3 hover:text-blue-500">
            {article.title}
          </h1>

          <p className="text-gray-500 flex-grow line-clamp-2">
            {article.subtitle}
          </p>

          <div className="flex items-center justify-between mt-4 text-gray-500 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-[40px] h-[40px] relative">
                <Image
                  src="/aurelie.jpg"
                  alt="profile photo"
                  fill
                  sizes="100%"
                  className="object-cover object-top rounded-full"
                />
              </div>
              <p className=" hover:underline hover:underline-offset-4">
                Aurélie Ciril
              </p>
            </div>
            <p className="flex items-center gap-1">
              <span>{formatDate(date)}</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
