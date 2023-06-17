import React from "react";
import Image from "next/image";
import Logo from "./Logo";
import MobileNav from "./MobileNavigator";
import LoggingButtons from "./LoggingButtons";
import DescktopNavigatr from "./DescktopNavigatr";
const Header = () => {
  return (
    <div
      className=" w-[calc(100%-24px)] h-14  bg-slate-900  flex items-center justify-between
      lg:w-[calc(100%-96px)]  "
    >
      <div className="lg:hidden">
        <MobileNav />
      </div>
      <div>
        <Logo />
      </div>
      <div className="hidden h-full lg:flex text-stone-100">
        <DescktopNavigatr />
      </div>
      <div className=" lg:gap-4 flex lg:w-48  items-center justify-end ">
        <LoggingButtons />
      </div>
    </div>
  );
};

export default Header;
