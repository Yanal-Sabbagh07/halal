import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IMobileNav } from "@/types/header";
const MobileMenu = ({ isOpen, setIsOpen }: IMobileNav) => {
  const pathname = usePathname();
  return (
    <ul
      className="trnsition  ease absolute  right-0 top-16 flex min-h-[calc(100svh-64px)] w-full transform flex-col items-center justify-evenly bg-gray-50 text-xl text-gray-700 duration-300"
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
          href="/clothing"
          className={pathname === "/clothing" ? "active-mobile" : "navlink"}
        >
          Clothing
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
