import React from "react";
import ListingCard from "./ListingCard";
import { FiSearch } from "react-icons/fi";
import CityCard from "./CityCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <div className="min-h-screen p-10 pt-24">
      <h3 className="text-center tracking-widest mb-5 uppercase text-sm font-bold text-violet-800 mt-2">
        Find Your Property in Your Preferred City
      </h3>

      <div className="flex items-center justify-center ">
        <div className="w-8/12 mb-5">
          <Slider {...settings}>
            {data.map(({ city, url }, index) => {
              return <CityCard city={city} url={url} key={index} />;
            })}
          </Slider>
        </div>
      </div>

      <div className="flex gap-10 justify-center flex-wrap mt-8">
        {Array(18)
          .fill(null)
          .map((_, index) => {
            return <ListingCard />;
          })}
      </div>
    </div>
  );
};

export default ListingPage;
