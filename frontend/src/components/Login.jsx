import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/user/userSlice";
import { MdMail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { IoEye, IoEyeOff, IoLogInSharp } from "react-icons/io5";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://property-plaza.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const jsonResponse = await response.json();

      if (response.status == 404) {
        // toast.error("Failed to login.", {
        //   position: "top-right",
        // });
        return;
      }

      // toast.success("You're logged in.", {
      //   position: "top-right",
      // });

      localStorage.setItem("token", JSON.stringify(jsonResponse.token));
      dispatch(setUser(jsonResponse.rest));
      navigate("/listings");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex  items-center justify-center h-screen">
      <div className="w-3/12  -mt-20 custom-shadow p-5">
        <h1 className="font-bold uppercase  tracking-widest text-2xl mb-4 text-center text-slate-600 ">
          Login <span className="text-[#1B2A80]">Form</span>
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-center flex-col gap-3"
        >
          <div className="flex w-full items-center  relative">
            <MdMail className="absolute text-lg text-[#1B2A80] left-16" />
            <input
              type="email"
              placeholder="Enter your email"
              className="border-b border-[#1B2A80] text-center w-full py-2 focus:outline-none tracking-widest "
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex w-full items-center  relative">
            <FaLock className="absolute text-lg text-[#1B2A80] left-16" />
            <input
              type={isShowPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="border-b tracking-widest border-[#1B2A80] text-center w-full py-2 pl-5 focus:outline-none "
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {isShowPassword ? (
              <IoEye
                onClick={() => setIsShowPassword(false)}
                className="absolute text-[#1B2A80] text-xl right-3 cursor-pointer"
              />
            ) : (
              <IoEyeOff
                onClick={() => setIsShowPassword(true)}
                className="absolute text-[#1B2A80] text-xl right-3 cursor-pointer"
              />
            )}
          </div>

          <button
            disabled={loading}
            className="tracking-widest w-full bg-[#1B2A80] text-white font-bold py-2 rounded-md custom-shadow uppercase tracking-widest"
          >
            {loading ? "Loading..." : "Login"}{" "}
            <IoLogInSharp className="inline text-lg -mt-[2px]" />
          </button>
        </form>
        <p className="text-sm text-center mt-2">
          Don't have an account?{" "}
          <Link to="/register">
            <span className="font-bold text-[#1B2A80]">Register</span>
          </Link>
        </p>
        {error && <p className="text-red-500 mt-5">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
