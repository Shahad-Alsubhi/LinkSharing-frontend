import React from "react";
import { RegisterOptions, useFormContext } from "react-hook-form";

interface inputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  lable: string;
  name: string;
  backgroundImage?: string;
  customStyle?: string;
  validation?: RegisterOptions;
}

const Input = ({
  lable,
  placeholder,
  name,
  type,
  backgroundImage,
  customStyle,
  validation,
  inputMode,
  defaultValue,
}: inputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={`mb-3 ${customStyle}`}>
      <label htmlFor="name" className="text-sm text-[#333] block mb-1 md:w-1/2">
        {lable}
      </label>
      <div className="relative w-full ">
        <input
          {...register(name, validation)}
          type={type}
          id={name}
          defaultValue={defaultValue}
          inputMode={inputMode}
          className={`outline-none w-full h-[48px] rounded-lg border border-[#D9D9D9] focus:border-[#633CFF] pl-4 focus:shadow-[0_0_9px_1px] focus:shadow-[#633CFF]/30 ${
            backgroundImage && `pl-[44px] bg-[1rem_1rem] bg-no-repeat md:w-full`
          } ${errors[name] && "border-[#FF3939]"}`}
          placeholder={`${placeholder}`}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        {errors[name] && (
          <p className="text-sm m-1 text-[#FF3939]">
            {errors[name].message?.toString()}
          </p>
        )}
      </div>
    </div>
  );
};

export default Input;
