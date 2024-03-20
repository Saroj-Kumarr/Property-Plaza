import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="flex justify-between px-7 py-4 bg-slate-200">
      <h3 className="font-bold text-2xl">Real Estate</h3>
      <div className="flex gap-1">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="px-2 py-1 rounded-md"
        />
        <button>Search</button>
      </div>
      <ul className="flex items-center gap-5">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
