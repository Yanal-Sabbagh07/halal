import React from "react";
const HeroHome = () => {
  return (
    <div className="flex h-72 w-full justify-center md:h-96 lg:h-[620px] lg:items-center lg:justify-center  ">
      <div
        className="h-72 w-72 animate-spin-slow bg-hero-pattern bg-contain bg-center bg-no-repeat md:h-96 md:w-96 
        lg:h-[450px] lg:w-[450px]  2xl:h-[550px] 2xl:w-[550px] "
      />
    </div>
  );
};

export default HeroHome;
