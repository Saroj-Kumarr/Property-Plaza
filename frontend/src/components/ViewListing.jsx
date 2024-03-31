import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import { FaBath, FaLocationDot, FaToiletPortable } from "react-icons/fa6";
import { IoBedSharp, IoCarSportSharp } from "react-icons/io5";

const ViewListing = () => {
  SwiperCore.use([Navigation]);
  return (
    <div className="min-h-screen pt-[81px]">
      <Swiper navigation>
        {Array(6)
          .fill(null)
          .map((_, index) => (
            <SwiperSlide>
              <div
                style={{
                  background: `url(https://img.freepik.com/free-photo/mumbai-skyline-skyscrapers-construction_469504-21.jpg?t=st=1711863860~exp=1711867460~hmac=1c01fdaf0785e2ce15b0f41622de901502273ddee4b65b7e9597afa26bd3b9aa&w=996) center no-repeat`,
                  backgroundSize: "cover",
                }}
                className="h-[500px]"
                key={index}
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>

      <div className="flex justify-center mt-3 items-center">
        <div className="flex w-5/12  flex-col gap-2 items-center justify-center">
          <div className="flex  text-xl gap-2 font-bold tracking-widest">
            <p>Janlandhar penthouse - </p>
            <p>&#8377; 20,000</p>
          </div>
          <div className="flex gap-1">
            <FaLocationDot className="text-xl text-[#1B2A80]" />
            <p className="text-sm ">
              Lovely Professional University Phagware, (Punjab)
            </p>
          </div>
          <div className="flex gap-5">
            <button className="bg-[#1B2A80] px-5 py-[1px] custom-shadow rounded-md text-white uppercase font-semibold ">
              For sale
            </button>
            <button className="border border-[#1B2A80] px-5 py-[1px] rounded-md text-[#1B2A80] uppercase  font-semibold custom-shadow">
              contact
            </button>
          </div>
          <div className="text-center">
            <span className="text-sm font-bold text-[#1B2A80]">
              Discription -{" "}
            </span>
            <span className="text-xs font-semibold">
              Escape the hustle and bustle of city life in this 4-bedroom,
              2-bathroom lakeside home. Fish off your own private dock, take in
              breathtaking sunsets from the screened porch, and unwind in the
              spacious master suite. Perfect for nature enthusiasts.
            </span>
          </div>
          <div className="flex font-semibold gap-7 items-center">
            <div className="flex  gap-1 items-center">
              <span>4</span>
              <span>Bedrooms</span>
              <IoBedSharp className="inline ml-1" />
            </div>
            <div className="flex gap-1 items-center">
              <span>4</span>
              <span>Bedrooms</span>
              <FaBath className="inline ml-1" />
            </div>
            <div className="flex gap-1 items-center">
              <span>Parking</span>
              <IoCarSportSharp  className="inline ml-1 mt-1" />
            </div>
            <div className="flex gap-1 items-center">
              <span>Furnished</span>
              <FaToiletPortable className="inline ml-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewListing;
