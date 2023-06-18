"use client";
import React from "react";
import LoginForm from "@/components/login/LoginForm";
import LoginWithGoogle from "@/components/login/LoginWithGoogle";
const page = () => {
  return (
    <div className="mt-16 flex h-[calc(100svh-64px)]  items-center justify-center lg:w-[calc(100%-112px)]">
      <div className=" flex h-3/4 w-[calc(100%-36px)] flex-col items-center justify-evenly rounded-md  border-2 border-gray-300 text-center sm:w-1/2 md:rounded-3xl lg:w-[calc(42%)]">
        <h1 className="text-2xl  font-semibold">Log in to Halali</h1>
        <div className="flex h-72 flex-col justify-evenly ">
          <LoginForm />
          <div className="flex w-full items-center justify-evenly md:w-72 lg:w-80">
            <div className="h-0 w-1/2 border-[1px] border-gray-300"></div>
            <div className="w-10">OR</div>
            <div className="flex h-0 w-1/2 border-[1px] border-gray-300 "></div>
          </div>
          <LoginWithGoogle />
        </div>
        <div className="flex h-28 flex-col justify-evenly">
          <div className="flex w-full items-center justify-between sm:w-72 md:justify-evenly lg:w-80">
            <div className="h-0 w-10 border-[1px] border-gray-300 sm:w-10 lg:w-14"></div>
            <div className="sm:w-54  md:text-md text-sm">
              Don&apos;t have a Halali account?
            </div>
            <div className="flex h-0 w-10 border-[1px] border-gray-300 sm:w-10 lg:w-14"></div>
          </div>
          <button className="relative flex h-12  w-72 items-center   justify-evenly rounded-full border-2 text-gray-700 hover:bg-gray-700 hover:text-gray-100 lg:w-80">
            Regester
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
