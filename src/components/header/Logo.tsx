import React from "react";
import Image from "next/image";
import Link from "next/link";
const Logo = () => {
  return (
    <>
      <div className="hidden h-full w-64 items-center justify-center  sm:flex lg:justify-start">
        <Link href="/">
          <Image
            src="/logo-l.png"
            width={250}
            height={56}
            alt="logo"
            placeholder="blur"
            blurDataURL={"/logo-l.png"}
            className=" mt-1"
          />
        </Link>
      </div>
      <div className="flex h-14 w-14 items-center justify-center sm:hidden ">
        <Link href="/">
          <Image
            src="/logo2.png"
            width={50}
            height={50}
            alt="logo"
            placeholder="blur"
            blurDataURL={"/logo2.png"}
          />
        </Link>
      </div>
    </>
  );
};

export default Logo;
