import { useQuery } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import axiosInstance from "../api/axiosInstance";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { user } from "../Context/userContext";



const useFetchUserById = (id:string) => {
    const { data, isError, isLoading, isSuccess } = useQuery<
    AxiosResponse<{ userData: user }>,
    AxiosError
  >({
    queryKey: ["userData"],
    queryFn: async () =>
      await axiosInstance.get(`/${id}`, {
      }),
    retry: 1,
  });

  
  useEffect(() => {
    if (isError) {
      toast.error("Something went wrong, Please try again later");
    }
  }, [isError]);

  return { userData: data?.data.userData, isError, isLoading, isSuccess };
}

export default useFetchUserById
