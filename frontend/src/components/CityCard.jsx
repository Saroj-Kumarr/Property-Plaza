import React from "react";

const CityCard = ({ city, url }) => {
  return (
    <div className="custom-shadow p-2 flex items-center justify-center flex-col rounded-md m-1 ml-2  h-[100px] w-[120px]">
      <img src={url} alt={city} />
      <p className="text-sm font-bold tracking-widest">{city}</p>
    </div>
  );
};

export default CityCard;
