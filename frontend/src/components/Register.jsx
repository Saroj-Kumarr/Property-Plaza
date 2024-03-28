import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle, FaLock } from "react-icons/fa";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { MdLock, MdMail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const Register = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/login");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-3/12 -mt-20 custom-shadow p-5">
        <h1 className="font-bold uppercase  tracking-widest text-2xl mb-4 text-center text-slate-600 ">
          Register <span className="text-violet-800">Form</span>
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-center flex-col gap-3"
        >
          <div className="flex w-full items-center  relative">
            <FaUserCircle className="absolute text-lg text-violet-800 left-16" />
            <input
              type="text"
              placeholder="Enter your name"
              className="border-b border-violet-800 text-center w-full py-2 focus:outline-none tracking-widest"
              id="username"
              onChange={handleChange}
            />
          </div>
          <div className="flex w-full items-center  relative">
            <MdMail className="absolute text-lg text-violet-800 left-16" />
            <input
              type="email"
              placeholder="Enter your email"
              className="border-b border-violet-800 text-center w-full py-2 focus:outline-none tracking-widest "
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="flex w-full items-center  relative">
            <FaLock className="absolute text-lg text-violet-800 left-16" />
            <input
              type={isShowPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="border-b tracking-widest border-violet-800 text-center w-full py-2 pl-5 focus:outline-none "
              id="password"
              onChange={handleChange}
            />
            {isShowPassword ? (
              <IoEye
                onClick={() => setIsShowPassword(false)}
                className="absolute text-violet-800 text-xl right-3 cursor-pointer"
              />
            ) : (
              <IoEyeOff
                onClick={() => setIsShowPassword(true)}
                className="absolute text-violet-800 text-xl right-3 cursor-pointer"
              />
            )}
          </div>
          <div className="flex w-full items-center  relative">
            <RiLockPasswordFill className="absolute text-xl text-violet-800 left-16" />
            <input
              type="password"
              placeholder="Enter confirm password"
              className="border-b tracking-widest border-violet-800 text-center w-full py-2 pl-10 focus:outline-none "
              id="password"
              onChange={handleChange}
            />
            {isShowConfirmPassword ? (
              <IoEye
                onClick={() => setIsShowConfirmPassword(false)}
                className="absolute text-violet-800 text-xl right-3 cursor-pointer"
              />
            ) : (
              <IoEyeOff
                onClick={() => setIsShowConfirmPassword(true)}
                className="absolute text-violet-800 text-xl right-3 cursor-pointer"
              />
            )}
          </div>
          <button
            disabled={loading}
            className=" w-full bg-violet-800 text-white font-bold py-1 rounded-md custom-shadow"
          >
            {loading ? "Loading..." : "Register"}
          </button>
        </form>

        <p className="text-sm text-center mt-2">
          Already have an account?{" "}
          <Link to="/login">
            <span className="font-bold text-violet-800">Login</span>
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
