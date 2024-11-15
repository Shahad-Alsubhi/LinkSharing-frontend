import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { FieldValues } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";

const useAuthAPI = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const useAuthMutation = (endpoint: string) =>
    useMutation<AxiosResponse, AxiosError<{ message: string }>, FieldValues>({
      mutationFn: async (formData) =>
        await axiosInstance.post(`/users/${endpoint}`, formData),
      onSuccess: (res) => {
        localStorage.setItem("user", res.data.token);
        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
      },
    });

  return {
    useLogin: useAuthMutation("/login"),
    useSignup: useAuthMutation("/signup"),
  };
};

export default useAuthAPI;
