import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import React from "react";
import { MdRealEstateAgent } from "react-icons/md";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  return (
    <header className=" shadow-md">
      <div className="flex justify-between items-center px-10 py-5">
        <Link to="/">
          <div className="font-bold items-center gap-2 text-sm sm:text-xl flex flex-wrap">
            <MdRealEstateAgent className="text-3xl" />
            <h1>
              {" "}
              <span className="text-slate-500">Property</span>
              <span className="text-slate-700">Plaza</span>
            </h1>
          </div>
        </Link>
        <form
          onSubmit={handleSubmit}
          className=" p-3 rounded-lg flex items-center"
        >
          {/* <input
            type="text"
            placeholder="Search..."
            className="focus:outline-none w-24 sm:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className="text-slate-600" />
          </button> */}
        </form>
        <ul className="flex gap-4 items-center">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              About
            </li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                className="rounded-full h-7 w-7 object-cover"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <div className="flex gap-3 items-center">
                <li className="border border-violet-800 px-3 py-1 rounded-md text-violet-800 font-semibold custom-shadow">
                  {" "}
                  Register
                </li>
                <li className="bg-violet-800 px-3 py-1 custom-shadow rounded-md text-white font-semibold">
                  {" "}
                  Login
                </li>
              </div>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
