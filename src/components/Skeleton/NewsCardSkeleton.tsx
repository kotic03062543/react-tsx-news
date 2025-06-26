function NewsCardSkeleton() {
  return (
    <div className="flex flex-col gap-2 animate-pulse">
      <div className="bg-gray-300 rounded-md w-full h-40" />
      <div className="h-4 bg-gray-300 rounded w-3/4" />
      <div className="h-3 bg-gray-200 rounded w-full" />
      <div className="h-3 bg-gray-200 rounded w-5/6" />
      <div className="h-3 bg-gray-100 rounded w-1/2 mt-1" />
    </div>
  );
}
export default NewsCardSkeleton;
