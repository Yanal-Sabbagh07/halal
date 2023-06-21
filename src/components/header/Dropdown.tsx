import React from "react";
import Link from "next/link";
const Dropdown = () => {
  return (
    <>
      <Link
        className="flex h-full cursor-pointer items-center justify-center  
        group-hover:font-semibold 
        group-hover:text-green-500 group-hover:duration-300 group-hover:ease-out"
        href="/products"
      >
        Products
      </Link>
      <div
        className=" invisible  absolute -left-0 top-[60px]  mt-0 h-0 w-32 scale-0 
        rounded-b-md bg-gray-100 text-base text-gray-700 opacity-0
        transition-all group-hover:visible group-hover:h-20 group-hover:translate-x-0
        group-hover:scale-100 group-hover:border-2 
        group-hover:opacity-100 group-hover:duration-300
        group-hover:ease-out"
      >
        <Link
          className=" flex h-10 w-full items-center justify-center border-b-2  
        hover:bg-green-500 "
          href="/products/posters"
        >
          Islamic Posters
        </Link>
        <Link
          className="flex h-9 w-full items-center justify-center rounded-b-md 
        hover:bg-green-500"
          href="/products/mats"
        >
          Praying Mats
        </Link>
      </div>
    </>
  );
};

export default Dropdown;
