import React from "react";
import Link from "next/link";
const LinkToLogin = () => {
  return (
    <div className="mb-2 flex h-28 flex-col items-start justify-evenly">
      <div className="flex w-full items-center justify-between  sm:w-72 md:justify-evenly lg:w-80">
        <div className="h-0 w-10 border-[1px] border-gray-300 sm:w-10 lg:w-14"></div>
        <div className="sm:w-54  md:text-md text-sm">
          Don&apos;t have a Halali account?
        </div>
        <div className="flex h-0 w-10 border-[1px] border-gray-300 sm:w-10 lg:w-14"></div>
      </div>
      <Link
        className="relative flex h-12  w-72 items-center justify-evenly rounded-full border-2 text-gray-700 hover:bg-gray-700 hover:text-gray-100 lg:w-80"
        href={"/regester"}
      >
        Regester
      </Link>
    </div>
  );
};

export default LinkToLogin;
