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
          media="(min-width:768px)"
          srcSet="/images/logo-devlinks-large.svg"
          width={146}
          height={32}
        />
        
        <img
          src="/images/logo-devlinks-small.svg"
          alt="logo"
          width={32}
          height={32}
        />
      </picture>

      <nav className="flex">
        <button
           aria-label="Links"
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
          <span className={`max-md:hidden font-semibold `}>
            Links
          </span>
        </button>
        <button
          aria-label="Profile Details"
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
          <span className={`max-md:hidden font-medium`}>
            Profile Details
          </span>
        </button>
      </nav>

      <Button  onClick={() => navigate("/preview")} variant="secondary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 20 20" className="md:hidden"
        >
          <path 
            fill="#633CFF"
            d="M19.61 9.62c-.03-.064-.714-1.583-2.225-3.095-2.023-2.02-4.572-3.088-7.385-3.088-2.812 0-5.362 1.068-7.382 3.088C1.106 8.037.422 9.556.391 9.62a.944.944 0 0 0 0 .761c.029.064.713 1.583 2.226 3.095 2.021 2.02 4.57 3.086 7.383 3.086 2.813 0 5.362-1.067 7.381-3.086 1.513-1.512 2.197-3.03 2.226-3.095a.946.946 0 0 0 .003-.761Zm-3.599 2.578c-1.677 1.651-3.7 2.49-6.01 2.49-2.313 0-4.334-.839-6.01-2.491A10.185 10.185 0 0 1 2.307 10a10.192 10.192 0 0 1 1.686-2.196C5.667 6.15 7.688 5.312 10 5.312s4.333.839 6.009 2.492c.659.652 1.226 1.39 1.685 2.196a10.19 10.19 0 0 1-1.685 2.197h.002Zm-6.01-5.636a3.438 3.438 0 1 0 0 6.876 3.438 3.438 0 0 0 0-6.876Zm0 5A1.562 1.562 0 1 1 10 8.438a1.562 1.562 0 0 1 0 3.124Z"
          />
        </svg>
        <span className="max-md:hidden">Preview</span>
      </Button>
    </header>
  );
};

export default Header;
