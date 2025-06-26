import type { NewsResponse } from "../Everthing/Type";

export const GetNews = async (): Promise<NewsResponse | null> => {
  const apiKey = "7674065a8d9e49c4880e58e2ecde44ae";
  const q = "trump";
  const cetagory = "business";
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}&category=${cetagory}&q=${encodeURIComponent(q)}`;

  const response = await fetch(url)
    .then(async (res) => {
      return await res.json();
    })
    .catch(() => {
      return false;
    });
  return response;
};
