import type { NewsArticle } from "./Type";

export const GetNews = async (): Promise<NewsArticle | null> => {
  const apiKey = "7674065a8d9e49c4880e58e2ecde44ae";
  const url = `https://newsapi.org/v2/everything?q=Apple&from=2025-06-20&sortBy=popularity&apiKey=${apiKey}`;

  const response = await fetch(url)
    .then(async (res) => {
      return await res.json();
    })
    .catch(() => {
      return false;
    });
  return response;
};
