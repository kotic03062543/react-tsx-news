import { useLocation } from "react-router-dom";
import useDetailViewModel from "./ViewModel";
import { format, formatDistanceToNow, parseISO } from "date-fns";
import share from "../../assets/boy.png";
import save from "../../assets/boy.png";
import NewsCard from "../../components/Card/NewsCard";
import type { NewsArticle } from "../../services/Everthing/Type";

function DetailView() {
  const location = useLocation();
  const article = location.state?.article as NewsArticle;

  // const { article } = useDetailViewModel();

  // Mock data
  // const article: NewsArticle = {
  //   source: {
  //     id: "cnn",
  //     name: "CNN",
  //   },
  //   author: "John Doe",
  //   title: "Sample News Article",
  //   description: "This is a sample description for the news article.",
  //   url: "https://www.example.com/sample-article",
  //   urlToImage: "https://www.example.com/sample-image.jpg",
  //   publishedAt: "2023-10-01T12:00:00Z",
  //   content: "Full content of the sample article goes here.",
  // };

  const formatDateEverything = (isoDate: string): string => {
    const date = parseISO(isoDate);
    const now = new Date();

    const diffInMs = now.getTime() - date.getTime();
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

    if (diffInDays < 7) {
      const dateformatted = formatDistanceToNow(date, { addSuffix: true });
      return dateformatted.replace(/^about/, "");
    }

    return format(date, "d MMM yyyy");
  };
  const formatDate = article.publishedAt
    ? formatDateEverything(article.publishedAt)
    : "No Date";

  return (
    <div>
      <div className="w-full min-h-screen bg-white pt-5">
        <div className="px-0 sm:px-8 lg:px-65 flex flex-col items-center justify-center">
          <h2 className="w-full text-black text-3xl sm:text-4xl font-bold">
            {article.title}
          </h2>

          <div className="w-full pt-2.5 text-black text-[12px] flex flex-row items-center justify-between">
            <p>{formatDate}</p>
            <div className="space-x-4 hidden  sm:flex items-center">
              <div className="flex items-center">
                <strong className="cursor-pointer hover:underline">
                  Share
                </strong>
                <img src={share} alt="share" className="ml-1.5 h-4 w-4" />
              </div>
              <div className="flex items-center">
                <strong className="cursor-pointer hover:underline">Save</strong>
                <img src={save} alt="save" className="ml-1.5 h-4 w-4" />
              </div>
            </div>
          </div>

          <div className="w-full pt-3  text-left flex flex-col">
            <p className="text-black font-sm font-bold">
              {article.author ?? "No Author"}
            </p>
            <p className="text-black text-[12px]">{article.source.name}</p>
          </div>

          <div className=" sm:hidden w-full px-4 sm:px-0 xl:px-20 pt-2.5 text-black text-[12px] flex justify-end border-t border-gray-200">
            <div className="flex space-x-4 items-center">
              <div className="flex items-center pb-3">
                <strong className="cursor-pointer text-base hover:underline">
                  Share
                </strong>
                <img src={share} alt="share" className="ml-1.5 h-5 w-5" />
              </div>
              <div className="flex items-center pb-3">
                <strong className="cursor-pointer text-base hover:underline">
                  Save
                </strong>
                <img src={save} alt="save" className="ml-1.5 h-5 w-5" />
              </div>
            </div>
          </div>

          <img
            className=" w-full pt-4 max-w-5xl lg:max-w-6xl h-auto object-cover"
            src={
              article.urlToImage ??
              "https://www.bbc.com/news/av/10462520/bbc-news-logo"
            }
            alt="news"
          />

          <p className="text-md md:text-xl py-5">
            {article.content ?? "no content"}
          </p>
        </div>

        <div className="w-full px-4 sm:px-4 xl:px-25">
          <div className=" text-black border-t-2 border-black" />
          <h3 className="text-sm md:text-base font-extrabold pt-2 text-black">
            RELATED
          </h3>

          <div className="pt-5 pb-12 gap-5 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            {[...Array(3)].map((_, index) => (
              <NewsCard article={article} key={index} showImage={false} />
            ))}
          </div>
        </div>

        <div className="w-full px-4 sm:px-4 xl:px-25">
          <div className=" text-black border-t-2 border-black" />
          <h3 className="text-sm md:text-base font-extrabold pt-2 text-black">
            MORE FROM THE BBC
          </h3>
          <div>
            <NewsCard article={article} key={1} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailView;
