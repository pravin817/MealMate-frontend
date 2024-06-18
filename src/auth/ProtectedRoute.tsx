import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, Outlet } from "react-router-dom";
import PacmanLoader from "react-spinners/PacmanLoader";

const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="flex flex-col items-center justify-center">
          <PacmanLoader color=" rgb(249 115 22)" />
          <p className="text-gray-600 text-center mt-3 pl-3">
            {" "}
            Enjoy Food, Enjoy Life
          </p>
        </div>
      </div>
    );

  if (isAuthenticated) {
    return <Outlet />;
  }

  return <Navigate to="/" replace />;
};

export default ProtectedRoute;
