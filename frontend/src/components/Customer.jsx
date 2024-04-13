import React from "react";

const Customer = ({ name, imageURL, review }) => {
  return (
    <div className="flex w-20 m-5 p-3 rounded-md justify-center items-center flex-col custom-shadow relative gap-3">
      <div className="flex absolute -top-12 justify-center">
        <img
          className="h-28 w-28 object-cover custom-shadow  rounded-full"
          src={imageURL}
          alt="user"
        />
      </div>
      <h3 className="mt-16 font-semibold text-[#1B2A80] ">
        {name}
      </h3>
      <p className="text-xs text-center">{review}</p>
    </div>
  );
};

export default Customer;
