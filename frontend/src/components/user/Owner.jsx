import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { fetchUser } from "../../services/user.actions";
import { fetchUserListings } from "../../services/listing.actions";

const Owner = () => {
  const [owner, setOwner] = useState({});
  const [ownerListings, setOwnerListings] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchUser(id);
      setOwner(data);
      const listings = await fetchUserListings(id);
      setOwnerListings(listings.userListings);
    };
    fetchData();
  }, [id]);

  const { name, email, phone, image } = owner;

  return (
    <div className="min-h-screen flex flex-col items-center pt-24">
      <div className="w-4/12 h-60 gap-2 rounded-md custom-shadow flex items-center">
        <img className="h-full w-[60%] object-cover" src={image} alt="user" />
        <div className="flex flex-col gap-1 text-center">
          <p className="text-xl border-b border-[#1B2A80] uppercase tracking-widest font-semibold">
            {name}
          </p>
          <p>{email}</p>
          <p className="text-sm font-semibold">{phone}</p>
        </div>
      </div>
      <div className="">
        <div className="flex gap-2 justify-center items-center mt-5">
          <p className="h-[2px] bg-[#1B2A80] w-60"></p>
          <h3 className="font-bold tracking-widest uppercase">Your Listings</h3>
          <p className="h-[2px] bg-[#1B2A80] w-60"></p>
        </div>
        <div className="flex gap-10 my-5 flex-wrap justify-center">
          {ownerListings &&
            ownerListings.map(({ _id, imageURLS, title }) => {
              return (
                <Link to={"/view-listing/" + _id}>
                  <div className="bg-gradient-to-t custom-shadow rounded-md  h-60 w-[350px] from-slate-400 to-transparent">
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

export default Owner;
