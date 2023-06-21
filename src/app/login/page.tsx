"use client";
import React, { useState, useEffect } from "react";
import SyncIcon from "@mui/icons-material/Sync";

import LoginForm from "@/components/login/LoginForm";
import Link from "next/link";
import LoginWithGoogle from "@/components/login/LoginWithGoogle";
import { useRouter, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
const Page = () => {
  const { status } = useSession();
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState<string | null>("");
  useEffect(() => {
    setError(params.get("error"));
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status]);
  if (status === "loading") {
    return (
      <div className="mt-16 flex h-[calc(100svh-64px)] w-full  items-center justify-center ">
        <div
          className=" flex h-14 w-14 items-center
        justify-center  "
        >
          <SyncIcon
            style={{ width: "36", height: "36px" }}
            className=" animate-spin text-red-500"
          ></SyncIcon>
        </div>
      </div>
    );
  }
  if (status === "unauthenticated") {
    return (
      <div className="mt-16 flex h-[calc(100svh-64px)]  items-center justify-center ">
        <div className=" flex h-5/6 w-[calc(100%-36px)] flex-col items-center justify-around rounded-lg  border-2 border-gray-300 text-center sm:w-3/4  sm:rounded-3xl lg:w-[calc(42%)] ">
          <h1 className="mt-1 text-xl font-bold text-gray-700">
            Log in to Islamic Corner
          </h1>
          <div className="flex h-80 flex-col justify-evenly  ">
            <LoginForm />

            {error && (
              <div className="flex h-8 items-center justify-center  text-sm text-red-500">
                {error}
              </div>
            )}
            <div className="flex h-20 flex-col items-center justify-between ">
              <div className="flex w-full items-center justify-evenly  md:w-72 lg:w-80">
                <div className="h-0 w-1/2 border-[1px] border-gray-300"></div>
                <div className="w-10 text-base">Or</div>
                <div className="flex h-0 w-1/2 border-[1px] border-gray-300 "></div>
              </div>
              <LoginWithGoogle />
            </div>
          </div>
          <div className="flex h-28 flex-col items-start justify-evenly ">
            <div className="flex w-full items-center justify-between  sm:w-72 md:justify-evenly lg:w-80">
              <div className="h-0 w-10 border-[1px] border-gray-300 sm:w-10 lg:w-14"></div>
              <div className="sm:w-54  md:text-md text-sm">
                Don&apos;t have a Halali account?
              </div>
              <div className="flex h-0 w-10 border-[1px] border-gray-300 sm:w-10 lg:w-14"></div>
            </div>
            <Link
              className="relative flex h-12  w-72 items-center justify-evenly rounded-full border-2 text-gray-700 hover:bg-gray-700 hover:text-gray-100 lg:w-80"
              href={"/regester"}
            >
              Regester
            </Link>
          </div>
        </div>
      </div>
    );
  }
};

export default Page;
