import React from "react";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaBath, FaLocationDot, FaMoneyBill1 } from "react-icons/fa6";
import { IoBedSharp } from "react-icons/io5";
import { MdPermContactCalendar } from "react-icons/md";
import { Link } from "react-router-dom";
import dateFormat, { masks } from "dateformat";

const ListingCard = ({ listing }) => {
  const {
    _id,
    title,
    description,
    location,
    price,
    bathrooms,
    bedrooms,
    furnished,
    parking,
    type,
    imageURLS,
    owner,
    createdAt,
    updatedAt,
  } = listing;

  return (
    
    <Link to={"/view-listing/" + _id}>
      <div className="w-full h-80  mt-4 ml-2  relative flex  custom-shadow   border-[#1B2A80] rounded-md">
        <img
          className="w-7/12 h-full object-cover rounded-l-md "
          src={imageURLS[0]}
          alt="image"
        />
        <div className="flex flex-col gap-3 mt-1 p-3">
          <h3 className="text-xl font-bold tracking-widest">{title}</h3>
          <div className="flex gap-1">
            <FaLocationDot className="text-xl text-[#1B2A80]" />
            <p className="text-sm">{location}</p>
          </div>
          <p className="text-xs ">{description}</p>

          <p className="font-bold">&#8377; {price}</p>
          <div className="flex gap-7 items-center">
            <div className="flex gap-1 items-center">
              <span>{bedrooms}</span>
              <span>Bedrooms</span>
              <IoBedSharp className="inline ml-1" />
            </div>
            <div className="flex gap-1 items-center">
              <span>{bathrooms}</span>
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
          <div className="flex text-xs gap-3">
            <div className="flex">
              <span className="font-bold">Owner : </span>
              <span>{owner.name}</span>
            </div>
            <div className="flex gap-1">
              <span className="font-bold">Created :</span>
              <span>{dateFormat(createdAt, "dd-mm-yyyy")}</span>
            </div>
            <div className="flex">
              <span className="font-bold">Updated : </span>
              <span>{dateFormat(updatedAt, "dd-mm-yyyy")}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ListingCard;
