import React from "react";
import { BiHeart } from "react-icons/bi";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi2";
import { IoHeartSharp } from "react-icons/io5";
import { MdRealEstateAgent } from "react-icons/md";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="custom-shadow flex justify-center py-5 mt-16">
      <div className="flex flex-col justify-center items-center gap-3 w-8/12">
        <div className="flex items-center justify-center ">
          {" "}
          <img className="h-20 -mt-2" src={logo} alt="logo" />
          <p className="text-xl -ml-3 font-bold uppercase ">
            Property <span className="text-[#1B2A80]">Plaza</span>
          </p>
        </div>
        <p className="text-xs text-center px-5">
          Welcome to our real estate site, where your dream home is just a click
          away. From cozy cottages to modern apartments, we've got options for
          every taste. Explore our listings and let us help you find the perfect
          fit. With our friendly service and easy-to-use platform, your home
          search just got simpler. Start browsing now and find your ideal home
          sweet home. Experience the satisfaction of finding your perfect match
          as we assist you every step of the way. Your dream home is within
          reach – let's make it a reality together.
        </p>
        <div className="flex gap-4 text-[#1B2A80] text-2xl">
          <FaGithub />
          <FaLinkedin />
          <FaSquareInstagram />
          <FaFacebook />
        </div>

        <ul className="flex gap-5 text-xs">
          <li>Privacy</li>
          <li>Terms of Use</li>
          <li>Acceptable Use Policy</li>
          <li>Software Lifecycle Policy</li>
        </ul>

        <div className="text-xs font-bold">
          Designed and Developed by{" "}
          <IoHeartSharp className="inline mr-1 text-red-500" />
          Saroj <span className="text-[#1B2A80]">Kumar</span>
        </div>

        <p className="text-sm font-semibold">
          Copyright &#169; 2024 - present || Property Plaza inc, All right
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
