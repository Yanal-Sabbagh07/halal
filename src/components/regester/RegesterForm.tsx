"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
interface UserData {
  name: string;
  email: string;
  password: string;
  confirm: string;
}
const RegesterForm = () => {
  const router = useRouter();
  const [regesterData, setRegesterData] = useState<UserData>({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/login");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = e.target;
    setRegesterData((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };

  return (
    <form
      className="flex h-72 flex-col justify-between"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        id="name"
        name="name"
        value={regesterData.name}
        placeholder="Name"
        onChange={handleChange}
        className="h-10 w-72 rounded-lg border-2 border-gray-300 pl-4 outline-none hover:border-gray-500 focus:border-green-500 lg:w-80"
      ></input>
      <input
        type="email"
        id="email"
        name="email"
        value={regesterData.email}
        placeholder="Email"
        className="h-10 w-72 rounded-lg border-2 border-gray-300 pl-4 outline-none hover:border-gray-500 focus:border-green-500 lg:w-80"
        onChange={handleChange}
      ></input>
      <input
        id="password"
        name="password"
        value={regesterData.password}
        type="password"
        placeholder="Password"
        className="h-10 w-72 rounded-lg border-2 border-gray-300 pl-4 outline-none hover:border-gray-500 focus:border-green-500  lg:w-80"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        id="confirm"
        name="confirm"
        value={regesterData.confirm}
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
  );
};

export default RegesterForm;
