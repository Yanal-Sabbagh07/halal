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
        absolute right-0 top-[60px] h-56  w-56 scale-0 rounded-xl border-2 border-slate-200  
         bg-slate-200 text-white  opacity-0 transition-all after:absolute 
        after:-top-8 after:right-2 after:border-[16px] after:border-b-slate-200 after:border-l-transparent after:border-r-transparent
        after:border-t-transparent after:transition-all lg:-right-4 lg:after:right-[26px]`}
      >
        <div className="flex h-full w-full flex-col items-center justify-center">
          <div className="flex h-[95%] w-[95%] flex-col items-center justify-between rounded-xl bg-white">
            <div className="flex h-28 w-full flex-col items-center justify-evenly  border-b-2 border-slate-200">
              <AccountCircleIcon
                style={{ width: "76px", height: "76px" }}
                className="  text-blue-800"
              />
              <p className="text-gray-700"> {userName} </p>
            </div>
            <Link
              href="#"
              className="flex h-12 w-full cursor-pointer items-center justify-center rounded-none bg-white   text-slate-900 hover:bg-slate-100 hover:font-semibold md:flex  lg:w-full  "
            >
              Porfile
            </Link>
            <button
              onClick={() => signOut()}
              className=" flex h-12 w-full cursor-pointer items-center justify-center  rounded-b-xl	  bg-white text-slate-900 hover:bg-slate-100 hover:font-semibold  md:flex lg:w-full "
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
