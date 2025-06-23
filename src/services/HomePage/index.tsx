import type { NewsResponse } from "./Type";

export const GetNews = async (): Promise<NewsResponse | null> => {
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=7674065a8d9e49c4880e58e2ecde44ae`;

  const response = await fetch(url)
    .then(async (res) => {
      return await res.json();
    })
    .catch(() => {
      return false;
    });
  return response;
};
