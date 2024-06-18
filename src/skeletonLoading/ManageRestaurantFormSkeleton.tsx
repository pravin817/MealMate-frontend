const ManageRestaurantFormSkeleton = () => {
  return (
    <div className="space-y-8 bg-gray-50 p-10 rounded-lg animate-pulse">
      {/* Detail Section */}
      <div className="space-y-4">
        <div className="h-8 bg-gray-200 rounded w-2/3"></div>
        <div className="h-6 bg-gray-200 rounded w-1/2"></div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="h-6 bg-gray-200 rounded"></div>
          </div>
          <div className="flex-1">
            <div className="h-6 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
      {/* Separator */}
      <div className="h-px bg-gray-300"></div>
      {/* Cuisines Section */}
      <div className="space-y-4">
        <div className="h-6 bg-gray-200 rounded w-1/2"></div>
        <div className="h-6 bg-gray-200 rounded w-1/3"></div>
        <div className="h-6 bg-gray-200 rounded w-2/3"></div>
      </div>
      {/* Separator */}
      <div className="h-px bg-gray-300"></div>
      {/* Menu Section */}
      <div className="space-y-4">
        <div className="h-6 bg-gray-200 rounded w-2/3"></div>
        <div className="h-6 bg-gray-200 rounded w-1/2"></div>
        <div className="h-6 bg-gray-200 rounded w-1/3"></div>
      </div>
      {/* Separator */}
      <div className="h-px bg-gray-300"></div>
      {/* Image Section */}
      <div className="flex items-center justify-center space-x-4">
        <div className="w-20 h-20 bg-gray-200 rounded-full"></div>
        <div className="h-8 bg-gray-200 rounded w-1/2"></div>
      </div>
      {/* Button Section */}
      <div className="flex justify-center mt-8">
        <div className="w-20 h-10 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
};

export default ManageRestaurantFormSkeleton;
