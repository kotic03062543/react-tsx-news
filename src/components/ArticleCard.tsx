import type { NewsArticle } from "../services/HomePage/Type";

interface ArticleCardProps {
  article: NewsArticle;
}

function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="flex flex-col sm:flex-col gap-3">
      <img
        src={article.url}
        alt="no file"
        className="w-full object-cover"
      />
      <h2 className="font-bold text-lg leading-tight">{article.title}</h2>
      <p className="text-sm text-gray-700">{article.description}</p>
      <p className="text-xs text-gray-500 mt-1">
        {article.publishedAt} | {article.author}
      </p>
    </div>
  );
}

export default ArticleCard;
