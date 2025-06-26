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

export interface NewsSource {
  id: string | null;
  name: string;
}

export interface NewsResponse {
  status: string;
  totalResults: number;
  articles: NewsArticle[];
}

export interface NewsBaseCard {
  title: string;
  description?: string;
  publishedAt?: string;
  author?: string;
  urlToImage?: string;
}

export interface GetNewsRequest {
  country?: string;
  category?: string;
  q?: string;
  pageSize?: number;
  page?: number;
}
