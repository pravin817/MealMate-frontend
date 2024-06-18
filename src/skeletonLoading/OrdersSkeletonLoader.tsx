const OrdersSkeletonLoader = () => {
  return (
    <div className="space-y-10 bg-gray-50 p-10 rounded-lg animate-pulse">
      <h2 className="text-2xl font-bold h-8 bg-gray-200 rounded w-1/3"></h2>
      <div className="grid gap-10 md:grid-cols-2">
        <OrderItemCardSkeleton />
        <OrderItemCardSkeleton />
        <OrderItemCardSkeleton />
        <OrderItemCardSkeleton />
      </div>
    </div>
  );
};

export default OrdersSkeletonLoader;

const OrderItemCardSkeleton = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-4 animate-pulse">
      {/* Customer Name */}
      <div className="h-6 bg-gray-200 rounded w-2/3"></div>

      {/* Delivery Address */}
      <div className="h-6 bg-gray-200 rounded w-1/2"></div>

      {/* Time */}
      <div className="h-6 bg-gray-200 rounded w-1/4"></div>

      {/* Total Cost */}
      <div className="h-6 bg-gray-200 rounded w-1/5"></div>

      {/* Separator */}
      <div className="h-px bg-gray-300"></div>

      {/* Cart Items */}
      <div className="grid gap-2">
        <div className="flex items-center space-x-2">
          <div className="h-6 bg-gray-200 rounded w-1/6"></div>
          <div className="h-6 bg-gray-200 rounded w-2/3"></div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="h-6 bg-gray-200 rounded w-1/6"></div>
          <div className="h-6 bg-gray-200 rounded w-2/3"></div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="h-6 bg-gray-200 rounded w-1/6"></div>
          <div className="h-6 bg-gray-200 rounded w-2/3"></div>
        </div>
      </div>

      {/* Separator */}
      <div className="h-px bg-gray-300"></div>

      {/* Status Section */}
      <div className="flex items-center space-x-4">
        <div className="h-6 bg-gray-200 rounded w-1/3"></div>
        <div className="h-6 bg-gray-200 rounded w-1/4"></div>
      </div>
    </div>
  );
};
