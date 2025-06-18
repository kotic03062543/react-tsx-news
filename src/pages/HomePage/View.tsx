
import NewsCard from "../../components/Card/NewsCard";
import type { NewsArticle } from "../../services/HomePage/Type";

function HomeView() {
  const sampleArticle: NewsArticle = {
    source: { id: "techcrunch", name: "TechCrunch" },
    author: "Lauren",
    title:
      "Bye-bye bots: Altera's game-playing AI agents get backing from Eric Schmidt | TechCrunch",
    description:
      "Autonomous, AI-based players are coming to a gaming experience near you...",
    url: "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",
    urlToImage:
      "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",
    publishedAt: "2024-05-08T15:14:57Z",
    content: "...",
  };

  return (
    <div className="flex flex-col lg:flex-row gap-5 px-4 py-6 my-1 mx-20">
      {/* ซ้าย */}
      <div className="flex flex-col gap-4 basis-2/5">
        {/* <ArticleCard article={sampleArticle} /> */}
        {/* <ArticleCard article={sampleArticle} /> */}
        <NewsCard article={sampleArticle} />
        <NewsCard article={sampleArticle} />
      </div>

      {/* กลางใหญ่ */}
      <div className="flex-grow">
        {/* <MainCard main={sampleArticle} /> */}
        <NewsCard article={sampleArticle} showMeta={false} />
      </div>

      {/* ขวา */}
      <div className="flex flex-col gap-4 basis-2/5">
        <NewsCard article={sampleArticle} showImage={false} showMeta={true} />
        <NewsCard article={sampleArticle} showImage={false} showMeta={true} />
        <NewsCard article={sampleArticle} showImage={false} showMeta={true} />
        <NewsCard article={sampleArticle} showImage={false} showMeta={true} />
        <NewsCard article={sampleArticle} showImage={false} showMeta={true} />
      </div>
    </div>
  );
}

export default HomeView;
