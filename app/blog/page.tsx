import { Metadata } from "next";
import BlogCard from "@/components/Blog/BlogCard";
import { blogArticles } from "@/data/blog-articles";
import { PageHero } from "@/components/services";

export const metadata: Metadata = {
  title: "Blog - Hippô'kom",
  description:
    "Conseils, tendances et bonnes pratiques pour booster votre communication digitale.",
};

const BlogPage = () => {
  return (
    <>
      <PageHero
        title="Blog"
        subtitle="Conseils, tendances et bonnes pratiques pour booster votre communication digitale."
        variant="small"
      />

      {/* Blog Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogArticles.map((article) => (
              <BlogCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
