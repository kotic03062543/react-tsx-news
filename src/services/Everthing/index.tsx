import type { GetNewsRequest, NewsResponse } from "./Type";

export const GetNews = async ({
  country = "us",
  category = "",
  q = "",
}: GetNewsRequest = {}): Promise<NewsResponse | null> => {
  const apiKey = "7674065a8d9e49c4880e58e2ecde44ae";
  const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}&category=${category}&q=${encodeURIComponent(
    q
  )}`;

  const response = await fetch(url)
    .then(async (res) => {
      console.log("Fetching news from URL:", url);
      return await res.json();
    })
    .catch(() => {
      return false;
    });
  return response;
};
