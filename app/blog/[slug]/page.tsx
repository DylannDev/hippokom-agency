import { blogArticles } from "@/data/blog-articles";
import { ArticleFinder } from "@/components/Blog/article-finder";

const BlogSinglePage = () => {
  return <ArticleFinder articles={blogArticles} />;
};

export default BlogSinglePage;
