import { useQuery } from "@tanstack/react-query";
import { GetNews } from "../../services/Everthing";
import { useParams } from "react-router-dom";

function HomeViewModel() {
  const { category } = useParams();
  const newsCategory = category || "business";

  const { data: getNews, isLoading } = useQuery({
    queryKey: ["getNews", newsCategory],
    queryFn: async () => {
      const response = await GetNews({ category: newsCategory });
      console.log("Response from GetNews:", response);
      if (response) {
        return response;
      }
      throw new Error("Failed to fetch news data");
    },
    refetchOnWindowFocus: false,
    enabled: !!newsCategory,
  });

  return {
    getNews,
    isLoading,
  };
}

export default HomeViewModel;
