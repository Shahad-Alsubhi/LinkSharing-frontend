import React, { ReactNode } from "react";
import { RegisterOptions, useFormContext } from "react-hook-form";

interface inputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  lable: string;
  id: string;
  icon?: ReactNode;
  customStyle?: string;
  validation?: RegisterOptions;
}

const Input = ({
  lable,
  placeholder,
  type,
  icon,
  customStyle,
  validation,
  inputMode,
  defaultValue,id
}: inputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={`mb-3 ${customStyle}`}>
      <label htmlFor={id} className="text-sm text-[#333] block mb-1 md:w-1/2">
        {lable}
      </label>
      <div className="relative w-full ">
        {icon}
        <input
          {...register(id, validation)}
          type={type}
          id={id}
          defaultValue={defaultValue}
          inputMode={inputMode}
          className={`outline-none w-full h-[48px] rounded-lg border border-[#D9D9D9] focus:border-[#633CFF] pl-4 focus:shadow-[0_0_9px_1px] focus:shadow-[#633CFF]/30 ${
            icon && `pl-[44px] md:w-full`
          } ${errors[id] && "border-[#FF3939]"}`}
          placeholder={`${placeholder}`}
        />
        {errors[id] && (
          <p className="text-sm m-1 text-[#FF3939]">
            {errors[id].message?.toString()}
          </p>
        )}
      </div>
    </div>
  );
};

export default Input;
