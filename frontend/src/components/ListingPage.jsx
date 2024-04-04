import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";
import { FiSearch } from "react-icons/fi";
import CityCard from "./CityCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BsFilterSquareFill } from "react-icons/bs";
import SearchListing from "./SearchListing";
import Agent from "./Agent";

const ListingPage = () => {
  const data = [
    {
      city: "New Delhi",
      url: "https://static.realestateindia.com/rei/images/topcity/ebsrpi-delhi.jpg",
    },
    {
      city: "Mumbai",
      url: "https://static.realestateindia.com/rei/images/topcity/ebsrpi-mumbai.jpg",
    },
    {
      city: "Gurgaon",
      url: "https://static.realestateindia.com/rei/images/topcity/ebsrpi-gurgaon.jpg",
    },
    {
      city: "Noida",
      url: "https://static.realestateindia.com/rei/images/topcity/ebsrpi-noida.jpg",
    },
    {
      city: "Bangalore",
      url: "https://static.realestateindia.com/rei/images/topcity/ebsrpi-bangalore.jpg",
    },
    {
      city: "Chennai",
      url: "https://static.realestateindia.com/rei/images/topcity/ebsrpi-chennai.jpg",
    },
    {
      city: "Hyderabad",
      url: "https://static.realestateindia.com/rei/images/topcity/ebsrpi-hyderabad.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const settingsecond = {
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const [allListing, setAllListing] = useState([]);

  const fetchListings = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/listing/get");

      if (!response.status == 200) {
        console.log("Not able to fetch the listings.");
      }

      const jsonResponse = await response.json();

      setAllListing(jsonResponse);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchListings();
  }, [allListing]);

  return (
    <div className="min-h-screen pt-20  flex ">
      <div className="w-4/12  p-5 min-h-screen ">
        <h3 className="text-center tracking-widest uppercase text-sm font-bold text-[#1B2A80] my-3">
          Find Your Property in Your Preferred City
        </h3>
        <div className="ml-5   mx-5">
          <Slider {...settings}>
            {data.map(({ city, url }, index) => {
              return <CityCard city={city} url={url} key={index} />;
            })}
          </Slider>
        </div>

        <SearchListing />

        <div>
          <h3 className="mt-5 relative top-2 uppercase text-[#1B2A80] text-center font-semibold tracking-widest ">
            Agent or Broker
          </h3>

          <div className="ml-5 mt-5  mx-5">
            <Slider {...settingsecond}>
              {Array(12)
                .fill(null)
                .map((_, index) => {
                  return <Agent />;
                })}
            </Slider>
          </div>
        </div>
      </div>
      <div className="w-8/12  min-h-screen pt-5 ">
        <div className="flex pr-2 py-2 slider-class h-screen overflow-x-hidden overflow-y-scroll flex-col gap-5">
          {allListing &&
            allListing.map((listing, index) => (
              <ListingCard key={index} listing={listing} />
            ))}
        </div>
      </div>

      {/* <h3 className="text-center tracking-widest uppercase text-sm font-bold text-[#1B2A80] mt-2">
        Find Your Property in Your Preferred City
      </h3>

      <div className="flex items-center justify-center ">
        <div className="w-8/12 ">
          <Slider {...settings}>
            {data.map(({ city, url }, index) => {
              return <CityCard city={city} url={url} key={index} />;
            })}
          </Slider>
        </div>
      </div>

      <div className="flex gap-10 rounded-md  flex-wrap mt-8">
        <div className="w-3/12 h-80 custom-shadow">lfjdsljkfsd</div>
        <div className="flex p-2 slider-class h-[27rem] overflow-x-hidden overflow-y-scroll flex-col gap-5">
          {Array(12)
            .fill(null)
            .map((_, index) => {
              return <ListingCard key={index} />;
            })}
        </div>
      </div> */}
    </div>
  );
};

export default ListingPage;
