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
      {showImage && article.url && (
        <img
          src={article.url || article.url}
          alt={article.title || "No Image"}
          className="w-full object-cover"
        />
      )}
      <h2 className="font-bold text-lg leading-tight line-clamp-2">
        {article.title ?? "No Title"}
      </h2>
      <p className="text-sm text-gray-700 line-clamp-3">
        {article.description ?? "No Description"}
      </p>
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
