import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import PhoneMockup from "./Components/PhoneMockup";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="xl:grid xl:grid-cols-[1fr_1.5fr] m-6 xl:gap-4">
        <PhoneMockup />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
