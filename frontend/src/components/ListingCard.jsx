import React from "react";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaBath, FaLocationDot, FaMoneyBill1 } from "react-icons/fa6";
import { IoBedSharp } from "react-icons/io5";
import { MdPermContactCalendar } from "react-icons/md";
import { Link } from "react-router-dom";

const ListingCard = () => {
  return (
    // <div className="w-[420px] custom-shadow overflow-hidden  border-[#1B2A80] rounded-md">
    //   <img
    //     className="w-full h-[300px] rounded-t-md hover:scale-105 duration-300"
    //     src="https://img.freepik.com/premium-photo/photo-real-state-house-holding-hand_763111-15176.jpg?w=740"
    //     alt="image"
    //   />
    //   <div className="flex flex-col gap-2 mt-1 p-3">
    //     <h3 className="text-xl font-bold">Jalandhar penthouse</h3>
    //     <div className="flex gap-1">
    //       <FaLocationDot className="text-xl text-[#1B2A80]" />
    //       <p className="text-sm">
    //         Lovely Professional University Phagware, (Punjab)
    //       </p>
    //     </div>
    //     <p className="text-xs ">
    //       This penthouse is the best penthouse in the market with the affordable
    //       price, and the best thing about this penthout is it's free of cost.
    //     </p>
    //     <p className="font-bold">&#8377; 1,50,000</p>
    //     <div className="flex gap-7 items-center">
    //       <div className="flex gap-1 items-center">
    //         <span>4</span>
    //         <span>Bedrooms</span>
    //         <IoBedSharp className="inline ml-1" />
    //       </div>
    //       <div className="flex gap-1 items-center">
    //         <span>4</span>
    //         <span>Bedrooms</span>
    //         <FaBath className="inline ml-1" />
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <Link to="/view-listing">
      <div className="w-full  relative flex  custom-shadow   border-[#1B2A80] rounded-md">
        <img
          className="w-full h-[250px] object-cover rounded-l-md "
          src="https://img.freepik.com/premium-photo/photo-real-state-house-holding-hand_763111-15176.jpg?w=740"
          alt="image"
        />
        <div className="flex flex-col gap-3 mt-1 p-3">
          <h3 className="text-xl font-bold tracking-widest">
            Jalandhar penthouse
          </h3>
          <div className="flex gap-1">
            <FaLocationDot className="text-xl text-[#1B2A80]" />
            <p className="text-sm">
              Lovely Professional University Phagware, (Punjab)
            </p>
          </div>
          <p className="text-xs ">
            This penthouse is the best penthouse in the market with the
            affordable price, and the best thing about this penthout is it's
            free of cost.
          </p>
          <div className="flex text-sm absolute gap-2 bottom-3 right-3">
            <span className="font-bold">Owner : </span>
            <span>Neha kumari</span>
          </div>
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
          <div className="flex gap-5">
            <button className="bg-[#1B2A80] px-5 py-[1px] custom-shadow rounded-md text-white uppercase font-semibold ">
              buy <FaRegMoneyBillAlt className="inline -mt-[3px]" />
            </button>
            <button className="border border-[#1B2A80] px-5 py-[1px] rounded-md text-[#1B2A80] uppercase  font-semibold custom-shadow">
              <Link to="/contact">
                contact{" "}
                <MdPermContactCalendar
                  className="inline text-lg
                -mt-[2px]"
                />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ListingCard;
