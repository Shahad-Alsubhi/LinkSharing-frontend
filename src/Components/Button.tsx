import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
  customStyle?: string;

}
const Button = ({
  variant,
  children,
  onClick,
  customStyle,
  type,
  disabled
}: ButtonProps) => {
  return (
    <button disabled={disabled} 
      onClick={onClick}
      type={type}
      className={`rounded-lg text-base font-medium  ${
        variant === "primary"
          ? "text-white py-3 px-7 bg-[#633cff] disabled:bg-[#d8ceff] active:bg-[#BEADFF]"
          : "py-2 px-4 border border-[#633CFF] active:bg-[#EFEBFF] text-[#633CFF]"
      } ${customStyle}`}
    >
      {children}
    </button>
  );
};

export default Button;
