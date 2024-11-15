import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  if (!localStorage.getItem("user"))
    return <Navigate to={"/login"} state={{ from: location }} replace />;
  return children;
};

export default PrivateRoute;
