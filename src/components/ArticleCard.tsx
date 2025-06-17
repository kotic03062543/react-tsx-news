import type { NewsArticle } from "../services/HomePage/Type";

function ArticleCard({
  url,
  title,
  author,
  description,
  publishedAt,
}: NewsArticle) {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <img src={url} alt={title} className="w-full sm:w-48 h-32 object-cover" />
      <div>
        <h2 className="font-bold text-lg leading-tight">{title}</h2>
        <p className="text-sm text-gray-700">{description}</p>
        <p className="text-xs text-gray-500 mt-1">
          {publishedAt} | {author}
        </p>
      </div>
    </div>
  );
}

export default ArticleCard;
