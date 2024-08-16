const SkeletonLoader = () => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition duration-500 animate-pulse flex flex-col justify-between">
      <div className="bg-gray-700 h-64 w-full mb-4"></div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="h-6 bg-gray-700 rounded mb-2"></div>
        <div className="h-6 bg-gray-700 rounded w-1/2 mb-4"></div>
      </div>
      <div className="p-4 flex justify-center">
        <div className="h-10 bg-gray-700 rounded w-3/4"></div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
