import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
// import Profile from "./pages/Profile";
import Links from "./pages/Links";
import Profile from "./pages/Profile";
import Preview from "./pages/Preview";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PrivateRoute from "./utils/PrivateRoute ";
import PublicProfile from "./pages/PublicProfile";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Links />,
      },
      {
        path: "/links",
        element: <Links />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/preview",
    element: <PrivateRoute><Preview /></PrivateRoute>,
  },
  {
    path:"/profile/:name/:id",
    element:<PublicProfile/>
  },
  {
    path: "/login",
    element: <Login />,
  },{
    path:"/signup",
    element:<Signup/>
  }
]);
export default Router;
