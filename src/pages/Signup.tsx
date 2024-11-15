import { FieldValues, FormProvider, useForm } from "react-hook-form";
import Input from "../Components/Input";
import Button from "../Components/Button";
import { useNavigate } from "react-router-dom";
import useAuthAPI from "../hooks/useAuthAPI";

const Signup = () => {
  const methods = useForm({ mode: "onChange" });
  const { useSignup } = useAuthAPI();
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center max-md:items-start md:justify-center  max-md:h-screen max-md:bg-white ">
      <img
        src="/images/logo-devlinks-large.svg"
        alt="devLinks logo"
        className="p-9"
      />
      <div className="max-md:bg-white rounded-2xl px-9 py-6 w-full max-w-full md:max-w-lg md:bg-white ">
        <h2 className="text-[#333333] font-bold text-3xl mb-3">
          Create account
        </h2>
        <p className="mb-6 text-[#737373] ">
          Let’s get you started sharing your links!
        </p>
        {useSignup.isError && (
          <p className="text-[#FF3939] text-sm -mt-4 mb-3">
            {useSignup.error.response?.data.message ||
              "Something went wrong, Please try again later."}
          </p>
        )}

        <FormProvider {...methods}>
          <Input
            lable={"Email address"}
            name={"email"}
            backgroundImage="/images/icon-email.svg"
            placeholder={"e.g. alex@email.com"}
            type={"email"}
            inputMode="email"
            validation={{
              required: "Can’t be empty",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            }}
            customStyle="mb-5"
          />
          <Input
            lable={"Create password"}
            name={"password"}
            backgroundImage="/images/icon-password.svg"
            placeholder={"At least .8 characters"}
            type={"password"}
            validation={{
              required: "Can’t be empty",
              minLength: {
                value: 8,
                message: "Password must contain at least 8 characters",
              },
            }}
            customStyle="mb-5"
          />
          <Input
            lable={"Confirm password"}
            name={"Confirm-password"}
            backgroundImage="/images/icon-password.svg"
            placeholder="At least .8 characters"
            type="password"
            validation={{
              required: "Can’t be empty",
              validate: (value) =>
                value === methods.watch("password") || "Please check again",
            }}
            customStyle="mb-5"
          />
          <Button
            variant={"primary"}
            type="submit"
            onClick={methods.handleSubmit((data: FieldValues) =>
              useSignup.mutate(data)
            )}
            customStyle="mt-5 w-full"
            disabled={useSignup.isLoading || !methods.formState.isValid}
          >
            Create new account
          </Button>
          <p className="text-[#737373] w-fit mx-auto mt-4">
            Already have an account?
            <span
              className="text-[#633CFF] cursor-pointer"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </span>
          </p>
        </FormProvider>
      </div>
    </div>
  );
};

export default Signup;
