import NewsCard from "../../components/Card/NewsCard";
import NewsCardSkeleton from "../../components/Skeleton/NewsCardSkeleton";
import Scrollable from "../../components/Swiper/Scrollable";
// import type { NewsArticle } from "../../services/HomePage/Type";
import HomeViewModel from "./ViewModel";

function HomeView() {
  const { getNews, isLoading } = HomeViewModel();

  const articles = getNews?.articles ?? [];

  if (isLoading) {
    return <SkeletonLoading />;
  }

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
            spaceBetween: 30,
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

function SkeletonLoading() {
  return (
    <div className="flex flex-col gap-6 px-5 md:px-20 py-5 md:py-10">
      <div className="flex flex-col lg:flex-row gap-5">
        {/* ซ้าย */}
        <div className="w-full flex flex-col gap-4 basis-2/5">
          {[...Array(2)].map(() => (
            <NewsCardSkeleton />
          ))}
        </div>

        {/* กลางใหญ่ */}
        <div className="w-full h-[300px] flex-grow">
          <NewsCardSkeleton />
        </div>

        {/* ขวา */}
        <div className="w-full flex flex-col gap-4 basis-2/5">
          {[...Array(2)].map(() => (
            <NewsCardSkeleton />
          ))}
        </div>
      </div>

      {/* ONLY FROM THE BBC */}
      <div className="flex flex-col gap-3">
        <div className="border"></div>
        <div className="font-bold text-lg">ONLY FROM THE BBC</div>
        <div className="flex flex-row gap-5">
          {[...Array(2)].map(() => (
            <div className="basis-1/2">
              <NewsCardSkeleton />
            </div>
          ))}
        </div>
      </div>

      {/* Scrollable */}
      <div className="text-white px-4 py-6 bg-black">
        <div className="flex gap-6 overflow-x-auto">
          {[...Array(6)].map(() => (
            <div className="min-w-[200px]">
              <NewsCardSkeleton />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
