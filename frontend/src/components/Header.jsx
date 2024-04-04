import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import React from "react";
import { MdRealEstateAgent } from "react-icons/md";
import logo from "../assets/logo.png";
import Select from "react-select";
import { FiSearch } from "react-icons/fi";
import { BsFilterSquareFill } from "react-icons/bs";
import { deleteUser } from "../redux/user/userSlice";
import { IoLogInSharp, IoLogOutSharp } from "react-icons/io5";
import { GiArchiveRegister } from "react-icons/gi";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/auth/logout");

      if (response.status == 200) {
        dispatch(deleteUser());
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="custom-shadow fixed w-full z-10 bg-white">
      <div className="flex justify-between items-center  pr-10">
        <Link to="/">
          <div className="font-bold uppercase items-center text-sm sm:text-xl flex flex-wrap">
            <img className="h-20" src={logo} alt="logo" />
            {/* <MdRealEstateAgent className="text-5xl  text-[#1B2A80]" /> */}
            <h1 className="-ml-3">
              {" "}
              <span className="text-slate-600">Property </span>
              <span className="text-[#1B2A80]">Plaza</span>
            </h1>
          </div>
        </Link>
        <form
          // onSubmit={handleSubmit}
          className=" p-3 rounded-lg flex gap-3 items-center"
        >
          <div className="custom-shadow">
            <input
              type="text"
              placeholder="search your choice here..."
              className="border-2 placeholder:tracking-widest border-[#1B2A80] w-80 py-2 px-5 rounded-l-md focus:outline-none"
            />
            <button className="bg-[#1B2A80] tracking-widest border border-[#1B2A80]  px-3 py-[7px] custom-shadow rounded-r-md text-white text-lg font-semibold">
              <FiSearch className="inline -mt-1 text-2xl" /> search
            </button>
          </div>

          {/* <div className="flex  items-center ">
            <BsFilterSquareFill className="text-[#1B2A80]  text-2xl relative left-8" />
            <select
              className="border-2 border-[#1B2A80] tracking-widest uppercase py-2 pl-9 pr-1 custom-shadow rounded-md "
              onChange={onOptionChangeHandler}
            >
              <option disabled selected className="uppercase tracking-widest">
                filter by
              </option>
              {options.map((option, index) => {
                return (
                  <option
                    className="uppercase mt-5 p-2 tracking-widest"
                    key={index}
                  >
                    {option}
                  </option>
                );
              })}
            </select>
          </div> */}

          {/* <Select
            placeholder="filter listing..."
            className="react-select-container"
            classNamePrefix="react-select"
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
          /> */}

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
        <ul className="flex gap-5 uppercase tracking-widest font-semibold items-center ">
          <Link to="/">
            <li className="hover:text-[#1B2A80] duration-200">Home</li>
          </Link>
          <Link to="/about">
            <li className="hover:text-[#1B2A80] duration-200">About</li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <div className="flex gap-4 items-center">
                <Link to="/create-listing">
                  <li className="hover:text-[#1B2A80] duration-200">
                    create listing
                  </li>
                </Link>
                <Link to="/login">
                  <li
                    onClick={handleLogout}
                    className="border border-[#1B2A80] px-3 py-1 rounded-md text-[#1B2A80]  font-semibold custom-shadow"
                  >
                    {" "}
                    Logout{" "}
                    <IoLogOutSharp className="inline text-lg -mt-[2px]" />
                  </li>
                </Link>
                <div className="relative flex justify-center items-center">
                  <img
                    className="rounded-full border-2 border-[#1B2A80]  h-12 w-12 object-cover custom-shadow"
                    src={currentUser.image}
                    alt="profile"
                  />
                  <span className="text-[10px] text-[#1B2A80] -bottom-4 absolute font-bold uppercase tracking-widest">
                    {currentUser.name}
                  </span>
                </div>
              </div>
            ) : (
              <div className="flex gap-4  items-center">
                <Link to="/register">
                  <li className="border border-[#1B2A80] px-3 py-1 rounded-md text-[#1B2A80]  font-semibold custom-shadow">
                    {" "}
                    Register{" "}
                    <GiArchiveRegister
                      className="inline text-lg
                    -mt-[2px]"
                    />
                  </li>
                </Link>
                <Link to="/login">
                  <li className="bg-[#1B2A80] px-3 py-1 custom-shadow rounded-md text-white font-semibold">
                    {" "}
                    Login <IoLogInSharp className="inline text-lg -mt-[2px]" />
                  </li>
                </Link>
              </div>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
