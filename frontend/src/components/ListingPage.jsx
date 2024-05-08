import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";
import CityCard from "./CityCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BsFilterSquareFill } from "react-icons/bs";
import Agent from "./Agent";
import { Link } from "react-router-dom";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { RiSearchFill } from "react-icons/ri";
import { cities, options, settingsecond, settings } from "../constant/data";
import toast from "react-hot-toast";
import { FcHome } from "react-icons/fc";
import { fetchListings } from "../services/listing.actions";
import useFetchOwners from "../hooks/useFetchOwners";

const ListingPage = () => {
  const [page, setPage] = useState(0);
  const [isSaleRentChecked, setIsSaleRentChecked] = useState(true);
  const [isSaleChecked, setIsSaleChecked] = useState(false);
  const [isRentChecked, setIsRentChecked] = useState(false);
  const [searchItems, setSearchItems] = useState([]);
  const [listings, setListings] = useState([]);
  const [copyListings, setCopyListings] = useState([]);
  const owners = useFetchOwners();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchListings();
      setListings(data);
      setCopyListings(data);
    };
    fetchData();
  }, []);

  const onOptionChangeHandler = (event) => {
    const value = event.target.value;
    let sortedProperties;

    switch (value) {
      case "Low to High":
        sortedProperties = copyListings
          .slice()
          .sort((a, b) => a.price - b.price);
        break;
      case "High to Low":
        sortedProperties = copyListings
          .slice()
          .sort((a, b) => b.price - a.price);
        break;
      case "Newest":
        sortedProperties = copyListings
          .slice()
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      case "Oldest":
        sortedProperties = copyListings
          .slice()
          .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        break;
      default:
        sortedProperties = copyListings;
        break;
    }

    setListings(sortedProperties);
  };

  const handleCitySearch = (searchCity) => {
    const filterCity = copyListings.filter(({ location }) => {
      return location.toLowerCase().includes(searchCity.toLowerCase());
    });

    if (filterCity.length == 0) {
      setListings(copyListings);

      toast.success(`No listings related to this city ${searchCity}.`, {
        duration: 3000,
        position: "top-center",
        style: {
          backgroundColor: "#1B2A80",
          color: "white",
        },

        icon: "❌",
        iconTheme: {
          primary: "#000",
          secondary: "#fff",
        },
      });
      return;
    }

    setListings(filterCity);

    toast.success(
      `${filterCity.length} listings related to this city ${searchCity}.`,
      {
        duration: 3000,
        position: "top-center",
        style: {
          backgroundColor: "#1B2A80",
          color: "white",
        },

        icon: <FcHome className="text-xl" />,
      }
    );
  };

  const handleFilter = (e) => {
    e.preventDefault();

    const filteredItems = copyListings.filter((listing) => {
      return searchItems.every((item) => {
        return (
          listing.type === item ||
          listing.parking === item ||
          listing.furnished === item
        );
      });
    });

    setListings(filteredItems);
  };

  console.log(listings);

  return (
    <div className="min-h-screen flex">
      <div className="w-4/12 pt-20 custom-shadow p-5 min-h-screen">
        <h3 className="text-center tracking-widest uppercase text-sm font-bold text-[#1B2A80] my-3">
          Find Your Property in Your Preferred City
        </h3>
        <div className="ml-5 mx-5">
          <Slider {...settings}>
            {cities.map(({ city, url }, index) => (
              <div key={index} onClick={() => handleCitySearch(city)}>
                <CityCard city={city} url={url} />
              </div>
            ))}
          </Slider>
        </div>

        <div className="h-52 bg-white rounded-md mt-8 custom-shadow p-2">
          <form className="flex ml-2 mt-2 flex-col font-semibold text-[#1B2A80] gap-5">
            <div className="flex gap-5">
              <div
                onClick={() => {
                  setIsRentChecked(false);
                  setIsSaleRentChecked(true);
                  setIsSaleChecked(false);
                }}
                className="flex gap-2"
              >
                <input
                  type="checkbox"
                  id="sellAndRent"
                  className="w-5"
                  checked={isSaleRentChecked}
                />
                <span className="tracking-widest">Sell & Rent</span>
              </div>

              <div
                onClick={() => {
                  setIsRentChecked(false);
                  setIsSaleRentChecked(false);
                  setIsSaleChecked(true);
                  if (searchItems.includes("rent")) {
                    setSearchItems(
                      searchItems.map((item) =>
                        item === "rent" ? "sale" : item
                      )
                    );
                  } else {
                    setSearchItems([...searchItems, "sale"]);
                  }
                }}
                className="flex gap-2"
              >
                <input
                  checked={isSaleChecked}
                  type="checkbox"
                  id="parking"
                  className="w-5"
                />
                <span className="tracking-widest">Sale</span>
              </div>

              <div
                onClick={() => {
                  setIsRentChecked(true);
                  setIsSaleRentChecked(false);
                  setIsSaleChecked(false);
                  if (searchItems.includes("sale")) {
                    setSearchItems(
                      searchItems.map((item) =>
                        item === "sale" ? "rent" : item
                      )
                    );
                  } else {
                    setSearchItems([...searchItems, "rent"]);
                  }
                }}
                className="flex gap-2"
              >
                <input
                  checked={isRentChecked}
                  type="checkbox"
                  id="parking"
                  className="w-5"
                />
                <span className="tracking-widest">Rent</span>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex gap-2">
                <span className="tracking-widest uppercase">Amenties : </span>
              </div>
              <div
                onClick={() => setSearchItems([...searchItems, "parking"])}
                className="flex gap-2"
              >
                <input type="checkbox" id="parking" className="w-5" />
                <span className="tracking-widest">Parking</span>
              </div>
              <div
                onClick={() => setSearchItems([...searchItems, "furnished"])}
                className="flex gap-2"
              >
                <input type="checkbox" id="furnished" className="w-5" />
                <span className="tracking-widest">Furnished</span>
              </div>
            </div>

            <div className="flex items-center">
              <button
                onClick={handleFilter}
                className="bg-[#1B2A80] w-52 px-5 py-1 custom-shadow rounded-md text-white uppercase font-semibold "
              >
                Apply Filter <RiSearchFill className="inline text-xl -mt-1" />
              </button>
            </div>

            <div className="flex items-center">
              <span className="uppercase tracking-widest">Filter By : </span>
              <BsFilterSquareFill className="text-[#1B2A80] text-2xl relative left-8" />
              <select
                className="border-2 border-[#1B2A80] tracking-widest uppercase py-2 pl-9 pr-1 custom-shadow rounded-md"
                onChange={onOptionChangeHandler}
              >
                <option disabled selected className="uppercase tracking-widest">
                  Select one
                </option>
                {options.map((option, index) => (
                  <option
                    key={index}
                    className="uppercase mt-5 p-2 tracking-widest"
                  >
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </form>
        </div>

        <div>
          <h3 className="mt-5 relative top-2 uppercase text-[#1B2A80] text-center font-semibold tracking-widest">
            Owners of the listing
          </h3>

          <div className="ml-5 mt-5 mx-5">
            <Slider {...settingsecond}>
              {owners.map(({ _id, name, image }) => (
                <Link key={_id} to={"/owner/" + _id}>
                  <Agent name={name} image={image} />
                </Link>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div className="w-8/12 pt-16 min-h-screen">
        <div className="flex pr-2 py-2 slider-class h-screen overflow-x-hidden overflow-y-scroll flex-col gap-5">
          {listings.length !== 0 && (
            <div className="mb-3">
              {listings
                .slice(page * 10, page * 10 + 10)
                .map((listing, index) => (
                  <ListingCard key={index} listing={listing} />
                ))}
            </div>
          )}
        </div>

        <div className="flex mt-5 relative z-10 justify-center text-[#1B2A80] px-4 items-center">
          <FaCaretLeft
            onClick={() => {
              if (page > 0) {
                setPage((prevPeg) => prevPeg - 1);
              }
            }}
            className="text-xl hover:scale-110 duration-200"
          />
          <ul className="flex items-center justify-center">
            {Array(3)
              .fill(null)
              .map((_, index) => {
                const isActive = index === page ? true : false;
                return (
                  <li
                    key={index}
                    onClick={() => {
                      setPage(index);
                    }}
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
            onClick={() => {
              if (page < listings?.length / 10 - 1) {
                setPage((prevPeg) => prevPeg + 1);
              }
            }}
            className="text-xl hover:scale-110 duration-200"
          />
        </div>
      </div>
    </div>
  );
};

export default ListingPage;

// {
//   Array(8)
//     .fill(null)
//     .map((_, index) => {
//       return (
//         <ShimmerContentBlock
//           title
//           text
//           cta
//           thumbnailWidth={600}
//           thumbnailHeight={100}
//         />
//       );
//     });
// }
