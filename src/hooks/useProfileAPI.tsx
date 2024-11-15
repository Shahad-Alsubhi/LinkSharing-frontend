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

const useProfileAPI = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  const updateProfileMutation = useMutation<
    AxiosResponse,
    AxiosError,
    FormData
  >({
    mutationFn: async (values) => {
      return await axiosInstance.patch("users/profile-details", values, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("user")}`,
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
        "/users/links",
        { links },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("user")}`,
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

    if (!localStorage.getItem("user")) {
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
    data.append("visibleEmail", values.visibleEmail);
    data.append("picture", values.picture[0]);
    setUser({ ...user, ...values, picture: values.picture[0] });
    if (!localStorage.getItem("user")) {
      const result = await promtLogin();
      if (result) {
        navigate("/login", { replace: true, state: { from: location } });
      }
    } else {
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
