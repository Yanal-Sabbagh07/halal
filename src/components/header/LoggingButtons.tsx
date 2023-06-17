"use client";
import React from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
const LoggingButtons = () => {
  const { data: session, status } = useSession();
  const userEmail = session?.user?.email;
  const userName = session?.user?.name;
  const userImage = session?.user?.image;

  if (status === "loading") {
    return <p className="text-white">...</p>;
  }
  if (status === "authenticated") {
    return (
      <>
        <button
          onClick={() => signOut()}
          className="hidden rounded-3xl text-slate-900 lg:rounded-full bg-green-500 lg:bg-gray-200  md:flex h-10 w-16 md:w-20 lg:w-20 cursor-pointer items-center justify-center font-semibold hover:font-extrabold hover:bg-white"
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
        className="rounded-3xl text-slate-900 lg:rounded-full bg-green-500 lg:bg-gray-200  flex h-10 w-16 lg:w-20 cursor-pointer items-center justify-center font-semibold hover:font-extrabold hover:bg-white"
        href="/login"
      >
        Login
      </Link>
      <div
        className=" hidden h-10 w-24 cursor-pointer items-center justify-center 
      rounded-full bg-green-600 font-semibold 
      text-gray-100 hover:bg-green-500 hover:font-semibold lg:flex"
      >
        Sign up
      </div>
    </>
  );
};

export default LoggingButtons;
