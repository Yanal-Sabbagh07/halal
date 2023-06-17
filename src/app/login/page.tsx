"use client";
import { signIn } from "next-auth/react";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-[calc(100svh-64px)] flex items-center justify-center mt-16 lg:w-[calc(100%-112px)]">
      <div className=" text-center border-2 border-gray-300 h-3/4 w-[calc(100%-36px)] lg:w-1/2  flex flex-col items-center justify-evenly ">
        <h1 className="text-4xl">Login to Yalla Halal</h1>
        <button
          onClick={() => signIn("google")}
          className="w-48 h-16 border-2 rounded-xl bg-green-500"
        >
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default page;
