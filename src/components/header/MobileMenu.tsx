import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IMobileNav } from "@/types/header";
const MobileMenu = ({ isOpen, setIsOpen }: IMobileNav) => {
  const pathname = usePathname();
  return (
    <div
      className="trnsition  ease absolute right-0 top-16  min-h-screen w-full bg-white duration-300"
      style={{
        left: isOpen ? "0px" : "-100vw",
        opacity: isOpen ? "1" : "0.5",
      }}
    >
      <ul
        className=" flex min-h-[calc(100svh-64px)] w-full transform flex-col items-center justify-evenly  text-gray-700 "
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
    </div>
  );
};

export default MobileMenu;
