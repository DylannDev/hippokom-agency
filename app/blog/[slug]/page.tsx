import { blogArticles } from "@/data";
import { ArticleFinder } from "@/components/Blog/article-finder";

const BlogSinglePage = () => {
  return <ArticleFinder articles={blogArticles} />;
};

export default BlogSinglePage;
