import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import { signIn } from "next-auth/react";
const LoginWithGoogle = () => {
  return (
    <button
      onClick={() => signIn("google")}
      className="relative flex h-12  w-72 items-center  justify-evenly rounded-full border-2 bg-blue-500 text-white hover:bg-blue-600 lg:w-80"
    >
      <GoogleIcon className="absolute left-1 h-7  w-7 rounded-full  text-white sm:h-8 sm:w-8" />
      Continue with Google
    </button>
  );
};

export default LoginWithGoogle;
