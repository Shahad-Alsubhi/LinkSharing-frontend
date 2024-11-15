import { useFormContext } from "react-hook-form";
import useImageUpload from "../hooks/useImageUpload";
import { useContext } from "react";
import { UserContext } from "../Context/userContext";

const ProfilePictureUpload = () => {
  const { handleUpload, error } = useImageUpload();
  const { user } = useContext(UserContext);

  const { register } = useFormContext();

  return (
    <div className="p-5 rounded-lg bg-[#FAFAFA] mb-6 md:flex md:flex-row md:justify-between md:items-center">
      <h5 className="mb-4 text-[#737373] w-full ">Profile picture</h5>
      <div className="w-4/6 md:flex shrink-0 gap-4 md:items-center ">
        <label
          htmlFor="upload"
          style={{ backgroundImage: `url(${user.pictureURL})` }}
          className={`block w-44 h-44 shrink-0 cursor-pointer text-[#633CFF] bg-[#EFEBFF] rounded-xl font-semibold bg-no-repeat bg-cover`}
        >
          <span
            className={`${
              user.pictureURL && "bg-black/50 text-white"
            } w-full h-full rounded-xl flex items-center justify-center flex-col`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              className="mb-2"
              height="2em"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 16v102.75l-26.07-26.06a16 16 0 0 0-22.63 0l-20 20l-44-44a16 16 0 0 0-22.62 0L40 149.37V56ZM40 172l52-52l80 80H40Zm176 28h-21.37l-36-36l20-20L216 181.38zm-72-100a12 12 0 1 1 12 12a12 12 0 0 1-12-12"
              />
            </svg>
            {!user.pictureURL ? "+ Upload Image" : "Change Image"}
          </span>
        </label>
        <input
          type="file"
          id="upload"
          {...register("picture", { onChange: handleUpload })}
          accept="image/png, image/jpg"
          className="hidden"
        />
        <h6 className="max-md:mt-6 text-[#737373] text-sm ">
          Image must be below 1024x1024px. Use PNG or JPG format.
        </h6>
        {error && <h6 className="text-xs mt-2 text-[#FF3939] ">{error}</h6>}
      </div>
    </div>
  );
};

export default ProfilePictureUpload;
