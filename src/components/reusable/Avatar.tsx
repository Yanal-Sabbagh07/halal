import React, { useState } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

interface IAvatarprops {
  userName: string | null | undefined;
}
const Avatar = ({ userName }: IAvatarprops) => {
  const [profileClicked, setProfileClicked] = useState(false);

  return (
    <div
      className="group relative  flex  cursor-pointer flex-col items-center justify-center"
      onClick={() => setProfileClicked(!profileClicked)}
    >
      <AccountCircleIcon
        className=" text-white"
        style={{ width: "56px", height: "56px" }}
      />

      <div
        className={`${profileClicked && "scale-100 opacity-100"} 
        absolute right-0 top-[60px] h-64  w-56 scale-0 rounded-md border-2 border-gray-100  
         bg-gray-100 text-white  opacity-0 transition-all after:absolute 
        after:-top-8 after:right-4 after:border-[16px] after:border-b-gray-100 after:border-l-transparent after:border-r-transparent
        after:border-t-transparent after:transition-all lg:-right-4 lg:after:right-[26px]`}
      >
        <div className="flex h-full w-full flex-col items-center justify-between">
          <div className="flex  w-full flex-col items-center justify-between ">
            <AccountCircleIcon
              style={{ width: "86px", height: "86px" }}
              className="  text-blue-800"
            />

            <p className="text-gray-700"> {userName} </p>
          </div>
          <Link
            href="#"
            className="flex h-12 w-full cursor-pointer items-center justify-center rounded-lg bg-gray-400  font-semibold text-slate-900 hover:bg-white hover:font-extrabold md:flex  lg:w-full lg:rounded-sm lg:bg-gray-300"
          >
            Porfile
          </Link>
          <button
            onClick={() => signOut()}
            className=" h-12 w-full cursor-pointer items-center justify-center rounded-lg  bg-gray-400 font-semibold text-slate-900 hover:bg-white hover:font-extrabold md:flex   lg:w-full lg:rounded-sm lg:bg-gray-300"
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
