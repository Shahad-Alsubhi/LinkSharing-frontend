import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import PhoneMockup from "./Components/PhoneMockup";

const Layout = () => {
  return (
    <div className="bg-[#fafafa] md:pt-6 pb-6 min-h-screen">
      <Header />
      <div className="xl:grid xl:grid-cols-[1fr_1.5fr] m-8 xl:gap-6">
        <PhoneMockup />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
