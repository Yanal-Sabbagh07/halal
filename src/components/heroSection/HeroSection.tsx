import React from "react";
import Title from "./Title";
import HeroBackground from "./HeroBackground";
import Links from "./Links";
const HeroSection = () => {
  return (
    <section className="mt-16 overflow-x-hidden">
      <div
        className="flex h-[calc(100svh-64px)] w-[calc(100vw-36px)] flex-col 
          items-center justify-evenly  sm:w-[calc(100vw-80px)] 
            md:w-[calc(100vw-112px)] lg:hidden	"
      >
        <Title />
        <HeroBackground />
        <Links />
      </div>
      <div className="hidden h-[calc(100vh-64px)] w-full bg-hero-dark-gray bg-cover bg-center lg:flex ">
        <div className="flex h-full w-3/4 flex-col items-start justify-center">
          <div className="flex h-64 items-center justify-start ">
            <Title />
          </div>
          <div className="flex w-full items-start  justify-start ">
            <Links />
          </div>
        </div>
        <div className="flex h-full w-[620px] items-center justify-center  2xl:w-[750px]">
          <HeroBackground />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
