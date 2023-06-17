import React from "react";
import Image from "next/image";
import Logo from "./Logo";
import MobileNav from "./MobileNavigator";

const Header = () => {
  return (
    <div
      className=" w-[calc(100%-24px)] h-full  bg-slate-900  flex items-center justify-between
    lg:w-[calc(100%-96px)]"
    >
      <div className="lg:hidden">
        <MobileNav />
      </div>
      <div>
        <Logo />
      </div>
      <div className=" lg:gap-6 flex">
        <div className="rounded-full bg-green-500 lg:bg-gray-200  flex h-10 w-20 lg:w-20 cursor-pointer items-center justify-center font-semibold hover:font-extrabold hover:bg-white text-slate-700">
          Login
        </div>
        <div
          className=" hidden h-10 w-24 cursor-pointer items-center justify-center 
            rounded-full bg-green-600 font-semibold 
            text-gray-100 hover:bg-green-500 hover:font-extrabold lg:flex"
        >
          Sign up
        </div>
      </div>
    </div>
  );
};

export default Header;
