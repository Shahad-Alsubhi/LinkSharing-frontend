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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="183"
        className="p-9"
        height="40"
        fill="none"
        viewBox="0 0 183 40"
      >
        <path
          fill="#633CFF"
          fill-rule="evenodd"
          d="M5.774 34.225c2.443 2.442 6.37 2.442 14.226 2.442 7.857 0 11.785 0 14.225-2.442 2.442-2.438 2.442-6.368 2.442-14.225 0-7.857 0-11.785-2.442-14.226-2.438-2.44-6.368-2.44-14.225-2.44-7.857 0-11.785 0-14.226 2.44-2.44 2.443-2.44 6.37-2.44 14.226 0 7.857 0 11.785 2.44 14.225Zm10.06-19.642A5.416 5.416 0 1 0 21.25 20a1.25 1.25 0 1 1 2.5 0 7.917 7.917 0 1 1-7.916-7.916 1.25 1.25 0 0 1 0 2.5ZM29.584 20a5.417 5.417 0 0 1-5.417 5.417 1.25 1.25 0 0 0 0 2.5A7.917 7.917 0 1 0 16.25 20a1.25 1.25 0 0 0 2.5 0 5.416 5.416 0 1 1 10.834 0Z"
          clip-rule="evenodd"
        />
      </svg>
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
            id={"email"}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#737373"
                  d="M14 3H2a.5.5 0 0 0-.5.5V12a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V3.5A.5.5 0 0 0 14 3Zm-.5 9h-11V4.637l5.162 4.732a.5.5 0 0 0 .676 0L13.5 4.637V12Z"
                />
              </svg>
            }
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
            id={"password"}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#737373"
                  d="M13 5h-2V3.5a3 3 0 0 0-6 0V5H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1ZM8.5 9.914V11.5a.5.5 0 0 1-1 0V9.914a1.5 1.5 0 1 1 1 0ZM10 5H6V3.5a2 2 0 1 1 4 0V5Z"
                />
              </svg>
            }
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
            id={"Confirm-password"}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#737373"
                  d="M13 5h-2V3.5a3 3 0 0 0-6 0V5H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1ZM8.5 9.914V11.5a.5.5 0 0 1-1 0V9.914a1.5 1.5 0 1 1 1 0ZM10 5H6V3.5a2 2 0 1 1 4 0V5Z"
                />
              </svg>
            }
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
