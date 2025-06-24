import NewsCard from "../../components/Card/NewsCard";
import Scrollable from "../../components/Swiper/Scrollable";
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
    <div className="flex flex-col gap-15 px-5 md:px-20 py-5 md:py-10">
      <div className="flex flex-col lg:flex-row gap-5 justify-center">
        {/* <div className="text-red-500 md:text-blue-500 lg:text-yellow-500">TEST</div> */}
        {/* ซ้าย */}
        <div className="w-full flex flex-col gap-4 basis-2/5">
          {articles.slice(0, 2).map((article, index) => (
            <NewsCard key={index} article={article} />
          ))}
        </div>

        {/* กลางใหญ่ */}
        <div className="w-full flex-grow ">
          {articles.slice(2, 3).map((article, index) => (
            <NewsCard key={index} article={article} showMeta={false} />
          ))}
        </div>

        {/* ขวา */}
        <div className="w-full flex flex-col gap-4 basis-2/5">
          {articles.slice(3, 7).map((article, index) => (
            <NewsCard key={index} article={article} showImage={false} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="border"></div>
        <div className="font-bold text-lg">ONLY FROM THE BBC</div>
        <div className="flex flex-row gap-5">
          {articles.slice(3, 5).map((article, index) => (
            <div key={index} className="basis-1/2">
              <NewsCard article={article} />
            </div>
          ))}
        </div>
      </div>
      <div className="text-white px-4 py-6 bg-black">
        <Scrollable
          data={{
            spaceBetween: 20,
            slidesPerView: 6,
            children: articles
              .slice(0, 9)
              .map((article, index) => (
                <NewsCard key={index} article={article} />
              )),
          }}
        />
      </div>
    </div>
  );
}

export default HomeView;
