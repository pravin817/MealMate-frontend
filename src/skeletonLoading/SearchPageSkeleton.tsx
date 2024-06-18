const SearchPageSkeleton = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
      {/* Cuisine Filter Placeholder */}
      <div id="cuisines-list">
        <div className="bg-white shadow-md rounded-lg p-6 animate-pulse">
          {/* Filter By Cuisines */}
          <div className="text-md font-semibold mb-2 h-6 bg-gray-200 rounded w-2/3"></div>
          {/* Reset Filter */}
          <div className="text-sm font-semibold underline cursor-pointer text-blue-500 h-6 bg-gray-200 rounded w-1/4"></div>

          {/* Cuisine Items */}
          <div className="space-y-2 flex flex-col">
            <div className="flex">
              <div className="hidden h-6 bg-gray-200 rounded w-full"></div>
            </div>
            <div className="flex">
              <div className="hidden h-6 bg-gray-200 rounded w-full"></div>
            </div>
            <div className="flex">
              <div className="hidden h-6 bg-gray-200 rounded w-full"></div>
            </div>
            <div className="flex">
              <div className="hidden h-6 bg-gray-200 rounded w-full"></div>
            </div>
            <div className="mt-2 flex-1">
              <div className="hidden h-8 bg-gray-200 rounded w-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Placeholder */}
      <div id="main-content" className="flex flex-col gap-5">
        {/* Search Bar Placeholder */}
        <div className="bg-white shadow-md rounded-lg p-6 animate-pulse">
          <div className="hidden h-8 bg-gray-200 rounded w-full"></div>
        </div>

        {/* Result Info Placeholder */}
        <div className="flex justify-between flex-col gap-3 lg:flex-row">
          <div className="bg-white shadow-md rounded-lg p-6 animate-pulse">
            <div className="hidden h-8 bg-gray-200 rounded w-full"></div>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 animate-pulse">
            <div className="hidden h-8 bg-gray-200 rounded w-full"></div>
          </div>
        </div>

        {/* Result Cards Placeholder */}
        <div className="grid gap-5">
          <SearchResultCardSkeleton />
          <SearchResultCardSkeleton />
          <SearchResultCardSkeleton />
        </div>

        {/* Pagination Selector Placeholder */}
        <div className="bg-white shadow-md rounded-lg p-6 animate-pulse">
          <div className="hidden h-8 bg-gray-200 rounded w-full"></div>
        </div>
      </div>
    </div>
  );
};

const SearchResultCardSkeleton = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 cursor-pointer animate-pulse">
      {/* Restaurant Image */}
      <div className="bg-gray-300 rounded-md animate-pulse aspect-w-16 aspect-h-5"></div>

      {/* Restaurant Info */}
      <div className="grid md:grid-cols-2 gap-2 mt-4">
        {/* Restaurant Name */}
        <div className="hidden h-8 bg-gray-200 rounded w-3/4"></div>

        {/* Restaurant Details */}
        <div className="flex gap-2 flex-col">
          <div className="flex items-center gap-1 h-6 bg-gray-200 rounded w-full"></div>
          <div className="flex items-center gap-1 h-6 bg-gray-200 rounded w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default SearchPageSkeleton;
