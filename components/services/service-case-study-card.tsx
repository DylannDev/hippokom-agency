import Link from "next/link";
import Image from "next/image";
import { CaseStudyArticle } from "@/types/articles";
import { Typography } from "@/components/ui/typography";
import { PiCheckBold, PiTag } from "react-icons/pi";
import { RiArrowRightLine } from "react-icons/ri";

interface ServiceCaseStudyCardProps {
  article: CaseStudyArticle;
}

export function ServiceCaseStudyCard({ article }: ServiceCaseStudyCardProps) {
  return (
    <Link
      href={`/realisations/${article.slug}`}
      className="group cursor-pointer block"
    >
      <div className="bg-white/10 backdrop-blur-md border border-white/40 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="w-full aspect-video md:aspect-auto md:min-h-[400px] relative overflow-hidden border-b md:border-b-0 md:border-r border-white/20">
            <Image
              src={article.image}
              alt={`${article.client} - ${article.title}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-white bg-white/20 mb-4 rounded-lg py-1 px-3 w-fit">
              <PiTag className="text-lg text-yellow" />
              <span className="text-xs lg:text-sm font-medium">
                {article.category}
              </span>
            </div>
            <Typography
              as="h3"
              weight="semibold"
              lineHeight="tight"
              className="text-white text-xl lg:text-2xl mb-3 group-hover:text-yellow transition-colors duration-300"
            >
              {article.client}
            </Typography>
            <Typography
              as="p"
              weight="medium"
              className="text-white text-base lg:text-lg mb-6"
            >
              {article.title}
            </Typography>

            {/* Highlights */}
            <div className="flex flex-col gap-4">
              {article.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/10 border border-white/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <PiCheckBold className="text-xs text-yellow" />
                  </div>
                  <div>
                    <Typography
                      as="span"
                      weight="semibold"
                      className="text-white text-base lg:text-lg"
                    >
                      {highlight.value}
                    </Typography>{" "}
                    <Typography
                      as="span"
                      weight="medium"
                      className="text-white text-base lg:text-lg"
                    >
                      {highlight.label}
                    </Typography>
                  </div>
                </div>
              ))}
              <div className="flex text-base lg:text-lg gap-1 items-center text-white group-hover:text-yellow mt-4">
                <p className="font-medium">Lire l'étude de cas</p>
                <RiArrowRightLine className="group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
