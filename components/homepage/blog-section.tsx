import { blogArticles } from "@/data/blog-articles";
import { CarouselBlog } from "./carousel-blog";

const BlogSection = () => {
  return (
    <section className="relative py-20 sm:pt-32 px-5">
      <CarouselBlog data={blogArticles} />
    </section>
  );
};

export default BlogSection;
