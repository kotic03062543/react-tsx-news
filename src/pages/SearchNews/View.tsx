import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useParams } from "react-router-dom";
import { GetNews } from "../../services/Everthing";

function SearchNewsView() {
  const { q } = useParams();
  console.log("Query Parameter:", q);
  const [useSearch, setSearch] = useState(q);

  const { data, isLoading } = useQuery({
    queryKey: ["searchNews", useSearch],
    queryFn: async () => {
      const data = await GetNews({ q: useSearch });
      console.log("Search Response Data:", data);
      if (data) {
        return data;
      }
      throw new Error("Failed to fetch search results");
    },
    refetchOnWindowFocus: false,
    enabled: !!useSearch,
  });

  return (
    <>
      <div className="mx-40 my-5">
        <div className="flex flex-row w-full h-15">
          <input
            type="text"
            className="border border-black w-full h-full text-black bg-white placeholder-gray-700 px-2"
            placeholder="Search news,topics and more"
            value={useSearch}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" className="bg-black px-3.5">
            <CiSearch size={25} color="white" />
          </button>
        </div>

        {isLoading && <p>Loading...</p>}
        {!isLoading && data?.articles?.length === 0 && (
          <p className="text-red-500">No results found for "{useSearch}"</p>
        )}
        {data?.articles?.map((article, index) => (
          <div key={index} className="flex gap-5 h-43 my-3">
            <div className="flex-shrink-0">
              <img
                src={article.urlToImage || "https://via.placeholder.com/150"}
                className="w-[250px] object-cover max-h-[350px] h-full"
                alt={article.title}
              />
            </div>
            <div>
              <h2 className="text-xl font-bold">{article.title}</h2>
              <p className="text-gray-700">{article.description}</p>
              <p className="text-sm text-gray-500">
                {new Date(article.publishedAt).toLocaleDateString()} |{" "}
                {article.author || "Unknown Author"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default SearchNewsView;
