import { useContext } from "react";
import Input from "./Input";
import { UserContext } from "../Context/userContext";

const ProfileDetails = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="p-5 rounded-lg bg-[#FAFAFA] mb-6 md:mb-14">
      <Input
        lable={"First name*"}
        placeholder={"e.g. John"}
        type={"text"}
        defaultValue={user.firstName}
        validation={{ required: "Can’t be empty" }}
        customStyle="md:flex md:justify-between md:items-center"
        id={"firstName"}
      />
      <Input
        id="lastName"
        lable={"Last name*"}
        placeholder={"e.g. Appleseed"}
        type={"text"}
        defaultValue={user.lastName}
        validation={{ required: "Can’t be empty" }}
        customStyle="md:flex md:justify-between md:items-center"
      />
      <Input
        id="visibleEmail"
        lable={"Email"}
        placeholder={"e.g. email@example.com"}
        type={"email"}
        defaultValue={user.visibleEmail}
        validation={{
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Invalid email address",
          },
        }}
        customStyle="md:flex md:justify-between md:items-center"
      />
    </div>
  );
};

export default ProfileDetails;
