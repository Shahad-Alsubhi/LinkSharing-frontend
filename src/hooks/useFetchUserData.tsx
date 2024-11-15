import { useQuery } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import axiosInstance from "../api/axiosInstance";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { user } from "../Context/userContext";

interface userData extends user {
  _id: string;
}
const useFetchUserData = () => {
  const { data, isError, isLoading, isSuccess } = useQuery<
    AxiosResponse<{ userData: userData }>,
    AxiosError
  >({
    queryKey: ["userData"],
    queryFn: async () =>
      await axiosInstance.get("/users/user", {
        headers: { Authorization: "Bearer " + localStorage.getItem("user") },
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
