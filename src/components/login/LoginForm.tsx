import React from "react";

const LoginForm = () => {
  return (
    <form className="flex flex-col h-44 justify-between">
      <input
        type="email"
        placeholder="Email"
        className="w-72 h-12 lg:w-80 outline-none rounded-lg border-2 border-gray-300 pl-4 hover:border-gray-500 focus:border-green-500"
      ></input>
      <input
        type="password"
        placeholder="Password"
        className="w-72 lg:w-80 h-12 outline-none rounded-lg border-2 border-gray-300 pl-4 hover:border-gray-500  focus:border-green-500"
      ></input>
      <button className="w-72 lg:w-80 relative  h-12 border-2  bg-green-600 flex items-center justify-evenly rounded-full text-white hover:bg-green-500">
        Continue with Email
      </button>
    </form>
  );
};

export default LoginForm;
