import LinksEmptyState from "../Components/LinksEmptyState";
import useLinkManagement from "../hooks/useLinkManagement";
import LinksList from "../Components/LinksList";
import Button from "../Components/Button";
import { FormProvider, useForm } from "react-hook-form";
import useProfileAPI from "../hooks/useProfileAPI";
const Links = () => {
  const { handleAddLink, user } = useLinkManagement();
  const { handleUpdateLinks, updateLinksMutation } = useProfileAPI();

  const methods = useForm({ mode: "onChange" });

  return (
    <FormProvider {...methods}>
      <div className="rounded-xl bg-white p-6 md:p-8 flex flex-col justify-around xl:h-screen relative">
        <div className="h-full md:overflow-scroll custom-scroll">
          <h1 className="text-2xl font-bold text-[#333333] mb-3">
            Customize your links
          </h1>
          <p className="text-[#737373] text-base">
            Add/edit/remove links below and then share all your profiles with
            the world!
          </p>
          <Button
            onClick={handleAddLink}
            variant={"secondary"}
            customStyle={"mb-6 mt-10 w-full"}
          >
            + Add new link
          </Button>
          {user.links.length === 0 ? <LinksEmptyState /> : <LinksList />}
        </div>
        <div>
          <hr className=" text-[#D9D9D9] -mx-6 md:-mx-8 mb-6" />
          <Button
            type="submit"
            onClick={methods.handleSubmit(() => {
              handleUpdateLinks(methods.getValues());
          
            })}
            variant={"primary"}
            disabled={
              user.links.length === 0 ||
              !methods.formState.isValid ||
              updateLinksMutation.isLoading
            }
            customStyle="md:w-auto md:float-right w-full"
          >
            Save
          </Button>
        </div>
      </div>
    </FormProvider>
  );
};

export default Links;
