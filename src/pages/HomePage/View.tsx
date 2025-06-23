import NewsCard from "../../components/Card/NewsCard";
// import type { NewsArticle } from "../../services/HomePage/Type";
import HomeViewModel from "./ViewModel";

function HomeView() {
  const { getNews, isLoading } = HomeViewModel();

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }
  const articles = getNews?.articles ?? [];
  //   const sampleArticle: NewsArticle = {
  //     source: { id: "techcrunch", name: "TechCrunch" },
  //     author: "Lauren",
  //     title:
  //       "Bye-bye bots: Altera's game-playing AI agents get backing from Eric Schmidt | TechCrunch",
  //     description:
  //       "Autonomous, AI-based players are coming to a gaming experience near you...",
  //     url: "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",
  //     urlToImage:
  //       "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",
  //     publishedAt: "2024-05-08T15:14:57Z",
  //     content: "...",
  //   };

  return (
    <div className="flex flex-col lg:flex-row gap-5 px-4 py-6 my-1 max-4 md:mx-20">
      {/* ซ้าย */}
      <div className="flex flex-col gap-4 basis-2/5 order-1">
        {articles.slice(0, 2).map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>

      {/* กลางใหญ่ */}
      <div className="flex-grow order-2">
        {articles.slice(2, 3).map((article, index) => (
          <NewsCard key={index} article={article} showMeta={false} />
        ))}
      </div>

      {/* ขวา */}
      <div className="flex flex-col gap-4 basis-2/5 order-3">
        {articles.slice(3, 8).map((article, index) => (
          <NewsCard key={index} article={article} showImage={false} />
        ))}
      </div>
    </div>
  );
}

export default HomeView;
