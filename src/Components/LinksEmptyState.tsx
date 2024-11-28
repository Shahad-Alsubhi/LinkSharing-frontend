const LinksEmptyState = () => {
  return (
    <div className="px-5 py-10 bg-[#FAFAFA] rounded-xl mb-6 md:mb-14">
       <img
        src="/images/illustration-empty.svg"
        className="w-32 mx-auto md:w-64 md:h-[165px]"
        alt="Illustration of an empty state"
      /> 
      <h1 className="text-2xl font-bold text-[#333333] my-6 text-center">
        Let’s get you started
      </h1>
      <p className="text-[#737373] text-base text-center max-w-[488px] mx-auto">
        Use the “Add new link” button to get started. Once you have more than
        one link, you can reorder and edit them. We’re here to help you share
        your profiles with everyone!
      </p>
    </div>
  );
};

export default LinksEmptyState;
