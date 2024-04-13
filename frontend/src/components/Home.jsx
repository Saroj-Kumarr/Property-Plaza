import React from "react";
import homeImage from "../assets/property.png";
import { Link } from "react-router-dom";
import { GiArchiveRegister } from "react-icons/gi";
import { IoLogInSharp } from "react-icons/io5";

const Home = () => {
  return (
    <div className="h-screen flex pt-20 items-center">
      <div className="w-5/12 -mt-20 text-center">
        <div className="flex flex-col gap-3 ml-5">
          <h3 className="text-4xl">
            Welcome to <span className="font-bold">Property</span>{" "}
            <span className="text-[#1B2A80] font-bold">Plaza</span>
          </h3>
          <p className="leading-5 text-sm  ">
            Welcome to our real estate site, where your dream home is just a
            click away. From cozy cottages to modern apartments, we've got
            options for every taste. Explore our listings and let us help you
            find the perfect fit. With our friendly service and easy-to-use
            platform, your home search just got simpler. Start browsing now and
            find your ideal home sweet home.
          </p>

          <ul className="flex gap-4 items-center justify-center items-center">
            <Link to="/register">
              <li className="border border-[#1B2A80] px-3 py-1 rounded-md text-[#1B2A80]  font-semibold  tracking-widest custom-shadow">
                {" "}
                Register{" "}
                <GiArchiveRegister
                  className="inline text-lg
                    -mt-[2px]"
                />
              </li>
            </Link>
            <Link to="/login">
              <li className="bg-[#1B2A80] px-3 py-1 custom-shadow rounded-md text-white font-semibold tracking-widest">
                {" "}
                Login <IoLogInSharp className="inline text-lg -mt-[2px]" />
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <img className="w-7/12" src={homeImage} alt="image" />
    </div>
  );
};

export default Home;
