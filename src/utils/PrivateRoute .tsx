import { ReactNode, useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { CircularProgress } from "@mui/material";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const { authToken, isLoading } = useContext(AuthContext);

  if (isLoading) return <CircularProgress color="primary" />;
  if (!authToken)
    return <Navigate to={"/login"} state={{ from: location }} replace />;
  else return children;
};

export default PrivateRoute;
