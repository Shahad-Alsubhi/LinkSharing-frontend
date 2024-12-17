import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { AxiosError, AxiosResponse } from "axios";
import { useContext } from "react";
import { UserContext } from "../Context/userContext";
import { Link } from "../Context/userContext";
import toast from "react-hot-toast";
import { promtLogin, showSuccessMessage } from "../utils/Alerts";
import axiosInstance from "../api/axiosInstance";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/authContext";

const useProfileAPI = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { authToken } = useContext(AuthContext);


  const updateProfileMutation = useMutation<
    AxiosResponse,
    AxiosError,
    FormData
  >({
    mutationFn: async (values) => {
      return await axiosInstance.patch("/profile", values, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${authToken}`,
        },
      });
    },
    onSuccess: () => {
      showSuccessMessage("Your changes have been successfully saved!");
    },
    onError: () => {
      toast.error("Something went wrong, Please try again later.");
    },
  });

  const updateLinksMutation = useMutation<AxiosResponse, AxiosError, Link[]>({
    mutationFn: async (links) => {
      return await axiosInstance.patch(
        "/profile/links",
        { links },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
    },
    onSuccess: () => {
      showSuccessMessage("Your changes have been successfully saved!");

    },
    onError: () => {
      toast.error("Something went wrong, Please try again later.");
    },
  });

  const handleUpdateLinks = async (values: FieldValues) => {
    const updatedLinks = user.links.map((link) => {
      return { ...link, url: values[link.id] };
    });
    const newUser = { ...user, links: updatedLinks };
    setUser(newUser);

    if (!authToken) {
      const result = await promtLogin();
      if (result) {
        navigate("/login", { replace: true, state: { from: location } });
      }
    } else {
      updateLinksMutation.mutate(updatedLinks);
    }
  };

  const handleUpdateProfile = async (values: FieldValues) => {
    const data = new FormData();
    data.append("firstName", values.firstName);
    data.append("lastName", values.lastName);
    // if(values.visibleEmail)
    data.append("visibleEmail", values.visibleEmail);
    data.append("picture", values.picture[0]);    
    if (!authToken) {
      const result = await promtLogin();
      if (result) {
        navigate("/login", { replace: true, state: { from: location } });
      }
    } else {
      setUser({ ...user, ...values, picture: values.picture[0] });
      updateProfileMutation.mutate(data);

    }
  };

  return {
    handleUpdateLinks,
    handleUpdateProfile,
    updateProfileMutation,
    updateLinksMutation,
  };
};

export default useProfileAPI;
