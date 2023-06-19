"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import axios, { AxiosError } from "axios";

interface UserData {
  name: string;
  email: string;
  password: string;
  confirm: string;
}

const RegesterForm = () => {
  // const url = process.env.NEXTAUTH_URL; try to figure out how it works
  const router = useRouter();
  const [submitError, setSubmitError] = useState<string>("");
  const [data, setData] = useState<UserData>({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const apiRes = await axios.post(`/api/auth/register`, data);
      // if (apiRes?.data?.success) {
      //   console.log("success");
      // }
      apiRes.status === 201 &&
        router.push("/login?success=Account has been created");
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        const errorMsg = error.response?.data?.error;
        setSubmitError(errorMsg);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = e.target;
    setData((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };

  return (
    <>
      <form
        className="flex h-72 flex-col justify-between"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          id="name"
          name="name"
          value={data.name}
          placeholder="Name"
          onChange={handleChange}
          className="h-10 w-72 rounded-lg border-2 border-gray-300 pl-4 outline-none hover:border-gray-500 focus:border-green-500 lg:w-80"
        ></input>
        <input
          type="email"
          id="email"
          name="email"
          value={data.email}
          placeholder="Email"
          className="h-10 w-72 rounded-lg border-2 border-gray-300 pl-4 outline-none hover:border-gray-500 focus:border-green-500 lg:w-80"
          onChange={handleChange}
        ></input>
        <input
          id="password"
          name="password"
          value={data.password}
          type="password"
          placeholder="Password"
          className="h-10 w-72 rounded-lg border-2 border-gray-300 pl-4 outline-none hover:border-gray-500 focus:border-green-500  lg:w-80"
          onChange={handleChange}
        ></input>
        <input
          type="password"
          id="confirm"
          name="confirm"
          value={data.confirm}
          placeholder="Confirm Password"
          className="h-10 w-72 rounded-lg border-2 border-gray-300 pl-4 outline-none hover:border-gray-500 focus:border-green-500  lg:w-80"
          onChange={handleChange}
        ></input>
        <button
          type="submit"
          className="relative flex h-12  w-72 items-center  justify-evenly rounded-full border-2 bg-green-600 text-white hover:bg-green-500 lg:w-80"
        >
          Sign up
        </button>
      </form>
      {submitError && (
        <div className="text-red-500 ">Something went wrong!</div>
      )}
    </>
  );
};

export default RegesterForm;
