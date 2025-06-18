import type { NewsArticle } from "../services/HomePage/Type";

interface NormalCardProps {
  normal: NewsArticle;
}

function NormalCard({ normal }: NormalCardProps) {
  return (
    <div className="flex flex-col sm:flex-col gap-3 ">
      <h2 className="font-bold text-lg leading-tight">{normal.title}</h2>
      <p className="text-sm text-gray-700">{normal.description}</p>
    </div>
  );
}

export default NormalCard;
