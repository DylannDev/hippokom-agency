export interface BlogArticle {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  content: string;
  date: string;
  categories: string[];
  image: string;
  readTime: number;
}
