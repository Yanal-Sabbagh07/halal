import React from "react";
import Image from "next/image";
const Logo = () => {
  return (
    <div className="flex w-16   h-14   items-center justify-center lg:justify-start">
      <Image
        src="/logo2.png"
        width={50}
        height={50}
        alt="logo"
        placeholder="blur"
        blurDataURL={"/logo2.png"}
      />
    </div>
  );
};

export default Logo;
