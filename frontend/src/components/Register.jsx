import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle, FaLock, FaPhoneSquareAlt } from "react-icons/fa";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { MdLock, MdMail } from "react-icons/md";
import { GiArchiveRegister } from "react-icons/gi";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [imageURL, setImageURL] = useState("");

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const navigate = useNavigate();

  const uploadImage = async (imageFile) => {
    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      const response = await fetch(
        "http://localhost:8000/api/upload/single-image",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        console.log("Failed to upload images");
        return;
      }

      const jsonResponse = await response.json();

      setImageURL(jsonResponse);
    } catch (error) {}
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          password,
          image: imageURL,
        }),
      });
      if (response.status == 200) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-3/12 custom-shadow p-5 mt-5  rounded-md">
        <h1 className="font-bold uppercase  tracking-widest text-2xl mb-4 text-center text-slate-600 ">
          Register <span className="text-[#1B2A80]">Form</span>
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-center flex-col gap-3"
        >
          {imageURL ? (
            <img
              className="h-24 w-24 object-cover  rounded-full custom-shadow"
              src={imageURL}
              alt="user"
            />
          ) : (
            <img
              className="h-24 w-24 object-cover  rounded-full custom-shadow"
              src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
              alt="user"
            />
          )}
          <div className="flex w-full items-center  relative">
            <FaUserCircle className="absolute text-xl text-[#1B2A80] left-16" />
            <input
              type="text"
              placeholder="Enter your name"
              className="border-b border-[#1B2A80] text-center w-full py-2 focus:outline-none tracking-widest"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex w-full items-center  relative">
            <MdMail className="absolute text-xl text-[#1B2A80] left-16" />
            <input
              type="email"
              placeholder="Enter your email"
              className="border-b border-[#1B2A80] text-center w-full py-2 focus:outline-none tracking-widest "
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex w-full items-center  relative">
            <FaPhoneSquareAlt className="absolute text-xl text-[#1B2A80] left-16" />
            <input
              type="text"
              placeholder="Enter your phone"
              className="border-b tracking-widest border-[#1B2A80] text-center w-full py-2  focus:outline-none "
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
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

          <input
            type="file"
            id="file"
            onChange={(e) => {
              uploadImage(e.target.files[0]);
            }}
          />

          <button
            disabled={loading}
            className="tracking-widest w-full bg-[#1B2A80] text-white font-bold py-2 rounded-md custom-shadow tracking-widest uppercase"
          >
            {loading ? "Loading..." : "Register"}{" "}
            <GiArchiveRegister
              className="inline text-lg
                    -mt-[2px]"
            />
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
