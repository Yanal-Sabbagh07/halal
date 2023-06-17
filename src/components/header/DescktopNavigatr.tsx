import React from "react";
import Dropdown from "./Dropdown";
import Link from "next/link";
const DescktopNavigatr = () => {
  return (
    <>
      <Link
        className="flex h-full w-32 items-center justify-center hover:font-semibold
      hover:text-green-500"
        href="/"
      >
        Home
      </Link>
      <Link
        className="flex h-full w-32 items-center justify-center hover:font-semibold
      hover:text-green-500"
        href="/clothing"
      >
        Clothing
      </Link>
      <div className="group relative h-full w-32 ">
        <Dropdown />
      </div>
      <Link
        className="flex h-full w-32 items-center justify-center hover:font-semibold
      hover:text-green-500"
        href="/books"
      >
        Books
      </Link>
      <Link
        className="flex h-full w-32 items-center justify-center hover:font-semibold
      hover:text-green-500"
        href="/food"
      >
        Food
      </Link>
    </>
  );
};

export default DescktopNavigatr;
