import React, { useState } from "react";
import { signIn } from "next-auth/react";
import VisibilityIcon from "@mui/icons-material/Visibility";
interface UserData {
  email: string;
  password: string;
}
const LoginForm = () => {
  const [data, setData] = useState<UserData>({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = e.target;
    setData((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = data;
    await signIn("credentials", { email, password });
  };
  return (
    <form
      className="flex h-52 flex-col justify-evenly "
      onSubmit={handleSubmit}
    >
      <input
        type="email"
        name="email"
        value={data.email}
        onChange={handleChange}
        placeholder="Email"
        className="h-12 w-72 rounded-lg border-2 border-gray-300 pl-4 outline-none hover:border-gray-500 focus:border-green-500 lg:w-80"
      ></input>
      <div className="relative ">
        <input
          type={!showPassword ? "Password" : "text"}
          name="password"
          value={data.password}
          onChange={handleChange}
          placeholder="Password"
          className="h-12 w-72 rounded-lg border-2 border-gray-300 pl-4 outline-none hover:border-gray-500 focus:border-green-500  lg:w-80"
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
      <button className="relative flex h-12  w-72 items-center  justify-evenly rounded-full border-2 bg-green-600 text-white hover:bg-green-500 lg:w-80">
        Continue with Email
      </button>
    </form>
  );
};

export default LoginForm;
