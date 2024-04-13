import React, { useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import { IoMdSend } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="flex h-screen items-center justify-center">
      <form className="w-3/12 custom-shadow flex flex-col gap-5 p-3 rounded-md">
        <h3 className=" font-bold text-center tracking-widest  text-lg uppercase">
          Contact <span className="text-[#1B2A80]">Saroj Kumar</span>
        </h3>
        <div className="flex  items-center  relative border border-[#1B2A80]  rounded-md">
          <FaUserCircle className="absolute text-xl text-[#1B2A80] left-16" />
          <input
            type="text"
            placeholder="Enter your name"
            className=" text-center w-full py-2 focus:outline-none rounded-md  tracking-widest"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex w-full border border-[#1B2A80]  rounded-md items-center  relative">
          <MdMail className="absolute text-xl text-[#1B2A80] left-16" />
          <input
            type="email"
            placeholder="Enter your email"
            className="rounded-md text-center w-full py-2 focus:outline-none tracking-widest "
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <textarea
          className="border tracking-widest border-[#1B2A80] px-2 py-1 rounded-md focus:outline-none w-full"
          placeholder="Type message here..."
          rows="3"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="bg-[#1B2A80] px-5 py-2 custom-shadow rounded-md text-white font-semibold tracking-widest uppercase w-full ">
          <Link to="/listingss">
            send message{" "}
            <RiSendPlaneFill className="inline text-lg -mt-[2px]" />
          </Link>
        </button>
      </form>
    </div>
  );
};

export default Contact;
