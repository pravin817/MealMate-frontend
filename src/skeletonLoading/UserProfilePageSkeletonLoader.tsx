
const UserProfilePageSkeletonLoader = () => {
  return (
    <div className="space-y-4 bg-gray-50 rounded-lg md:p-10 animate-pulse">
      <div className="text-2xl font-bold h-10 bg-gray-200 rounded w-2/3"></div>
      <div className="h-6 bg-gray-200 rounded w-1/2"></div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <div className="h-6 bg-gray-200 rounded"></div>
        </div>
        <div className="flex-1">
          <div className="h-6 bg-gray-200 rounded"></div>
        </div>
        <div className="flex-1">
          <div className="h-6 bg-gray-200 rounded"></div>
        </div>
      </div>
      <div className="flex items-center justify-center h-10">
        <div className="w-20 h-10 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
};

export default UserProfilePageSkeletonLoader;
