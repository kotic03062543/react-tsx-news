import type { NewsArticle } from "../services/HomePage/Type";

interface MainCardProps {
  main: NewsArticle;
}

function MainCard({ main }: MainCardProps) {
  return (
    <div className="flex flex-col sm:flex-col gap-3 ">
      <img
        src={main.url}
        alt="no file"
        className="w-full object-cover"
      />
      <h2 className="font-bold text-lg leading-tight">{main.title}</h2>
      <p className="text-sm text-gray-700">{main.description}</p>
    </div>
  );
}

export default MainCard;
