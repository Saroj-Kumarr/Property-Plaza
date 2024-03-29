import React from "react";
import homeImage from "../assets/property3.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="h-screen flex pt-20 items-center">
      <div className="w-5/12 -mt-20 text-center">
        <div className="flex flex-col gap-3 ml-5">
          <h3 className="text-4xl">
            Welcome to <span className="font-bold">Property</span>{" "}
            <span className="text-violet-800 font-bold">Plaza</span>
          </h3>
          <p className="leading-5 text-sm  ">
            Welcome to our real estate site, where your dream home is just a
            click away. From cozy cottages to modern apartments, we've got
            options for every taste. Explore our listings and let us help you
            find the perfect fit. With our friendly service and easy-to-use
            platform, your home search just got simpler. Start browsing now and
            find your ideal home sweet home.
          </p>

          <div className="flex items-center justify-center">
            <div className="flex gap-5">
              <Link to="/register">
                <button className="border border-violet-800 px-7 py-1 rounded-md text-violet-800 font-semibold custom-shadow tracking-widest">
                  Register
                </button>
              </Link>
              <Link to="/register">
                <button className="bg-violet-800  px-7 tracking-widest py-1 custom-shadow rounded-md text-white font-semibold">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <img className="w-7/12" src={homeImage} alt="image" />
    </div>
  );
};

export default HomePage;
