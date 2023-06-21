"use client";
import React, { useState } from "react";
import Link from "next/link";

import SyncIcon from "@mui/icons-material/Sync";
import { useSession, signOut } from "next-auth/react";
// import Image from "next/image";
import Avatar from "../reusable/Avatar";
const LoggingButtons = () => {
  // const [profileClicked, setProfileClicked] = useState(false);
  const { data: session, status } = useSession();
  // const userEmail = session?.user?.email;
  const userName: string | null | undefined = session?.user?.name;
  // const userImage: string | null | undefined = session?.user?.image;

  if (status === "loading") {
    return (
      <div
        className=" flex h-14 w-14 items-center justify-center
        text-white  "
      >
        <SyncIcon
          style={{ width: "36", height: "36px" }}
          className=" animate-spin text-white"
          // viewBox="0 0 24 24 "
        ></SyncIcon>
      </div>
    );
  }
  if (status === "authenticated") {
    return <Avatar userName={userName} />;
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
