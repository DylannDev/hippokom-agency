import { Typography } from "@/components/ui/typography";
import Button from "@/components/ui/Button";
import { blogArticles } from "@/data";
import BlogCard from "./BlogCard";
import { Badge } from "../ui/badge";
import { RiArrowRightLine } from "react-icons/ri";
import { BlogArticle } from "@/types/articles";
import { CarouselTwoCards } from "../homepage/carousel-two-cards";

interface SimilarPostsProps {
  posts?: BlogArticle[];
  badgeLabel?: string;
  title?: string;
  buttonLabel?: string;
  category?: "plomberie" | "chauffage" | "climatisation";
  columns?: 2 | 3;
}

export function SimilarPosts({
  posts,
  badgeLabel = "Blog",
  title = "Articles similaires",
  buttonLabel = "Découvrir nos articles",
  category,
}: SimilarPostsProps) {
  // // Si aucun post n'est fourni, on sélectionne des posts en fonction de la catégorie
  // const displayPosts =
  //   posts ||
  //   (() => {
  //     if (category) {
  //       return blogPosts
  //         .filter((post) => post.category === category)
  //         .slice(0, columns);
  //     }
  //     // Si pas de catégorie spécifiée, on prend le premier post de chaque catégorie
  //     const categories = ["plomberie", "climatisation", "chauffage"] as const;
  //     return categories.map((cat) => {
  //       const categoryPosts = blogPosts.filter((post) => post.category === cat);
  //       return categoryPosts[0]; // Prend toujours le premier post de chaque catégorie
  //     });
  //   })();

  // if (displayPosts.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col lg:flex-row items-center lg:items-end justify-center lg:justify-between mb-8">
        <div className="mb-8 lg:mb-0">
          <Badge color="white" variant="left">
            {badgeLabel}
          </Badge>
          <Typography
            as="h2"
            variant="5xl"
            weight="semibold"
            lineHeight="tightest"
            className="mb-0 max-w-xl text-white text-balance text-center lg:text-left"
          >
            {title}
          </Typography>
        </div>

        {buttonLabel && (
          <div className="flex justify-center w-full lg:w-fit lg:h-fit">
            <Button
              href="/blog"
              variant="yellow"
              icon={
                <RiArrowRightLine className="group-hover:translate-x-2 transition-all duration-300" />
              }
              iconPosition="right"
            >
              {buttonLabel}
            </Button>
          </div>
        )}
      </div>

      {/* Desktop grid */}
      <CarouselTwoCards data={blogArticles} />
    </section>
  );
}
