import { FormProvider, useForm } from "react-hook-form";
import Button from "../Components/Button";
import ProfilePictureUpload from "../Components/ProfilePictureUpload";
import ProfileDetails from "../Components/ProfileDetails";
import useProfileAPI from "../hooks/useProfileAPI";

const Profile = () => {
  const methods = useForm();
  const { handleUpdateProfile, updateProfileMutation } = useProfileAPI();

  return (
    <div className="rounded-xl bg-white p-8 md:p-10 flex flex-col min-h-screen justify-around relative md:pb-6">
      <FormProvider {...methods}>
        <div className="h-full">
          <h1 className="text-2xl font-bold text-[#333333] mb-3">
            Profile Details
          </h1>
          <p className="text-[#737373] text-base mb-8">
            Add your details to create a personal touch to your profile.
          </p>
          <ProfilePictureUpload />
          <ProfileDetails />
        </div>
        <div>
          <hr className=" text-[#D9D9D9] -mx-4 md:-mx-8 mb-6" />
          <Button
            onClick={methods.handleSubmit((data) => handleUpdateProfile(data))}
            type="submit"
            variant={"primary"}
            customStyle="md:w-auto md:float-right w-full"
            disabled={!methods.formState.isValid || updateProfileMutation.isLoading}
          >
            Save
          </Button>
        </div>
      </FormProvider>
    </div>
  );
};

export default Profile;
