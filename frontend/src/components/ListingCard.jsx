import React from "react";
import { FaBath, FaLocationDot } from "react-icons/fa6";
import { IoBedSharp } from "react-icons/io5";

const ListingCard = () => {
  return (
    <div className="w-[420px] custom-shadow overflow-hidden  border-violet-800 rounded-md">
      <img
        className="w-full h-[300px] rounded-t-md hover:scale-105 duration-300"
        src="https://img.freepik.com/premium-photo/photo-real-state-house-holding-hand_763111-15176.jpg?w=740"
        alt="image"
      />
      <div className="flex flex-col gap-2 mt-1 p-3">
        <h3 className="text-xl font-bold">Jalandhar penthouse</h3>
        <div className="flex gap-1">
          <FaLocationDot className="text-xl text-violet-800" />
          <p className="text-sm">
            Lovely Professional University Phagware, (Punjab)
          </p>
        </div>
        <p className="text-xs ">
          This penthouse is the best penthouse in the market with the affordable
          price, and the best thing about this penthout is it's free of cost.
        </p>
        <p className="font-bold">&#8377; 1,50,000</p>
        <div className="flex gap-7 items-center">
          <div className="flex gap-1 items-center">
            <span>4</span>
            <span>Bedrooms</span>
            <IoBedSharp className="inline ml-1" />
          </div>
          <div className="flex gap-1 items-center">
            <span>4</span>
            <span>Bedrooms</span>
            <FaBath className="inline ml-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
