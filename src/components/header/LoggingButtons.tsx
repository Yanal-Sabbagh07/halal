import React from "react";

const LoggingButtons = () => {
  return (
    <>
      <div className="rounded-full bg-green-500 lg:bg-gray-200  flex h-10 w-20 lg:w-20 cursor-pointer items-center justify-center font-semibold hover:font-extrabold hover:bg-white text-slate-700">
        Login
      </div>
      <div
        className=" hidden h-10 w-24 cursor-pointer items-center justify-center 
      rounded-full bg-green-600 font-semibold 
      text-gray-100 hover:bg-green-500 hover:font-semibold lg:flex"
      >
        Sign up
      </div>
    </>
  );
};

export default LoggingButtons;
