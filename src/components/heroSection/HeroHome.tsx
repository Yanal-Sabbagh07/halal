import React from "react";
const HeroHome = () => {
  return (
    <div className="w-full h-72 md:h-96 lg:h-[620px] flex lg:items-center justify-center lg:justify-center  ">
      <div
        className="animate-spin-slow bg-hero-pattern w-72 h-72 md:w-96 md:h-96 bg-center bg-contain bg-no-repeat 
        lg:w-[450px] lg:h-[450px]  2xl:w-[550px] 2xl:h-[550px]"
      />
    </div>
  );
};

export default HeroHome;
