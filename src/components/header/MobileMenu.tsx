import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IMobileNav } from "@/types/header";
const MobileMenu = ({ isOpen, setIsOpen }: IMobileNav) => {
  const pathname = usePathname();
  return (
    <ul
      className="absolute  min-h-[calc(100vh-64px)] bg-stone-200  right-0 w-full flex flex-col items-center justify-evenly trnsition ease transform duration-300 text-gray-700 text-xl top-16"
      style={{
        left: isOpen ? "0px" : "-100vw",
        opacity: isOpen ? "1" : "0.5",
      }}
      onClick={() => setIsOpen(false)}
    >
      <li className="listItemMobile">
        <Link
          href="/"
          className={pathname === "/home" ? "active-mobile" : "navlink"}
        >
          Home
        </Link>
      </li>
      <li className="listItemMobile">
        <Link
          href="/books"
          className={pathname === "/books" ? "active-mobile" : "navlink"}
        >
          Books
        </Link>
      </li>
      <li className="listItemMobile">
        <Link
          href="/cloathing"
          className={pathname === "/cloathing" ? "active-mobile" : "navlink"}
        >
          Cloathing
        </Link>
      </li>
      <li className="listItemMobile">
        <Link
          href="/products"
          className={pathname === "/products" ? "active-mobile" : "navlink"}
        >
          Products
        </Link>
      </li>
    </ul>
  );
};

export default MobileMenu;
