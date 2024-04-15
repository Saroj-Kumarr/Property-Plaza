import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Profile = () => {
  const { currentUser } = useSelector((store) => store.user);

  if (!currentUser) {
    return;
  }

  const [userListings, setUserListings] = useState([]);

  const fetchUserListings = async () => {
    try {
      const response = await fetch(
        "https://property-plaza.onrender.com/api/listing/get/user-listings/" +
          currentUser._id
      );

      if (!response.status == 200) {
        alert("Not fetched user listings");
      }

      const jsonResponse = await response.json();

      setUserListings(jsonResponse);

      console.log(jsonResponse);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDeleteUser = async () => {
    try {
      const response = await fetch(
        "https://property-plaza.onrender.com/api/user/user/delete/" +
          currentUser._id,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      );

      const jsonResponse = await response.json();

      console.log(jsonResponse);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchUserListings();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center pt-24">
      <div className="w-4/12 h-60 gap-2 rounded-md custom-shadow flex items-center">
        <img
          className="h-full w-[60%] object-cover"
          src={currentUser.image}
          alt="user"
        />
        <div className="flex flex-col gap-1 text-center">
          <p className="text-xl border-b border-[#1B2A80] uppercase tracking-widest font-semibold">
            {currentUser.name}
          </p>
          <p>{currentUser.email}</p>
          <p className="text-sm font-semibold">{currentUser.phone}</p>
          <div className="flex gap-2 mt-2">
            <button
              onClick={handleDeleteUser}
              className="bg-red-600 text-xs px-3 py-1 rounded-md text-white uppercase tracking-widest font-semibold custom-shadow"
            >
              delete
            </button>
            <button className="bg-[#1B2A80] tracking-widest text-xs px-3 py-[1px] rounded-md text-white uppercase  font-semibold custom-shadow">
              <Link to="/update-user">update</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex gap-2 justify-center items-center mt-5">
          <p className="h-[2px] bg-[#1B2A80] w-60"></p>
          <h3 className="font-bold tracking-widest uppercase">Your Listings</h3>
          <p className="h-[2px] bg-[#1B2A80] w-60"></p>
        </div>
        <div className="flex gap-10 my-5 flex-wrap justify-center">
          {userListings &&
            userListings.map(({ _id, imageURLS, title }) => {
              return (
                <Link to={"/view-listing/" + _id}>
                  <div className="bg-gradient-to-t custom-shadow rounded-md  h-60 w-80 from-slate-400 to-transparent">
                    <img
                      className="h-full w-full rounded-md"
                      src={imageURLS[0]}
                      alt="user"
                    />
                    <p className="text-center tracking-widest font-semibold uppercase">
                      {title}
                    </p>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Profile;
