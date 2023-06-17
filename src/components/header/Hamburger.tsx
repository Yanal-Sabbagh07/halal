import React from "react";
import { IMobileNav } from "@/types/header";
const Hamburger = ({ isOpen, setIsOpen }: IMobileNav) => {
  const genericHamburgerLine = `h-1 w-9 my-1 rounded-full bg-white transition ease transform duration-400`;

  return (
    <button
      className="flex flex-col h-16 w-20  justify-center items-center group"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "rotate-45 translate-y-3 opacity-75 group-hover:opacity-100 bg-white"
            : "opacity-75 group-hover:opacity-100 bg-white"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "opacity-0" : "opacity-75 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "-rotate-45 -translate-y-3 opacity-75 group-hover:opacity-100"
            : "opacity-75 group-hover:opacity-100"
        }`}
      />
    </button>
  );
};

export default Hamburger;
