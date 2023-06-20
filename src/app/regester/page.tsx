"use client";
import React from "react";
import Link from "next/link";
import LoginWithGoogle from "@/components/login/LoginWithGoogle";
import RegesterForm from "@/components/regester/RegesterForm";
const page = () => {
  return (
    <div className="mt-16 flex h-[calc(100svh-64px)]  items-center justify-center ">
      <div className=" flex h-5/6 w-[calc(100%-36px)] flex-col items-center justify-around rounded-md  border-2 border-gray-300 text-center sm:w-3/4 sm:rounded-3xl lg:w-[calc(42%)]">
        <h1 className=" text-xl font-bold text-gray-700">
          Register to Islamic Corner
        </h1>
        <div className="flex h-80 flex-col justify-center ">
          <RegesterForm />
        </div>
        <div className="flex h-28 w-full flex-col items-center justify-around ">
          <div className="flex w-full items-center justify-evenly ">
            <div className="h-0 w-4 border-[1px] border-gray-300 sm:w-20 lg:w-[10%]"></div>
            <div className="md:text-md  text-sm  ">
              Already have an Islamic Corner account?
            </div>
            <div className="flex h-0 w-4 border-[1px] border-gray-300 sm:w-20 lg:w-[10%]"></div>
          </div>
          <Link
            className="relative flex h-12  w-72 items-center  justify-center rounded-full border-2 text-gray-700 hover:bg-gray-700 hover:text-gray-100 lg:w-80"
            href="/login"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
