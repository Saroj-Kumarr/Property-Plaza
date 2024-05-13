import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchUserListings } from "../../services/listing.actions";
import { deleteUser } from "../../services/user.actions";
import { removeUser } from "../../redux/userSlice";

const Profile = () => {
  const { currentUser } = useSelector((store) => store.user);
  const [userListings, setUserListings] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!currentUser) {
    return;
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchUserListings(currentUser._id);
      setUserListings(response.userListings);
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center pt-24">
      <div className="w-4/12 h-60 gap-2 rounded-md custom-shadow flex items-center">
        <img
          className="h-[238px] w-[260px] object-cover"
          src={currentUser.image}
          alt="user"
        />
        <div className="flex flex-col gap-1 text-center">
          <p className="text-xl border-b border-[#C5AB7B] uppercase tracking-widest font-semibold">
            {currentUser.name}
          </p>
          <p>{currentUser.email}</p>
          <p className="text-sm font-semibold">{currentUser.phone}</p>
          <div className="flex gap-2 mt-2">
            <button
              onClick={async () => {
                const response = await deleteUser(currentUser._id);
                if (response.success) {
                  dispatch(removeUser());
                  navigate("/register");
                }
              }}
              className="bg-red-600 text-xs px-3 py-1 rounded-md text-white uppercase tracking-widest font-semibold custom-shadow"
            >
              delete
            </button>
            <button className="bg-[#C5AB7B] tracking-widest text-xs px-3 py-[1px] rounded-md text-white uppercase  font-semibold custom-shadow">
              <Link to="/update-user">update</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex gap-2 justify-center items-center mt-5">
          <p className="h-[2px] bg-[#C5AB7B] w-60"></p>
          <h3 className="font-bold tracking-widest uppercase">Your Listings</h3>
          <p className="h-[2px] bg-[#C5AB7B] w-60"></p>
        </div>
        <div className="flex gap-10 my-5 flex-wrap justify-center">
          {userListings &&
            userListings.map(({ _id, imageURLS, title }) => {
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

export default Profile;
