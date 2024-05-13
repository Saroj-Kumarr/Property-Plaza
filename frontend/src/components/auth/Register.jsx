import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle, FaLock, FaPhoneSquareAlt } from "react-icons/fa";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { MdMail } from "react-icons/md";
import { GiArchiveRegister } from "react-icons/gi";
import { register } from "../../services/auth.actions";
import { uploadImage } from "../../services/upload.actions";
import { toast } from "react-hot-toast";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-[27rem] px-10 py-5 mt-10 custom-shadow   rounded-md">
        <h1 className="font-bold uppercase  tracking-widest text-2xl mb-4 text-center text-[#C5AB7B] ">
          Register form
        </h1>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const response = await register(
              name,
              email,
              phone,
              password,
              imageURL
            );
            if (response.success) {
              toast.success(`Hii👋 ${name} you are registered.`, {
                duration: 3000,
                position: "top-center",
              });
              navigate("/login");
            }
          }}
          className="flex items-center justify-center flex-col gap-5"
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
            <FaUserCircle className="absolute text-xl text-[#C5AB7B] left-16" />
            <input
              type="text"
              placeholder="Enter your name"
              className="border-b border-[#C5AB7B] text-center w-full py-2 focus:outline-none tracking-widest rounded-md"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex w-full items-center  relative">
            <MdMail className="absolute text-xl text-[#C5AB7B] left-16" />
            <input
              type="email"
              placeholder="Enter your email"
              className="border-b border-[#C5AB7B] text-center w-full py-2 focus:outline-none tracking-widest rounded-md"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex w-full items-center  relative">
            <FaPhoneSquareAlt className="absolute text-xl text-[#C5AB7B] left-16" />
            <input
              type="text"
              placeholder="Enter your phone"
              className="border-b tracking-widest border-[#C5AB7B] text-center w-full py-2  focus:outline-none rounded-md"
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="flex w-full items-center  relative">
            <FaLock className="absolute text-lg text-[#C5AB7B] left-16" />
            <input
              type={isShowPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="border-b tracking-widest border-[#C5AB7B] text-center w-full py-2 pl-5 focus:outline-none rounded-md "
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

          <input
            type="file"
            id="file"
            className="py-2 rounded-md border-dashed border border-[#C5AB7B] px-5"
            onChange={async (e) => {
              const response = await uploadImage(e.target.files[0]);

              if (response.success) {
                toast.success("Image uploaded successfully.");
                setImageURL(response.data);
              }
            }}
          />

          <div className="flex gap-2 bg-[#C5AB7B] w-full rounded-md py-2 text-black items-center justify-center custom-shadow font-bold">
            <button className="uppercase tracking-wider">Register</button>
            <GiArchiveRegister />
          </div>
        </form>

        <p className="text-sm text-center mt-2">
          Already have an account?{" "}
          <Link to="/login">
            <span className="font-bold text-[#C5AB7B]">Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
