import { user } from "../Context/userContext";
import { platforms } from "../Platforms";

const UserInfoCard = ({ userData }: { userData: user }) => {
  const { firstName, lastName, links, visibleEmail, pictureURL } = userData;

  return (
    <>
      <div
        className={`w-[5.5rem] h-[5.5rem] rounded-full mb-3 mx-auto bg-cover  ${
          pictureURL && "border-[3px] border-[#633CFF]"
        } `}
      >
        {pictureURL && (
          <img src={`${pictureURL}`} className="object-fill rounded-full" />
        )}
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
            <img
              src="/images/icon-arrow-right.svg"
              alt="arrow-right"
              className="ml-auto"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default UserInfoCard;
