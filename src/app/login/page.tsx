"use client";
import React, { useState, useEffect } from "react";
import SyncIcon from "@mui/icons-material/Sync";
import LoginForm from "./components/LoginForm";
import LinkToLogin from "@/app/login/components/LinkToLogin";
import LoginWithGoogle from "./components/LoginWithGoogle";
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
      <div className="mt-16 flex min-h-[calc(100svh-64px)]  items-center justify-center ">
        <div className=" flex  w-[calc(100%-36px)] flex-col  items-center  rounded-lg border-2  border-gray-300  text-center sm:w-1/2 sm:rounded-3xl lg:h-[555px] lg:w-[calc(35%)] lg:justify-evenly">
          <div className="mt-2  flex h-12 items-center justify-center text-lg">
            <h1 className=" text-xl font-extrabold text-gray-700">
              Log in to your Halal Account
            </h1>
          </div>
          <div className="flex h-80 flex-col justify-evenly  ">
            <LoginForm />
            <>
              {error && (
                <div className="flex h-8 items-center justify-center  text-sm text-red-500">
                  {error}
                </div>
              )}
            </>
            <LoginWithGoogle />
          </div>
          <LinkToLogin />
        </div>
      </div>
    );
  }
};

export default Page;
