"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Hamburgar from "./Hamburger";
import MobileMenu from "./MobileMenu";

const MobileNavigator = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <Hamburgar isOpen={isOpen} setIsOpen={setIsOpen} />
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
};

export default MobileNavigator;
