"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import VisibilityIcon from "@mui/icons-material/Visibility";

interface UserData {
  name: string;
  email: string;
  password: string;
  confirm: string;
}

const RegesterForm = () => {
  const router = useRouter();
  const [submitError, setSubmitError] = useState<string>("");
  const [data, setData] = useState<UserData>({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirm, setShowConfirm] = useState<boolean>(false);

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
        className=" flex h-80 flex-col justify-between"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          id="name"
          name="name"
          value={data.name}
          placeholder="Name"
          onChange={handleChange}
          className="h-12 w-72 rounded-lg border-2 border-gray-300 pl-4 outline-none hover:border-gray-500 focus:border-green-500 lg:w-80"
        />
        <input
          type="email"
          id="email"
          name="email"
          value={data.email}
          placeholder="Email"
          className="h-12 w-72 rounded-lg border-2 border-gray-300 pl-4 outline-none hover:border-gray-500 focus:border-green-500 lg:w-80"
          onChange={handleChange}
        />
        <div className="relative ">
          <input
            id="password"
            name="password"
            value={data.password}
            type={!showPassword ? "Password" : "text"}
            placeholder="password"
            className="relative h-12 w-72 rounded-lg border-2 border-gray-300 pl-4 outline-none hover:border-gray-500  focus:border-green-500 lg:w-80"
            onChange={handleChange}
          />
          <div
            className="absolute right-4 top-2.5 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            <VisibilityIcon
              className={`${showPassword && "text-green-500"} $ h-6 w-6`}
            />
          </div>
        </div>

        <div className="relative ">
          <input
            type={!showConfirm ? "password" : "text"}
            id="confirm"
            name="confirm"
            value={data.confirm}
            placeholder="Confirm Password"
            className="h-12 w-72 rounded-lg border-2 border-gray-300 pl-4 outline-none hover:border-gray-500 focus:border-green-500  lg:w-80"
            onChange={handleChange}
          />
          <div
            className="absolute right-4 top-2.5 cursor-pointer"
            onClick={() => setShowConfirm(!showConfirm)}
          >
            <VisibilityIcon
              className={`${showConfirm && "text-green-500"} $ h-6 w-6`}
            />
          </div>
        </div>
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
