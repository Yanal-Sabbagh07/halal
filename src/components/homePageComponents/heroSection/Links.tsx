import React from "react";
import Link from "next/link";
const Links = () => {
  return (
    <div className="flex h-40 w-full items-center justify-between sm:justify-evenly lg:ml-14 lg:w-3/4 lg:justify-start">
      <a
        href="#Quran"
        className="flex h-14 w-36 items-center justify-center rounded-lg border-2 border-stone-300 text-stone-100 md:w-44 lg:mr-24 lg:h-16 lg:w-48 lg:border-gray-900 lg:bg-gray-950 lg:text-xl lg:font-medium lg:text-gray-200
        lg:transition-all lg:duration-200 lg:hover:border-green-500 lg:hover:bg-green-500 lg:hover:font-bold "
      >
        Quran Kareem
      </a>
      <a
        href="#prayer"
        className="flex h-14 w-36 items-center justify-center rounded-lg border-2 border-slate-300 text-slate-200 md:w-44 lg:h-16 lg:w-48 lg:border-gray-700 lg:text-xl lg:font-medium lg:text-gray-700 lg:transition-all lg:duration-200 lg:hover:border-green-500 lg:hover:bg-green-500 lg:hover:font-bold lg:hover:text-stone-100"
      >
        Prayer Times
      </a>
    </div>
  );
};

export default Links;
