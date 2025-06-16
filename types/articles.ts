// Type de base avec les propriétés communes
export interface ArticleBase {
  slug: string;
  title: string;
  content: string;
  category: string;
  image: string;
}

// Type pour les articles de blog
export interface BlogArticle extends ArticleBase {
  date: string;
}

// Type pour les études de cas
export interface CaseStudyArticle extends ArticleBase {
  client: string;
  service: string;
  highlights: { value: string; label: string }[];
}

// Type union pour les deux types d'articles
export type Article = BlogArticle | CaseStudyArticle;

// Type guard pour vérifier le type d'article
export function isBlogArticle(article: Article): article is BlogArticle {
  return "date" in article;
}

export function isCaseStudyArticle(
  article: Article
): article is CaseStudyArticle {
  return "client" in article && "service" in article && "highlights" in article;
}
