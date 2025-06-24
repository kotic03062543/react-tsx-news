import type { NewsBaseCard } from "../../services/HomePage/Type";

interface NewsCardProps {
  article: NewsBaseCard;
  showImage?: boolean;
  showMeta?: boolean;
}

function NewsCard({
  article,
  showImage = true,
  showMeta = true,
}: NewsCardProps) {
  return (
    <div className="flex flex-col gap-2">
      <div>
        {showImage && article.urlToImage && (
          <img
            src={article.urlToImage || article.urlToImage}
            alt={article.title || "No Image"}
            className="w-full object-cover max-h-[350px] h-full"
          />
        )}
      </div>
      <div className="font-bold text-lg leading-tight line-clamp-2">
        {article.title ?? "No Title"}
      </div>
      <div className="text-sm text-gray-700 line-clamp-3">
        {article.description ?? "No Description"}
      </div>
      {showMeta && (article.publishedAt || article.author) && (
        <p className="text-xs text-gray-500 mt-1">
          <span>{article.publishedAt ?? "No publishedAt"} </span>
          <span className="p-2">|</span>
          <span>{article.author ?? "No Author"}</span>
        </p>
      )}
    </div>
  );
}

export default NewsCard;
