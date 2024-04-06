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
import { Link } from "react-router-dom";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

const ListingPage = () => {
  const [allListing, setAllListing] = useState([]);
  const [copyAllListing, setCopyAllListing] = useState([]);
  const [cityValue, setCityValue] = useState("");

  const [owners, setOwners] = useState([]);
  const [page, setPage] = useState(0);
  const [isSaleRentChecked, setIsSaleRentChecked] = useState(true);
  const [isSaleChecked, setIsSaleChecked] = useState(false);
  const [isRentChecked, setIsRentChecked] = useState(false);

  const handleNextBtn = () => {
    if (page < 14 / 6 - 1) {
      setPage((prevPeg) => prevPeg + 1);
    }
  };

  const handlePreviousBtn = () => {
    if (page > 0) {
      setPage((prevPeg) => prevPeg - 1);
    }
  };

  const handlePaginationNum = (number) => {
    setPage(number);
  };

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

  const options = ["Low to High", "High to Low", "Newest", "Oldest", "Reset"];

  const onOptionChangeHandler = (event) => {};

  const fetchListings = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/listing/get");

      if (!response.status == 200) {
        console.log("Not able to fetch the listings.");
      }

      const jsonResponse = await response.json();

      setAllListing(jsonResponse);
      setCopyAllListing(jsonResponse);
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchAllOwners = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/user/all-users");

      const jsonResponse = await response.json();

      setOwners(jsonResponse);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchListings();
  }, []);

  useEffect(() => {
    fetchAllOwners();
  }, []);

  const handleCitySearch = (searchCity) => {
    const filterCity = copyAllListing.filter(({ location }) => {
      console.log(location);
      return location.toLowerCase().includes(searchCity.toLowerCase());
    });

    if (filterCity == 0) {
      setCityValue(searchCity);
      setAllListing([]);
      return;
    }

    setAllListing(filterCity);
  };

  return (
    <div className="min-h-screen  flex ">
      <div className="w-4/12 pt-20 custom-shadow  p-5 min-h-screen ">
        <h3 className="text-center tracking-widest uppercase text-sm font-bold text-[#1B2A80] my-3">
          Find Your Property in Your Preferred City
        </h3>
        <div className="ml-5   mx-5">
          <Slider {...settings}>
            {data.map(({ city, url }, index) => {
              return (
                <div onClick={() => handleCitySearch(city)}>
                  <CityCard city={city} url={url} />
                </div>
              );
            })}
          </Slider>
        </div>

        <div className="h-40 bg-white  rounded-md mt-8 custom-shadow p-2">
          <form className="flex ml-2 mt-2 flex-col font-semibold text-[#1B2A80] gap-5">
            <div className="flex gap-5">
              <div
                onClick={() => {
                  setIsSaleChecked(false);
                  setIsRentChecked(false);
                  setIsSaleRentChecked(true);
                }}
                className="flex gap-2"
              >
                <span className="uppercase tracking-widest">Type : </span>
                <input
                  type="checkbox"
                  id="sale"
                  className="w-5"
                  checked={isSaleRentChecked}

                  // onChange={handleChange}
                  // checked={formData.type === "sale"}
                />
                <span className=" tracking-widest">Sell & Rent</span>
              </div>
              <div
                onClick={() => {
                  setIsSaleChecked(true);
                  setIsRentChecked(false);
                  setIsSaleRentChecked(false);
                }}
                className="flex gap-2"
              >
                <input
                  type="checkbox"
                  id="sale"
                  className="w-5"
                  checked={isSaleChecked}

                  // onChange={handleChange}
                  // checked={formData.type === "sale"}
                />
                <span className=" tracking-widest">Sell</span>
              </div>
              <div
                onClick={() => {
                  setIsSaleChecked(false);
                  setIsRentChecked(true);
                  setIsSaleRentChecked(false);
                }}
                className="flex gap-2"
              >
                <input
                  type="checkbox"
                  id="sale"
                  className="w-5"
                  checked={isRentChecked}
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

        <div>
          <h3 className="mt-5 relative top-2 uppercase text-[#1B2A80] text-center font-semibold tracking-widest ">
            Owners of the listing
          </h3>

          <div className="ml-5 mt-5  mx-5">
            <Slider {...settingsecond}>
              {owners &&
                owners.map(({ _id, name, image }) => {
                  return (
                    <Link to={"/owner/" + _id}>
                      <Agent name={name} image={image} />
                    </Link>
                  );
                })}
            </Slider>
          </div>
        </div>
      </div>
      <div className="w-8/12 pt-16  min-h-screen  ">
        <div className="flex pr-2 py-2 slider-class h-screen overflow-x-hidden overflow-y-scroll flex-col gap-5">
          {allListing != 0 ? (
            <div className="mb-3">
              {allListing
                .slice(page * 10, page * 10 + 10)
                .map((listing, index) => (
                  <ListingCard key={index} listing={listing} />
                ))}
            </div>
          ) : (
            <div className="text-center mt-5">
              <div className="text-[#1B2A80] text-xl font-semibold tracking-widest">
                Oops, no listings for the {cityValue}.
              </div>
              <div className="tracking-widest">Try for another city.</div>
            </div>
          )}
        </div>

        <div className="flex mt-5 relative z-10 justify-center text-[#1B2A80]  px-4 items-center">
          <FaCaretLeft
            onClick={() => handlePreviousBtn()}
            className="text-xl hover:scale-110 duration-200"
          />
          <ul className="flex items-center justify-center ">
            {Array(3)
              .fill(null)
              .map((ele, index) => {
                const isActive = index === page ? true : false;
                return (
                  <li
                    key={index}
                    onClick={() => handlePaginationNum(index)}
                    className={`m-2 hover:scale-110 duration-200 shadow-sm rounded-md px-2 border ${
                      isActive ? "bg-[#1B2A80] text-white" : ""
                    }`}
                  >
                    {index}
                  </li>
                );
              })}
          </ul>
          <FaCaretRight
            onClick={() => handleNextBtn()}
            className="text-xl hover:scale-110 duration-200"
          />
        </div>
      </div>
    </div>
  );
};

export default ListingPage;
