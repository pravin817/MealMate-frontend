const OrderStatusHeaderSkeleton = () => {
  return (
    <div className="space-y-4 bg-gray-50 rounded-lg p-10 animate-pulse">
      <div className="text-4xl font-bold h-10 bg-gray-200 rounded w-1/3"></div>
      <div className="h-6 bg-gray-200 rounded w-1/4"></div>
      <div className="h-4 bg-gray-200 rounded w-full"></div>
      <div className="h-4 bg-gray-200 rounded w-full"></div>
    </div>
  );
};

const OrderStatusDetailSkeleton = () => {
  return (
    <div className="space-y-4 bg-gray-50 rounded-lg p-10 animate-pulse">
      <div className="h-6 bg-gray-200 rounded w-1/2"></div>
      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      <div className="h-4 bg-gray-200 rounded w-2/3"></div>
      <div className="h-4 bg-gray-200 rounded w-full"></div>
    </div>
  );
};

const OrderStatusPageSkeletonLoader = () => {
  return (
    <div className="space-y-10">
      <div className="space-y-10 bg-gray-50 p-10 rounded-lg">
        <OrderStatusHeaderSkeleton />
        <div className="grid gap-10 md:grid-cols-2">
          <OrderStatusDetailSkeleton />
          <div className="aspect-w-16 aspect-h-9">
            <div className="bg-gray-200 rounded-md w-full h-full"></div>
          </div>
        </div>
      </div>
      <div className="space-y-10 bg-gray-50 p-10 rounded-lg">
        <OrderStatusHeaderSkeleton />
        <div className="grid gap-10 md:grid-cols-2">
          <OrderStatusDetailSkeleton />
          <div className="aspect-w-16 aspect-h-9">
            <div className="bg-gray-200 rounded-md w-full h-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderStatusPageSkeletonLoader;
