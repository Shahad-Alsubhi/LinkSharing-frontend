import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import UserInfoCard from "../Components/UserInfoCard";
import { CircularProgress } from "@mui/material";
import useLinkManagement from "../hooks/useLinkManagement";
import useFetchUserData from "../hooks/useFetchUserData";

const Preview = () => {
  const { userData, isError, isLoading } = useFetchUserData();
  const { handleCopy } = useLinkManagement();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col relative max-md:bg-white min-h-screen pb-28 items-center md:gap-10 before:absolute before:left-0 before:top-0 before:w-full before:h-[330px] before:rounded-b-3xl before:-z-[1]  before:bg-[#633CFF] ">
      <nav className="flex p-4 rounded-2xl gap-4 md:justify-between flex-shrink w-full md:m-6 md:w-[95%] z-10 bg-white">
        <Button
          variant={"secondary"}
          onClick={() => {
            navigate("/links");
          }}
          customStyle="max-md:w-full"
        >
          Back to Editor
        </Button>
        <Button
          variant={"primary"}
          onClick={() =>
            handleCopy(userData!.firstName, userData!.lastName, userData!._id)
          }
          customStyle="max-md:w-full"
          disabled={isError}
        >
          Share Link
        </Button>
      </nav>
      {isLoading && (
        <div className=" absolute w-full h-full bg-slate-300/30 z-50 flex items-center justify-center">
          <CircularProgress color="primary" />
        </div>
      )}
      <div className=" md:w-[330px] min-h-[400px] md:rounded-2xl md:shadow-lg pt-10 pb-4 md:bg-white z-20">
        {userData && <UserInfoCard userData={userData} />}
      </div>
    </div>
  );
};

export default Preview;
