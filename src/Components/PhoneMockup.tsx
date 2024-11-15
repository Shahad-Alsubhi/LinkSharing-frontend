import { useContext } from "react";
import { UserContext } from "../Context/userContext";
import UserInfoCard from "./UserInfoCard";

const PhoneMockup = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="max-xl:hidden bg-white rounded-xl flex justify-center items-center ">
      <picture className="relative">
        <img
          src="/images/illustration-phone-mockup.svg"
          alt="phone-mockup"
          className="h-[582px]"
        />
        <div className="absolute top-[60px] left-8">
          <UserInfoCard userData={user} />
        </div>
      </picture>
    </div>
  );
};

export default PhoneMockup;
