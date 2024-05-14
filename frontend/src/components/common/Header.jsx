import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import logo from "../../assets/logo.png";
import { FiSearch } from "react-icons/fi";
import { removeUser } from "../../redux/userSlice";
import { IoLogInSharp, IoLogOutSharp } from "react-icons/io5";
import { GiArchiveRegister } from "react-icons/gi";
import { useLocation } from "react-router-dom";
import { logout } from "../../services/auth.actions";
import { GiHouse } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";


const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="fixed w-full z-10 bg-[#1E2124] border-b-2 border-[#C5AB7B] px-10 py-3">
      <div className="flex justify-between items-center">
        <Link to="/">
          <div className="font-bold uppercase items-center flex flex-wrap text-2xl gap-3">
            <GiHouse className="text-5xl m-1 " />
            <h1 className="tracking-wider">
              {" "}
              <span className="">Property </span>
              <span className="text-[#C5AB7B]">Plaza</span>
            </h1>
          </div>
        </Link>

        <ul className="flex gap-5 uppercase tracking-widest font-semibold items-center">
          {currentUser ? (
            <div className="flex gap-4 items-center">
              <Link
                onClick={() => {
                  if (location.pathname === "/listings") {
                    window.location.reload();
                  }
                }}
                to="/listings"
              >
                <li className="hover:text-[#C5AB7B] duration-200">Home</li>
              </Link>
              <Link to="/about">
                <li className="hover:text-[#C5AB7B] duration-200">About</li>
              </Link>
              <Link to="/create-listing">
                <li className="hover:text-[#C5AB7B] duration-200">
                  create listing
                </li>
              </Link>

              <li
                onClick={async () => {
                  const response = await logout();
                  if (response.success) {
                    dispatch(removeUser());
                    navigate("/login");
                  }
                }}
                className="border border-[#C5AB7B] px-3 py-1 rounded-md text-[#C5AB7B]  font-semibold custom-shadow"
              >
                {" "}
                Logout <IoLogOutSharp className="inline text-lg -mt-[2px]" />
              </li>

              <Link to="/profile">
                <div className="relative w-24 flex justify-center items-center">
                  <img
                    className="rounded-full border-2 border-[#C5AB7B]  h-12 w-12 object-cover custom-shadow"
                    src={currentUser.image}
                    alt="profile"
                  />
                  <span className="text-[10px] text-[#C5AB7B] -bottom-4 absolute font-bold uppercase tracking-widest">
                    {currentUser.name}
                  </span>
                </div>
              </Link>
            </div>
          ) : (
            <div className="flex gap-4  items-center">
              <Link to="/register">
                <li className="border border-[#C5AB7B] px-3 py-1 rounded-md text-[#C5AB7B]  font-semibold custom-shadow">
                  {" "}
                  Register{" "}
                  <GiArchiveRegister
                    className="inline text-lg
                    -mt-[2px]"
                  />
                </li>
              </Link>
              <Link to="/login">
                <li className="bg-[#C5AB7B] px-3 py-1 custom-shadow rounded-md text-[#1e2124] font-semibold">
                  {" "}
                  Login <IoLogInSharp className="inline text-lg -mt-[2px] " />
                </li>
              </Link>
            </div>
          )}
          {/* </Link> */}
        </ul>
      </div>
    </header>
  );
};

export default Header;
