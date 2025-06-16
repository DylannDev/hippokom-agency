import { ArticleFinder } from "@/components/Blog/article-finder";
import { caseStudiesArticles } from "@/data";

const AchievementsSinglePage = () => {
  return <ArticleFinder articles={caseStudiesArticles} />;
};

export default AchievementsSinglePage;
