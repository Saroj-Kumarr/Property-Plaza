import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/userSlice";
import { MdMail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { IoEye, IoEyeOff, IoLogInSharp } from "react-icons/io5";
import { login } from "../../services/auth.actions";
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="flex  items-center justify-center h-screen">
      <div className="w-[26rem] rounded-md  -mt-20 custom-shadow p-5">
        <h1 className="font-bold uppercase  tracking-widest text-2xl mb-4 text-center">
          Login form
        </h1>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const response = await login(email, password);
            if (response.success) {
              const { _id, email, name, phone, image } = response.user;

              dispatch(
                setUser({
                  _id,
                  email,
                  name,
                  phone,
                  image,
                })
              );
              toast.success("you are logged in successfully.", {
                duration: 3000,
                position: "top-center",
              });
              navigate("/listings");
            }
          }}
          className="flex items-center justify-center flex-col gap-5"
        >
          <div className="flex w-full items-center  relative">
            <MdMail className="absolute text-lg text-[#C5AB7B] left-16" />
            <input
              type="email"
              placeholder="Enter your email"
              className="border-b border-[#C5AB7B] rounded-md text-center w-full py-2 focus:outline-none tracking-widest "
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex w-full items-center  relative">
            <FaLock className="absolute text-lg text-[#C5AB7B] left-16" />
            <input
              type={isShowPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="border-b tracking-widest rounded-md border-[#C5AB7B] text-center w-full py-2 pl-5 focus:outline-none "
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {isShowPassword ? (
              <IoEye
                onClick={() => setIsShowPassword(false)}
                className="absolute text-[#C5AB7B] text-xl right-3 cursor-pointer"
              />
            ) : (
              <IoEyeOff
                onClick={() => setIsShowPassword(true)}
                className="absolute text-[#C5AB7B] text-xl right-3 cursor-pointer"
              />
            )}
          </div>

          <button className="tracking-widest w-full bg-[#C5AB7B] text-white font-bold py-2 rounded-md custom-shadow uppercase tracking-widest">
            Login
            <IoLogInSharp className="inline text-lg -mt-[2px]" />
          </button>
        </form>
        <p className="text-sm text-center mt-2">
          Don't have an account?{" "}
          <Link to="/register">
            <span className="font-bold text-[#C5AB7B]">Register</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
