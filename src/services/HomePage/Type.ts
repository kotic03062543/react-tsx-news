export interface NewsArticle {
  source: NewsSource;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface NewsBaseCard {
  title: string;
  description?: string;
  publishedAt?: string;
  author?: string;
  url?: string;
}

export interface NewsSource {
  id: string | null;
  name: string;
}

// export interface NewsArticle {
//   source: NewsSource;
//   author: string | null;
//   title: string;
//   description: string;
//   url: string;
//   urlToImage: string | null;
//   publishedAt: string;
//   content: string;
// }

export interface NewsResponse {
  status: string;
  totalResults: number;
  articles: NewsArticle[];
}
