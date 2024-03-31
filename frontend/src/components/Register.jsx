import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle, FaLock, FaPhoneSquareAlt } from "react-icons/fa";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { MdLock, MdMail } from "react-icons/md";


const Register = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-3/12 custom-shadow p-5">
        <h1 className="font-bold uppercase  tracking-widest text-2xl mb-4 text-center text-slate-600 ">
          Register <span className="text-[#1B2A80]">Form</span>
        </h1>
        <form
          // onSubmit={handleSubmit}
          className="flex items-center justify-center flex-col gap-3"
        >
          <img
            className="h-20 w-20  rounded-full custom-shadow"
            src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
            alt="user"
          />
          <div className="flex w-full items-center  relative">
            <FaUserCircle className="absolute text-xl text-[#1B2A80] left-16" />
            <input
              type="text"
              placeholder="Enter your name"
              className="border-b border-[#1B2A80] text-center w-full py-2 focus:outline-none tracking-widest"
              id="username"
              // onChange={handleChange}
            />
          </div>
          <div className="flex w-full items-center  relative">
            <MdMail className="absolute text-xl text-[#1B2A80] left-16" />
            <input
              type="email"
              placeholder="Enter your email"
              className="border-b border-[#1B2A80] text-center w-full py-2 focus:outline-none tracking-widest "
              id="email"
              // onChange={handleChange}
            />
          </div>
          <div className="flex w-full items-center  relative">
            <FaPhoneSquareAlt className="absolute text-xl text-[#1B2A80] left-16" />
            <input
              type="text"
              placeholder="Enter your phone"
              className="border-b tracking-widest border-[#1B2A80] text-center w-full py-2  focus:outline-none "
              id="password"
              // onChange={handleChange}
            />
          </div>
          <div className="flex w-full items-center  relative">
            <FaLock className="absolute text-lg text-[#1B2A80] left-16" />
            <input
              type={isShowPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="border-b tracking-widest border-[#1B2A80] text-center w-full py-2 pl-5 focus:outline-none "
              id="password"
              // onChange={handleChange}
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
            className="tracking-widest w-full bg-[#1B2A80] text-white font-bold py-1 rounded-md custom-shadow"
          >
            {loading ? "Loading..." : "Register"}
          </button>
        </form>

        <p className="text-sm text-center mt-2">
          Already have an account?{" "}
          <Link to="/login">
            <span className="font-bold text-[#1B2A80]">Login</span>
          </Link>
        </p>

        {error && (
          <p className="text-red-500 mt-3 text-sm text-center">{error}</p>
        )}
      </div>
    </div>
  );
};

export default Register;
