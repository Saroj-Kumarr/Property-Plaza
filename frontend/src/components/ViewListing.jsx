import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import { FaBath, FaLocationDot, FaToiletPortable } from "react-icons/fa6";
import { IoBedSharp, IoCarSportSharp } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import dateFormat from "dateformat";
import { deleteListing, fetchListing } from "../services/listing.actions";
import { useSelector } from "react-redux";

const ViewListing = () => {
  const { id } = useParams();
  const [listingInfo, setListingInfo] = useState({});
  const { currentUser } = useSelector((store) => store.user);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchListing(id);
      setListingInfo(data);
    };
    fetchData();
  }, [id]);

  if (!listingInfo) return <div>Loading...</div>;

  const {
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
  } = listingInfo;

  SwiperCore.use([Navigation]);

  if (!owner) return <div>Loading...</div>;

  return (
    <div className="min-h-screen pt-[81px]">
      <Swiper navigation>
        {imageURLS &&
          imageURLS.map((url, index) => (
            <SwiperSlide>
              <div
                style={{
                  background: `url(${url}) center no-repeat`,
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
          <div className="flex  text-xl gap-4 font-bold tracking-widest">
            <p>{title} - </p>
            <p>&#8377; {price}</p>
          </div>
          <div className="flex gap-1">
            <FaLocationDot className="text-xl text-[#1B2A80]" />
            <p className="text-sm ">{location}</p>
          </div>
          <div className="flex gap-5">
            <button className="bg-[#1B2A80] px-5 py-[1px] custom-shadow rounded-md text-white uppercase font-semibold ">
              For {type}
            </button>
            <button className="border border-[#1B2A80] px-5 py-[1px] rounded-md text-[#1B2A80] uppercase  font-semibold custom-shadow">
              contact
            </button>
          </div>
          <div className="text-center">
            <span className="text-sm font-bold text-[#1B2A80]">
              Discription -{" "}
            </span>
            <span className="text-xs font-semibold">{description}</span>
          </div>
          <div className="flex font-semibold gap-7 items-center">
            <div className="flex  gap-1 items-center">
              <span>{bedrooms}</span>
              <span>Bedrooms</span>
              <IoBedSharp className="inline ml-1" />
            </div>
            <div className="flex gap-1 items-center">
              <span>{bathrooms}</span>
              <span>Bedrooms</span>
              <FaBath className="inline ml-1" />
            </div>
            <div className="flex gap-1 items-center">
              <span>{parking && parking}</span>
              <IoCarSportSharp className="inline ml-1 mt-1" />
            </div>
            <div className="flex gap-1 items-center">
              <span>{furnished && furnished}</span>
              <FaToiletPortable className="inline ml-1" />
            </div>

            <div className="flex gap-5 items-center">
              <button
                onClick={async () => {
                  if (currentUser._id !== owner._id) {
                    return alert("You are not the owner of this listing.");
                  }

                  const response = await deleteListing(id);
                  if (response.success) {
                    navigate("/listings");
                  }
                }}
                className="bg-red-600 px-5 py-[1px] rounded-md text-white uppercase  font-semibold custom-shadow"
              >
                delete
              </button>
              <button
                onClick={async () => {
                  if (currentUser._id !== owner._id) {
                    return alert(
                      "You can not update because your are not the owner of the listing."
                    );
                  }
                  const response = await deleteListing(id);
                  if (response.success) {
                    navigate("/listings");
                  }

                  navigate("/update-listing/" + id);
                }}
                className="bg-[#1B2A80] px-5 py-[1px] rounded-md text-white uppercase  font-semibold custom-shadow"
              >
                update
              </button>
            </div>
          </div>
          <div className="flex text-xs gap-3">
            <div className="flex">
              <span className="font-bold">Owner : </span>
              <span>{owner && owner.name}</span>
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
    </div>
  );
};

export default ViewListing;
