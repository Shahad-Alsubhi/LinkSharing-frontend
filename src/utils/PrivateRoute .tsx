import { ReactNode, useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/authContext";
import { CircularProgress } from "@mui/material";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const { authToken, isLoading } = useContext(AuthContext);

  if (isLoading)
    return (
      <div className=" absolute w-full h-full  bg-transparent/10 z-50 flex items-center justify-center">
        <CircularProgress color="primary" />
      </div>
    );
  if (!authToken)
    return <Navigate to={"/login"} state={{ from: location }} replace />;
  else return children;
};

export default PrivateRoute;
