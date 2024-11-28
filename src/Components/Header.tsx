import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  const [activeBtn, setActiveBtn] = useState("btn1");
  const navigate = useNavigate();
  return (
    <header className="flex flex-row justify-between px-6 py-4 md:rounded-xl md:mx-8 bg-white">
      <picture>
        <source
          media="(max-width:768px)"
          srcSet="/images/logo-devlinks-small.svg"
        />
        <source
          media="(min-width:769px)"
          srcSet="/images/logo-devlinks-large.svg"
          width={146}
        />
        <img src="/images/logo-devlinks-small.svg" alt="logo" width={32} height={32}/>
      </picture>

      <nav className="flex">
        <button name="Links"
          className={`py-2 px-6 rounded-lg flex gap-2 items-center md:ml-5 hover:text-[#633CFF] ${
            activeBtn === "btn1"
              ? "text-[#633CFF] bg-[#EFEBFF]"
              : "text-[#737373]"
          }`}
          onClick={() => {
            setActiveBtn("btn1");
            navigate("links");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            fill="none"
            viewBox="0 0 21 20"
          >
            <path
              fill="currentColor"
              d="M11.154 14.65a.94.94 0 0 1 0 1.329l-.464.464a4.689 4.689 0 0 1-6.631-6.631l1.884-1.884a4.688 4.688 0 0 1 6.432-.194.941.941 0 0 1-1.25 1.407 2.812 2.812 0 0 0-3.857.115l-1.883 1.88a2.813 2.813 0 1 0 3.978 3.979l.464-.464a.937.937 0 0 1 1.327 0Zm5.788-11.093a4.695 4.695 0 0 0-6.632 0l-.464.464a.94.94 0 0 0 1.328 1.328l.464-.464a2.813 2.813 0 1 1 3.979 3.978l-1.884 1.885a2.812 2.812 0 0 1-3.858.112.94.94 0 1 0-1.25 1.406 4.688 4.688 0 0 0 6.43-.19l1.884-1.884a4.695 4.695 0 0 0 .003-6.633v-.002Z"
            />
          </svg>
          <span className={`max-md:hidden text-base font-semibold `}>
            Links
          </span>
        </button>
        <button
        name="Profile Details"
          className={`group py-2 px-6 rounded-lg flex gap-2  items-center hover:text-[#633CFF] ${
            activeBtn === "btn2"
              ? "text-[#633CFF] bg-[#EFEBFF]"
              : "text-[#737373]"
          }`}
          onClick={() => {
            setActiveBtn("btn2");
            navigate("/profile");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            fill="none"
            viewBox="0 0 21 20"
          >
            <path
              fill="currentColor"
              d="M10.5 1.563A8.437 8.437 0 1 0 18.938 10 8.447 8.447 0 0 0 10.5 1.562ZM6.716 15.357a4.688 4.688 0 0 1 7.568 0 6.54 6.54 0 0 1-7.568 0Zm1.596-5.982a2.188 2.188 0 1 1 4.376 0 2.188 2.188 0 0 1-4.376 0Zm7.344 4.683a6.523 6.523 0 0 0-2.265-1.83 4.062 4.062 0 1 0-5.782 0 6.522 6.522 0 0 0-2.265 1.83 6.562 6.562 0 1 1 10.304 0h.008Z"
            />
          </svg>
          <span className={`max-md:hidden text-base font-medium`}>
            Profile Details
          </span>
        </button>
      </nav>

      <Button onClick={() => navigate("/preview")} variant="secondary">
        <img
          src="/images/icon-preview-header.svg"
          alt="icon-preview"
          className="md:hidden w-5 h-5"
        />
        <span className="max-md:hidden">Preview</span>
      </Button>
    </header>
  );
};

export default Header;
