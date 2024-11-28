import { FieldValues, FormProvider, useForm } from "react-hook-form";
import Input from "../Components/Input";
import Button from "../Components/Button";
import { useNavigate } from "react-router-dom";
import useAuthAPI from "../hooks/useAuthAPI";

const Login = () => {
  const methods = useForm({ mode: "onChange" });
  const { useLogin } = useAuthAPI();
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center max-md:items-start md:justify-center  max-md:h-screen max-md:bg-white ">
      <img
        src="/images/logo-devlinks-large.svg"
        alt="devLinks logo"
        className="p-9"
      />
      <div className="max-md:bg-white rounded-2xl px-9 py-6 w-full max-w-full md:max-w-lg md:bg-white ">
        <h2 className="text-[#333333] font-bold text-3xl mb-3">Login </h2>
        <p className="mb-6 text-[#737373] ">
          Add your details below to get back into the app{" "}
        </p>
        {useLogin.isError && (
          <p className="text-[#FF3939] text-sm -mt-4 mb-3">
            {useLogin.error.response?.data.message ||
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
            lable={"Password"}
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
            placeholder={"Enter your password"}
            type={"password"}
            validation={{
              required: "Can’t be empty",
            }}
            customStyle="mb-5"
          />

          <Button
            variant={"primary"}
            type="submit"
            onClick={methods.handleSubmit((data: FieldValues) =>
              useLogin.mutate(data)
            )}
            customStyle="mt-5 w-full"
            disabled={useLogin.isLoading || !methods.formState.isValid}
          >
            Login
          </Button>
          <p className="text-[#737373] w-fit mx-auto mt-4">
            Don’t have an account?
            <span
              className="text-[#633CFF] cursor-pointer"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Create account
            </span>
          </p>
        </FormProvider>
      </div>
    </div>
  );
};

export default Login;
