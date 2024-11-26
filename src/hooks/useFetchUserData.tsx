import { useQuery } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import axiosInstance from "../api/axiosInstance";
import { useContext, useEffect } from "react";
import toast from "react-hot-toast";
import { user } from "../Context/userContext";
import { AuthContext } from "../Context/AuthContext";

interface userData extends user {
  _id: string;
}
const useFetchUserData = () => {
  const { authToken } = useContext(AuthContext);
  

  const { data, isError, isLoading, isSuccess } = useQuery<
    AxiosResponse<{ userData: userData }>,
    AxiosError
  >({
    queryKey: ["userData"],
    queryFn: async () =>
      await axiosInstance.get("/profile", {
        headers: { Authorization: `Bearer ${authToken}`},
      }),
    retry: 1,
  });

  
  useEffect(() => {
    if (isError) {
      toast.error("Something went wrong, Please try again later");
    }
  }, [isError]);

  return { userData: data?.data.userData, isError, isLoading, isSuccess };
};

export default useFetchUserData;
