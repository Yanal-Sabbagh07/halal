import React from "react";
import Image from "next/image";
import Logo from "./Logo";
import MobileNav from "./MobileNavigator";
import LoggingButtons from "./LoggingButtons";
import DescktopNavigatr from "./DescktopNavigatr";
const Header = () => {
  return (
    <div
      className=" flex h-14  w-[calc(100%-24px)]  items-center justify-between 
      lg:w-[calc(100%-96px)]  "
    >
      <div className="lg:hidden ">
        <MobileNav />
      </div>
      <div className=" lg:w-1/4">
        <Logo />
      </div>
      <div className="hidden h-full items-center justify-center text-stone-100 lg:flex lg:w-1/2 ">
        <DescktopNavigatr />
      </div>
      <div className=" flex h-full items-center justify-end lg:w-1/4   lg:gap-4 ">
        <LoggingButtons />
      </div>
    </div>
  );
};

export default Header;
