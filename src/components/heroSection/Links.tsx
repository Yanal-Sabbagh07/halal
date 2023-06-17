import React from "react";
import Link from "next/link";
const Links = () => {
  return (
    <div className="w-full h-40 flex items-center justify-between sm:justify-evenly lg:w-3/4 lg:justify-start lg:ml-14">
      <Link
        href="#"
        className="text-slate-200 border-2 border-slate-300 w-36 md:w-44 h-14 flex items-center justify-center rounded-lg lg:mr-24 lg:border-slate-600 lg:w-48 lg:h-16 lg:text-xl lg:font-medium lg:bg-gray-950 lg:text-gray-200"
      >
        Quran Kareem
      </Link>
      <Link
        href="#"
        className="text-slate-200 border-2 border-slate-300 w-36 h-14 flex items-center justify-center md:w-44 rounded-lg lg:text-slate-600 lg:border-slate-700 lg:w-48 lg:h-16 lg:text-xl lg:font-medium"
      >
        Prayer Times
      </Link>
    </div>
  );
};

export default Links;
