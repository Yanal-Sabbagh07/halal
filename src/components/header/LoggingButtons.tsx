"use client";
import React from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
// import Image from "next/image";
const LoggingButtons = () => {
  const { data: session, status } = useSession();
  // const userEmail = session?.user?.email;
  // const userName = session?.user?.name;
  const userImage = session?.user?.image;

  if (status === "loading") {
    return <p className="text-white">...</p>;
  }
  if (status === "authenticated") {
    return (
      <>
        <button
          onClick={() => signOut()}
          className="hidden h-10 w-16 cursor-pointer items-center justify-center  rounded-3xl bg-green-500 font-semibold text-slate-900 hover:bg-white hover:font-extrabold md:flex md:w-20 lg:w-20 lg:rounded-full lg:bg-gray-200"
        >
          Sign out
        </button>
        <img
          src={`${userImage}`}
          width="40"
          height="40"
          alt="profile"
          className=" rounded-full "
        />
        {/* <span className="hidden text-white text-sm lg:block">{userName}</span> */}
      </>
    );
  }
  return (
    <>
      <Link
        className="flex h-10 w-16 cursor-pointer items-center  justify-center rounded-3xl bg-green-500 font-semibold text-slate-900 hover:bg-white hover:font-extrabold lg:w-20 lg:rounded-full lg:bg-gray-200"
        href="/login"
      >
        Login
      </Link>
      <Link
        className=" hidden h-10 w-24 cursor-pointer items-center justify-center rounded-full bg-green-600 font-semibold text-gray-100 hover:bg-green-500 hover:font-semibold lg:flex"
        href="/regester"
      >
        Sign up
      </Link>
    </>
  );
};

export default LoggingButtons;
