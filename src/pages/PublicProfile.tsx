import { CircularProgress } from "@mui/material";
import UserInfoCard from "../Components/UserInfoCard";
import useFetchUserById from "../hooks/useFetchUserById";
import { useParams } from "react-router-dom";




const PublicProfile = () => {
    const {id}=useParams()
    const { userData, isLoading } = useFetchUserById(id||"");

    return (
        <div className="flex flex-col relative max-md:bg-white min-h-screen pb-28 pt-16 items-center md:pt-44 before:absolute before:left-0 before:top-0 before:w-full before:h-[330px] before:rounded-b-3xl before:-z-[1]  before:bg-[#633CFF] ">

          {isLoading && (
            <div className="absolute w-full h-full top-0 left-0 bg-transparent/5 z-50 flex items-center justify-center">
              <CircularProgress color="primary" />
            </div>
          )}
          <div className=" md:w-[330px] min-h-[400px] md:rounded-2xl md:shadow-lg pt-10 pb-4 md:bg-white z-20">
            {userData && <UserInfoCard userData={userData} />}
          </div>
        </div>
      );
}

export default PublicProfile
