import React from "react";
import { BsFilterSquareFill } from "react-icons/bs";

const SearchListing = () => {
  const options = ["Low to High", "High to Low", "Newest", "Oldest", "Reset"];

  const onOptionChangeHandler = (event) => {};

  return (
    <div className="h-40 bg-white  rounded-md mt-8 custom-shadow p-2">
      <form className="flex ml-2 mt-2 flex-col font-semibold text-[#1B2A80] gap-5">
        <div className="flex gap-5">
          <div className="flex gap-2">
            <span className="uppercase tracking-widest">Type : </span>
            <input
              type="checkbox"
              id="sale"
              className="w-5"

              // onChange={handleChange}
              // checked={formData.type === "sale"}
            />
            <span className=" tracking-widest">Sell & Rent</span>
          </div>
          <div className="flex gap-2">
            <input
              type="checkbox"
              id="sale"
              className="w-5"

              // onChange={handleChange}
              // checked={formData.type === "sale"}
            />
            <span className=" tracking-widest">Sell</span>
          </div>
          <div className="flex gap-2">
            <input
              type="checkbox"
              id="sale"
              className="w-5"

              // onChange={handleChange}
              // checked={formData.type === "sale"}
            />
            <span className=" tracking-widest">Rent</span>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex gap-2">
            <span className=" tracking-widest uppercase">Amenties : </span>
          </div>
          <div className="flex gap-2">
            <input
              type="checkbox"
              id="sale"
              className="w-5"

              // onChange={handleChange}
              // checked={formData.type === "sale"}
            />
            <span className=" tracking-widest">Parking</span>
          </div>
          <div className="flex gap-2">
            <input
              type="checkbox"
              id="sale"
              className="w-5"

              // onChange={handleChange}
              // checked={formData.type === "sale"}
            />
            <span className=" tracking-widest">Furnished</span>
          </div>
        </div>
        <div className="flex  items-center ">
          <span className="uppercase tracking-widest">Filter By : </span>
          <BsFilterSquareFill className="text-[#1B2A80]  text-2xl relative left-8" />
          <select
            className="border-2 border-[#1B2A80] tracking-widest uppercase py-2 pl-9 pr-1 custom-shadow rounded-md "
            onChange={onOptionChangeHandler}
          >
            <option disabled selected className="uppercase tracking-widest">
              Select one
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
        </div>
      </form>
    </div>
  );
};

export default SearchListing;
