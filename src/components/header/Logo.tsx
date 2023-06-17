import React from "react";
import Image from "next/image";
const Logo = () => {
  return (
    <div className="flex w-20  h-14   items-center justify-center lg:justify-start">
      <Image src="/logo.webp" width={46} height={46} alt="logo" />
    </div>
  );
};

export default Logo;
