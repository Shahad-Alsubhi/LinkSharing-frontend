import { user } from "../Context/userContext";
import { platforms } from "../Platforms";

const UserInfoCard = ({ userData }: { userData: user }) => {
  const { firstName, lastName, links, visibleEmail, pictureURL } = userData;

  return (
    <>
      <div
        className={`w-[5.5rem] h-[5.5rem] rounded-full mb-3 mx-auto bg-cover  ${
          pictureURL && "border-[3px] border-[#633CFF] bg-cover "
        } `}
        style={{backgroundImage:pictureURL ? `url(${pictureURL})`:""}}
      >
       
      </div>
      <h1
        className={`text-center min-h-7 text-[#333333] text-lg font-semibold ${
          firstName && "bg-white"
        }`}
      >
        {firstName && `${firstName} ${lastName}`}
      </h1>
      <h2
        className={`text-center mb-12 min-h-5 text-sm text-[#737373]  ${
          visibleEmail && "bg-white"
        }`}
      >
        {visibleEmail && ` ${visibleEmail}`}
      </h2>
      <div className="w-[218px] mx-auto md:max-h-[295px] overflow-scroll custom-scroll ">
        {links.map((link) => (
          <div
            key={link.id}
            style={{
              backgroundColor: platforms.get(link.platform)?.Color,
            }}
            onClick={() => {
              if (link.url) {
                window.open(link.url, "_blank");
              }
            }}
            className={`h-10 rounded-md mb-[19px] flex mx-auto px-4 gap-2 items-center cursor-pointer text-white`}
          >
            {platforms.get(link.platform)?.logo}
            {link.platform}
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-auto" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#fff" d="M2.667 7.333v1.334h8L7 12.333l.947.947L13.227 8l-5.28-5.28L7 3.667l3.667 3.666h-8Z"/></svg>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserInfoCard;
