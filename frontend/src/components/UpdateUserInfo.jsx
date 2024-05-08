import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaLock, FaPhoneSquareAlt } from "react-icons/fa";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { MdEditSquare, MdMail } from "react-icons/md";
import { updateUser } from "../services/user.actions";
import { uploadImage } from "../utils/uploadImage";
import { setUser } from "../redux/userSlice";

const UpdateUserInfo = () => {
  const { currentUser } = useSelector((store) => store.user);
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [phone, setPhone] = useState(currentUser.phone);
  const [imageURL, setImageURL] = useState(currentUser.image);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-3/12 custom-shadow p-5 mt-5  rounded-md">
        <h1 className="font-bold uppercase  tracking-widest text-2xl mb-4 text-center text-slate-600 ">
          Update user <span className="text-[#1B2A80]">Form</span>
        </h1>
        <form
          onSubmit={async (e) => {
            e.preventDefault();

            const response = await updateUser(
              currentUser._id,
              name,
              email,
              phone,
              imageURL
            );

            if (response.success) {
              dispatch(
                setUser({
                  _id: response.user._id,
                  name: response.user.name,
                  email: response.user.email,
                  phone: response.user.phone,
                  image: response.user.image,
                })
              );
              navigate("/profile");
            }
          }}
          className="flex items-center justify-center flex-col gap-3"
        >
          <img
            className="h-24 w-24 object-cover  rounded-full custom-shadow"
            src={imageURL}
            alt="user"
          />

          <div className="flex w-full items-center  relative">
            <FaUserCircle className="absolute text-xl text-[#1B2A80] left-16" />
            <input
              type="text"
              placeholder="Enter your name"
              className="border-b border-[#1B2A80] text-center w-full py-2 focus:outline-none tracking-widest"
              id="name"
              value={name}
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
              value={email}
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
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <input
            type="file"
            id="file"
            className="border p-2 my-2 py-1 rounded-md border-dashed border-2"
            onChange={async (e) => {
              setImageURL(await uploadImage(e.target.files[0]));
            }}
          />

          <button className="tracking-widest w-full bg-[#1B2A80] text-white font-bold py-2 rounded-md custom-shadow tracking-widest uppercase">
            Update Details
            <MdEditSquare className="inline text-lg -mt-[2px]" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUserInfo;
