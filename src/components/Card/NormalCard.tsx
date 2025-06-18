import type { NewsArticle } from "../../services/HomePage/Type";

interface NormalCardProps {
  normal: NewsArticle;
}

function NormalCard({ normal }: NormalCardProps) {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="font-bold text-lg leading-tight line-clamp-3">
        {normal.title}
      </h2>
      <p className="text-sm text-gray-700 line-clamp-3">{normal.description}</p>
      <p className="text-xs text-gray-500 mt-1">
        {normal.publishedAt} | {normal.author}
      </p>
    </div>
  );
}

export default NormalCard;
