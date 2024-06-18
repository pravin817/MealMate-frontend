const RestaurantDetailSkeleton = () => {
  return (
    <div className="flex flex-col gap-10">
      {/* Restaurant Image Placeholder */}
      <div className="bg-gray-300 rounded-md animate-pulse aspect-w-16 aspect-h-5"></div>

      {/* Restaurant Info Placeholder */}
      <div className="bg-white shadow-md rounded-lg p-6 animate-pulse">
        <h1 className="text-3xl font-bold mb-4 h-8 bg-gray-200 rounded w-2/3"></h1>
        <p className="text-lg mb-2 h-6 bg-gray-200 rounded w-1/3"></p>
        <div className="flex flex-wrap gap-2">
          <span className="flex items-center h-6 bg-gray-200 rounded"></span>
          <span className="flex items-center h-6 bg-gray-200 rounded"></span>
          <span className="flex items-center h-6 bg-gray-200 rounded"></span>
        </div>
      </div>

      {/* Menu Items Placeholder */}
      <div className="grid gap-4">
        <h2 className="text-2xl font-bold h-8 bg-gray-200 rounded w-1/2 animate-pulse"></h2>
        <div className="bg-white shadow-md rounded-lg p-4 cursor-pointer animate-pulse">
          <h3 className="text-xl font-bold mb-2 h-6 bg-gray-200 rounded w-3/4"></h3>
          <p className="font-bold h-4 bg-gray-200 rounded w-1/4"></p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 cursor-pointer animate-pulse">
          <h3 className="text-xl font-bold mb-2 h-6 bg-gray-200 rounded w-3/4"></h3>
          <p className="font-bold h-4 bg-gray-200 rounded w-1/4"></p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 cursor-pointer animate-pulse">
          <h3 className="text-xl font-bold mb-2 h-6 bg-gray-200 rounded w-3/4"></h3>
          <p className="font-bold h-4 bg-gray-200 rounded w-1/4"></p>
        </div>
      </div>

      {/* Order Summary Placeholder */}
      <div className="bg-white shadow-md rounded-lg p-6 animate-pulse">
        <h2 className="text-2xl font-bold mb-4 h-8 bg-gray-200 rounded w-2/3"></h2>
        <div className="grid gap-4">
          <div className="flex justify-between items-center">
            <span className="flex items-center h-6 bg-gray-200 rounded"></span>
            <span className="font-bold h-6 bg-gray-200 rounded w-1/4"></span>
          </div>
          <div className="flex justify-between items-center">
            <span className="flex items-center h-6 bg-gray-200 rounded"></span>
            <span className="font-bold h-6 bg-gray-200 rounded w-1/4"></span>
          </div>
          <div className="flex justify-between items-center">
            <span className="flex items-center h-6 bg-gray-200 rounded"></span>
            <span className="font-bold h-6 bg-gray-200 rounded w-1/4"></span>
          </div>
          <div className="flex justify-between items-center">
            <span className="flex items-center h-6 bg-gray-200 rounded"></span>
            <span className="font-bold h-6 bg-gray-200 rounded w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetailSkeleton;
