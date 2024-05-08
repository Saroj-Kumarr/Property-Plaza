import React from "react";

const Agent = ({ name, image }) => {
  return (
    <div className="custom-shadow flex items-center justify-center flex-col rounded-md  ml-2 m-2 p-2  h-[120px] w-[120px]">
      <img className="h-[90px] w-full" src={image} alt="user" />
      <p className="text-sm font-bold text-center tracking-widest">{name}</p>
    </div>
  );
};

export default Agent;
