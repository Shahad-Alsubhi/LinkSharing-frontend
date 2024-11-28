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
    <div className="h-screen flex bg-[#fafafa] flex-col items-center max-md:items-start md:justify-center max-md:h-screen max-md:bg-white ">
           <svg xmlns="http://www.w3.org/2000/svg" width="183" height="40" className="md:mx-auto max-md:mx-9 mt-11 mb-6" fill="none" viewBox="0 0 183 40"><path fill="#633CFF" fill-rule="evenodd" d="M5.774 34.225c2.443 2.442 6.37 2.442 14.226 2.442 7.857 0 11.785 0 14.225-2.442 2.442-2.438 2.442-6.368 2.442-14.225 0-7.857 0-11.785-2.442-14.226-2.438-2.44-6.368-2.44-14.225-2.44-7.857 0-11.785 0-14.226 2.44-2.44 2.443-2.44 6.37-2.44 14.226 0 7.857 0 11.785 2.44 14.225Zm10.06-19.642A5.416 5.416 0 1 0 21.25 20a1.25 1.25 0 1 1 2.5 0 7.917 7.917 0 1 1-7.916-7.916 1.25 1.25 0 0 1 0 2.5ZM29.584 20a5.417 5.417 0 0 1-5.417 5.417 1.25 1.25 0 0 0 0 2.5A7.917 7.917 0 1 0 16.25 20a1.25 1.25 0 0 0 2.5 0 5.416 5.416 0 1 1 10.834 0Z" clip-rule="evenodd"/><path fill="#333" d="M61.247 32.15v-3.955l.346.07c-.23 1.283-.923 2.31-2.077 3.08-1.131.77-2.493 1.155-4.086 1.155-1.616 0-3.024-.373-4.225-1.12-1.177-.77-2.089-1.843-2.735-3.22-.647-1.377-.97-2.998-.97-4.865 0-1.89.335-3.535 1.004-4.935.67-1.4 1.605-2.485 2.805-3.255 1.224-.77 2.643-1.155 4.26-1.155 1.684 0 3.046.397 4.085 1.19 1.062.793 1.685 1.878 1.87 3.255l-.38.035V6.95h5.194v25.2h-5.09Zm-4.155-3.85c1.223 0 2.216-.432 2.978-1.295.762-.887 1.143-2.147 1.143-3.78s-.393-2.882-1.178-3.745c-.762-.887-1.766-1.33-3.012-1.33-1.2 0-2.194.443-2.978 1.33-.762.887-1.143 2.147-1.143 3.78s.38 2.882 1.143 3.745c.785.863 1.8 1.295 3.047 1.295ZM78.801 32.5c-1.962 0-3.67-.385-5.125-1.155-1.454-.793-2.585-1.89-3.393-3.29-.785-1.4-1.178-3.01-1.178-4.83 0-1.843.393-3.453 1.178-4.83a8.395 8.395 0 0 1 3.358-3.255c1.432-.793 3.094-1.19 4.987-1.19 1.824 0 3.405.373 4.744 1.12a7.89 7.89 0 0 1 3.116 3.115c.739 1.33 1.108 2.893 1.108 4.69 0 .373-.011.723-.034 1.05-.023.303-.058.595-.104.875H72.153v-3.465h11.115l-.9.63c0-1.447-.347-2.508-1.04-3.185-.669-.7-1.592-1.05-2.77-1.05-1.361 0-2.423.467-3.185 1.4-.739.933-1.108 2.333-1.108 4.2 0 1.82.37 3.173 1.108 4.06.762.887 1.893 1.33 3.393 1.33.831 0 1.547-.14 2.147-.42.6-.28 1.05-.735 1.35-1.365h4.883c-.577 1.727-1.57 3.092-2.978 4.095-1.385.98-3.174 1.47-5.367 1.47ZM94.68 32.15 87.72 14.3h5.575l5.437 16.66h-2.91l5.403-16.66h5.436l-6.96 17.85h-5.02ZM108.669 32.15V6.95h5.194v25.2h-5.194ZM118.002 32.15V14.3h5.194v17.85h-5.194Zm-.173-20.23V6.25h5.54v5.67h-5.54ZM127.335 32.15V14.3h5.09v4.2h.104v13.65h-5.194Zm12.293 0V21.09c0-.98-.254-1.715-.762-2.205-.485-.49-1.2-.735-2.147-.735-.808 0-1.535.187-2.181.56a4.118 4.118 0 0 0-1.489 1.54c-.347.653-.52 1.423-.52 2.31l-.45-4.305c.577-1.307 1.42-2.345 2.528-3.115 1.131-.793 2.516-1.19 4.155-1.19 1.963 0 3.463.56 4.502 1.68 1.039 1.097 1.558 2.578 1.558 4.445V32.15h-5.194ZM148.775 32.15V6.95h5.194v25.2h-5.194Zm11.323 0-7.341-9.275 7.168-8.575h5.99l-8.414 9.38.242-1.645 8.519 10.115h-6.164Z"/><path fill="#333" d="M174.743 32.5c-2.585 0-4.64-.525-6.163-1.575-1.524-1.05-2.355-2.497-2.494-4.34h4.641c.115.793.507 1.4 1.177 1.82.692.397 1.639.595 2.839.595 1.085 0 1.87-.152 2.355-.455.508-.327.762-.782.762-1.365 0-.443-.15-.782-.45-1.015-.277-.257-.797-.467-1.558-.63l-2.84-.595c-2.101-.443-3.647-1.108-4.64-1.995-.993-.91-1.489-2.077-1.489-3.5 0-1.727.658-3.068 1.974-4.025 1.316-.98 3.151-1.47 5.506-1.47 2.331 0 4.189.478 5.575 1.435 1.385.933 2.146 2.24 2.285 3.92h-4.64c-.092-.607-.416-1.062-.97-1.365-.554-.327-1.339-.49-2.354-.49-.924 0-1.616.14-2.078.42-.439.257-.658.63-.658 1.12 0 .42.185.758.554 1.015.369.233.981.443 1.835.63l3.186.665c1.778.373 3.117 1.073 4.017 2.1.923 1.003 1.385 2.193 1.385 3.57 0 1.75-.681 3.115-2.043 4.095-1.339.957-3.243 1.435-5.714 1.435Z"/></svg>

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
                className="absolute top-4 left-[14px]"

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
                className="absolute top-4 left-[14px]"

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
                className="absolute top-4 left-[14px]"

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
