import { ChangeEvent, useContext, useState } from "react";
import { UserContext } from "../Context/userContext";

const useImageUpload = () => {
  const { user, setUser } = useContext(UserContext);
  const [error, setError] = useState("");

  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files![0];
    if (image) {
      const img = new Image();
      const imgUrl = URL.createObjectURL(image);
      img.src = imgUrl;
      img.onload = () => {
        if (img.width > 1024 || img.height > 1024)
          setError("*Please upload an image smaller than 1024x1024 pixels");
        else {
          const reader = new FileReader();
          reader.onloadend = () => {
            setUser({ ...user, pictureURL: reader.result!, picture: image });
          };
          reader.readAsDataURL(image);
          setError("");
        }
        URL.revokeObjectURL(imgUrl);
      };
    }
  };

  return { handleUpload, error };
};

export default useImageUpload;
