import type { GetNewsRequest, NewsResponse } from "./Type";

export const GetNews = async ({
  country = "us",
  category = "business",
  q = "trump",
  pageSize = 20,
  page = 1,
}: GetNewsRequest = {}): Promise<NewsResponse | null> => {
  const apiKey = "7674065a8d9e49c4880e58e2ecde44ae";
  const url =
    `https://newsapi.org/v2/top-headlines?` +
    `country=${country}` +
    `&category=${category}` +
    `&q=${encodeURIComponent(q)}` +
    `&pageSize=${pageSize}` +
    `&page=${page}` +
    `&apiKey=${apiKey}`;

  const response = await fetch(url)
    .then(async (res) => {
      return await res.json();
    })
    .catch(() => {
      return false;
    });
  return response;
};
