import { useQuery } from "@tanstack/react-query";
import { GetNews } from "../../services/HomePage";

function HomeViewModel() {
  const { data: getNews, isLoading } = useQuery({
    queryKey: ["getNews"],
    queryFn: async () => {
      const response = await GetNews();
      console.log("Response from GetNews:", response);
      if (response) {
        return response;
      }
      throw new Error("Failed to fetch news data");
    },
    refetchOnWindowFocus: false,
  });

  return {
    getNews,
    isLoading,
  };
}

export default HomeViewModel;
